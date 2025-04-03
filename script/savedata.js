// Collectables Checks
	
	const progress = JSON.parse(localStorage.getItem('progress')) || {};
  const gnomesFound = JSON.parse(localStorage.getItem('gnomes')) || {};
  const extras = JSON.parse(localStorage.getItem('extras')) || {};
	
	
    const itemMap = {
      level1: ['obj1', 'obj2', 'obj3', 'obj4', 'obj5'],
      level2: ['obj1', 'obj2', 'obj3', 'obj4', 'obj5']
    };

    function checkCompletion(levelId) {
      const found = progress[levelId] || {};
      return itemMap[levelId] && itemMap[levelId].every(id => found[id]);
    }

    document.querySelectorAll('[data-level]').forEach(badge => {
      const level = badge.dataset.level;
      if (checkCompletion(level)) {
        badge.classList.add('unlocked');
      }
    });

    document.querySelectorAll('[data-gnome]').forEach(badge => {
      const level = badge.dataset.gnome;
      if (gnomesFound[level]) {
        badge.classList.add('unlocked');
      }
    });

    document.querySelectorAll('[data-extra]').forEach(badge => {
      const key = badge.dataset.extra;
      if (extras[key]) {
        badge.classList.add('unlocked');
      }
    });