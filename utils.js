/* ==========================================
   UTILITY HELPER FUNCTIONS
   ========================================== */

// Helper to format numbers with commas (e.g., 1420 -> 1,420)
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Helper to calculate percentages safely
function calculatePercentage(part, total) {
  if (total === 0) return 0;
  return Math.round((part / total) * 100);
}

// Helper to create smooth random integer within range
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Helper to trigger haptic/visual button flash
function animateButtonPress(buttonElement) {
  if (!buttonElement) return;
  buttonElement.style.transform = 'scale(0.95)';
  setTimeout(() => {
    buttonElement.style.transform = 'scale(1)';
  }, 100);
}

console.log("Battle of the Stands: Utils loaded.");