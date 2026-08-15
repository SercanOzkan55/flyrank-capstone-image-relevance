import fs from 'fs';
import path from 'path';
import { getDatabase } from './db/database';
import { BatchProcessor } from './services/batchProcessor';
import { EmbeddingService } from './services/embeddingService';

function generateAestheticSvg(subject: string, filename: string, category: string, isFlagged = false): string {
  let bgGradient1 = '#1e293b';
  let bgGradient2 = '#0f172a';
  let accentColor = '#38bdf8';
  let iconSvg = '';

  if (subject.includes('fox')) {
    bgGradient1 = '#7c2d12';
    bgGradient2 = '#431407';
    accentColor = '#ea580c';
    iconSvg = `<circle cx="200" cy="110" r="45" fill="#f97316"/>
               <polygon points="170,75 160,35 190,65" fill="#ea580c"/>
               <polygon points="230,75 240,35 210,65" fill="#ea580c"/>
               <polygon points="200,105 190,120 210,120" fill="#ffffff"/>
               <circle cx="185" cy="100" r="5" fill="#1e293b"/>
               <circle cx="215" cy="100" r="5" fill="#1e293b"/>`;
  } else if (subject.includes('wolf')) {
    bgGradient1 = '#1e293b';
    bgGradient2 = '#0f172a';
    accentColor = '#94a3b8';
    iconSvg = `<circle cx="200" cy="110" r="45" fill="#64748b"/>
               <polygon points="170,75 155,30 190,65" fill="#475569"/>
               <polygon points="230,75 245,30 210,65" fill="#475569"/>
               <circle cx="185" cy="100" r="5" fill="#fef08a"/>
               <circle cx="215" cy="100" r="5" fill="#fef08a"/>
               <path d="M 185 125 Q 200 135 215 125" stroke="#334155" stroke-width="3" fill="none"/>`;
  } else if (subject.includes('dog') || subject.includes('retriever') || subject.includes('shepherd')) {
    bgGradient1 = '#78350f';
    bgGradient2 = '#451a03';
    accentColor = '#f59e0b';
    iconSvg = `<circle cx="200" cy="110" r="45" fill="#fbbf24"/>
               <ellipse cx="160" cy="100" rx="12" ry="25" fill="#d97706"/>
               <ellipse cx="240" cy="100" rx="12" ry="25" fill="#d97706"/>
               <circle cx="185" cy="100" r="5" fill="#451a03"/>
               <circle cx="215" cy="100" r="5" fill="#451a03"/>
               <ellipse cx="200" cy="118" rx="8" ry="6" fill="#1c1917"/>`;
  } else if (subject.includes('bear')) {
    bgGradient1 = '#422006';
    bgGradient2 = '#1c1917';
    accentColor = '#b45309';
    iconSvg = `<circle cx="200" cy="110" r="50" fill="#78350f"/>
               <circle cx="160" cy="70" r="16" fill="#78350f"/>
               <circle cx="240" cy="70" r="16" fill="#78350f"/>
               <circle cx="160" cy="70" r="8" fill="#d97706"/>
               <circle cx="240" cy="70" r="8" fill="#d97706"/>
               <ellipse cx="200" cy="122" rx="16" ry="12" fill="#d97706"/>
               <circle cx="200" cy="118" r="6" fill="#1c1917"/>`;
  } else if (subject.includes('deer') || subject.includes('elk')) {
    bgGradient1 = '#064e3b';
    bgGradient2 = '#022c22';
    accentColor = '#10b981';
    iconSvg = `<circle cx="200" cy="115" r="40" fill="#b45309"/>
               <path d="M 175 80 L 155 45 M 155 45 L 140 35 M 155 45 L 165 30" stroke="#fef08a" stroke-width="4" stroke-linecap="round"/>
               <path d="M 225 80 L 245 45 M 245 45 L 260 35 M 245 45 L 235 30" stroke="#fef08a" stroke-width="4" stroke-linecap="round"/>
               <circle cx="185" cy="110" r="4" fill="#1c1917"/>
               <circle cx="215" cy="110" r="4" fill="#1c1917"/>`;
  } else {
    bgGradient1 = '#0f172a';
    bgGradient2 = '#020617';
    accentColor = '#64748b';
    iconSvg = `<polygon points="200,60 160,140 240,140" fill="#15803d"/>
               <polygon points="200,80 170,140 230,140" fill="#16a34a"/>`;
  }

  const badgeColor = isFlagged ? '#f43f5e' : '#10b981';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
  <defs>
    <linearGradient id="bg-${filename.replace(/[^a-zA-Z0-9]/g, '')}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bgGradient1}"/>
      <stop offset="100%" stop-color="${bgGradient2}"/>
    </linearGradient>
  </defs>
  <rect width="400" height="240" rx="12" fill="url(#bg-${filename.replace(/[^a-zA-Z0-9]/g, '')})"/>
  <rect x="0" y="0" width="400" height="240" rx="12" fill="none" stroke="${accentColor}" stroke-opacity="0.25" stroke-width="2"/>
  
  <g transform="translate(0, 0)">
    ${iconSvg}
  </g>
  
  <rect x="20" y="180" width="360" height="42" rx="8" fill="#090d16" fill-opacity="0.8" stroke="#334155" stroke-width="1"/>
  <text x="35" y="200" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="bold">${subject.toUpperCase()}</text>
  <text x="35" y="214" fill="#94a3b8" font-family="'JetBrains Mono', monospace" font-size="10">${filename}</text>
  
  <rect x="250" y="190" width="120" height="22" rx="4" fill="${badgeColor}" fill-opacity="0.15" stroke="${badgeColor}" stroke-width="1"/>
  <text x="310" y="205" fill="${badgeColor}" font-family="sans-serif" font-size="8.5" font-weight="bold" text-anchor="middle">${isFlagged ? 'FLAGGED' : 'VERIFIED'}</text>
</svg>`;
}

export async function seedDatabase() {
  console.log(`=======================================================`);
  console.log(`🌱 SEEDING FLYRANK CAPSTONE DATASET & POSTS`);
  console.log(`=======================================================`);

  const db = getDatabase();
  db.reset();

  const imagesDir = path.join(process.cwd(), 'data/images');
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  // 1. Generate clean ~50 sample images in data/images/ (pure animal & nature library)
  const sampleImages = [
    { filename: 'fox-01.jpg', subject: 'red fox', category: 'animal' },
    { filename: 'fox-02.jpg', subject: 'red fox', category: 'animal' },
    { filename: 'fox-03.jpg', subject: 'red fox', category: 'animal' },
    { filename: 'fox-lowconf-01.jpg', subject: 'fox or dingo', category: 'animal', isFlagged: true },
    { filename: 'wolf-01.jpg', subject: 'gray wolf', category: 'animal' },
    { filename: 'wolf-02.jpg', subject: 'gray wolf', category: 'animal' },
    { filename: 'wolf-03.jpg', subject: 'timber wolf', category: 'animal' },
    { filename: 'dog-01.jpg', subject: 'golden retriever', category: 'animal' },
    { filename: 'dog-02.jpg', subject: 'german shepherd', category: 'animal' },
    { filename: 'dog-03.jpg', subject: 'poodle', category: 'animal' },
    { filename: 'bear-01.jpg', subject: 'grizzly bear', category: 'animal' },
    { filename: 'bear-02.jpg', subject: 'polar bear', category: 'animal' },
    { filename: 'deer-01.jpg', subject: 'white-tailed deer', category: 'animal' },
    { filename: 'deer-02.jpg', subject: 'elk', category: 'animal' }
  ];

  // Fill up to 50 images across categories
  for (let i = 1; i <= 36; i++) {
    const num = i.toString().padStart(2, '0');
    if (i <= 10) sampleImages.push({ filename: `fox-extra-${num}.jpg`, subject: 'red fox', category: 'animal' });
    else if (i <= 20) sampleImages.push({ filename: `wolf-extra-${num}.jpg`, subject: 'gray wolf', category: 'animal' });
    else if (i <= 30) sampleImages.push({ filename: `dog-extra-${num}.jpg`, subject: 'domestic dog', category: 'animal' });
    else sampleImages.push({ filename: `nature-extra-${num}.jpg`, subject: 'forest landscape', category: 'landscape' });
  }

  // Create aesthetic vector SVG artwork on disk
  sampleImages.forEach(img => {
    const filePath = path.join(imagesDir, img.filename);
    const svgContent = generateAestheticSvg(img.subject, img.filename, img.category, img.isFlagged);
    fs.writeFileSync(filePath, svgContent, 'utf-8');
  });

  console.log(`✅ ${sampleImages.length} illustrated images prepared in ${imagesDir}`);

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
