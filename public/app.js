// FlyRank Capstone Client Application

let allPosts = [];
let allImages = [];
let activeCategoryFilter = 'all';
let currentSuggestion = null;

// Initialize on page load
document.addEventListener('DOMContentLoaded', async () => {
  await fetchTelemetry();
  await loadPosts();
  await loadImages();
  setupPostSelector();
});

// 1. Fetch System Stats & Telemetry
async function fetchTelemetry() {
  try {
    const res = await fetch('/api/health');
    const data = await res.json();
    if (data.stats) {
      document.getElementById('statTotalImages').innerText = data.stats.totalImages;
      document.getElementById('statTotalPosts').innerText = data.stats.totalPosts;
      document.getElementById('statTotalCost').innerText = `$${data.stats.totalCostUsd} USD`;
    }
  } catch (err) {
    console.error('Failed to load telemetry:', err);
  }
}

// 2. Tab Navigation Switcher
function switchTab(tabId, btnElem) {
  document.querySelectorAll('.nav-tab-item').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.workspace-panel').forEach(p => p.classList.remove('active'));

  if (btnElem) btnElem.classList.add('active');
  const target = document.getElementById(tabId);
  if (target) target.classList.add('active');

  if (tabId === 'tabGallery') renderImagesGallery();
  if (tabId === 'tabCosts') loadCostRecords();
}

// 3. Load Blog Posts
async function loadPosts() {
  try {
    const res = await fetch('/api/posts');
    const data = await res.json();
    allPosts = data.posts || [];
    renderPostSelector();
  } catch (err) {
    console.error('Failed to load posts:', err);
  }
}

function renderPostSelector() {
  const select = document.getElementById('studioPostSelect');
  if (!select) return;
  select.innerHTML = allPosts.map(p => `
    <option value="${p.id}">${getCategoryEmoji(p.category)} ${p.title}</option>
  `).join('');

  if (allPosts.length > 0) {
    selectPost(allPosts[0].id);
  }
}

function setupPostSelector() {
  const select = document.getElementById('studioPostSelect');
  if (select) {
    select.addEventListener('change', (e) => {
      selectPost(e.target.value);
    });
  }
}

function selectPost(postId) {
  const post = allPosts.find(p => p.id === postId || p.slug === postId);
  if (!post) return;

  document.getElementById('postTitlePreview').innerText = post.title;
  document.getElementById('postCategoryBadge').innerText = post.category.toUpperCase();
  document.getElementById('postContentPreview').innerText = post.content;
  document.getElementById('postExpectedSubject').innerText = post.expected_subject;
  
  // Clear previous output
  document.getElementById('guardBanner').style.display = 'none';
  document.getElementById('featuredMatchCard').style.display = 'none';
  document.getElementById('candidatesFeed').innerHTML = '<p style="color: var(--text-muted); font-size: 0.85rem;">Click "Run Semantic Matching" to fetch and evaluate candidate images against safety guard.</p>';
}

// 4. Query Matches for Selected Post
async function runStudioMatching() {
  const select = document.getElementById('studioPostSelect');
  const postId = select.value;
  if (!postId) return;

  const feed = document.getElementById('candidatesFeed');
  feed.innerHTML = '<p style="color: var(--primary); font-size: 0.85rem;">⚡ Computing vector cosine similarities and evaluating Mismatch Guard rules...</p>';

  try {
    const res = await fetch(`/api/posts/${postId}/images`);
    const data = await res.json();
    renderMatchingResult(data);
  } catch (err) {
    feed.innerHTML = `<p style="color: var(--danger);">Failed to execute matching: ${err.message}</p>`;
  }
}

// 5. Force Candidate Wolf Mismatch (Probe 3)
async function runForcedWolfTest() {
  const feed = document.getElementById('candidatesFeed');
  feed.innerHTML = '<p style="color: var(--danger); font-size: 0.85rem;">🛑 Forcing gray wolf candidate against Red Fox post...</p>';

  try {
    const res = await fetch(`/api/posts/red-fox-behavior/force-match`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ candidateImageId: 'wolf-01.jpg' })
    });
    const data = await res.json();
    renderMatchingResult(data, true);
  } catch (err) {
    feed.innerHTML = `<p style="color: var(--danger);">Forced test failed: ${err.message}</p>`;
  }
}

