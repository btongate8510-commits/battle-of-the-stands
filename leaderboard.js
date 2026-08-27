/* ==========================================
   CAMPUS SPIRIT RANKINGS / LEADERBOARD
   ========================================== */

// Top Campus Spirit Rankings Data
const leaderboardData = [
  { rank: 1, team: "LSU", score: "94.8 Index" },
  { rank: 2, team: "Clemson", score: "92.4 Index" },
  { rank: 3, team: "UNC", score: "89.1 Index" },
  { rank: 4, team: "TCU", score: "87.6 Index" },
  { rank: 5, team: "Texas", score: "85.2 Index" }
];

// Dynamically populates the spirit rankings list
function renderLeaderboard() {
  const container = document.getElementById('rankings-list');
  if (!container) return;

  container.innerHTML = ''; // Clear prior contents

  leaderboardData.forEach((item) => {
    const row = document.createElement('div');
    row.className = 'ranking-item';

    row.innerHTML = `
      <div class="ranking-info">
        <span class="rank-number">#${item.rank}</span>
        <span class="rank-team-name">${item.team}</span>
      </div>
      <span class="rank-score">${item.score}</span>
    `;

    container.appendChild(row);
  });

  console.log("Battle of the Stands: Spirit Rankings rendered.");
}

document.addEventListener('DOMContentLoaded', () => {
  renderLeaderboard();
});