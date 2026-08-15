import { getDatabase } from '../db/database';
import { EmbeddingService } from './embeddingService';

export interface DuplicateGroup {
  primaryImage: {
    id: string;
    filename: string;
    subject: string;
    caption: string;
  };
  duplicates: Array<{
    id: string;
    filename: string;
    subject: string;
    similarityScore: number;
  }>;
}

export class ImageOptimizationService {
  /**
   * Stretch Goal 1: Automatic Accessible & SEO-Optimized Alt Text Generator
   */
  generateAltText(imageId: string, postId?: string): { altText: string; seoKeywords: string[]; imageId: string } {
    const db = getDatabase();
    const image = db.prepare(`SELECT * FROM images WHERE id = ? OR filename = ?`).get(imageId, imageId) as any;

    if (!image) {
      throw new Error(`Image not found: ${imageId}`);
    }

    const attributes: string[] = JSON.parse(image.attributes_json || '[]');
    let postContext = '';

    if (postId) {
      const post = db.prepare(`SELECT title, category FROM posts WHERE id = ? OR slug = ?`).get(postId, postId) as any;
      if (post) {
        postContext = ` - Featured in article: "${post.title}"`;
      }
    }

    // Generate descriptive, accessible alt text conforming to WCAG standards
    const altText = `Photograph of ${image.subject} (${attributes.slice(0, 3).join(', ')}). ${image.caption}${postContext}`;
    const seoKeywords = [image.subject, image.category, ...attributes];

    return {
      imageId: image.id,
      altText,
      seoKeywords
    };
  }

  /**
   * Stretch Goal 2: Near-Duplicate Detection using Embedding Distance
   */
  findNearDuplicates(threshold = 0.95): DuplicateGroup[] {
    const db = getDatabase();
    const images = db.prepare(`SELECT * FROM images WHERE is_flagged = 0`).all() as any[];
    const duplicateGroups: DuplicateGroup[] = [];
    const processedIds = new Set<string>();

    for (let i = 0; i < images.length; i++) {
      const imgA = images[i];
      if (processedIds.has(imgA.id)) continue;

      const embA = db.prepare(`SELECT vector_json FROM embeddings WHERE target_type = 'image' AND target_id = ?`).get(imgA.id) as any;
      if (!embA) continue;
      const vecA = JSON.parse(embA.vector_json);

      const duplicates: DuplicateGroup['duplicates'] = [];

      for (let j = i + 1; j < images.length; j++) {
        const imgB = images[j];
        if (processedIds.has(imgB.id)) continue;

        const embB = db.prepare(`SELECT vector_json FROM embeddings WHERE target_type = 'image' AND target_id = ?`).get(imgB.id) as any;
        if (!embB) continue;
        const vecB = JSON.parse(embB.vector_json);

        const similarity = EmbeddingService.calculateCosineSimilarity(vecA, vecB);

        // If similarity is above near-duplicate threshold and subjects match
        if (similarity >= threshold && imgA.subject === imgB.subject) {
          duplicates.push({
            id: imgB.id,
            filename: imgB.filename,
            subject: imgB.subject,
            similarityScore: parseFloat(similarity.toFixed(4))
          });
          processedIds.add(imgB.id);
        }
      }

      if (duplicates.length > 0) {
        duplicateGroups.push({
          primaryImage: {
            id: imgA.id,
            filename: imgA.filename,
            subject: imgA.subject,
            caption: imgA.caption
          },
          duplicates
        });
        processedIds.add(imgA.id);
      }
    }

    return duplicateGroups;
  }
}
