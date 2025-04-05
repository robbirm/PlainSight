
 // === MENU CONTROLS ===
function toggleMenuPanel() {
  const panel = document.getElementById("menuPanel");
  panel.classList.toggle("active");
}
  function toggleChecklist() {
    const checklist = document.getElementById('checklistPanel');
	const treasureOpen = document.getElementById('treasureOpen');
	const treasureClosed = document.getElementById('treasureClosed');
    checklist.classList.toggle('active');
	treasureClosed.classList.toggle('active');
	treasureOpen.classList.toggle('active');
  }

function resetGame() {
  const confirmed = confirm("Are you sure you want to reset ALL game progress? This cannot be undone!");

  if (confirmed) {
    localStorage.clear(); // 💥 This wipes EVERYTHING saved for your game

    // Optional: Reload the game clean
    location.reload();
  }
}

  function exitGame() {
    document.body.innerHTML = '<h1 style="text-align:center; padding-top:50px;">Thanks for playing!</h1>';
  }