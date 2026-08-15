// FlyRank Editorial Matching Engine Client

let allPosts = [];
let allImages = [];
let activeFilter = 'all';
let activeSuggestion = null;

document.addEventListener('DOMContentLoaded', async () => {
  await fetchTelemetry();
  await loadPosts();
  await loadImages();
  setupPostSelector();
});

// 1. Telemetry Bar
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

// 2. Navigation Switcher
function switchTab(tabId, btnElem) {
  document.querySelectorAll('.nav-link').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.workspace-view').forEach(p => p.classList.remove('active'));

  if (btnElem) btnElem.classList.add('active');
  const target = document.getElementById(tabId);
  if (target) target.classList.add('active');

  if (tabId === 'tabGallery') renderGallery();
  if (tabId === 'tabCosts') loadCostRecords();
}

// 3. Load Posts
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
    <option value="${p.id}">${p.title}</option>
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
  
  document.getElementById('guardBanner').style.display = 'none';
  document.getElementById('suggestedItemFrame').style.display = 'none';
  document.getElementById('candidatesFeed').innerHTML = '<p style="color: var(--text-dim); font-size: 0.84rem;">Click "Execute Semantic Matching" to rank candidate images and run safety verification.</p>';
}

// 4. Query Matches
async function runStudioMatching() {
  const select = document.getElementById('studioPostSelect');
  const postId = select.value;
  if (!postId) return;

  const feed = document.getElementById('candidatesFeed');
  feed.innerHTML = '<p style="color: var(--signal); font-size: 0.84rem;">Computing vector cosine similarities and evaluating Mismatch Guard...</p>';

  try {
    const res = await fetch(`/api/posts/${postId}/images`);
    const data = await res.json();
    renderMatchingResult(data);
  } catch (err) {
    feed.innerHTML = `<p style="color: var(--stamp);">Failed to query matches: ${err.message}</p>`;
  }
}

// 5. Force Wolf Candidate Test (Probe 3)
async function runForcedWolfTest() {
  const feed = document.getElementById('candidatesFeed');
  feed.innerHTML = '<p style="color: var(--stamp); font-size: 0.84rem;">Forcing gray wolf candidate against Red Fox post...</p>';

  try {
    const res = await fetch(`/api/posts/red-fox-behavior/force-match`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ candidateImageId: 'wolf-01.jpg' })
    });
    const data = await res.json();
    renderMatchingResult(data, true);
  } catch (err) {
    feed.innerHTML = `<p style="color: var(--stamp);">Forced test error: ${err.message}</p>`;
  }
}

// 6. Render Matching Results
function renderMatchingResult(data, isForced = false) {
  const banner = document.getElementById('guardBanner');
  const bannerTitle = document.getElementById('guardTitle');
  const bannerDesc = document.getElementById('guardDesc');
  const featuredFrame = document.getElementById('suggestedItemFrame');
  const feed = document.getElementById('candidatesFeed');

  banner.style.display = 'flex';

  if (data.status === 'SUGGESTED') {
    banner.className = 'guard-banner accepted';
    bannerTitle.innerText = 'MATCH ACCEPTED — CLEARED ALL SAFETY GUARDS';
    bannerDesc.innerText = data.reason;

    featuredFrame.style.display = 'grid';
    document.getElementById('suggestedImgBox').innerHTML = `<img src="/data/images/${data.suggestedImage.filename}" alt="${data.suggestedImage.subject}">`;
    document.getElementById('suggestedSubject').innerText = data.suggestedImage.subject;
    document.getElementById('suggestedCaption').innerText = data.suggestedImage.caption;
    document.getElementById('suggestedSimilarity').innerText = `Cosine Similarity: ${(data.suggestedImage.similarityScore * 100).toFixed(1)}% | ${data.suggestedImage.filename}`;

    activeSuggestion = {
      suggestionId: data.suggestedImage.suggestionId,
      postId: data.postId,
      imageId: data.suggestedImage.id
    };
  } else if (data.status === 'REJECTED') {
    banner.className = 'guard-banner rejected';
    bannerTitle.innerText = 'PROVABLY REJECTED BY MISMATCH GUARD';
    bannerDesc.innerText = data.reason;
    featuredFrame.style.display = 'none';
  } else {
    banner.className = 'guard-banner nomatch';
    bannerTitle.innerText = 'NO CONFIDENT MATCH FOUND (SAFE REFUSAL)';
    bannerDesc.innerText = data.message || data.reason;
    featuredFrame.style.display = 'none';
  }

  const candidates = data.candidateScores || [];
  if (candidates.length === 0) {
    feed.innerHTML = '<p style="color: var(--text-dim); font-size: 0.84rem;">No candidates returned.</p>';
    return;
  }

  feed.innerHTML = candidates.slice(0, 10).map((c, idx) => {
    const isPass = c.status === 'ACCEPTED';
    return `
      <div class="candidate-row">
        <div class="candidate-left">
          <span class="candidate-rank">0${idx + 1}</span>
          <div>
            <div class="candidate-title">${c.subject} <span style="color: var(--text-dim); font-size: 0.75rem;">(${c.filename})</span></div>
            <div class="candidate-meta">Score: ${(c.similarityScore).toFixed(4)} | Confidence: ${c.confidence}</div>
          </div>
        </div>
        <div>
          <span class="status-badge ${isPass ? 'accepted' : 'rejected'}">${c.status}</span>
        </div>
      </div>
    `;
  }).join('');
}

