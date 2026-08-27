/* ==========================================
   TEAMS & SCHOOL DATABASE CONTROLLER
   ========================================== */

const teamsDatabase = {
  LSU: {
    name: "LSU",
    mascot: "Tigers",
    primaryColor: "#461d7c",
    secondaryColor: "#fdd023",
    badge: "images/logos/LSU.png"
  },
  Clemson: {
    name: "Clemson",
    mascot: "Tigers",
    primaryColor: "#f56600",
    secondaryColor: "#ffffff",
    badge: "images/logos/Clemson.png"
  },
  UNC: {
    name: "UNC",
    mascot: "Tar Heels",
    primaryColor: "#7bae2c",
    secondaryColor: "#ffffff",
    badge: "images/logos/unc-badge.png"
  },
  TCU: {
    name: "TCU",
    mascot: "Horned Frogs",
    primaryColor: "#4d1979",
    secondaryColor: "#a3a9ac",
    badge: "images/logos/tcu-badge.png"
  }
};

function getTeamInfo(teamKey) {
  return teamsDatabase[teamKey] || null;
}

console.log("Battle of the Stands: Teams database module loaded.");