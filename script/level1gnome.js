const secretTriggers = [
  { id: 'qm1', top: '97.7%', left: '9.6%' },
  { id: 'qm2', top: '54.6%', left: '83.3%' },
  { id: 'qm3', top: '62.6%', left: '4.6%' }
];

let foundSecrets = 0;
const foundQMs = JSON.parse(localStorage.getItem('foundQMs_level1')) || {};
const gnomeWasClicked = localStorage.getItem('gnomeUnlocked_level1') === 'true';

// Create the question mark elements
secretTriggers.forEach(obj => {
  const el = document.createElement('div');
  el.classList.add('click-zone', 'secret-qm');
  el.setAttribute('data-id', obj.id);
  el.style.top = obj.top;
  el.style.left = obj.left;

  // If already found, make visible and skip counting again
  if (foundQMs[obj.id]) {
    el.classList.add('revealed');
    foundSecrets++;
  }

  document.getElementById('imageWrapper').appendChild(el);

  el.addEventListener('click', () => {
    if (!foundQMs[obj.id]) {
      el.classList.add('revealed');
      foundSecrets++;
      foundQMs[obj.id] = true;
      localStorage.setItem('foundQMs_level1', JSON.stringify(foundQMs));
      checkAllSecretsFound();
    }
  });
});

function checkAllSecretsFound() {
  if (foundSecrets === secretTriggers.length) {
    showGnome();
  }
}

function showGnome() {
  if (!document.getElementById('gnomeReveal')) {
    const gnomeImage = document.createElement('img');
    gnomeImage.src = 'backgrounds/level1/gnome1.png';
    gnomeImage.id = 'gnomeReveal';
    gnomeImage.classList.add('gnome-reveal');
    gnomeImage.style.cursor = 'pointer';

    gnomeImage.addEventListener('click', () => {
      if (!localStorage.getItem('gnomeUnlocked_level1')) {
        localStorage.setItem('gnomeUnlocked_level1', 'true');

        const gnomes = JSON.parse(localStorage.getItem('gnomes')) || {};
        gnomes['level1'] = true;
        localStorage.setItem('gnomes', JSON.stringify(gnomes));

        gnomeImage.classList.add('found');
      }
    });

    if (localStorage.getItem('gnomeUnlocked_level1') === 'true') {
      gnomeImage.classList.add('found');
	  updateLevelIcons(); // ✅ This triggers the icon update instantly
    }

    document.getElementById('imageWrapper').appendChild(gnomeImage);
  }
}

// Initial checks
if (foundSecrets === secretTriggers.length) {
  showGnome();
}

if (gnomeWasClicked) {
  showGnome();
  updateLevelIcons();

}
