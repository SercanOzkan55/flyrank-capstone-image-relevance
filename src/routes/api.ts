import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import path from 'path';
import { getDatabase } from '../db/database';
import { BatchProcessor } from '../services/batchProcessor';
import { MismatchGuard } from '../services/mismatchGuard';
import { ImageOptimizationService } from '../services/imageOptimizationService';
import { EvaluationRunner } from '../eval/evaluation';
import { cryptoRandomId } from '../utils/cryptoUtils';

export const apiRouter = Router();

const batchProcessor = new BatchProcessor();
const mismatchGuard = new MismatchGuard();
const optimizationService = new ImageOptimizationService();

// Boundary validation helper middleware
function validateBody<T>(schema: z.ZodSchema<T>) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        error: 'Validation Error',
        details: result.error.errors.map(e => `${e.path.join('.')}: ${e.message}`)
      });
    }
    req.body = result.data;
    next();
  };
}

// 1. Health Endpoint
apiRouter.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'UP',
    service: 'flyrank-capstone-image-relevance',
    timestamp: new Date().toISOString()
  });
});

// 2. List All Blog Posts (Useful for Demo UI)
apiRouter.get('/posts', (req: Request, res: Response) => {
  const db = getDatabase();
  const posts = db.prepare(`SELECT * FROM posts`).all();
  res.json({ posts });
});

// 3. List All Images
apiRouter.get('/images', (req: Request, res: Response) => {
  const db = getDatabase();
  const images = db.prepare(`SELECT * FROM images`).all();
  res.json({ images });
});

// 4. Probe 1: Trigger Batch Job for Image Ingestion
const IngestJobSchema = z.object({
  imagesDir: z.string().optional(),
  forceReprocess: z.boolean().optional().default(false)
});

apiRouter.post('/jobs/ingest', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const imagesDir = req.body?.imagesDir || path.join(process.cwd(), 'data/images');
    const forceReprocess = req.body?.forceReprocess || false;

    const result = await batchProcessor.runImageIngestionBatch(imagesDir, forceReprocess);
    res.json({
      message: 'Batch ingestion job completed successfully',
      batchJob: result
    });
  } catch (err: any) {
    next(err);
  }
});

// List Batch Jobs
apiRouter.get('/jobs', (req: Request, res: Response) => {
  const db = getDatabase();
  const jobs = db.prepare(`SELECT * FROM batch_jobs ORDER BY created_at DESC`).all();
  res.json({ jobs });
});

// 5. Probe 2 & Probe 4: Query Image Suggestions for Blog Post
apiRouter.get('/posts/:id/images', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const postId = req.params.id;
    const result = await mismatchGuard.evaluatePostMatches(postId);

    if (result.status === 'NO_MATCH') {
      return res.json({
        postId,
        status: 'NO_MATCH',
        message: 'No confident match found. Similarity below threshold; detected subjects do not match article topic.',
        candidateScores: result.candidateScores,
        reason: result.reason
      });
    }

    res.json({
      postId,
      status: result.status,
      suggestedImage: result.suggestedImage,
      candidateScores: result.candidateScores,
      reason: result.reason
    });
  } catch (err: any) {
    if (err.message.includes('not found')) {
      return res.status(404).json({ error: err.message });
    }
    next(err);
  }
});

// 6. Probe 3: Force Candidate Image Match against Blog Post
const ForceMatchSchema = z.object({
  candidateImageId: z.string().min(1)
});

apiRouter.post('/posts/:id/force-match', validateBody(ForceMatchSchema), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const postId = req.params.id;
    const candidateImageId = req.body.candidateImageId;

    const result = await mismatchGuard.evaluatePostMatches(postId, candidateImageId);

    res.json({
      postId,
      forcedCandidateId: candidateImageId,
      status: result.status, // REJECTED or SUGGESTED
      reason: result.reason,
      candidateScores: result.candidateScores
    });
  } catch (err: any) {
    if (err.message.includes('not found')) {
      return res.status(404).json({ error: err.message });
    }
    next(err);
  }
});

// 7. Human-in-the-loop Review Workflow
const ReviewSchema = z.object({
  suggestionId: z.string().min(1),
  postId: z.string().min(1),
  imageId: z.string().min(1),
  action: z.enum(['APPROVED', 'REJECTED']),
  reviewerNotes: z.string().optional()
});

apiRouter.post('/reviews', validateBody(ReviewSchema), (req: Request, res: Response, next: NextFunction) => {
  try {
    const { suggestionId, postId, imageId, action, reviewerNotes } = req.body;
    const db = getDatabase();

    const reviewId = cryptoRandomId();
    db.prepare(`
      INSERT INTO reviews (id, suggestion_id, post_id, image_id, action, reviewer_notes, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(
      reviewId,
      suggestionId,
      postId,
      imageId,
      action,
      reviewerNotes || null,
      new Date().toISOString()
    );

    res.status(201).json({
      message: `Review recorded: Pairing ${action.toLowerCase()}`,
      review: {
        id: reviewId,
        suggestionId,
        postId,
        imageId,
        action,
        reviewerNotes
      }
    });
  } catch (err: any) {
    next(err);
  }
});

// List Reviews
apiRouter.get('/reviews', (req: Request, res: Response) => {
  const db = getDatabase();
  const reviews = db.prepare(`SELECT * FROM reviews ORDER BY created_at DESC`).all();
  res.json({ reviews });
});

// 8. Probe 6: Cost Tracking Logs Endpoint
apiRouter.get('/costs', (req: Request, res: Response) => {
  const db = getDatabase();
  const logs = db.prepare(`SELECT * FROM cost_logs ORDER BY created_at DESC`).all() as any[];
  
  const totalCostUsd = logs.reduce((sum, l) => sum + (l.estimated_cost_usd || 0), 0);
  const totalTokens = logs.reduce((sum, l) => sum + (l.input_tokens || 0) + (l.output_tokens || 0), 0);

  res.json({
    totalCalls: logs.length,
    totalTokens,
    totalCostUsd: parseFloat(totalCostUsd.toFixed(6)),
    logs
  });
});

// 9. Probe 5: Run Evaluation Endpoint
apiRouter.get('/eval', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const evaluator = new EvaluationRunner();
    const result = await evaluator.runEvaluation();
    res.json(result);
  } catch (err: any) {
    next(err);
  }
});

// 10. STRETCH GOAL 1: Automatic Alt Text Generation
apiRouter.get('/images/:id/alt-text', (req: Request, res: Response, next: NextFunction) => {
  try {
    const imageId = req.params.id;
    const postId = req.query.postId as string | undefined;
    const altTextData = optimizationService.generateAltText(imageId, postId);
    res.json(altTextData);
  } catch (err: any) {
    if (err.message.includes('not found')) {
      return res.status(404).json({ error: err.message });
    }
    next(err);
  }
});

// 11. STRETCH GOAL 2: Near-Duplicate Image Detection
apiRouter.get('/images-duplicates', (req: Request, res: Response, next: NextFunction) => {
  try {
    const threshold = req.query.threshold ? parseFloat(req.query.threshold as string) : 0.95;
    const duplicates = optimizationService.findNearDuplicates(threshold);
    res.json({
      threshold,
      duplicateGroupsCount: duplicates.length,
      duplicateGroups: duplicates
    });
  } catch (err: any) {
    next(err);
  }
});
