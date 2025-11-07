// Google Translate Auto-Integration for BEHYPE
(function() {
  'use strict';

  // Configuration
  const config = {
    defaultLanguage: 'fr',
    supportedLanguages: ['fr', 'en', 'es'],
    googleTranslateElementId: 'google_translate_element'
  };

  // Get current language from localStorage or default
  let currentLang = localStorage.getItem('behype_language') || config.defaultLanguage;

  // Initialize Google Translate
  function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'fr',
      includedLanguages: 'en,es,fr',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay: false
    }, config.googleTranslateElementId);
  }

  // Function to trigger translation
  function translatePage(targetLang) {
    if (targetLang === 'fr') {
      // Reset to French (original)
      const frame = document.querySelector('.goog-te-banner-frame');
      if (frame) {
        const closeButton = frame.contentDocument.querySelector('.goog-close-link');
        if (closeButton) closeButton.click();
      }
      // Force page reload to reset
      window.location.reload();
      return;
    }

    // Trigger Google Translate
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = targetLang;
      select.dispatchEvent(new Event('change'));
    }
  }

  // Hide Google Translate bar and branding
  function hideGoogleTranslateUI() {
    const style = document.createElement('style');
    style.textContent = `
      /* Hide Google Translate bar */
      .goog-te-banner-frame {
        display: none !important;
      }

      /* Hide Google Translate element */
      #${config.googleTranslateElementId} {
        display: none !important;
      }

      /* Fix body top margin added by Google Translate */
      body {
        top: 0 !important;
        position: relative !important;
      }

      /* Hide Google Translate branding */
      .goog-logo-link,
      .goog-te-gadget span,
      .goog-te-gadget-simple .goog-te-menu-value span:first-child {
        display: none !important;
      }

      /* Remove skiptranslate class body styles */
      body.translated {
        top: 0 !important;
      }
    `;
    document.head.appendChild(style);
  }

  // Listen for language changes from language selector
  function setupLanguageListener() {
    window.addEventListener('languageChange', function(e) {
      const newLang = e.detail;
      if (newLang !== currentLang) {
        currentLang = newLang;

        // Wait for Google Translate to be ready
        setTimeout(() => {
          translatePage(newLang);
        }, 500);
      }
    });
  }

  // Initialize everything
  function init() {
    // Create hidden div for Google Translate element
    const div = document.createElement('div');
    div.id = config.googleTranslateElementId;
    div.style.display = 'none';
    document.body.appendChild(div);

    // Load Google Translate script
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.head.appendChild(script);

    // Make googleTranslateElementInit global
    window.googleTranslateElementInit = googleTranslateElementInit;

    // Hide Google UI
    hideGoogleTranslateUI();

    // Setup language change listener
    setupLanguageListener();

    // Apply saved language after Google Translate loads
    setTimeout(() => {
      if (currentLang !== config.defaultLanguage) {
        translatePage(currentLang);
      }
    }, 2000);
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
