import fs from 'fs';
import path from 'path';
import { getDatabase } from '../db/database';
import { VisionService } from './visionService';
import { EmbeddingService } from './embeddingService';
import { cryptoRandomId } from '../utils/cryptoUtils';

export interface BatchJobResult {
  jobId: string;
  status: 'COMPLETED' | 'FAILED';
  totalItems: number;
  processedItems: number;
  flaggedItems: number;
  totalCostUsd: number;
  errors: string[];
}

export class BatchProcessor {
  private visionService: VisionService;
  private embeddingService: EmbeddingService;

  constructor() {
    this.visionService = new VisionService();
    this.embeddingService = new EmbeddingService();
  }

  async runImageIngestionBatch(imagesDir: string, forceReprocess = false): Promise<BatchJobResult> {
    const db = getDatabase();
    const jobId = cryptoRandomId();

    if (!fs.existsSync(imagesDir)) {
      throw new Error(`Images directory does not exist: ${imagesDir}`);
    }

    const files = fs.readdirSync(imagesDir).filter(f => /\.(jpg|jpeg|png|webp|svg)$/i.test(f));
    const totalItems = files.length;

    // Create batch job entry
    db.prepare(`
      INSERT INTO batch_jobs (id, job_type, status, total_items, processed_items, error_log, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      jobId,
      'IMAGE_INGESTION',
      'PROCESSING',
      totalItems,
      0,
      JSON.stringify([]),
      new Date().toISOString(),
      new Date().toISOString()
    );

    let processedItems = 0;
    let flaggedItems = 0;
    let totalCostUsd = 0;
    const errors: string[] = [];

    for (const filename of files) {
      const filePath = path.join(imagesDir, filename);

      // Idempotency check: Skip if already processed unless forced
      const existingImage = db.prepare(`SELECT * FROM images WHERE filename = ?`).get(filename) as any;
      if (existingImage && !forceReprocess) {
        processedItems++;
        if (existingImage.is_flagged) flaggedItems++;
        this.updateJobProgress(jobId, processedItems, totalItems, errors);
        continue;
      }

      try {
        // Step 1: Vision Model Processing & Structured Schema Validation
        const visionResult = await this.visionService.processImage(filePath, filename);
        totalCostUsd += visionResult.costUsd;

        const imageId = existingImage ? existingImage.id : cryptoRandomId();

        // Step 2: Store / Update Image metadata
        db.prepare(`
          INSERT OR REPLACE INTO images (id, filepath, filename, subject, category, attributes_json, caption, confidence, is_flagged, processed_at)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).run(
          imageId,
          filePath,
          filename,
          visionResult.metadata.subject,
          visionResult.metadata.category,
          JSON.stringify(visionResult.metadata.attributes),
          visionResult.metadata.caption,
          visionResult.metadata.confidence,
          visionResult.isFlagged ? 1 : 0,
          new Date().toISOString()
        );

        if (visionResult.isFlagged) {
          flaggedItems++;
        }

        // Step 3: Embed caption + attributes into vector storage
        const embedText = `${visionResult.metadata.subject}. ${visionResult.metadata.caption}. ${visionResult.metadata.attributes.join(', ')}`;
        await this.embeddingService.generateEmbedding(embedText, 'image', imageId);

        processedItems++;
        this.updateJobProgress(jobId, processedItems, totalItems, errors);
      } catch (err: any) {
        const errorMsg = `Failed processing ${filename}: ${err.message}`;
        errors.push(errorMsg);
        this.updateJobProgress(jobId, processedItems, totalItems, errors);
      }
    }

    const finalStatus = errors.length === totalItems && totalItems > 0 ? 'FAILED' : 'COMPLETED';

    db.prepare(`
      UPDATE batch_jobs 
      SET status = ?, processed_items = ?, error_log = ?, updated_at = ?
      WHERE id = ?
    `).run(
      finalStatus,
      processedItems,
      JSON.stringify(errors),
      new Date().toISOString(),
      jobId
    );

    return {
      jobId,
      status: finalStatus,
      totalItems,
      processedItems,
      flaggedItems,
      totalCostUsd: parseFloat(totalCostUsd.toFixed(6)),
      errors
    };
  }

  private updateJobProgress(jobId: string, processed: number, total: number, errors: string[]) {
    const db = getDatabase();
    db.prepare(`
      UPDATE batch_jobs
      SET processed_items = ?, error_log = ?, updated_at = ?
      WHERE id = ?
    `).run(processed, JSON.stringify(errors), new Date().toISOString(), jobId);
  }
}
