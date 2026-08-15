import { describe, it, expect, beforeAll } from 'vitest';
import request from 'supertest';
import { app } from '../src/server';
import { seedDatabase } from '../src/seed';
import { getDatabase } from '../src/db/database';

describe('FlyRank Capstone Acceptance Probes (Probes 1 to 6)', () => {
  beforeAll(async () => {
    await seedDatabase();
  });

  // Probe 1: Batch job execution on corpus -> every image gets schema-valid tags; at least 1 low-confidence image flagged
  it('Probe 1: Ingestion batch job processes images and flags low-confidence entries', async () => {
    const res = await request(app).post('/api/jobs/ingest').send({ forceReprocess: true });
    expect(res.status).toBe(200);
    expect(res.body.batchJob).toBeDefined();
    expect(res.body.batchJob.status).toBe('COMPLETED');
    expect(res.body.batchJob.totalItems).toBeGreaterThanOrEqual(10);
    expect(res.body.batchJob.flaggedItems).toBeGreaterThanOrEqual(1);

    const db = getDatabase();
    const flagged = db.prepare('SELECT * FROM images WHERE is_flagged = 1').all();
    expect(flagged.length).toBeGreaterThanOrEqual(1);
  });

  // Probe 2: Query images for "red fox" article -> fox image ranks 1st; wolf and dog rank lower
  it('Probe 2: Red fox post ranks red fox image first over wolf and dog', async () => {
    const res = await request(app).get('/api/posts/red-fox-behavior/images');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('SUGGESTED');
    expect(res.body.suggestedImage).toBeDefined();
    expect(res.body.suggestedImage.subject).toBe('red fox');

    const scores = res.body.candidateScores;
    const foxScore = scores.find((s: any) => s.subject === 'red fox')?.similarityScore || 0;
    const wolfScore = scores.find((s: any) => s.subject === 'gray wolf')?.similarityScore || 0;
    const dogScore = scores.find((s: any) => s.subject === 'golden retriever')?.similarityScore || 0;

    expect(foxScore).toBeGreaterThan(wolfScore);
    expect(foxScore).toBeGreaterThan(dogScore);
  });

  // Probe 3: Force wolf as candidate for fox post -> guard rejects it with category-mismatch explanation
  it('Probe 3: Mismatch guard rejects forced wolf candidate for red fox post', async () => {
    const db = getDatabase();
    const wolf = db.prepare(`SELECT * FROM images WHERE subject = 'gray wolf'`).get() as any;

    const res = await request(app)
      .post('/api/posts/red-fox-behavior/force-match')
      .send({ candidateImageId: wolf.id });

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('REJECTED');
    expect(res.body.reason).toContain('Animal category mismatch: expected fox, detected wolf');
  });

  // Probe 4: Query a post with no suitable image -> "no confident match" + reasons
  it('Probe 4: Unmatched post returns NO_MATCH status with diagnostic reasons', async () => {
    const res = await request(app).get('/api/posts/quantum-computing-intro/images');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('NO_MATCH');
    expect(res.body.message).toContain('No confident match found');
    expect(res.body.reason).toBeDefined();
  });

  // Probe 5: Run eval script -> top-1 precision reported on labeled set
  it('Probe 5: Top-1 precision evaluation endpoint returns valid report', async () => {
    const res = await request(app).get('/api/eval');
    expect(res.status).toBe(200);
    expect(res.body.top1PrecisionPercent).toBeGreaterThanOrEqual(80);
    expect(res.body.top1PrecisionFormatted).toBeDefined();
  });

  // Probe 6: Check cost log -> every vision/embedding call attributed with cost entry
  it('Probe 6: Cost tracking log attributes per-call model usage and USD cost', async () => {
    const res = await request(app).get('/api/costs');
    expect(res.status).toBe(200);
    expect(res.body.totalCalls).toBeGreaterThan(0);
    expect(res.body.totalTokens).toBeGreaterThan(0);
    expect(res.body.totalCostUsd).toBeGreaterThanOrEqual(0);
    expect(res.body.logs.length).toBeGreaterThan(0);

    const firstLog = res.body.logs[0];
    expect(firstLog.provider).toBeDefined();
    expect(firstLog.model).toBeDefined();
    expect(firstLog.estimated_cost_usd).toBeDefined();
  });

  // Boundary Validation Test: Invalid payload returns clean 400 bad request, never 500
  it('Boundary Validation: Invalid input returns 400 error response', async () => {
    const res = await request(app)
      .post('/api/posts/red-fox-behavior/force-match')
      .send({}); // missing candidateImageId

    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Validation Error');
  });

  // Human-in-the-loop Review Workflow Test
  it('Review API: Allows approving or rejecting suggestions with review trail', async () => {
    const res = await request(app)
      .post('/api/reviews')
      .send({
        suggestionId: 'sug-123',
        postId: 'post-fox-01',
        imageId: 'img-fox-01',
        action: 'APPROVED',
        reviewerNotes: 'Verified manually by editor'
      });

    expect(res.status).toBe(201);
    expect(res.body.review.action).toBe('APPROVED');

    const listRes = await request(app).get('/api/reviews');
    expect(listRes.status).toBe(200);
    expect(listRes.body.reviews.length).toBeGreaterThan(0);
  });
});
