// Enhanced Navbar Scroll Effect
(function() {
  'use strict';

  let lastScrollY = window.scrollY;
  let ticking = false;

  function updateNavbar() {
    const navbar = document.querySelector('.behype_navbar');
    if (!navbar) return;

    const scrollY = window.scrollY;

    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScrollY = scrollY;
    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      window.requestAnimationFrame(updateNavbar);
      ticking = true;
    }
  }

  function init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }

    // Add scroll event listener with throttling
    window.addEventListener('scroll', requestTick, { passive: true });

    // Initial check
    updateNavbar();
  }

  // Initialize
  init();
})();
