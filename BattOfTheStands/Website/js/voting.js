/* ==========================================
   VOTING & FAN INDEX CONTROLLER
   ========================================== */

// Default starting vote counts
let voteCounts = {
  LSU: 520,
  Clemson: 480
};

function castVote(teamName) {
  if (!voteCounts[teamName]) {
    voteCounts[teamName] = 0;
  }

  // Increment vote count
  voteCounts[teamName] += 1;

  // Calculate percentages
  const totalVotes = voteCounts.LSU + voteCounts.Clemson;
  const lsuPercent = Math.round((voteCounts.LSU / totalVotes) * 100);
  const clemsonPercent = 100 - lsuPercent;

  // Update Progress Fill Bar
  const fillBar = document.getElementById('fan-index-fill');
  if (fillBar) {
    fillBar.style.width = lsuPercent + '%';
  }

  // Update Label Text
  const scoreA = document.getElementById('team-a-score');
  const scoreB = document.getElementById('team-b-score');

  if (scoreA) scoreA.textContent = `LSU: ${lsuPercent}%`;
  if (scoreB) scoreB.textContent = `Clemson: ${clemsonPercent}%`;

  // Trigger Cheer Effect based on team chosen
  const teamColor = teamName === 'LSU' ? '#fdd023' : '#f56600';
  if (typeof triggerCheerFX === 'function') {
    triggerCheerFX(teamColor);
  }

  console.log(`Vote registered for ${teamName}! Total LSU: ${voteCounts.LSU}, Total Clemson: ${voteCounts.Clemson}`);
}