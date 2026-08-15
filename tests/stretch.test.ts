import { describe, it, expect, beforeAll } from 'vitest';
import request from 'supertest';
import { app } from '../src/server';
import { seedDatabase } from '../src/seed';

describe('FlyRank Capstone Stretch Goals Verification (§9)', () => {
  beforeAll(async () => {
    await seedDatabase();
  });

  // Stretch Goal 1: Automatic Alt Text Generation
  it('Stretch 1: Generates context-aware WCAG & SEO compliant Alt Text', async () => {
    const res = await request(app).get('/api/images/fox-01.jpg/alt-text?postId=red-fox-behavior');
    expect(res.status).toBe(200);
    expect(res.body.altText).toBeDefined();
    expect(res.body.altText).toContain('red fox');
    expect(res.body.altText).toContain('The Behavior and Habitat of Red Foxes');
    expect(res.body.seoKeywords).toContain('red fox');
    expect(res.body.seoKeywords).toContain('animal');
  });

  // Stretch Goal 2: Near-Duplicate Detection using Embeddings
  it('Stretch 2: Identifies near-duplicate images based on high vector similarity', async () => {
    const res = await request(app).get('/api/images-duplicates?threshold=0.90');
    expect(res.status).toBe(200);
    expect(res.body.duplicateGroups).toBeDefined();
    expect(res.body.duplicateGroupsCount).toBeGreaterThanOrEqual(1);

    const firstGroup = res.body.duplicateGroups[0];
    expect(firstGroup.primaryImage).toBeDefined();
    expect(firstGroup.duplicates.length).toBeGreaterThanOrEqual(1);
    expect(firstGroup.duplicates[0].similarityScore).toBeGreaterThanOrEqual(0.90);
  });
});
