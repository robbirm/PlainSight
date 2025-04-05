// === LEVEL 1 HINT SYSTEM ===
// This script controls item visibility, click zones, saving, and hint list

// ✅ MUST STAY: Load or initialize saved data
const allProgress = JSON.parse(localStorage.getItem('progress')) || {};
const foundItems = allProgress[levelId] || {};


// ✅ MUST STAY: DOM hooks
const wrapper = document.getElementById('imageWrapper');
const hintList = document.getElementById('hintList');
const foundSound = document.getElementById('foundSound');

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
	  foundSound.currentTime = 0;
	  foundSound.play();
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

// Menu buttons bottom of screen

  function checkScrollForButtonSize() {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const threshold = 100; // how close to the bottom before the buttons enlarge

    const buttons = document.querySelectorAll('.menu-button, .items-button');
	const buttonsHints = document.querySelectorAll('.checklist-panel, .checklist-panel.active');
	const buttonsMenu = document.querySelectorAll('.menu-panel, .menu-panel.active');

    if (scrollPosition + threshold >= documentHeight) {
      buttons.forEach(btn => btn.classList.add('big'));
	  buttonsHints.forEach(btn => btn.classList.add('big'));
	  buttonsMenu.forEach(btn => btn.classList.add('big'));
    } else {
      buttons.forEach(btn => btn.classList.remove('big'));	  
	  buttonsHints.forEach(btn => btn.classList.remove('big'));
	  buttonsMenu.forEach(btn => btn.classList.remove('big'));
    }
  }

  window.addEventListener('scroll', checkScrollForButtonSize);
