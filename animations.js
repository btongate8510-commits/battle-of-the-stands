/* ==========================================
   ANIMATIONS & SPIRIT FX CONTROLLER
   ========================================== */

// Initialize general animations and listeners
function initAnimations() {
  console.log("Battle of the Stands: Animations Initialized.");
}

// Trigger Entrance Transition Sequence
function triggerEntranceAnimation(e) {
  if (e) e.preventDefault();

  const splash = document.getElementById('splash-overlay');
  const splashCard = document.getElementById('splash-card');
  const siteWrapper = document.getElementById('main-site-wrapper');

  if (!splash || !siteWrapper) return;

  // Add keyframe animation classes
  splash.classList.add('intro-animating');
  if (splashCard) splashCard.classList.add('intro-card-burst');

  // Reveal site wrapper immediately
  siteWrapper.style.display = 'block';

  // Trigger CSS reveal
  setTimeout(() => {
    siteWrapper.classList.add('homepage-fade-in');
  }, 50);

  // Hide splash overlay after sequence completes
  setTimeout(() => {
    splash.style.display = 'none';
  }, 850);
}

// Bind direct click handler on DOM load
document.addEventListener('DOMContentLoaded', () => {
  const enterBtn = document.getElementById('enter-btn');
  if (enterBtn) {
    enterBtn.addEventListener('click', triggerEntranceAnimation);
  }
});