// Simple Translation System for BEHYPE
(function() {
  'use strict';

  const translations = {
    fr: {
      // Hero Section
      'hero.partners': '+500 établissements partenaires',
      'hero.title': 'Devenez l\'adresse incontournable grâce au pouvoir de l\'influence',
      'hero.subtitle': 'Recevez des influenceurs, boostez votre visibilité et faites de votre établissement une référence sur les réseaux sociaux.',

      // Stats Section
      'stats.establishments': 'Établissements partenaires',
      'stats.influencers': 'Influenceurs inscrits',
      'stats.views': 'Vues générées',
      'stats.posts': 'Posts créés',

      // Features
      'features.title': 'Comment ça marche ?',
      'features.step1.title': 'Créez votre profil',
      'features.step1.desc': 'Présentez votre établissement et définissez vos préférences',
      'features.step2.title': 'Connectez avec des influenceurs',
      'features.step2.desc': 'Recevez des demandes d\'influenceurs qui correspondent à votre image',
      'features.step3.title': 'Boostez votre visibilité',
      'features.step3.desc': 'Profitez de contenus authentiques qui attirent de nouveaux clients',

      // Testimonials
      'testimonials.title': 'Ils utilisent <span class="text_span bg_gradient-behype">BeHype</span> et ça change tout !',
      'testimonials.subtitle': 'Des millions de vues à la croissance de leurs revenus, nos influenceurs et créateurs aident les établissements à obtenir un impact réel. Ce sont nos partenaires qui en parlent le mieux…',

      // Footer
      'footer.tagline': 'La plateforme N°1 qui connecte restaurants et influenceurs food',
      'footer.pages': 'Pages',
      'footer.home': 'Accueil',
      'footer.company': 'Entreprise',
      'footer.about': 'À propos',
      'footer.contact': 'Contact',
      'footer.legal': 'Légal',
      'footer.mentions': 'Mentions légales',
      'footer.privacy': 'Privacy Policy',
      'footer.cookies': 'Cookies',
      'footer.terms': 'CGV & Utilisation',
      'footer.location': 'Aix en Provence',
      'footer.followers': 'abonnés'
    },
    en: {
      // Hero Section
      'hero.partners': '+500 partner establishments',
      'hero.title': 'Become the go-to address through the power of influence',
      'hero.subtitle': 'Welcome influencers, boost your visibility and make your establishment a reference on social networks.',

      // Stats Section
      'stats.establishments': 'Partner establishments',
      'stats.influencers': 'Registered influencers',
      'stats.views': 'Views generated',
      'stats.posts': 'Posts created',

      // Features
      'features.title': 'How does it work?',
      'features.step1.title': 'Create your profile',
      'features.step1.desc': 'Present your establishment and define your preferences',
      'features.step2.title': 'Connect with influencers',
      'features.step2.desc': 'Receive requests from influencers that match your image',
      'features.step3.title': 'Boost your visibility',
      'features.step3.desc': 'Benefit from authentic content that attracts new customers',

      // Testimonials
      'testimonials.title': 'They use <span class="text_span bg_gradient-behype">BeHype</span> and it changes everything!',
      'testimonials.subtitle': 'From millions of views to revenue growth, our influencers and creators help establishments achieve real impact. Our partners tell it best…',

      // Footer
      'footer.tagline': 'The #1 platform connecting restaurants and food influencers',
      'footer.pages': 'Pages',
      'footer.home': 'Home',
      'footer.company': 'Company',
      'footer.about': 'About',
      'footer.contact': 'Contact',
      'footer.legal': 'Legal',
      'footer.mentions': 'Legal mentions',
      'footer.privacy': 'Privacy Policy',
      'footer.cookies': 'Cookies',
      'footer.terms': 'Terms & Conditions',
      'footer.location': 'Aix en Provence',
      'footer.followers': 'followers'
    },
    es: {
      // Hero Section
      'hero.partners': '+500 establecimientos asociados',
      'hero.title': 'Conviértete en la dirección imprescindible gracias al poder de la influencia',
      'hero.subtitle': 'Recibe influencers, aumenta tu visibilidad y haz de tu establecimiento una referencia en las redes sociales.',

      // Stats Section
      'stats.establishments': 'Establecimientos asociados',
      'stats.influencers': 'Influencers registrados',
      'stats.views': 'Vistas generadas',
      'stats.posts': 'Publicaciones creadas',

      // Features
      'features.title': '¿Cómo funciona?',
      'features.step1.title': 'Crea tu perfil',
      'features.step1.desc': 'Presenta tu establecimiento y define tus preferencias',
      'features.step2.title': 'Conecta con influencers',
      'features.step2.desc': 'Recibe solicitudes de influencers que coinciden con tu imagen',
      'features.step3.title': 'Aumenta tu visibilidad',
      'features.step3.desc': 'Benefíciate de contenido auténtico que atrae nuevos clientes',

      // Testimonials
      'testimonials.title': '¡Usan <span class="text_span bg_gradient-behype">BeHype</span> y todo cambia!',
      'testimonials.subtitle': 'Desde millones de vistas hasta el crecimiento de ingresos, nuestros influencers y creadores ayudan a los establecimientos a lograr un impacto real. Nuestros socios lo cuentan mejor…',

      // Footer
      'footer.tagline': 'La plataforma N°1 que conecta restaurantes e influencers gastronómicos',
      'footer.pages': 'Páginas',
      'footer.home': 'Inicio',
      'footer.company': 'Empresa',
      'footer.about': 'Acerca de',
      'footer.contact': 'Contacto',
      'footer.legal': 'Legal',
      'footer.mentions': 'Menciones legales',
      'footer.privacy': 'Política de privacidad',
      'footer.cookies': 'Cookies',
      'footer.terms': 'Términos y condiciones',
      'footer.location': 'Aix en Provence',
      'footer.followers': 'seguidores'
    }
  };

  let currentLang = localStorage.getItem('behype_language') || 'fr';

  function translatePage() {
    const lang = currentLang;
    if (!translations[lang]) return;

    // Translate all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translations[lang][key]) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = translations[lang][key];
        } else {
          element.innerHTML = translations[lang][key];
        }
      }
    });

    // Also translate data-i18n elements (backward compatibility)
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations.en && translations.en[key]) {
        // This uses the old nav translations
        if (lang === 'en') {
          if (key === 'nav.pricing') element.textContent = 'Pricing';
          else if (key === 'nav.testimonials') element.textContent = 'Testimonials';
          else if (key === 'nav.influencer') element.textContent = 'I\'m an influencer';
          else if (key === 'nav.signup') element.textContent = 'Sign up';
          else if (key === 'nav.login') element.textContent = 'Log in';
        } else if (lang === 'es') {
          if (key === 'nav.pricing') element.textContent = 'Precios';
          else if (key === 'nav.testimonials') element.textContent = 'Testimonios';
          else if (key === 'nav.influencer') element.textContent = 'Soy influencer';
          else if (key === 'nav.signup') element.textContent = 'Registrarse';
          else if (key === 'nav.login') element.textContent = 'Iniciar sesión';
        } else {
          if (key === 'nav.pricing') element.textContent = 'Tarifs';
          else if (key === 'nav.testimonials') element.textContent = 'Témoignages';
          else if (key === 'nav.influencer') element.textContent = 'Je suis influenceur';
          else if (key === 'nav.signup') element.textContent = 'S\'inscrire';
          else if (key === 'nav.login') element.textContent = 'Se connecter';
        }
      }
    });
  }

  // Listen for language changes
  window.addEventListener('languageChange', function(e) {
    currentLang = e.detail;
    translatePage();
  });

  // Initial translation on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', translatePage);
  } else {
    translatePage();
  }
})();
