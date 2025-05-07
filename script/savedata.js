// === GLOBAL PROGRESS TRACKING ===

// Make itemMap globally available
window.itemMap = {
  level1: ['obj1', 'obj2', 'obj3', 'obj4', 'obj5', 'obj6', 'obj7', 'obj8', 'obj9', 'obj10', 'obj11', 'obj12', 'obj13', 'obj14', 'obj15', 'obj16', 'obj17', 'obj18', 'obj19', 'obj20', 'obj21', 'obj22', 'obj23'],
  level2: ['obj1', 'obj2', 'obj3', 'obj4', 'obj5', 'obj6', 'obj7', 'obj8', 'obj9', 'obj10', 'obj11', 'obj12', 'obj13', 'obj14', 'obj15'],
  level3: ['obj1', 'obj2', 'obj3', 'obj4', 'obj5'],
  // Add more levels as needed...
};

// === Global utility functions ===

// Check if all required items for a level are found
window.checkCompletion = function(levelId) {
  const progress = JSON.parse(localStorage.getItem('progress')) || {};
  const found = progress[levelId] || {};
  return window.itemMap[levelId] && window.itemMap[levelId].every(id => found[id]);
};

// Update all level/gnome/extra icons
window.updateLevelIcons = function () {
  const progress = JSON.parse(localStorage.getItem('progress')) || {};
  const gnomes = JSON.parse(localStorage.getItem('gnomes')) || {};
  const extras = JSON.parse(localStorage.getItem('extras')) || {};

  // Update trophy icons (completion)
  document.querySelectorAll('[data-level]').forEach(badge => {
    const level = badge.dataset.level;
    const found = progress[level] || {};
    if (window.itemMap[level] && window.itemMap[level].every(id => found[id])) {
      badge.classList.add('unlocked');
    } else {
      badge.classList.remove('unlocked');
    }
  });

  // Update gnome icons
  document.querySelectorAll('[data-gnome]').forEach(badge => {
    const gnomeKey = badge.dataset.gnome; // e.g., "level1.2"
    if (gnomes[gnomeKey]) {
      badge.classList.add('unlocked');
    } else {
      badge.classList.remove('unlocked');
    }
  });

  // Update extras (e.g., galaxy)
  document.querySelectorAll('[data-extra]').forEach(badge => {
    const key = badge.dataset.extra;
    if (extras[key]) {
      badge.classList.add('unlocked');
    } else {
      badge.classList.remove('unlocked');
    }
  });
};

// === Auto-run on page load ===
window.addEventListener('load', () => {
  window.updateLevelIcons?.();
});
