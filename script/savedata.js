// === GLOBAL PROGRESS TRACKING ===

// Make itemMap globally available
window.itemMap = {
  level1: ['obj1', 'obj2', 'obj3', 'obj4', 'obj5', 'obj8', 'obj10', 'obj13', 'obj14', 'obj15'],
  level2: ['obj1', 'obj2', 'obj3', 'obj4', 'obj5'],
  level3: ['obj1', 'obj2', 'obj3', 'obj4', 'obj5'],
  // Add more levels as needed...
};

// === Global utility functions ===
window.checkCompletion = function(levelId) {
  const progress = JSON.parse(localStorage.getItem('progress')) || {};
  const found = progress[levelId] || {};
  return window.itemMap[levelId] && window.itemMap[levelId].every(id => found[id]);
};

window.updateLevelIcons = function () {
  const progress = JSON.parse(localStorage.getItem('progress')) || {};
  const gnomes = JSON.parse(localStorage.getItem('gnomes')) || {};
  const extras = JSON.parse(localStorage.getItem('extras')) || {};

  // Update trophy badges
  document.querySelectorAll('[data-level]').forEach(badge => {
    const level = badge.dataset.level;
    const found = progress[level] || {};
    if (window.itemMap[level] && window.itemMap[level].every(id => found[id])) {
      badge.classList.add('unlocked');
    } else {
      badge.classList.remove('unlocked');
    }
  });

  // Update gnome badges
  document.querySelectorAll('[data-gnome]').forEach(badge => {
    const level = badge.dataset.gnome;
    if (gnomes[level]) {
      badge.classList.add('unlocked');
    } else {
      badge.classList.remove('unlocked');
    }
  });

  // Update extras badges
  document.querySelectorAll('[data-extra]').forEach(badge => {
    const key = badge.dataset.extra;
    if (extras[key]) {
      badge.classList.add('unlocked');
    } else {
      badge.classList.remove('unlocked');
    }
  });
};

// === Call on page load (after DOM is ready) ===
window.addEventListener('load', () => {
  if (typeof updateLevelIcons === 'function') {
    updateLevelIcons();
  }
});
