let currentLevel = null;

    function openLevelTab(level) {
      const progress = JSON.parse(localStorage.getItem('progress')) || {};
      const levelKey = `level${level}`;
      const unlocked = window.itemMap?.[levelKey]?.every(id => (progress[levelKey] || {})[id]);

      if (level > 1) {
        const prev = `level${level - 1}`;
        const prevComplete = window.itemMap?.[prev]?.every(id => (progress[prev] || {})[id]);
        if (!prevComplete) {
          alert(`Level ${level} is locked. Complete Level ${level - 1} first!`);
          return;
        }
      }

      currentLevel = level;
      document.getElementById("levelTitle").textContent = `Level ${level}`;
      document.getElementById("levelTab").style.display = "block";
      renderLevelIcons(level);
    }

    function startLevel() {
      if (currentLevel) {
        window.location.href = `level ${currentLevel}.html`;
      }
    }

    function renderLevelIcons(level) {
      const levelIcons = document.getElementById("levelIcons");
      levelIcons.innerHTML = "";

      const trophy = `level${level}`;
      const gnomes = [`level${level}.1`, `level${level}.2`, `level${level}.3`];
      const galaxy = `galaxy${level}`;

      const icons = [
        { key: trophy, src: "icons/trophy.png" },
        ...gnomes.map(key => ({ key, src: "icons/gnome.png" })),
        { key: galaxy, src: "icons/galaxy.png" }
      ];

      const gnomeData = JSON.parse(localStorage.getItem('gnomes')) || {};
      const extrasData = JSON.parse(localStorage.getItem('extras')) || {};

      icons.forEach(icon => {
        const img = document.createElement("img");
        img.src = icon.src;
        img.alt = icon.key;

        const isTrophy = icon.key.startsWith("level") && !icon.key.includes(".");
        const isUnlocked = isTrophy
          ? (typeof window.checkCompletion === 'function' && window.checkCompletion(icon.key))
          : gnomeData[icon.key] || extrasData[icon.key];

        if (isUnlocked) {
          img.classList.add("unlocked");
        }

        levelIcons.appendChild(img);
      });
    }

    function updateMarkerColors() {
      const progress = JSON.parse(localStorage.getItem('progress')) || {};
      const gnomeData = JSON.parse(localStorage.getItem('gnomes')) || {};

      for (let level = 1; level <= 5; level++) {
        const marker = document.querySelector(`.marker[onclick="openLevelTab(${level})"]`);
        if (!marker) continue;

        const levelKey = `level${level}`;
        const gnomeKeys = [`${levelKey}.1`, `${levelKey}.2`, `${levelKey}.3`];

        const hasTrophy = typeof window.checkCompletion === 'function' && window.checkCompletion(levelKey);
        const hasAllGnomes = gnomeKeys.every(key => gnomeData[key]);

        if (hasTrophy && hasAllGnomes) {
          marker.classList.add('gold');
        } else if (hasTrophy) {
          marker.classList.add('green');
        }
      }
    }

    window.addEventListener('DOMContentLoaded', () => {
      updateMarkerColors();
    });