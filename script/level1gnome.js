const secretTriggers1 = [
  { id: 'qm1', top: '97.7%', left: '9.6%' },
  { id: 'qm2', top: '54.6%', left: '83.3%' },
  { id: 'qm3', top: '62.6%', left: '4.6%' }
];

let foundSecrets1 = 0;
const foundQMs1 = JSON.parse(localStorage.getItem('foundQMs_level1')) || {};
const gnomeWasClicked = localStorage.getItem('gnomeUnlocked_level1') === 'true';

// Create the question mark elements
secretTriggers1.forEach(obj => {
  const el = document.createElement('div');
  el.classList.add('click-zone', 'secret-qm');
  el.setAttribute('data-id', obj.id);
  el.style.top = obj.top;
  el.style.left = obj.left;

  // If already found, make visible and skip counting again
  if (foundQMs1[obj.id]) {
    el.classList.add('revealed');
    foundSecrets1++;
  }

  document.getElementById('imageWrapper').appendChild(el);

  el.addEventListener('click', () => {
    if (!foundQMs1[obj.id]) {
      el.classList.add('revealed');
      foundSecrets1++;
      foundQMs1[obj.id] = true;
	  		    qmSound.currentTime = 0;
    qmSound.play();
      localStorage.setItem('foundQMs_level1', JSON.stringify(foundQMs1));
      checkAllSecretsFound();
    }
  });
});

function checkAllSecretsFound() {
  if (foundSecrets1 === secretTriggers1.length) {
    showGnome();
  }
}

function showGnome() {
  if (!document.getElementById('gnomeReveal')) {
    const gnomeImage1 = document.createElement('img');
    gnomeImage1.src = 'backgrounds/level1/gnome1.png';
    gnomeImage1.id = 'gnomeReveal';
    gnomeImage1.classList.add('gnome-reveal');
    gnomeImage1.style.cursor = 'pointer';

// clicking on gnome vvv

    gnomeImage1.addEventListener('click', () => {
      if (!localStorage.getItem('gnomeUnlocked_level1')) {
        localStorage.setItem('gnomeUnlocked_level1', 'true');

        const gnomes = JSON.parse(localStorage.getItem('gnomes')) || {};
        gnomes['level1.1'] = true;
        localStorage.setItem('gnomes', JSON.stringify(gnomes));
		    gnomeSound.currentTime = 0;
    gnomeSound.play();
 updateLevelIcons();
        gnomeImage1.classList.add('found');
      }
    });
	
// clicking on gnome ^^^	

    if (localStorage.getItem('gnomeUnlocked_level1') === 'true') {
      gnomeImage1.classList.add('found');
	  updateLevelIcons(); // ✅ This triggers the icon update instantly
    }

    document.getElementById('imageWrapper').appendChild(gnomeImage1);
  }
}

// Initial checks
if (foundSecrets1 === secretTriggers1.length) {
  showGnome();
}

if (gnomeWasClicked) {
  showGnome();
  updateLevelIcons();

}
