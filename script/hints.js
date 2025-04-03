// === LEVEL 1 HINT SYSTEM ===
// This script controls item visibility, click zones, saving, and hint list

// ✅ MUST STAY: Load or initialize saved data
const allProgress = JSON.parse(localStorage.getItem('progress')) || {};
const foundItems = allProgress[levelId] || {};


// ✅ MUST STAY: DOM hooks
const wrapper = document.getElementById('imageWrapper');
const hintList = document.getElementById('hintList');

// === ITEM ZONE RENDERING ===
items.forEach(item => {
  const zone = document.createElement('div');
  zone.classList.add('click-zone');
  zone.dataset.id = item.id;
  zone.style.top = item.top;
  zone.style.left = item.left;

  // ✅ OPTIONAL: Hide certain items at the start (level-specific logic)
  if (levelId === 'level1' && item.id === 'obj5') {
    zone.style.display = 'none';
  }
  if (levelId === 'level1' && item.id === 'obj15') {
    zone.style.display = 'none';
  }

  wrapper.appendChild(zone);

  if (foundItems[item.id]) addMarker(zone);

  zone.addEventListener('click', () => {
    if (!foundItems[item.id]) {
      foundItems[item.id] = true;
      allProgress[levelId] = foundItems;
      localStorage.setItem('progress', JSON.stringify(allProgress));
      addMarker(zone);
      markHintAsFound(item.id);
      updateProgressBar();
    }
  });

  // ✅ Create hint with camera icon and dynamic image path
  const hint = document.createElement('div');
  hint.id = `hint-${item.id}`;
  hint.className = 'hint';

  const imagePath = `backgrounds/${levelId}/icons/${item.id}.png`;

  hint.innerHTML = `
    <span>${item.hint}</span>
    <img src="icons/camera-icon.png" class="hint-icon" data-img="${imagePath}" alt="View item">
  `;

  if (foundItems[item.id]) hint.classList.add('found');
  hintList.appendChild(hint);
});


// === MARKERS & UI ===
function addMarker(zone) {
  const marker = document.createElement('div');
  marker.classList.add('marker');
  marker.style.top = zone.style.top;
  marker.style.left = zone.style.left;
  wrapper.appendChild(marker);
}

function markHintAsFound(id) {
  const hint = document.getElementById(`hint-${id}`);
  if (hint) hint.classList.add('found');
}

function updateProgressBar() {
  const foundCount = Object.keys(foundItems).length;
  const percent = (foundCount / items.length) * 100;
  document.getElementById('progressBar').style.width = percent + '%';
}

updateProgressBar();

// === HINT IMAGE POPUP (universal for all levels) ===
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('hint-icon')) {
    const imgSrc = e.target.dataset.img;
    document.getElementById('popupImage').src = imgSrc;
    document.getElementById('popupOverlay').style.display = 'flex';
  }

  if (e.target.id === 'popupClose' || e.target.id === 'popupOverlay') {
    document.getElementById('popupOverlay').style.display = 'none';
    document.getElementById('popupImage').src = '';
  }
});
