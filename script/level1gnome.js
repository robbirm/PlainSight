const secretTriggers = [
  { id: 'qm1', top: '10%', left: '20%' },
  { id: 'qm2', top: '22%', left: '70%' },
  { id: 'qm3', top: '40%', left: '15%' },
  { id: 'qm4', top: '50%', left: '60%' },
  { id: 'qm5', top: '65%', left: '30%' },
  { id: 'qm6', top: '80%', left: '85%' },
  { id: 'qm7', top: '90%', left: '45%' }
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

  if (foundQMs[obj.id]) {
    el.style.display = 'none';
    foundSecrets++;
  }

  document.getElementById('imageWrapper').appendChild(el);

  el.addEventListener('click', () => {
    el.style.display = 'none';
    foundSecrets++;
    foundQMs[obj.id] = true;
    localStorage.setItem('foundQMs_level1', JSON.stringify(foundQMs));
    checkAllSecretsFound();
  });
});

function checkAllSecretsFound() {
  if (foundSecrets === secretTriggers.length) {
    showGnome();
  }
}

function showGnome() {
  // Avoid duplicates
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

    // ✅ THIS is the only line changed:
    if (localStorage.getItem('gnomeUnlocked_level1') === 'true') {
      gnomeImage.classList.add('found');
    }

    document.getElementById('imageWrapper').appendChild(gnomeImage);
  }
}

// Show gnome if all ?'s were found
if (foundSecrets === secretTriggers.length) {
  showGnome();
}

// Re-show gnome if it was already clicked/found
if (gnomeWasClicked) {
  showGnome();
}
