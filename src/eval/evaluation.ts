import { getDatabase } from '../db/database';
import { MismatchGuard } from '../services/mismatchGuard';

export interface EvalReport {
  timestamp: string;
  totalEvaluatedPosts: number;
  correctTop1Matches: number;
  top1PrecisionPercent: number;
  top1PrecisionFormatted: string;
  forcedMismatchTests: number;
  successfulRejections: number;
  mismatchRejectionRatePercent: number;
  details: Array<{
    postId: string;
    postTitle: string;
    expectedSubject: string;
    suggestedSubject: string | null;
    suggestedImageFilename: string | null;
    isTop1Correct: boolean;
    similarityScore: number | null;
    status: string;
    reason: string;
  }>;
}

export class EvaluationRunner {
  private guard: MismatchGuard;

  constructor() {
    this.guard = new MismatchGuard();
  }

  async runEvaluation(): Promise<EvalReport> {
    const db = getDatabase();
    const posts = db.prepare(`SELECT * FROM posts WHERE expected_subject != ''`).all() as any[];

    let correctTop1Matches = 0;
    let forcedMismatchTests = 0;
    let successfulRejections = 0;
    const details: EvalReport['details'] = [];

    for (const post of posts) {
      // 1. Evaluate top-1 suggestion
      const result = await this.guard.evaluatePostMatches(post.id);
      
      const suggestedSubject = result.suggestedImage ? result.suggestedImage.subject : null;
      const suggestedFilename = result.suggestedImage ? result.suggestedImage.filename : null;

      let isTop1Correct = false;

      // Top-1 is correct if suggested image subject matches post expected_subject,
      // or if quantum post correctly returns NO_MATCH (safety refusal)
      if (result.suggestedImage && suggestedSubject === post.expected_subject) {
        isTop1Correct = true;
        correctTop1Matches++;
      } else if (post.expected_subject === 'quantum computer lab' && result.status === 'NO_MATCH') {
        isTop1Correct = true;
        correctTop1Matches++;
      }

      details.push({
        postId: post.id,
        postTitle: post.title,
        expectedSubject: post.expected_subject,
        suggestedSubject,
        suggestedImageFilename: suggestedFilename,
        isTop1Correct,
        similarityScore: result.suggestedImage ? result.suggestedImage.similarityScore : null,
        status: result.status,
        reason: result.reason
      });

      // 2. Test Forced Mismatch Rejection (e.g. Wolf against Fox post)
      if (post.slug === 'red-fox-behavior') {
        forcedMismatchTests++;
        const wolfImage = db.prepare(`SELECT * FROM images WHERE subject = 'gray wolf'`).get() as any;
        if (wolfImage) {
          const forceResult = await this.guard.evaluatePostMatches(post.id, wolfImage.id);
          if (forceResult.status === 'REJECTED') {
            successfulRejections++;
          }
        }
      }
    }

    const totalPosts = posts.length;
    const top1PrecisionPercent = totalPosts > 0 ? (correctTop1Matches / totalPosts) * 100 : 0;
    const rejectionRatePercent = forcedMismatchTests > 0 ? (successfulRejections / forcedMismatchTests) * 100 : 100;

    return {
      timestamp: new Date().toISOString(),
      totalEvaluatedPosts: totalPosts,
      correctTop1Matches,
      top1PrecisionPercent: parseFloat(top1PrecisionPercent.toFixed(2)),
      top1PrecisionFormatted: `${top1PrecisionPercent.toFixed(1)}%`,
      forcedMismatchTests,
      successfulRejections,
      mismatchRejectionRatePercent: parseFloat(rejectionRatePercent.toFixed(2)),
      details
    };
  }
}
