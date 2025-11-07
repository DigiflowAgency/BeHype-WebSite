// Translation System for BEHYPE
(function() {
  'use strict';

  let currentLang = localStorage.getItem('behype_language') || 'fr';
  let translations = {};

  async function loadTranslations(lang) {
    try {
      const response = await fetch(`/locales/${lang}.json`);
      if (!response.ok) throw new Error('Translation file not found');
      translations = await response.json();
      return translations;
    } catch (error) {
      console.error('Error loading translations:', error);
      // Fallback to French if error
      if (lang !== 'fr') {
        return loadTranslations('fr');
      }
      return {};
    }
  }

  function translate(key) {
    const keys = key.split('.');
    let value = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    return value;
  }

  function applyTranslations() {
    // Translate elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = translate(key);

      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translation;
      } else {
        element.textContent = translation;
      }
    });

    // Translate elements with data-i18n-html attribute (for HTML content)
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
      const key = element.getAttribute('data-i18n-html');
      const translation = translate(key);
      element.innerHTML = translation;
    });

    // Update lang attribute on html tag
    document.documentElement.lang = currentLang;
  }

  async function initTranslations() {
    await loadTranslations(currentLang);
    applyTranslations();
  }

  // Listen for language changes
  window.addEventListener('languageChange', async (event) => {
    currentLang = event.detail;
    await loadTranslations(currentLang);
    applyTranslations();
  });

  // Initialize translations when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTranslations);
  } else {
    initTranslations();
  }

  // Expose translate function globally
  window.BEHYPE_TRANSLATE = translate;
})();
