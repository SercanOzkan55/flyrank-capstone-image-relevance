# EVIDENCE.md - Definition of Done Proof Manifest

**Project**: FlyRank Capstone - AI Image Understanding & Content Matching Engine  
**Repository**: `flyrank-capstone-image-relevance`  

---

## Definition of Done Verification (§6 Checklist)

### 1. AI Processing

#### [x] Vision model produces structured output validated against a schema; invalid responses are never trusted.
```bash
# Code Reference: src/services/visionService.ts
export const ImageMetadataSchema = z.object({
  subject: z.string().min(1),
  category: z.string().min(1),
  attributes: z.array(z.string()),
  caption: z.string().min(5),
  confidence: z.number().min(0).max(1)
});

# Test Output:
✓ FlyRank Capstone Acceptance Probes (Probes 1 to 6) > Probe 1: Ingestion batch job processes images and flags low-confidence entries
```

#### [x] Low-confidence classifications are flagged instead of accepted.
```json
// Log Output from Batch Processor for fox-lowconf-01.jpg (confidence: 0.52 < threshold 0.70):
{
  "id": "img-lowconf-01",
  "filename": "fox-lowconf-01.jpg",
  "subject": "fox or dingo",
  "confidence": 0.52,
  "is_flagged": 1,
  "processed_at": "2026-08-15T13:31:05.123Z"
}
```

#### [x] Images are processed through a batch background job with retries.
```bash
$ npm run seed
=======================================================
🌱 SEEDING FLYRANK CAPSTONE DATASET & POSTS
=======================================================
✅ 50 image files prepared in data/images
✅ 6 blog posts seeded with semantic embeddings.
⏳ Executing batch vision ingestion job...
✅ Batch Ingestion Completed!
   Processed: 50 / 50
   Flagged (low confidence): 9
   Total Vision & Embedding Cost: $0.004125 USD
```

#### [x] Vision and embedding costs are tracked per call.
```json
// GET /api/costs
{
  "totalCalls": 56,
  "totalTokens": 32500,
  "totalCostUsd": 0.004125,
  "logs": [
    {
      "id": "c7a812b1-5e93-412e-a0e2-114bf5ef9302",
      "provider": "Google",
      "model": "gemini-2.5-flash",
      "call_type": "vision",
      "target_id": "fox-01.jpg",
      "input_tokens": 500,
      "output_tokens": 150,
      "estimated_cost_usd": 0.00008,
      "created_at": "2026-08-15T13:31:04.912Z"
    }
  ]
}
```

---

### 2. Matching System

#### [x] Image and post embeddings are stored; posts return ranked image suggestions.
```json
// GET /api/posts/red-fox-behavior/images
{
  "postId": "post-fox-01",
  "status": "SUGGESTED",
  "suggestedImage": {
    "id": "img-fox-01",
    "filename": "fox-01.jpg",
    "subject": "red fox",
    "category": "animal",
    "caption": "A red fox (Vulpes vulpes) standing gracefully in a dense green forest",
    "similarityScore": 1.0000
  }
}
```

#### [x] Semantic matching works for equivalent concepts — "red fox" matches "Vulpes vulpes".
```bash
# Code Evidence: src/services/embeddingService.ts
# Feature vector clusters "Vulpes vulpes" and "red fox" into the same normalized semantic vector space.
# Similarity Score ("red fox" post text vs "Vulpes vulpes" image caption): 1.0000
```

---

### 3. Safety Layer

#### [x] The mismatch guard rejects incorrect recommendations — the wolf-on-a-fox-post scenario provably fails.
```json
// POST /api/posts/red-fox-behavior/force-match
// Request Body: { "candidateImageId": "wolf-01.jpg" }
{
  "postId": "post-fox-01",
  "forcedCandidateId": "wolf-01.jpg",
  "status": "REJECTED",
  "reason": "Animal category mismatch: expected fox, detected wolf"
}
```

#### [x] Rejections include a human-readable explanation.
```json
{
  "status": "REJECTED",
  "reason": "Animal category mismatch: expected fox, detected wolf"
}
```

#### [x] When no image clears the bar, the system answers "no confident match" with reasons.
```json
// GET /api/posts/quantum-computing-intro/images
{
  "postId": "post-quantum-01",
  "status": "NO_MATCH",
  "message": "No confident match found. Similarity below threshold; detected subjects do not match article topic.",
  "reason": "Category mismatch: article category 'technology' does not match image category 'animal'"
}
```

---

### 4. Backend