// 7. Human Review
async function submitReview(action) {
  if (!activeSuggestion) {
    alert('Please evaluate a post and query matches first.');
    return;
  }

  try {
    const res = await fetch('/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        suggestionId: activeSuggestion.suggestionId || 'sug-editorial',
        postId: activeSuggestion.postId,
        imageId: activeSuggestion.imageId,
        action,
        reviewerNotes: 'Verified via Editorial Studio'
      })
    });
    const data = await res.json();
    alert(`Review recorded: ${action}\nID: ${data.review.id}`);
  } catch (err) {
    alert(`Review error: ${err.message}`);
  }
}

// 8. Custom Playground
async function runCustomPlayground() {
  const title = document.getElementById('customTitle').value;
  const content = document.getElementById('customContent').value;
  const category = document.getElementById('customCategory').value;
  const expectedSubject = document.getElementById('customExpectedSubject').value;
  const output = document.getElementById('customPlaygroundOutput');

  if (!title || !content) {
    alert('Please provide title and body content.');
    return;
  }

  output.innerText = 'Vectorizing content and running candidate search through Mismatch Guard...';

  try {
    const res = await fetch('/api/match-custom', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, category, expectedSubject })
    });
    const data = await res.json();
    output.innerText = JSON.stringify(data, null, 2);
  } catch (err) {
    output.innerText = `Error: ${err.message}`;
  }
}

// 9. Load & Render Gallery
async function loadImages() {
  try {
    const res = await fetch('/api/images');
    const data = await res.json();
    allImages = data.images || [];
    renderGallery();
  } catch (err) {
    console.error('Failed to load images:', err);
  }
}

function filterCategory(cat, btnElem) {
  activeFilter = cat;
  document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
  if (btnElem) btnElem.classList.add('active');
  renderGallery();
}

function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  const searchQuery = (document.getElementById('gallerySearchInput')?.value || '').toLowerCase();

  const filtered = allImages.filter(img => {
    const matchCat = activeFilter === 'all' || img.category === activeFilter || img.subject.includes(activeFilter);
    const matchSearch = !searchQuery || img.filename.toLowerCase().includes(searchQuery) || img.subject.toLowerCase().includes(searchQuery) || img.caption.toLowerCase().includes(searchQuery);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '<p style="color: var(--text-dim); grid-column: 1 / -1; padding: 40px; text-align: center;">No items match this filter.</p>';
    return;
  }

  grid.innerHTML = filtered.map(img => `
    <div class="card-image-box" onclick="openImageModal('${img.id}')">
      <div class="card-image-media">
        <img src="/data/images/${img.filename}" alt="${img.subject}" loading="lazy">
      </div>
      <div class="card-image-body">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span class="card-image-subject">${img.subject}</span>
          <span class="status-badge ${img.is_flagged ? 'rejected' : 'accepted'}">${img.is_flagged ? 'FLAGGED' : 'VERIFIED'}</span>
        </div>
        <p class="card-image-desc">${img.caption}</p>
        <div class="card-image-foot">
          <span>Conf: ${(img.confidence * 100).toFixed(0)}%</span>
          <span>${img.filename}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// 10. Modal Inspector
function openImageModal(imageId) {
  const img = allImages.find(i => i.id === imageId);
  if (!img) return;

  document.getElementById('modalThumb').innerHTML = `<img src="/data/images/${img.filename}" style="width: 100%; height: 180px; object-fit: cover; border-radius: 6px;">`;
  document.getElementById('modalSubject').innerText = img.subject.toUpperCase();
  document.getElementById('modalCode').innerText = JSON.stringify(img, null, 2);

  document.getElementById('imageBackdrop').style.display = 'flex';
}

function closeImageModal() {
  document.getElementById('imageBackdrop').style.display = 'none';
}

// 11. Stretch Features
async function runAltTextDemo() {
  const output = document.getElementById('stretchAltOutput');
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
  const output = document.getElementById('stretchDupeOutput');
  output.innerText = 'Scanning vector space for near-duplicates (cosine >= 0.90)...';
  try {
    const res = await fetch('/api/images-duplicates?threshold=0.90');
    const data = await res.json();
    output.innerText = JSON.stringify(data, null, 2);
  } catch (err) {
    output.innerText = `Error: ${err.message}`;
  }
}

// 12. Benchmark & Cost
async function runEvalBenchmark() {
  const output = document.getElementById('evalJson');
  output.innerText = 'Running benchmark precision evaluation...';
  try {
    const res = await fetch('/api/eval');
    const data = await res.json();
    document.getElementById('evalScoreVal').innerText = data.top1PrecisionFormatted;
    document.getElementById('evalRejectionVal').innerText = `${data.mismatchRejectionRatePercent}%`;
    output.innerText = JSON.stringify(data, null, 2);
  } catch (err) {
    output.innerText = `Error: ${err.message}`;
  }
}

async function loadCostRecords() {
  const output = document.getElementById('costsJson');
  try {
    const res = await fetch('/api/costs');
    const data = await res.json();
    document.getElementById('costTotalVal').innerText = `$${data.totalCostUsd} USD`;
    document.getElementById('costCallsVal').innerText = `${data.totalCalls} Calls`;
    output.innerText = JSON.stringify(data, null, 2);
  } catch (err) {
    output.innerText = `Error: ${err.message}`;
  }
}
