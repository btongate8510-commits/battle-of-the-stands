/* ==========================================
   GLOBAL ENTRY & APP INITIALIZATION
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  console.log("Battle of the Stands: Full System Ready.");
  
  // Attach smooth scrolling to header navigation links
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});