# Demo Script — AI Image Matching Engine

---

### INTRO (0:00 – 0:30)
"Hi. This is a live demo of my FlyRank Backend Capstone — an AI Image Matching Engine.
It automatically matches blog posts to the right image, rejects wrong pairings,
and says no confident match when it is not sure."

---

### 1. Seed (0:30 – 1:00)
```
npm run seed
```
"This seeds 50 images, runs vision classification, and tracks the AI cost.
50 images processed, 9 flagged for low confidence, total cost: four-tenths of a cent."

---

### 2. Start server (1:00 – 1:15)
```
npm run start
```
"I open the dashboard at localhost 3000 — this was a stretch goal."
*(show browser briefly)*

---

### 3. Normal match (1:15 – 2:00)
```
curl http://localhost:3000/api/posts/red-fox-behavior/images
```
"Status: SUGGESTED. fox-01.jpg, similarity score 1.0.
The post says red fox, the image caption says Vulpes vulpes.
The system knows these are the same thing through semantic embeddings — not keyword matching.
That was a deliberate design decision."

---

### 4. Mismatch Guard (2:00 – 3:00) ← KEY PART
```
curl -X POST http://localhost:3000/api/posts/red-fox-behavior/force-match -H "Content-Type: application/json" -d "{\"candidateImageId\": \"wolf-01.jpg\"}"
```
"Status: REJECTED. Reason: Animal category mismatch — expected fox, detected wolf.
This is the most important design decision: the system has a hard trust boundary.
Similarity score alone is not enough — category must also match.
Both layers must agree. This is defense-in-depth."

---

### 5. No confident match (3:00 – 3:30)
```
curl http://localhost:3000/api/posts/quantum-computing-intro/images
```
"Status: NO_MATCH. We only have animal photos, nothing fits the quantum computing post.
The system says I do not know rather than guessing. Returning a wrong image with false confidence is worse than returning nothing."

---

### 6. Eval (3:30 – 4:15)
```
npm run eval
```
"10 out of 10 tests pass. Top-1 precision: 100 percent.
One real limitation: this is designed for 50 images.
At 100k images the cosine loop would be too slow — you would replace it with pgvector or Milvus.
The API surface stays the same, only the lookup mechanism changes."

---

### CLOSING (4:15 – 4:30)
"The README covers setup from scratch, architecture, eval results, and all limitations. Thank you."
*(show README as final frame)*
