import fs from 'fs';
import path from 'path';
import { getDatabase } from './db/database';
import { BatchProcessor } from './services/batchProcessor';
import { EmbeddingService } from './services/embeddingService';
import { downloadRealPhotos } from './downloadRealImages';

export async function seedDatabase() {
  console.log(`=======================================================`);
  console.log(`🌱 SEEDING FLYRANK CAPSTONE DATASET & REAL PHOTOS`);
  console.log(`=======================================================`);

  const db = getDatabase();
  db.reset();

  const imagesDir = path.join(process.cwd(), 'data/images');
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  // 1. Ensure all 50 real photos exist on disk
  const existingFiles = fs.readdirSync(imagesDir);
  if (existingFiles.length < 50) {
    await downloadRealPhotos(imagesDir);
  } else {
    console.log(`✅ ${existingFiles.length} real photography images verified in ${imagesDir}`);
  }

  // 2. Seed Blog Posts
  const blogPosts = [
    {
      id: 'post-fox-01',
      slug: 'red-fox-behavior',
      title: 'The Behavior and Habitat of Red Foxes',
      content: 'Red foxes (Vulpes vulpes) are small wild canids known for their bright orange fur, bushy tails, and remarkable adaptability across forest and woodland environments.',
      category: 'animal',
      expected_subject: 'red fox'
    },
    {
      id: 'post-wolf-01',
      slug: 'wolf-pack-dynamics',
      title: 'Understanding Timber Wolf Pack Hierarchy',
      content: 'Gray wolves (Canis lupus) are powerful apex predators that live and hunt in highly structured packs led by an alpha pair in dense northern forests.',
      category: 'animal',
      expected_subject: 'gray wolf'
    },
    {
      id: 'post-dog-01',
      slug: 'golden-retriever-care',
      title: 'Golden Retrievers and Domestic Dog Care',
      content: 'Golden retrievers are among the most popular domestic dog breeds, loved for their friendly temperament, golden coats, and playfulness.',
      category: 'animal',
      expected_subject: 'golden retriever'
    },
    {
      id: 'post-bear-01',
      slug: 'grizzly-bear-fishing',
      title: 'Grizzly Bears in North American Rivers',
      content: 'Brown grizzly bears gather along cold mountain rivers during autumn to catch migrating salmon in preparation for winter hibernation.',
      category: 'animal',
      expected_subject: 'grizzly bear'
    },
    {
      id: 'post-deer-01',
      slug: 'white-tailed-deer',
      title: 'White-Tailed Deer Ecosystem Role',
      content: 'White-tailed deer are herbivorous mammals found across North American forests and meadows, playing a crucial role in woodland plant ecology.',
      category: 'animal',
      expected_subject: 'white-tailed deer'
    },
    {
      id: 'post-quantum-01',
      slug: 'quantum-computing-intro',
      title: 'Introduction to Quantum Computing and Qubits',
      content: 'Quantum computing leverages principles of quantum mechanics such as superposition and entanglement to execute complex calculations using superconducting qubits.',
      category: 'technology',
      expected_subject: 'quantum computer lab'
    }
  ];

  const embeddingService = new EmbeddingService();

  for (const post of blogPosts) {
    db.prepare(`
      INSERT OR REPLACE INTO posts (id, slug, title, content, category, expected_subject, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(
      post.id,
      post.slug,
      post.title,
      post.content,
      post.category,
      post.expected_subject,
      new Date().toISOString()
    );

    // Compute Post Vector Embedding
    await embeddingService.generateEmbedding(post.content + ' ' + post.title, 'post', post.id);
  }

  console.log(`✅ ${blogPosts.length} blog posts seeded with semantic embeddings.`);

  // 3. Execute Batch Image Ingestion Job (Probe 1)
  console.log(`⏳ Executing batch vision ingestion job...`);
  const batchProcessor = new BatchProcessor();
  const batchResult = await batchProcessor.runImageIngestionBatch(imagesDir, true);

  console.log(`✅ Batch Ingestion Completed!`);
  console.log(`   Processed: ${batchResult.processedItems} / ${batchResult.totalItems}`);
  console.log(`   Flagged (low confidence): ${batchResult.flaggedItems}`);
  console.log(`   Total Vision & Embedding Cost: $${batchResult.totalCostUsd} USD`);

  console.log(`=======================================================`);
  console.log(`🎉 SEEDING COMPLETED SUCCESSFULLY!`);
  console.log(`=======================================================\n`);
}

if (require.main === module) {
  seedDatabase().catch(err => {
    console.error('Seeding failed:', err);
    process.exit(1);
  });
}
