const secretTriggers1 = [
  { id: 'qm1', top: '97.7%', left: '9.6%' },
  { id: 'qm2', top: '54.6%', left: '83.3%' },
  { id: 'qm3', top: '62.6%', left: '4.6%' },
  { id: 'qm4', top: '4.6%', left: '58.6%' },
  { id: 'qm5', top: '27.4%', left: '2.1%' },
  { id: 'qm6', top: '67.5%', left: '90.1%' },
  { id: 'qm7', top: '15.0%', left: '32.7%' },
];

let foundSecrets1 = 0;
const foundQMs1 = JSON.parse(localStorage.getItem('foundQMs_level1.1')) || {};
const gnomeWasClicked1 = localStorage.getItem('gnomeUnlocked_level1.1') === 'true';

// Create the question mark elements
secretTriggers1.forEach(obj => {
  const el = document.createElement('div');
  el.classList.add('click-zone', 'secret-qm1');
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
      localStorage.setItem('foundQMs_level1.1', JSON.stringify(foundQMs1));
      checkAllSecretsFound1();
    }
  });
});

function checkAllSecretsFound1() {
  if (foundSecrets1 === secretTriggers1.length) {
    showGnome1();
  }
}

function showGnome1() {
  if (!document.getElementById('gnomeReveal1')) {
    const gnomeImage1 = document.createElement('img');
    gnomeImage1.src = 'backgrounds/level1/gnome1.png';
    gnomeImage1.id = 'gnomeReveal1';
    gnomeImage1.classList.add('gnome-reveal1');
    gnomeImage1.style.cursor = 'pointer';
	gnomeImage1.style.transition = 'opacity 0.5s ease-in-out';
	gnomeImage1.style.opacity = '1';

// clicking on gnome vvv

    gnomeImage1.addEventListener('click', () => {
      if (!localStorage.getItem('gnomeUnlocked_level1.1')) {
        localStorage.setItem('gnomeUnlocked_level1.1', 'true');

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

    if (localStorage.getItem('gnomeUnlocked_level1.1') === 'true') {
      gnomeImage1.classList.add('found');
	  updateLevelIcons(); // ✅ This triggers the icon update instantly
    }

    document.getElementById('imageWrapper').appendChild(gnomeImage1);
  }
}

// Initial checks
if (foundSecrets1 === secretTriggers1.length) {
  showGnome1();
}

if (gnomeWasClicked1) {
  showGnome1();
  updateLevelIcons();

}

//
//
//
// Second Gnome //
//
//
//

const secretTriggers2 = [
  { id: 'qm8', top: '37.4%', left: '5.8%' },
  { id: 'qm9', top: '8.1%', left: '72.1%' },
  { id: 'qm10', top: '23.2%', left: '37.8%' },
  { id: 'qm11', top: '66.1%', left: '35.7%' },
  { id: 'qm12', top: '95.7%', left: '43.2%' },
  { id: 'qm13', top: '43%', left: '81.2%' },
  { id: 'qm14', top: '54.5%', left: '53.3%' },
];

let foundSecrets2 = 0;
const foundQMs2 = JSON.parse(localStorage.getItem('foundQMs_level1.2')) || {};
const gnomeWasClicked2 = localStorage.getItem('gnomeUnlocked_level1.2') === 'true';

// Create the question mark elements
secretTriggers2.forEach(obj => {
  const el = document.createElement('div');
  el.classList.add('click-zone', 'secret-qm2');
  el.setAttribute('data-id', obj.id);
  el.style.top = obj.top;
  el.style.left = obj.left;

  // If already found, make visible and skip counting again
  if (foundQMs2[obj.id]) {
    el.classList.add('revealed');
    foundSecrets2++;
  }

  document.getElementById('imageWrapper').appendChild(el);

  el.addEventListener('click', () => {
    if (!foundQMs2[obj.id]) {
      el.classList.add('revealed');
      foundSecrets2++;
      foundQMs2[obj.id] = true;
	  		    qmSound.currentTime = 0;
    qmSound.play();
      localStorage.setItem('foundQMs_level1.2', JSON.stringify(foundQMs2));
      checkAllSecretsFound2();
    }
  });
});

function checkAllSecretsFound2() {
  if (foundSecrets2 === secretTriggers2.length) {
    showGnome2();
  }
}

function showGnome2() {
  if (!document.getElementById('gnomeReveal2')) {
    const gnomeImage2 = document.createElement('img');
    gnomeImage2.src = 'backgrounds/level1/gnome2.png';
    gnomeImage2.id = 'gnomeReveal2';
    gnomeImage2.classList.add('gnome-reveal2');
    gnomeImage2.style.cursor = 'pointer';
	gnomeImage2.style.transition = 'opacity 0.5s ease-in-out';
	gnomeImage2.style.opacity = '1';

// clicking on gnome vvv

    gnomeImage2.addEventListener('click', () => {
      if (!localStorage.getItem('gnomeUnlocked_level1.2')) {
        localStorage.setItem('gnomeUnlocked_level1.2', 'true');

        const gnomes = JSON.parse(localStorage.getItem('gnomes')) || {};
        gnomes['level1.2'] = true;
        localStorage.setItem('gnomes', JSON.stringify(gnomes));
		    gnomeSound.currentTime = 0;
    gnomeSound.play();
 updateLevelIcons();
        gnomeImage2.classList.add('found');
      }
    });
	
// clicking on gnome ^^^	

    if (localStorage.getItem('gnomeUnlocked_level1.2') === 'true') {
      gnomeImage2.classList.add('found');
	  updateLevelIcons(); // ✅ This triggers the icon update instantly
    }

    document.getElementById('imageWrapper').appendChild(gnomeImage2);
  }
}

// Initial checks
if (foundSecrets2 === secretTriggers2.length) {
  showGnome2();
}

if (gnomeWasClicked2) {
  showGnome2();
  updateLevelIcons();

}

//
//
//
// Third Gnome //
//
//
//

const secretTriggers3 = [
  { id: 'qm15', top: '55%', left: '43.2%', },
  { id: 'qm16', top: '10.9%', left: '97.6%' },
  { id: 'qm17', top: '9.4%', left: '28.6%' },
  { id: 'qm18', top: '67%', left: '82.7%' },
];

let foundSecrets3 = 0;
const foundQMs3 = JSON.parse(localStorage.getItem('foundQMs_level1.3')) || {};
const gnomeWasClicked3 = localStorage.getItem('gnomeUnlocked_level1.3') === 'true';

// Create the question mark elements
secretTriggers3.forEach(obj => {
  const el = document.createElement('div');
  el.classList.add('click-zone', 'secret-qm3');
  el.setAttribute('data-id', obj.id);
  el.style.top = obj.top;
  el.style.left = obj.left;

  // If already found, make visible and skip counting again
  if (foundQMs3[obj.id]) {
    el.classList.add('revealed');
    foundSecrets3++;
  }

  document.getElementById('imageWrapper').appendChild(el);

  el.addEventListener('click', () => {
    if (!foundQMs3[obj.id]) {
      el.classList.add('revealed');
      foundSecrets3++;
      foundQMs3[obj.id] = true;
	  		    qmSound.currentTime = 0;
    qmSound.play();
      localStorage.setItem('foundQMs_level1.3', JSON.stringify(foundQMs3));
      checkAllSecretsFound3();
    }
  });
});

function checkAllSecretsFound3() {
  if (foundSecrets3 === secretTriggers3.length) {
    showGnome3();
  }
}

function showGnome3() {
  if (!document.getElementById('gnomeReveal3')) {
    const gnomeImage3 = document.createElement('img');
    gnomeImage3.src = 'backgrounds/level1/gnome3.png';
    gnomeImage3.id = 'gnomeReveal3';
    gnomeImage3.classList.add('gnome-reveal3');
    gnomeImage3.style.cursor = 'pointer';
	gnomeImage3.style.transition = 'opacity 0.5s ease-in-out';
	gnomeImage3.style.opacity = '1';

// clicking on gnome vvv

    gnomeImage3.addEventListener('click', () => {
      if (!localStorage.getItem('gnomeUnlocked_level1.3')) {
        localStorage.setItem('gnomeUnlocked_level1.3', 'true');

        const gnomes = JSON.parse(localStorage.getItem('gnomes')) || {};
        gnomes['level1.3'] = true;
        localStorage.setItem('gnomes', JSON.stringify(gnomes));
		    gnomeSound.currentTime = 0;
    gnomeSound.play();
 updateLevelIcons();
        gnomeImage3.classList.add('found');
      }
    });
	
// clicking on gnome ^^^	

    if (localStorage.getItem('gnomeUnlocked_level1.3') === 'true') {
      gnomeImage3.classList.add('found');
	  updateLevelIcons(); // ✅ This triggers the icon update instantly
    }

    document.getElementById('imageWrapper').appendChild(gnomeImage3);
  }
}

// Initial checks
if (foundSecrets3 === secretTriggers3.length) {
  showGnome3();
}

if (gnomeWasClicked3) {
  showGnome3();
  updateLevelIcons();

}

// Galaxy Stuff
const correctCombo = [1, 3, 5, 6, 7, 9];
const savedButtons = JSON.parse(localStorage.getItem('activeGalaxyButtons')) || [];
let activeButtons = new Set(savedButtons);

const galaxyHintImage = document.getElementById('galaxyHintImage');
const badgeIcon = document.querySelector('[data-extra="galaxy"] img');

// Restore toggle states
document.querySelectorAll('.galaxy-btn').forEach(btn => {
  const id = parseInt(btn.getAttribute('data-id'));
  if (activeButtons.has(id)) {
    btn.classList.add('active');
  }

  btn.addEventListener('click', () => {
    if (activeButtons.has(id)) {
      activeButtons.delete(id);
      btn.classList.remove('active');
    } else {
      activeButtons.add(id);
      btn.classList.add('active');
    }

    localStorage.setItem('activeGalaxyButtons', JSON.stringify([...activeButtons]));
    checkGalaxyUnlock();
  });
});

checkGalaxyUnlock(); // Run on load

function checkGalaxyUnlock() {
  const isCorrect = correctCombo.every(id => activeButtons.has(id)) &&
                    activeButtons.size === correctCombo.length;

  galaxyHintImage.style.display = isCorrect ? 'block' : 'none';

  // Restore glow if previously unlocked
  if (localStorage.getItem('galaxyUnlocked') === 'true') {
    galaxyHintImage.classList.add('glow');
  }
}

// Handle clicking the revealed galaxy image
galaxyHintImage.addEventListener('click', () => {
  if (!localStorage.getItem('galaxyUnlocked')) {
    localStorage.setItem('galaxyUnlocked', 'true');

    const extras = JSON.parse(localStorage.getItem('extras')) || {};
    extras['galaxy'] = true;
    localStorage.setItem('extras', JSON.stringify(extras));

    updateLevelIcons();
  }

  galaxyHintImage.classList.add('glow'); // Add glow on click
});

