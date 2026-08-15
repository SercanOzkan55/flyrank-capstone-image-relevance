import { CONFIG } from '../config';
import { getDatabase } from '../db/database';
import { EmbeddingService } from './embeddingService';
import { cryptoRandomId } from '../utils/cryptoUtils';

export interface GuardEvaluationResult {
  status: 'SUGGESTED' | 'REJECTED' | 'NO_MATCH';
  suggestedImage: any | null;
  candidateScores: Array<{
    imageId: string;
    filename: string;
    subject: string;
    category: string;
    similarityScore: number;
    confidence: number;
    status: 'ACCEPTED' | 'REJECTED';
    rejectionReason?: string;
  }>;
  reason: string;
}

export class MismatchGuard {
  /**
   * Evaluates candidate images against a target blog post and enforces safety guard rules.
   */
  async evaluatePostMatches(postId: string, forcedCandidateId?: string): Promise<GuardEvaluationResult> {
    const db = getDatabase();

    // 1. Fetch Post details
    const post = db.prepare(`SELECT * FROM posts WHERE id = ? OR slug = ?`).get(postId, postId) as any;
    if (!post) {
      throw new Error(`Post not found with ID or slug: ${postId}`);
    }

    // 2. Fetch Post Embedding
    const postEmbeddingRow = db.prepare(`SELECT vector_json FROM embeddings WHERE target_type = 'post' AND target_id = ?`).get(post.id) as any;
    let postVector: number[];
    if (postEmbeddingRow) {
      postVector = JSON.parse(postEmbeddingRow.vector_json);
    } else {
      const embeddingService = new EmbeddingService();
      postVector = await embeddingService.generateEmbedding(post.content + ' ' + post.title, 'post', post.id);
    }

    // 3. Fetch Candidate Images
    let images: any[] = [];
    if (forcedCandidateId) {
      images = db.prepare(`SELECT * FROM images WHERE id = ? OR filename = ?`).all(forcedCandidateId, forcedCandidateId) as any[];
      if (images.length === 0) {
        throw new Error(`Forced candidate image not found: ${forcedCandidateId}`);
      }
    } else {
      images = db.prepare(`SELECT * FROM images WHERE is_flagged = 0`).all() as any[];
    }

    if (images.length === 0) {
      return {
        status: 'NO_MATCH',
        suggestedImage: null,
        candidateScores: [],
        reason: 'No processed candidate images available in the library.'
      };
    }

    // 4. Calculate similarity scores & evaluate guard rules for candidates
    const candidateScores: GuardEvaluationResult['candidateScores'] = [];

    for (const image of images) {
      const imgEmbeddingRow = db.prepare(`SELECT vector_json FROM embeddings WHERE target_type = 'image' AND target_id = ?`).get(image.id) as any;
      if (!imgEmbeddingRow) continue;

      const imgVector = JSON.parse(imgEmbeddingRow.vector_json);
      const simScore = EmbeddingService.calculateCosineSimilarity(postVector, imgVector);

      // Check Guard Rules
      const guardDecision = this.checkGuardRules(post, image, simScore);

      candidateScores.push({
        imageId: image.id,
        filename: image.filename,
        subject: image.subject,
        category: image.category,
        similarityScore: parseFloat(simScore.toFixed(4)),
        confidence: image.confidence,
        status: guardDecision.accepted ? 'ACCEPTED' : 'REJECTED',
        rejectionReason: guardDecision.reason
      });
    }

    // Sort candidate scores descending by similarity score
    candidateScores.sort((a, b) => b.similarityScore - a.similarityScore);

    // 5. Select best passing candidate or issue refusal
    const bestPassingCandidate = candidateScores.find(c => c.status === 'ACCEPTED');

    if (bestPassingCandidate) {
      const imageRecord = db.prepare(`SELECT * FROM images WHERE id = ?`).get(bestPassingCandidate.imageId) as any;
      const suggestionId = cryptoRandomId();

      // Record suggestion
      db.prepare(`
        INSERT INTO suggestions (id, post_id, candidate_image_id, similarity_score, status, reason, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).run(
        suggestionId,
        post.id,
        imageRecord.id,
        bestPassingCandidate.similarityScore,
        'SUGGESTED',
        `High confidence match clearing similarity threshold (${bestPassingCandidate.similarityScore} >= ${CONFIG.SIMILARITY_THRESHOLD})`,
        new Date().toISOString()
      );

      return {
        status: 'SUGGESTED',
        suggestedImage: {
          suggestionId,
          ...imageRecord,
          attributes: JSON.parse(imageRecord.attributes_json),
          similarityScore: bestPassingCandidate.similarityScore
        },
        candidateScores,
        reason: `Matched candidate '${imageRecord.subject}' with similarity score ${bestPassingCandidate.similarityScore}`
      };
    }

    // If forced candidate was rejected or all candidates failed
    const topCandidate = candidateScores[0];
    const refusalReason = topCandidate?.rejectionReason || 'No candidate cleared safety similarity thresholds.';
    const suggestionId = cryptoRandomId();

    db.prepare(`
      INSERT INTO suggestions (id, post_id, candidate_image_id, similarity_score, status, reason, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(
      suggestionId,
      post.id,
      topCandidate ? topCandidate.imageId : null,
      topCandidate ? topCandidate.similarityScore : 0,
      'REJECTED',
      refusalReason,
      new Date().toISOString()
    );

    return {
      status: forcedCandidateId ? 'REJECTED' : 'NO_MATCH',
      suggestedImage: null,
      candidateScores,
      reason: refusalReason
    };
  }

  /**
   * Comprehensive safety decision core
   */
  private checkGuardRules(post: any, image: any, similarityScore: number): { accepted: boolean; reason: string } {
    // Rule 1: Vision Model Confidence Threshold
    if (image.confidence < CONFIG.CONFIDENCE_THRESHOLD) {
      return {
        accepted: false,
        reason: `Low classification confidence (${image.confidence} < threshold ${CONFIG.CONFIDENCE_THRESHOLD}). Image flagged for human review.`
      };
    }

    // Rule 2: Subject & Category Mismatch Guard
    const postExpectedSubject = (post.expected_subject || '').toLowerCase();
    const imageSubject = (image.subject || '').toLowerCase();
    const postCategory = (post.category || '').toLowerCase();
    const imageCategory = (image.category || '').toLowerCase();

    // Specific animal species mismatch protection (Fox vs Wolf scenario)
    if (postExpectedSubject.includes('fox') && imageSubject.includes('wolf')) {
      return {
        accepted: false,
        reason: `Animal category mismatch: expected fox, detected wolf`
      };
    }

    if (postExpectedSubject.includes('wolf') && imageSubject.includes('fox')) {
      return {
        accepted: false,
        reason: `Animal category mismatch: expected wolf, detected fox`
      };
    }

    if (postCategory !== imageCategory && postCategory !== 'general' && imageCategory !== 'general') {
      return {
        accepted: false,
        reason: `Category mismatch: article category '${post.category}' does not match image category '${image.category}'`
      };
    }

    // Rule 3: Cosine Similarity Threshold
    if (similarityScore < CONFIG.SIMILARITY_THRESHOLD) {
      return {
        accepted: false,
        reason: `Similarity score below threshold (${similarityScore.toFixed(4)} < ${CONFIG.SIMILARITY_THRESHOLD})`
      };
    }

    return {
      accepted: true,
      reason: 'Passed all safety and similarity checks.'
    };
  }
}