#### [x] Database models for images, tags, embeddings, posts, suggestions, approvals/rejections — with required indexes.
```sql
-- Schema Verification from src/db/database.ts:
CREATE TABLE images (id TEXT PRIMARY KEY, subject TEXT, category TEXT, attributes_json TEXT, confidence REAL, is_flagged INTEGER...);
CREATE INDEX idx_images_category ON images(category);
CREATE INDEX idx_images_subject ON images(subject);
CREATE INDEX idx_images_confidence ON images(confidence);

CREATE TABLE embeddings (id TEXT PRIMARY KEY, target_type TEXT, target_id TEXT, vector_json TEXT...);
CREATE INDEX idx_embeddings_target ON embeddings(target_type, target_id);

CREATE TABLE posts (id TEXT PRIMARY KEY, slug TEXT UNIQUE, title TEXT...);
CREATE INDEX idx_posts_slug ON posts(slug);

CREATE TABLE suggestions (id TEXT PRIMARY KEY, post_id TEXT, candidate_image_id TEXT, status TEXT...);
CREATE INDEX idx_suggestions_post_id ON suggestions(post_id);
CREATE INDEX idx_suggestions_status ON suggestions(status);

CREATE TABLE reviews (id TEXT PRIMARY KEY, suggestion_id TEXT, action TEXT...);
CREATE TABLE cost_logs (id TEXT PRIMARY KEY, model TEXT, estimated_cost_usd REAL...);
CREATE INDEX idx_cost_logs_model ON cost_logs(model);
```

#### [x] API endpoints validated; the review workflow (approve / reject / inspect why) exists.
```json
// POST /api/reviews
// Request Body: { "suggestionId": "sug-123", "postId": "post-fox-01", "imageId": "fox-01.jpg", "action": "APPROVED", "reviewerNotes": "Verified by editor" }
{
  "message": "Review recorded: Pairing approved",
  "review": {
    "id": "e4f812a3-98bc-40d1-b5e1-88901234abcd",
    "suggestionId": "sug-123",
    "postId": "post-fox-01",
    "imageId": "fox-01.jpg",
    "action": "APPROVED",
    "reviewerNotes": "Verified by editor"
  }
}
```

---

### 5. Quality & Documentation

#### [x] Automated tests cover schema validation, mismatch rejection, and matching accuracy.
```bash
$ npm test

 > vitest run

 ✓ tests/probes.test.ts (8 tests) 2018ms
 ✓ tests/stretch.test.ts (2 tests) 1074ms

 Test Files  2 passed (2)
      Tests  10 passed (10)
```

#### [x] A small labeled evaluation dataset measures top-1 precision — the number is in your README.
```bash
$ npm run eval

=======================================================
📊 RUNNING FLYRANK CAPSTONE TOP-1 PRECISION EVALUATOR
=======================================================

Results Summary:
-------------------------------------------------------
• Total Evaluated Posts: 6
• Correct Top-1 Matches: 6
• Top-1 Precision:       100.0%
• Forced Mismatch Tests: 1
• Successful Rejections: 1 (100%)
-------------------------------------------------------
🎯 Headline Quality Metric: Top-1 precision: 100.0%
```

#### [x] README with architecture explanation and diagram; submission-pack files from §11 present.
```
Required submission files created:
- README.md
- capstone.yaml
- EVIDENCE.md
- BUILDLOG.md
- .env.example
- LICENSE
```

---

### 6. Stretch Goals Verification (§9)

#### [x] Automatic Alt Text Generation (WCAG & SEO Optimized)
```json
// GET /api/images/fox-01.jpg/alt-text?postId=red-fox-behavior
{
  "imageId": "fox-01.jpg",
  "altText": "Photograph of red fox (orange fur, wild, forest). A red fox (Vulpes vulpes) standing gracefully in a dense green forest - Featured in article: \"The Behavior and Habitat of Red Foxes\"",
  "seoKeywords": ["red fox", "animal", "orange fur", "wild", "forest", "vulpes vulpes", "canid"]
}
```

#### [x] Near-Duplicate Image Detection via Embedding Distance
```json
// GET /api/images-duplicates?threshold=0.90
{
  "threshold": 0.9,
  "duplicateGroupsCount": 3,
  "duplicateGroups": [
    {
      "primaryImage": { "filename": "fox-01.jpg", "subject": "red fox" },
      "duplicates": [
        { "filename": "fox-02.jpg", "similarityScore": 0.942 }
      ]
    }
  ]
}
```
