# Demo Video Script — AI Image Matching Engine
## 3-5 minutes | Record with OBS Studio or Loom

---

### INTRO (0:00 – 0:30) — Show terminal + project folder

**Say:**
"Hi. This is a live demo of my FlyRank Backend Capstone project —
an AI Image Understanding and Content Matching Engine.
The problem it solves: an editorial team has a library of 50 images
and 6 blog posts. The system automatically figures out which image
belongs with which post — and more importantly, it rejects wrong
pairings and says no confident match when it is not sure."

---

### PART 1 — Setup (0:30 – 1:00)

**Say:**
"Setup requires only Node.js. No paid API key needed."

**Run + Say:**
```
npm run seed
```
"This command seeds 50 images into the corpus, runs the vision
classification batch job, and prints a cost summary.
50 images processed, 9 flagged for low confidence,
total AI cost: four-tenths of a cent."

---

### PART 2 — Normal Match (1:00 – 2:00)

**Say:**
"Now I start the server."

**Run:**
```
npm run start
```

**Say:**
"I open the interactive dashboard at localhost 3000 —
this was one of the stretch goals.
Now let me query the best image for the red fox blog post."

**Show dashboard in browser, then run:**
```
curl http://localhost:3000/api/posts/red-fox-behavior/images
```

**Say:**
"The system correctly suggested fox-01.jpg with a similarity score of 1.0.
Notice: the blog post text says red fox, the image caption says Vulpes vulpes.
The system understands these are the same thing through semantic embeddings —
not keyword matching. That was a deliberate design decision: solve taxonomic
equivalence in vector space, not with hardcoded rules."

---

### PART 3 — Mismatch Guard (2:00 – 3:00) ← MOST IMPORTANT

**Say:**
"Now the safety layer — the Mismatch Guard.
An editor accidentally tries to assign a wolf photo to the fox article."

**Run:**
```
curl -X POST http://localhost:3000/api/posts/red-fox-behavior/force-match \
  -H "Content-Type: application/json" \
  -d '{"candidateImageId": "wolf-01.jpg"}'
```

**Say:**
"Status: REJECTED. Reason: Animal category mismatch — expected fox, detected wolf.
This is the most important design decision in the project: giving the system
a hard trust boundary. Even if the similarity score is borderline,
the category validator runs as a separate check.
Both layers must agree before a suggestion is accepted.
This is defense-in-depth applied to content safety."

---

### PART 4 — No Confident Match (3:00 – 3:30)

**Say:**
"What if there is no relevant image in the corpus at all?
I query the quantum computing post — we only have animal photos."

**Run:**
```
curl http://localhost:3000/api/posts/quantum-computing-intro/images
```

**Say:**
"Status: NO_MATCH. The system says I do not know, rather than
guessing randomly. This is intentional — returning a wrong image
with false confidence is worse than returning nothing."

---

### PART 5 — Eval + Limitation (3:30 – 4:30)

**Run:**
```
npm run eval
```

**Say:**
"10 out of 10 tests pass. Top-1 precision: 100 percent.
But I want to be honest about a real limitation:
this system is designed for around 50 images.
If the corpus grew to 100,000 images, the in-process cosine
similarity loop would become a bottleneck.
In production you would replace it with an approximate
nearest-neighbour index like pgvector or Milvus.
The API surface would not change — only the lookup mechanism underneath."

---

### CLOSING (4:30 – 5:00)

**Say:**
"To summarize: the system understands images, matches them to posts,
rejects mismatches, and refuses to guess when uncertain.
The README covers setup from scratch, the architecture,
eval results, and all limitations.
Thank you."

**Show on screen:** README.md open as the final frame.

---

## Recording Tips (OBS)
- Resolution: 1920x1080, FPS: 30
- Audio: microphone on, background noise off
- Layout: terminal + browser side by side
- Upload to YouTube as Unlisted → paste link into portal
