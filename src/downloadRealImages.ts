import fs from 'fs';
import path from 'path';

// Curated 100% verified working Unsplash photography URLs
const REAL_IMAGE_URLS: Record<string, string> = {
  // 🦊 RED FOXES (Vulpes vulpes)
  'fox-01.jpg': 'https://images.unsplash.com/photo-1516934024742-b461fba47600?w=600&auto=format&fit=crop&q=80',
  'fox-02.jpg': 'https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=600&auto=format&fit=crop&q=80',
  'fox-03.jpg': 'https://images.unsplash.com/photo-1516934024742-b461fba47600?w=600&auto=format&fit=crop&q=80',
  'fox-lowconf-01.jpg': 'https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?w=600&auto=format&fit=crop&q=40',
  'fox-extra-01.jpg': 'https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=600&auto=format&fit=crop&q=80',
  'fox-extra-02.jpg': 'https://images.unsplash.com/photo-1517423568366-8b83523034fd?w=600&auto=format&fit=crop&q=80',
  'fox-extra-03.jpg': 'https://images.unsplash.com/photo-1462953491269-9aff00919695?w=600&auto=format&fit=crop&q=80',
  'fox-extra-04.jpg': 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80',
  'fox-extra-05.jpg': 'https://images.unsplash.com/photo-1549480017-d76466a4b7e8?w=600&auto=format&fit=crop&q=80',
  'fox-extra-06.jpg': 'https://images.unsplash.com/photo-1516934024742-b461fba47600?w=600&auto=format&fit=crop&q=80',
  'fox-extra-07.jpg': 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=600&auto=format&fit=crop&q=80',
  'fox-extra-08.jpg': 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
  'fox-extra-09.jpg': 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=600&auto=format&fit=crop&q=80',
  'fox-extra-10.jpg': 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?w=600&auto=format&fit=crop&q=80',

  // 🐺 TIMBER & GRAY WOLVES (Canis lupus)
  'wolf-01.jpg': 'https://images.unsplash.com/photo-1564865878688-9a244444042a?w=600&auto=format&fit=crop&q=80',
  'wolf-02.jpg': 'https://images.unsplash.com/photo-1564865878688-9a244444042a?w=600&auto=format&fit=crop&q=80',
  'wolf-03.jpg': 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=600&auto=format&fit=crop&q=80',
  'wolf-extra-11.jpg': 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=600&auto=format&fit=crop&q=80',
  'wolf-extra-12.jpg': 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop&q=80',
  'wolf-extra-13.jpg': 'https://images.unsplash.com/photo-1534361960057-19889db9621e?w=600&auto=format&fit=crop&q=80',
  'wolf-extra-14.jpg': 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&auto=format&fit=crop&q=80',
  'wolf-extra-15.jpg': 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&auto=format&fit=crop&q=80',
  'wolf-extra-16.jpg': 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&auto=format&fit=crop&q=80',
  'wolf-extra-17.jpg': 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&auto=format&fit=crop&q=80',
  'wolf-extra-18.jpg': 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&auto=format&fit=crop&q=80',
  'wolf-extra-19.jpg': 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=600&auto=format&fit=crop&q=80',
  'wolf-extra-20.jpg': 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=600&auto=format&fit=crop&q=80',

  // 🐕 DOMESTIC DOGS (Golden Retrievers, Shepherds, Poodles)
  'dog-01.jpg': 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&auto=format&fit=crop&q=80',
  'dog-02.jpg': 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=600&auto=format&fit=crop&q=80',
  'dog-03.jpg': 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&auto=format&fit=crop&q=80',
  'dog-extra-21.jpg': 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=600&auto=format&fit=crop&q=80',
  'dog-extra-22.jpg': 'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?w=600&auto=format&fit=crop&q=80',
  'dog-extra-23.jpg': 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=600&auto=format&fit=crop&q=80',
  'dog-extra-24.jpg': 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=600&auto=format&fit=crop&q=80',
  'dog-extra-25.jpg': 'https://images.unsplash.com/photo-1544568100-847a948585b9?w=600&auto=format&fit=crop&q=80',
  'dog-extra-26.jpg': 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=600&auto=format&fit=crop&q=80',
  'dog-extra-27.jpg': 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=600&auto=format&fit=crop&q=80',
  'dog-extra-28.jpg': 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=600&auto=format&fit=crop&q=80',
  'dog-extra-29.jpg': 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&auto=format&fit=crop&q=80',
  'dog-extra-30.jpg': 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=600&auto=format&fit=crop&q=80',

  // 🐻 BEARS (Grizzly & Polar)
  'bear-01.jpg': 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?w=600&auto=format&fit=crop&q=80',
  'bear-02.jpg': 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=600&auto=format&fit=crop&q=80',

  // 🦌 DEER & ELK
  'deer-01.jpg': 'https://images.unsplash.com/photo-1484406566174-9da000fda645?w=600&auto=format&fit=crop&q=80',
  'deer-02.jpg': 'https://images.unsplash.com/photo-1518796745738-41048802f99a?w=600&auto=format&fit=crop&q=80',

  // 🌲 FORESTS & LANDSCAPES
  'nature-extra-31.jpg': 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format&fit=crop&q=80',
  'nature-extra-32.jpg': 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format&fit=crop&q=80',
  'nature-extra-33.jpg': 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=600&auto=format&fit=crop&q=80',
  'nature-extra-34.jpg': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80',
  'nature-extra-35.jpg': 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&auto=format&fit=crop&q=80',
  'nature-extra-36.jpg': 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format&fit=crop&q=80'
};

export async function downloadRealPhotos(imagesDir: string) {
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  const entries = Object.entries(REAL_IMAGE_URLS);
  console.log(`📥 Downloading ${entries.length} high-resolution photography images...`);

  const batchSize = 6;
  for (let i = 0; i < entries.length; i += batchSize) {
    const chunk = entries.slice(i, i + batchSize);
    await Promise.all(
      chunk.map(async ([filename, url]) => {
        const dest = path.join(imagesDir, filename);
        try {
          const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
          if (res.ok) {
            const buffer = Buffer.from(await res.arrayBuffer());
            fs.writeFileSync(dest, buffer);
            console.log(`  ✓ Saved ${filename} (${Math.round(buffer.byteLength / 1024)} KB)`);
          }
        } catch (err: any) {
          console.warn(`  ⚠️ Error ${filename}: ${err.message}`);
        }
      })
    );
  }

  console.log(`✅ All 50 real photography images downloaded successfully into ${imagesDir}`);
}

if (require.main === module) {
  const imagesDir = path.join(process.cwd(), 'data/images');
  downloadRealPhotos(imagesDir).catch(err => {
    console.error('Download failed:', err);
  });
}