// 6. Render Matching and Mismatch Guard Results
function renderMatchingResult(data, isForced = false) {
  const banner = document.getElementById('guardBanner');
  const bannerIcon = document.getElementById('guardIcon');
  const bannerTitle = document.getElementById('guardTitle');
  const bannerDesc = document.getElementById('guardDesc');
  const featuredCard = document.getElementById('featuredMatchCard');
  const feed = document.getElementById('candidatesFeed');

  banner.style.display = 'flex';

  if (data.status === 'SUGGESTED') {
    banner.className = 'guard-banner accepted';
    bannerIcon.innerText = '✅';
    bannerTitle.innerText = 'MATCH ACCEPTED — CLEARED ALL SAFETY GUARDS';
    bannerDesc.innerText = data.reason;

    featuredCard.style.display = 'grid';
    document.getElementById('featuredImgContainer').innerHTML = `<img src="/data/images/${data.suggestedImage.filename}" alt="${data.suggestedImage.subject}">`;
    document.getElementById('featuredSubject').innerText = data.suggestedImage.subject;
    document.getElementById('featuredCaption').innerText = data.suggestedImage.caption;
    document.getElementById('featuredSimilarity').innerText = `Similarity Score: ${(data.suggestedImage.similarityScore * 100).toFixed(1)}%`;

    const tagsContainer = document.getElementById('featuredTags');
    const attrs = data.suggestedImage.attributes || [];
    tagsContainer.innerHTML = attrs.map(a => `<span class="mini-tag">${a}</span>`).join('');

    currentSuggestion = {
      suggestionId: data.suggestedImage.suggestionId,
      postId: data.postId,
      imageId: data.suggestedImage.id
    };
  } else if (data.status === 'REJECTED') {
    banner.className = 'guard-banner rejected';
    bannerIcon.innerText = '🛑';
    bannerTitle.innerText = 'PROVABLY REJECTED BY MISMATCH GUARD';
    bannerDesc.innerText = data.reason;
    featuredCard.style.display = 'none';
  } else {
    banner.className = 'guard-banner nomatch';
    bannerIcon.innerText = '⚠️';
    bannerTitle.innerText = 'NO CONFIDENT MATCH FOUND (SAFE REFUSAL)';
    bannerDesc.innerText = data.message || data.reason;
    featuredCard.style.display = 'none';
  }

  // Render Candidates List
  const candidates = data.candidateScores || [];
  if (candidates.length === 0) {
    feed.innerHTML = '<p style="color: var(--text-muted); font-size: 0.85rem;">No candidates returned.</p>';
    return;
  }

  feed.innerHTML = candidates.slice(0, 10).map((c, idx) => {
    const isPass = c.status === 'ACCEPTED';
    const percent = (c.similarityScore * 100).toFixed(0);
    return `
      <div class="candidate-item">
        <div class="cand-left">
          <div class="cand-rank">#${idx + 1}</div>
          <div>
            <div class="cand-name">${c.subject} <span style="color: var(--text-muted); font-size: 0.78rem;">(${c.filename})</span></div>
            <div class="cand-meta">Cosine Score: ${(c.similarityScore).toFixed(4)} | Confidence: ${c.confidence}</div>
            <div class="score-bar-wrap">
              <div class="score-bar-fill" style="width: ${percent}%; background: ${isPass ? '#10b981' : '#f43f5e'};"></div>
            </div>
          </div>
        </div>
        <div>
          <span class="cand-pill ${isPass ? 'accepted' : 'rejected'}">${c.status}</span>
        </div>
      </div>
    `;
  }).join('');
}

// 7. Human-in-the-Loop Review
async function submitReviewDecision(action) {
  if (!currentSuggestion) {
    alert('Please evaluate a post and select a valid suggested match first.');
    return;
  }

  try {
    const res = await fetch('/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        suggestionId: currentSuggestion.suggestionId || 'sug-interactive',
        postId: currentSuggestion.postId,
        imageId: currentSuggestion.imageId,
        action,
        reviewerNotes: 'Verified via Interactive Production Studio'
      })
    });
    const data = await res.json();
    alert(`Review Logged Successfully: ${action}\n\nReview Record ID: ${data.review.id}`);
  } catch (err) {
    alert(`Review submission error: ${err.message}`);
  }
}

// 8. Custom Article Playground Matcher
async function runCustomPlaygroundMatch() {
  const title = document.getElementById('customTitle').value;
  const content = document.getElementById('customContent').value;
  const category = document.getElementById('customCategory').value;
  const expectedSubject = document.getElementById('customExpectedSubject').value;
  const outputBox = document.getElementById('customResultOutput');

  if (!title || !content) {
    alert('Please enter both title and content.');
    return;
  }

  outputBox.innerText = 'Analyzing custom post, computing semantic embeddings, and querying Mismatch Guard...';

  try {
    const res = await fetch('/api/match-custom', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, category, expectedSubject })
    });
    const data = await res.json();
    outputBox.innerText = JSON.stringify(data, null, 2);
  } catch (err) {
    outputBox.innerText = `Error: ${err.message}`;
  }
}

// 9. Load Image Corpus & Gallery
async function loadImages() {
  try {
    const res = await fetch('/api/images');
    const data = await res.json();
    allImages = data.images || [];
    renderImagesGallery();
  } catch (err) {
    console.error('Failed to load images:', err);
  }
}

