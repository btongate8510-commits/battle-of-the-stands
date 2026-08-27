/* ==========================================
   FEATURED MATCHUP CONTROLLER
   ========================================== */

// Featured Matchup Data Model
const featuredMatchupData = {
  id: "matchup-001",
  teamA: {
    name: "LSU",
    fullName: "LSU Tigers",
    logo: "images/logos/LSU.png",
    color: "#461d7c",
    accentColor: "#fdd023"
  },
  teamB: {
    name: "Clemson",
    fullName: "Clemson Tigers",
    logo: "images/logos/Clemson.png",
    color: "#f56600",
    accentColor: "#ffffff"
  },
  status: "LIVE RALLY"
};

// Initializes and renders the featured matchup details
function initFeaturedMatchup() {
  console.log(`Featured Matchup initialized: ${featuredMatchupData.teamA.name} vs ${featuredMatchupData.teamB.name}`);
  
  // Future dynamically-driven updates can hook in here
}

document.addEventListener('DOMContentLoaded', () => {
  initFeaturedMatchup();
});