document.addEventListener('DOMContentLoaded', () => {
  const enterBtn = document.getElementById('enter-btn');
  const skipBtn = document.getElementById('skip-video-btn');
  const splashCard = document.getElementById('splash-card');
  const splashOverlay = document.getElementById('splash-overlay');
  const siteWrapper = document.getElementById('main-site-wrapper');
  const video = document.getElementById('intro-video');

  if (!enterBtn || !video || !splashOverlay || !siteWrapper) return;

  // Complete bypass handler
  function skipToHomepage() {
    video.pause();
    video.currentTime = 0;
    splashOverlay.style.display = 'none';
    siteWrapper.style.display = 'block';
    siteWrapper.style.transition = 'opacity 0.4s ease';
    void siteWrapper.offsetWidth;
    siteWrapper.style.opacity = '1';
  }

  // Click handler for "CLICK TO VOTE"
  enterBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // 1. Hide the card and display both video and skip button
    if (splashCard) splashCard.style.display = 'none';
    video.style.display = 'block';
    if (skipBtn) skipBtn.style.display = 'block';

    // 2. Play MP4 Video
    video.play().catch(err => {
      console.error("Video playback error:", err);
      skipToHomepage();
    });

    // 3. Smooth pre-fade in the last 0.8s of the video
    const checkEndTime = () => {
      if (video.duration && (video.duration - video.currentTime <= 0.8)) {
        video.removeEventListener('timeupdate', checkEndTime);

        siteWrapper.style.display = 'block';
        siteWrapper.style.transition = 'opacity 0.8s ease';
        void siteWrapper.offsetWidth;
        siteWrapper.style.opacity = '1';

        splashOverlay.style.transition = 'opacity 0.8s ease';
        splashOverlay.style.opacity = '0';
      }
    };

    video.addEventListener('timeupdate', checkEndTime);

    video.onended = () => {
      splashOverlay.style.display = 'none';
    };
  });

  // Direct skip button trigger
  if (skipBtn) {
    skipBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      skipToHomepage();
    });
  }
});