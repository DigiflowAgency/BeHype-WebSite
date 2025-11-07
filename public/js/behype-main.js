// BEHYPE Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Load videos after page load
  setTimeout(() => {
    const iframes = document.querySelectorAll('.video-toggle');
    iframes.forEach(iframe => {
      const src = iframe.getAttribute('data-src');
      if (src && !iframe.src) {
        iframe.src = src;
      }
    });
  }, 1500);

  // Animate elements on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('[data-w-id]');
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        element.style.opacity = '1';
        element.style.transform = 'translate3d(0, 0, 0)';
      }
    });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();

  // Logo animations
  const logoContainers = document.querySelectorAll('.behype_logo-move');
  logoContainers.forEach(container => {
    container.style.animation = 'scrollLogos 30s linear infinite';
  });

  // Mobile menu functionality
  const mobileMenuToggle = document.querySelector('.f-navigation-menu-button');
  const mobileMenu = document.querySelector('.behype_nav');

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
  }
});

// CSS Animations
const style = document.createElement('style');
style.textContent = `
  @keyframes scrollLogos {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .behype_logo-move {
    display: flex;
    animation: scrollLogos 30s linear infinite;
  }
  .behype_logo-move-reverse {
    animation-direction: reverse;
  }
`;
document.head.appendChild(style);