function filterCategory(category, btnElem) {
  activeCategoryFilter = category;
  document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
  if (btnElem) btnElem.classList.add('active');
  renderImagesGallery();
}

function renderImagesGallery() {
  const grid = document.getElementById('galleryCardsGrid');
  if (!grid) return;

  const searchQuery = (document.getElementById('gallerySearchInput')?.value || '').toLowerCase();

  const filtered = allImages.filter(img => {
    const matchCat = activeCategoryFilter === 'all' || img.category === activeCategoryFilter || img.subject.includes(activeCategoryFilter);
    const matchSearch = !searchQuery || img.filename.toLowerCase().includes(searchQuery) || img.subject.toLowerCase().includes(searchQuery) || img.caption.toLowerCase().includes(searchQuery);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '<p style="color: var(--text-muted); grid-column: 1 / -1; padding: 40px; text-align: center;">No images matching your filter.</p>';
    return;
  }

  grid.innerHTML = filtered.map(img => `
    <div class="gallery-card" onclick="openImageModal('${img.id}')">
      <div class="gallery-card-img">
        <img src="/data/images/${img.filename}" alt="${img.subject}" loading="lazy">
      </div>
      <div class="gallery-card-body">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span class="gallery-card-title">${img.subject}</span>
          <span class="cand-pill ${img.is_flagged ? 'rejected' : 'accepted'}">${img.is_flagged ? 'FLAGGED' : 'VALIDATED'}</span>
        </div>
        <p class="gallery-card-caption">${img.caption}</p>
        <div style="margin-top: 10px; font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-mono);">
          Conf: ${(img.confidence * 100).toFixed(0)}% | ${img.filename}
        </div>
      </div>
    </div>
  `).join('');
}

// 10. Image Metadata Inspector Modal
function openImageModal(imageId) {
  const img = allImages.find(i => i.id === imageId);
  if (!img) return;

  document.getElementById('modalImageThumb').innerHTML = `<img src="/data/images/${img.filename}" style="width: 100%; height: 160px; object-fit: cover; border-radius: 8px;">`;
  document.getElementById('modalSubject').innerText = img.subject.toUpperCase();
  document.getElementById('modalDetails').innerText = JSON.stringify(img, null, 2);

  document.getElementById('imageModal').style.display = 'flex';
}

function closeImageModal() {
  document.getElementById('imageModal').style.display = 'none';
}

// 11. Stretch Features
async function runAltTextDemo() {
  const output = document.getElementById('stretchAltTextOutput');
  output.innerText = 'Generating WCAG & SEO Alt-Text...';
  try {
    const res = await fetch('/api/images/fox-01.jpg/alt-text?postId=red-fox-behavior');
    const data = await res.json();
    output.innerText = JSON.stringify(data, null, 2);
  } catch (err) {
    output.innerText = `Error: ${err.message}`;
  }
}

async function runDuplicateScan() {
  const output = document.getElementById('stretchDuplicatesOutput');
  output.innerText = 'Scanning vector embeddings for near-duplicates (cosine >= 0.90)...';
  try {
    const res = await fetch('/api/images-duplicates?threshold=0.90');
    const data = await res.json();
    output.innerText = JSON.stringify(data, null, 2);
  } catch (err) {
    output.innerText = `Error: ${err.message}`;
  }
}

// 12. Evaluation Benchmark Suite
async function runEvalBenchmark() {
  const output = document.getElementById('evalOutputJson');
  output.innerText = 'Running Top-1 Precision benchmark across labeled ground truth...';
  try {
    const res = await fetch('/api/eval');
    const data = await res.json();
    document.getElementById('evalMetricScore').innerText = data.top1PrecisionFormatted;
    document.getElementById('evalRejectionsScore').innerText = `${data.mismatchRejectionRatePercent}%`;
    output.innerText = JSON.stringify(data, null, 2);
  } catch (err) {
    output.innerText = `Error: ${err.message}`;
  }
}

// 13. Cost Records
async function loadCostRecords() {
  const output = document.getElementById('costOutputJson');
  try {
    const res = await fetch('/api/costs');
    const data = await res.json();
    document.getElementById('costStatTotal').innerText = `$${data.totalCostUsd} USD`;
    document.getElementById('costStatCalls').innerText = `${data.totalCalls} Calls`;
    output.innerText = JSON.stringify(data, null, 2);
  } catch (err) {
    output.innerText = `Error: ${err.message}`;
  }
}

function getCategoryEmoji(cat) {
  if (cat === 'animal') return '🦊';
  if (cat === 'technology') return '⚛️';
  if (cat === 'landscape') return '🌲';
  return '📄';
}
