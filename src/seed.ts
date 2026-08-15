import fs from 'fs';
import path from 'path';
import { getDatabase } from './db/database';
import { BatchProcessor } from './services/batchProcessor';
import { EmbeddingService } from './services/embeddingService';
import { cryptoRandomId } from './utils/cryptoUtils';

export async function seedDatabase() {
  console.log(`=======================================================`);
  console.log(`🌱 SEEDING FLYRANK CAPSTONE DATASET & POSTS`);
  console.log(`=======================================================`);

  const db = getDatabase();
  const imagesDir = path.join(process.cwd(), 'data/images');

  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  // 1. Generate ~50 sample images in data/images/
  const sampleImages = [
    { filename: 'fox-01.jpg', subject: 'red fox' },
    { filename: 'fox-02.jpg', subject: 'red fox' },
    { filename: 'fox-03.jpg', subject: 'red fox' },
    { filename: 'fox-lowconf-01.jpg', subject: 'fox or dingo' }, // Will be flagged for low confidence
    { filename: 'wolf-01.jpg', subject: 'gray wolf' },
    { filename: 'wolf-02.jpg', subject: 'gray wolf' },
    { filename: 'wolf-03.jpg', subject: 'timber wolf' },
    { filename: 'dog-01.jpg', subject: 'golden retriever' },
    { filename: 'dog-02.jpg', subject: 'german shepherd' },
    { filename: 'dog-03.jpg', subject: 'poodle' },
    { filename: 'bear-01.jpg', subject: 'grizzly bear' },
    { filename: 'bear-02.jpg', subject: 'polar bear' },
    { filename: 'deer-01.jpg', subject: 'white-tailed deer' },
    { filename: 'deer-02.jpg', subject: 'elk' }
  ];

  // Fill up to ~50 images across categories
  for (let i = 1; i <= 36; i++) {
    const num = i.toString().padStart(2, '0');
    if (i <= 10) sampleImages.push({ filename: `fox-extra-${num}.jpg`, subject: 'red fox' });
    else if (i <= 20) sampleImages.push({ filename: `wolf-extra-${num}.jpg`, subject: 'gray wolf' });
    else if (i <= 30) sampleImages.push({ filename: `dog-extra-${num}.jpg`, subject: 'domestic dog' });
    else sampleImages.push({ filename: `nature-extra-${num}.jpg`, subject: 'forest landscape' });
  }

  // Create image files on disk if missing
  sampleImages.forEach(img => {
    const filePath = path.join(imagesDir, img.filename);
    if (!fs.existsSync(filePath)) {
      const dummySvg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="400" height="300" fill="#2d3748"/><text x="50%" y="50%" fill="#ffffff" font-size="20" text-anchor="middle">${img.subject} (${img.filename})</text></svg>`;
      fs.writeFileSync(filePath, dummySvg, 'utf-8');
    }
  });

  console.log(`✅ ${sampleImages.length} image files prepared in ${imagesDir}`);

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
