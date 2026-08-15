import { EvaluationRunner } from './evaluation';

async function main() {
  console.log(`=======================================================`);
  console.log(`📊 RUNNING FLYRANK CAPSTONE TOP-1 PRECISION EVALUATOR`);
  console.log(`=======================================================`);

  const runner = new EvaluationRunner();
  const report = await runner.runEvaluation();

  console.log(`\nResults Summary:`);
  console.log(`-------------------------------------------------------`);
  console.log(`• Total Evaluated Posts: ${report.totalEvaluatedPosts}`);
  console.log(`• Correct Top-1 Matches: ${report.correctTop1Matches}`);
  console.log(`• Top-1 Precision:       ${report.top1PrecisionFormatted}`);
  console.log(`• Forced Mismatch Tests: ${report.forcedMismatchTests}`);
  console.log(`• Successful Rejections: ${report.successfulRejections} (${report.mismatchRejectionRatePercent}%)`);
  console.log(`-------------------------------------------------------\n`);

  console.log(`Detailed Breakdown:`);
  report.details.forEach((d, idx) => {
    const symbol = d.isTop1Correct ? '✅' : '❌';
    console.log(`${idx + 1}. [${symbol}] Post: "${d.postTitle}"`);
    console.log(`   Expected Subject: ${d.expectedSubject} | Suggested Image: ${d.suggestedImageFilename || 'NONE'} (${d.suggestedSubject || 'NONE'})`);
    console.log(`   Status:           ${d.status} | Reason: ${d.reason}`);
  });

  console.log(`\n=======================================================`);
  console.log(`🎯 Headline Quality Metric: Top-1 precision: ${report.top1PrecisionFormatted}`);
  console.log(`=======================================================\n`);
}

main().catch(err => {
  console.error('Evaluation failed:', err);
  process.exit(1);
});
