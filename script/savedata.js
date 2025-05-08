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

// Add sparkle animation to unlocked badges
function animateUnlockedBadges(selector, checkFn) {
  document.querySelectorAll(selector).forEach(badge => {
    if (checkFn(badge)) {
      badge.classList.add('unlocked');
      const img = badge.querySelector('.badge-icon');
      if (img) {
        img.classList.add('sparkle-animation');
        setTimeout(() => img.classList.remove('sparkle-animation'), 2000);
      }
    } else {
      badge.classList.remove('unlocked');
    }
  });
}

// Update all level/gnome/extra icons
window.updateLevelIcons = function () {
  const progress = JSON.parse(localStorage.getItem('progress')) || {};
  const gnomes = JSON.parse(localStorage.getItem('gnomes')) || {};
  const extras = JSON.parse(localStorage.getItem('extras')) || {};

  // Animate completion badges
  animateUnlockedBadges('[data-level]', badge => {
    const level = badge.dataset.level;
    const found = progress[level] || {};
    return window.itemMap[level] && window.itemMap[level].every(id => found[id]);
  });

  // Animate gnome badges
  animateUnlockedBadges('[data-gnome]', badge => {
    return gnomes[badge.dataset.gnome];
  });

  // Animate extras (e.g., galaxy, extreme)
  animateUnlockedBadges('[data-extra]', badge => {
    return extras[badge.dataset.extra];
  });
};

// === Auto-run on page load ===
window.addEventListener('load', () => {
  window.updateLevelIcons?.();
});
