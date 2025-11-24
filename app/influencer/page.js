'use client'

import { useState, useEffect } from 'react'
import HomeNavbar from '../components/HomeNavbar'
import Footer from '../components/Footer'

export default function Influencer() {
  const [openFaq, setOpenFaq] = useState(null)
  const [scrollY, setScrollY] = useState(0)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    document.title = "Influenceurs - BEHYPE"

    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  }

  const handleAppClick = (e) => {
    if (!isMobile()) {
      e.preventDefault()
      setShowModal(true)
    }
    // Sur mobile, le lien fonctionne normalement
  }

  const faqs = [
    {
      question: "Est-ce que les collaborations gratuites existent toujours ?",
      answer: "Oui — et elles sont essentielles. Les collaborations gratuites permettent de tester, de créer du contenu, et de construire une relation avec les établissements avant d'être rémunéré."
    },
    {
      question: "Comment fonctionne la rémunération ?",
      answer: "Tu peux proposer ton propre tarif ou accepter une proposition rémunérée d'un établissement. Le paiement est sécurisé via Stripe."
    },
    {
      question: "Est-ce que l'accès est payant ?",
      answer: "Non, l'inscription est 100% gratuite. Tu ne payes rien pour rejoindre la marketplace."
    },
    {
      question: "Puis-je travailler avec des établissements partout en France ?",
      answer: "Oui — la plateforme est nationale et continue de s'étendre."
    },
    {
      question: "Je suis débutant, est-ce que c'est pour moi ?",
      answer: "Oui. Les créateurs de 0 à 1M+ abonnés sont les bienvenus."
    }
  ]

  const testimonials = [
    {
      name: "Nolwenn",
      handle: "@quefairepaca",
      quote: "Avec BeHype j'ai accès à des lieux incroyables et des opportunités pro. C'est simple, fluide et surtout ça m'a permis de développer mon influence autrement."
    },
    {
      name: "Maxime",
      handle: "@foodparis",
      quote: "J'ai pu obtenir mes premières collabs rémunérées et faire grandir mon réseau sans passer des heures en DM."
    },
    {
      name: "Léa",
      handle: "@eatgirl",
      quote: "Ça change tout : je choisis, je crée, et je suis payée quand je le mérite. C'est la liberté."
    }
  ]

  return (
    <div className="page">
      <HomeNavbar />

      {/* Hero Section */}
      <section className="hero">
        {/* Animated Background Elements - Static Animation */}
        <div className="hero-animated-bg">
          {/* Floating Orbs - positions fixes */}
          {Array.from({ length: 20 }).map((_, i) => {
            // Positions déterministes basées sur l'index
            const positions = [
              { left: 10, top: 20 }, { left: 85, top: 15 }, { left: 25, top: 70 },
              { left: 70, top: 80 }, { left: 50, top: 30 }, { left: 90, top: 60 },
              { left: 15, top: 85 }, { left: 60, top: 10 }, { left: 35, top: 55 },
              { left: 80, top: 40 }, { left: 5, top: 50 }, { left: 95, top: 25 },
              { left: 45, top: 90 }, { left: 65, top: 5 }, { left: 20, top: 45 },
              { left: 75, top: 65 }, { left: 40, top: 75 }, { left: 55, top: 35 },
              { left: 30, top: 95 }, { left: 85, top: 50 }
            ]
            const pos = positions[i] || { left: (i * 13) % 100, top: (i * 17) % 100 }
            return (
              <div
                key={`orb-${i}`}
                className="floating-orb"
                style={{
                  left: `${pos.left}%`,
                  top: `${pos.top}%`,
                  animationDelay: `${(i * 0.3)}s`,
                  animationDuration: `${15 + (i % 5)}s`
                }}
              />
            )
          })}

          {/* Particles - positions fixes */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`particle-${i}`}
              className="hero-particle"
              style={{
                left: `${(i * 5 + 2)}%`,
                animationDelay: `${(i * 0.4)}s`,
                animationDuration: `${7 + (i % 3)}s`
              }}
            />
          ))}

          {/* Lignes diagonales */}
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={`diagonal-${i}`}
              className="diagonal-line"
              style={{
                left: `${i * 22}%`,
                animationDelay: `${i * 1.2}s`,
              }}
            />
          ))}
        </div>

        <div className="hero-blur hero-blur-1"></div>
        <div className="hero-blur hero-blur-2"></div>
        <div className="hero-gradient"></div>

        <div className="hero-container">
          <div className="hero-badge" data-aos="fade-down">
            <span className="badge-dot"></span>
            🚀 Rejoins le mouvement
            <span className="badge-dot"></span>
          </div>

          <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
            Le futur de l'influence & de la creator economy{' '}
            <span className="gradient-text">se construit aujourd'hui</span>
          </h1>

          <h2 className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
            Collabore. Choisis. Gagne.
          </h2>

          <p className="hero-description" data-aos="fade-up" data-aos-delay="300">
            <strong>BeHype</strong> — La 1ère marketplace française qui connecte les créateurs avec les lieux d'expériences (restaurants, hôtels, activités de loisirs et bien-être).
          </p>

          <p className="hero-tagline" data-aos="fade-up" data-aos-delay="350">
            Collabs gratuites & rémunérées. Pas d'intermédiaire. Pas de stress.
          </p>

          <div className="hero-cta" data-aos="fade-up" data-aos-delay="400">
            <a href="https://onelink.to/qpqfep" className="btn-primary" onClick={handleAppClick}>
              <span className="btn-gradient"></span>
              <span className="btn-text">👉 Créer mon compte gratuitement</span>
            </a>
          </div>
        </div>

        <div className="scroll-indicator" style={{ opacity: scrollY > 100 ? 0 : 1 }}>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Why Section */}
      <section className="why-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Enfin une plateforme pensée pour toi</h2>
            <p className="section-intro">
              Avec BeHype, tu ne dépends plus des DM, de l'aléatoire ou des opportunités qui passent sous le radar.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card" data-feature="1">
              <div className="feature-number">01</div>
              <div className="feature-icon">📍</div>
              <h3>Tu choisis les lieux avec lesquels tu veux collaborer</h3>
              <div className="feature-line"></div>
            </div>
            <div className="feature-card" data-feature="2">
              <div className="feature-number">02</div>
              <div className="feature-icon">🤝</div>
              <h3>Tu proposes des collaborations gratuites pour découvrir & créer</h3>
              <div className="feature-line"></div>
            </div>
            <div className="feature-card" data-feature="3">
              <div className="feature-number">03</div>
              <div className="feature-icon">💸</div>
              <h3>Tu acceptes des collaborations rémunérées quand ton contenu le mérite</h3>
              <div className="feature-line"></div>
            </div>
            <div className="feature-card" data-feature="4">
              <div className="feature-number">04</div>
              <div className="feature-icon">🏆</div>
              <h3>Tu développes ton image & ton business comme un vrai pro</h3>
              <div className="feature-line"></div>
            </div>
          </div>

          <div className="final-point">
            <div className="final-point-inner">
              <span className="sparkle">✨</span>
              <p>Et surtout : tu gardes le contrôle <strong>du début à la fin.</strong></p>
              <span className="sparkle">✨</span>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusivity Section */}
      <section className="exclusivity-section">
        <div className="container">
          <h2 className="section-title">Une plateforme unique en France</h2>
          <div className="exclusivity-content">
            <p className="exclusivity-text">
              Nous sommes la <strong>1ère marketplace française</strong> qui rémunère les collaborations dans le monde réel (restaurants, hôtels, activités), tout en préservant l'esprit des <strong>collaborations gratuites qui ont construit le marketing d'influence.</strong>
            </p>
            <div className="mission-box">
              <div className="mission-icon">🎯</div>
              <div className="mission-content">
                <p className="mission-label">Notre mission</p>
                <p className="mission-text">
                  Créer un monde où chaque créateur a un vrai pouvoir sur son avenir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - MASQUÉE */}
      {/* <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Ils créent déjà avec BeHype</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="testimonial-card">
                <div className="video-placeholder">
                  <div className="video-bg"></div>
                  <div className="play-button">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M8 5v14l11-7z" fill="currentColor"/>
                    </svg>
                  </div>
                  <p className="video-label">Vidéo témoignage</p>
                </div>
                <div className="testimonial-content">
                  <div className="testimonial-header">
                    <p className="testimonial-name">{testimonial.name}</p>
                    <p className="testimonial-handle">{testimonial.handle}</p>
                  </div>
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Mid Section */}
      <section className="cta-mid-section">
        <div className="cta-blur cta-blur-1"></div>
        <div className="cta-blur cta-blur-2"></div>
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">🚀 Tu veux faire partie des Premiers créateurs mis en avant ?</h2>
            <p className="cta-subtitle">Places limitées pour le lancement officiel.</p>
            <a href="https://onelink.to/qpqfep" className="btn-white" onClick={handleAppClick}>
              <span className="btn-text">👉 Créer mon profil maintenant</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Questions fréquentes</h2>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'active' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      {openFaq === i ? (
                        <path d="M5 12h14" />
                      ) : (
                        <path d="M12 5v14M5 12h14" />
                      )}
                    </svg>
                  </span>
                </button>
                <div className="faq-answer-wrapper">
                  {openFaq === i && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="final-blur final-blur-1"></div>
        <div className="final-blur final-blur-2"></div>
        <div className="container">
          <div className="final-cta-content">
            <h2 className="final-cta-title">
              Ton contenu mérite d'être vu. <span className="gradient-text">Et rémunéré.</span>
            </h2>
            <p className="final-cta-subtitle">
              Collabore. Choisis. Gagne.
            </p>
            <div className="final-cta-buttons">
              <a href="https://onelink.to/qpqfep" className="btn-primary large" onClick={handleAppClick}>
                <span className="btn-gradient"></span>
                <span className="btn-text">🔥 Rejoindre la nouvelle ère</span>
              </a>
              <a href="https://onelink.to/qpqfep" className="btn-outline large" onClick={handleAppClick}>
                <span className="btn-text">👉 Je crée mon profil maintenant</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Modal Desktop - Téléchargement app */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              ✕
            </button>
            <div className="modal-icon">📱</div>
            <h3 className="modal-title">Application mobile requise</h3>
            <p className="modal-text">
              Pour créer ton compte et rejoindre BeHype, tu dois télécharger notre application mobile ou ouvrir cette page sur ton téléphone.
            </p>
            <div className="modal-buttons">
              <a
                href="https://onelink.to/qpqfep"
                className="modal-btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                📲 Ouvrir sur mobile
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .page {
          background: #ffffff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          overflow-x: hidden;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 5%;
        }

        /* Hero Section */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 140px 5% 120px;
          background: linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
          overflow: hidden;
        }

        .hero-blur {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
          pointer-events: none;
        }

        .hero-blur-1 {
          width: 600px;
          height: 600px;
          background: #2960f6;
          top: -200px;
          left: -100px;
          animation: float 20s ease-in-out infinite;
        }

        .hero-blur-2 {
          width: 500px;
          height: 500px;
          background: #4a90f7;
          bottom: -150px;
          right: -100px;
          animation: float 15s ease-in-out infinite reverse;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(50px, 30px); }
        }

        .hero-gradient {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, transparent 0%, rgba(15, 23, 42, 0.8) 70%);
          pointer-events: none;
        }

        .hero-animated-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }

        .floating-orb {
          position: absolute;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(41, 96, 246, 0.6) 0%, rgba(41, 96, 246, 0.2) 50%, transparent 70%);
          border-radius: 50%;
          filter: blur(50px);
          animation: orbFloat 15s ease-in-out infinite;
        }

        @keyframes orbFloat {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.7;
          }
          25% {
            transform: translate(150px, -100px) scale(1.4);
            opacity: 0.9;
          }
          50% {
            transform: translate(-80px, -150px) scale(0.9);
            opacity: 0.6;
          }
          75% {
            transform: translate(-120px, -80px) scale(1.2);
            opacity: 0.8;
          }
        }

        .hero-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #2960f6;
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(41, 96, 246, 0.8), 0 0 40px rgba(41, 96, 246, 0.4);
          animation: particleFall 8s linear infinite;
        }

        @keyframes particleFall {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        .diagonal-line {
          position: absolute;
          top: -100%;
          width: 1px;
          height: 200%;
          background: linear-gradient(180deg,
            transparent 0%,
            rgba(41, 96, 246, 0.6) 50%,
            transparent 100%
          );
          transform: rotate(25deg);
          animation: diagonalMove 8s linear infinite;
        }

        @keyframes diagonalMove {
          0% {
            transform: translateY(0) rotate(25deg);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(100vh) rotate(25deg);
            opacity: 0;
          }
        }

        .hero-container {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 1000px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 10px 24px;
          background: rgba(41, 96, 246, 0.15);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(41, 96, 246, 0.3);
          border-radius: 100px;
          color: #60a5fa;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 32px;
          animation: pulse 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.02); }
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          background: #60a5fa;
          border-radius: 50%;
          animation: blink 2s ease-in-out infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .hero-title {
          font-size: 72px;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin: 0 0 32px 0;
          font-family: GRIFTER, 'Plus Jakarta Sans', sans-serif;
        }

        .gradient-text {
          background: linear-gradient(135deg, #2960f6 0%, #60a5fa 50%, #2960f6 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        @keyframes shimmer {
          to { background-position: 200% center; }
        }

        .hero-subtitle {
          font-size: 42px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 32px 0;
          letter-spacing: -0.01em;
        }

        .hero-description {
          font-size: 20px;
          line-height: 1.7;
          color: #cbd5e1;
          margin: 0 0 16px 0;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-tagline {
          font-size: 18px;
          color: #94a3b8;
          margin: 0 0 48px 0;
          font-style: italic;
        }

        .hero-cta {
          margin-bottom: 80px;
        }

        .btn-primary {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 20px 48px;
          background: linear-gradient(135deg, #2960f6 0%, #4a90f7 100%);
          color: #ffffff;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 700;
          text-decoration: none;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 40px rgba(41, 96, 246, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 60px rgba(41, 96, 246, 0.5);
        }

        .btn-primary.large {
          padding: 24px 56px;
          font-size: 20px;
        }

        .btn-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%);
          transform: translateX(-100%);
          animation: slide 3s ease-in-out infinite;
        }

        @keyframes slide {
          to { transform: translateX(100%); }
        }

        .btn-text {
          position: relative;
          z-index: 1;
        }

        .btn-white {
          display: inline-flex;
          align-items: center;
          padding: 20px 48px;
          background: #ffffff;
          color: #2960f6;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        .btn-white:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 60px rgba(0, 0, 0, 0.15);
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          padding: 20px 48px;
          background: transparent;
          color: #2960f6;
          border: 2px solid #2960f6;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-outline:hover {
          background: #2960f6;
          color: #ffffff;
        }

        .btn-outline.large {
          padding: 24px 56px;
          font-size: 20px;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          transition: opacity 0.3s ease;
        }

        .scroll-arrow {
          width: 24px;
          height: 40px;
          border: 2px solid rgba(255, 255, 255, 0.4);
          border-radius: 20px;
          position: relative;
        }

        .scroll-arrow::before {
          content: '';
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          animation: scrollDown 2s ease-in-out infinite;
        }

        @keyframes scrollDown {
          0% { top: 8px; opacity: 1; }
          100% { top: 24px; opacity: 0; }
        }

        /* Why Section */
        .why-section {
          padding: 140px 5%;
          background: #fafafa;
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-title {
          font-size: 52px;
          font-weight: 800;
          color: #1a1a1a;
          margin: 0 0 24px 0;
          letter-spacing: -0.02em;
          font-family: GRIFTER, 'Plus Jakarta Sans', sans-serif;
        }

        .section-intro {
          font-size: 20px;
          color: #64748b;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          margin-bottom: 80px;
        }

        .feature-card {
          position: relative;
          background: #ffffff;
          padding: 48px 40px;
          border-radius: 24px;
          border: 2px solid rgba(41, 96, 246, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(41, 96, 246, 0.05) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.4s;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          border-color: #2960f6;
          box-shadow: 0 20px 60px rgba(41, 96, 246, 0.15);
        }

        .feature-card:hover::before {
          opacity: 1;
        }

        .feature-number {
          position: absolute;
          top: 24px;
          right: 24px;
          font-size: 72px;
          font-weight: 800;
          color: rgba(41, 96, 246, 0.15);
          line-height: 1;
          font-family: GRIFTER, 'Plus Jakarta Sans', sans-serif;
        }

        .feature-icon {
          font-size: 56px;
          margin-bottom: 24px;
        }

        .feature-card h3 {
          font-size: 22px;
          font-weight: 700;
          line-height: 1.4;
          color: #1a1a1a;
          margin: 0 0 20px 0;
        }

        .feature-line {
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #2960f6 0%, transparent 100%);
          border-radius: 2px;
        }

        .final-point {
          text-align: center;
        }

        .final-point-inner {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          padding: 32px 48px;
          background: linear-gradient(135deg, rgba(41, 96, 246, 0.05) 0%, rgba(41, 96, 246, 0.1) 100%);
          border: 2px solid rgba(41, 96, 246, 0.2);
          border-radius: 100px;
        }

        .final-point p {
          font-size: 26px;
          color: #2960f6;
          font-weight: 700;
          margin: 0;
        }

        .sparkle {
          font-size: 28px;
          animation: sparkle 2s ease-in-out infinite;
        }

        @keyframes sparkle {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.2) rotate(180deg); }
        }

        /* Exclusivity Section */
        .exclusivity-section {
          padding: 140px 5%;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          position: relative;
        }

        .exclusivity-section .section-title {
          color: #ffffff;
          margin-bottom: 60px;
          text-align: center;
        }

        .exclusivity-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .exclusivity-text {
          font-size: 24px;
          line-height: 1.7;
          text-align: center;
          color: #cbd5e1;
          margin-bottom: 60px;
        }

        .mission-box {
          display: flex;
          align-items: center;
          gap: 32px;
          padding: 48px;
          background: rgba(41, 96, 246, 0.1);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(41, 96, 246, 0.3);
          border-radius: 24px;
        }

        .mission-icon {
          font-size: 80px;
          flex-shrink: 0;
        }

        .mission-content {
          flex: 1;
        }

        .mission-label {
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #60a5fa;
          margin: 0 0 12px 0;
        }

        .mission-text {
          font-size: 22px;
          line-height: 1.6;
          color: #ffffff;
          margin: 0;
          font-weight: 600;
        }

        /* Testimonials Section */
        .testimonials-section {
          padding: 140px 5%;
          background: #ffffff;
        }

        .testimonials-section .section-title {
          text-align: center;
          margin-bottom: 60px;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
          margin-top: 80px;
        }

        .testimonial-card {
          background: #ffffff;
          border-radius: 24px;
          overflow: hidden;
          border: 2px solid #f3f4f6;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .testimonial-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          border-color: #10b981;
        }

        .video-placeholder {
          position: relative;
          height: 260px;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .video-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.1) 0%, transparent 60%);
        }

        .play-button {
          position: relative;
          width: 90px;
          height: 90px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }

        .play-button svg {
          width: 32px;
          height: 32px;
          color: #10b981;
          margin-left: 4px;
        }

        .testimonial-card:hover .play-button {
          transform: scale(1.1);
          background: #ffffff;
        }

        .video-label {
          position: relative;
          color: rgba(255, 255, 255, 0.95);
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .testimonial-content {
          padding: 36px;
        }

        .testimonial-header {
          margin-bottom: 20px;
        }

        .testimonial-name {
          font-size: 20px;
          font-weight: 800;
          color: #1a1a1a;
          margin: 0 0 6px 0;
        }

        .testimonial-handle {
          font-size: 16px;
          font-weight: 600;
          color: #2960f6;
          margin: 0;
        }

        .testimonial-quote {
          font-size: 16px;
          line-height: 1.7;
          color: #64748b;
          margin: 0;
          font-style: italic;
        }

        /* CTA Mid Section */
        .cta-mid-section {
          position: relative;
          padding: 140px 5%;
          background: linear-gradient(135deg, #2960f6 0%, #4a90f7 100%);
          overflow: hidden;
        }

        .cta-blur {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.4;
        }

        .cta-blur-1 {
          width: 500px;
          height: 500px;
          background: rgba(255, 255, 255, 0.2);
          top: -200px;
          left: -100px;
        }

        .cta-blur-2 {
          width: 400px;
          height: 400px;
          background: rgba(255, 255, 255, 0.15);
          bottom: -150px;
          right: -100px;
        }

        .cta-content {
          position: relative;
          z-index: 2;
          text-align: center;
        }

        .cta-title {
          font-size: 48px;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 20px 0;
          letter-spacing: -0.02em;
          font-family: GRIFTER, 'Plus Jakarta Sans', sans-serif;
        }

        .cta-subtitle {
          font-size: 22px;
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 48px 0;
          font-weight: 600;
        }

        /* FAQ Section */
        .faq-section {
          padding: 140px 5%;
          background: #fafafa;
        }

        .faq-section .section-title {
          text-align: center;
          margin-bottom: 80px;
        }

        .faq-list {
          max-width: 900px;
          margin: 80px auto 0;
        }

        .faq-item {
          background: #ffffff;
          border: 2px solid #f3f4f6;
          border-radius: 16px;
          margin-bottom: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .faq-item.active {
          border-color: #2960f6;
          box-shadow: 0 8px 24px rgba(41, 96, 246, 0.1);
        }

        .faq-question {
          width: 100%;
          padding: 28px 32px;
          background: none;
          border: none;
          text-align: left;
          font-size: 19px;
          font-weight: 700;
          color: #1a1a1a;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          transition: color 0.3s ease;
        }

        .faq-item.active .faq-question {
          color: #2960f6;
        }

        .faq-icon {
          flex-shrink: 0;
          width: 28px;
          height: 28px;
          color: #2960f6;
          transition: transform 0.3s ease;
        }

        .faq-item.active .faq-icon {
          transform: rotate(180deg);
        }

        .faq-answer-wrapper {
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .faq-answer {
          padding: 0 32px 28px;
          animation: slideDown 0.3s ease;
        }

        .faq-answer p {
          font-size: 17px;
          line-height: 1.7;
          color: #64748b;
          margin: 0;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Final CTA */
        .final-cta {
          position: relative;
          padding: 160px 5%;
          background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
          overflow: hidden;
        }

        .final-blur {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.3;
        }

        .final-blur-1 {
          width: 700px;
          height: 700px;
          background: #2960f6;
          top: -300px;
          left: 50%;
          transform: translateX(-50%);
        }

        .final-blur-2 {
          width: 500px;
          height: 500px;
          background: #4a90f7;
          bottom: -200px;
          right: -100px;
        }

        .final-cta-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 1000px;
          margin: 0 auto;
        }

        .final-cta-title {
          font-size: 64px;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 32px 0;
          line-height: 1.1;
          letter-spacing: -0.02em;
          font-family: GRIFTER, 'Plus Jakarta Sans', sans-serif;
        }

        .final-cta-subtitle {
          font-size: 32px;
          font-weight: 700;
          color: #cbd5e1;
          margin: 0 0 56px 0;
        }

        .final-cta-buttons {
          display: flex;
          gap: 24px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Responsive */
        @media (max-width: 768px) {
          /* Hero Section Mobile */
          .hero {
            padding: 100px 5% 80px 5%;
            min-height: auto;
          }

          .hero-title {
            font-size: 36px;
            line-height: 1.2;
            margin-bottom: 20px;
          }

          .hero-subtitle {
            font-size: 24px;
            margin-bottom: 20px;
          }

          .hero-description {
            font-size: 16px;
            margin-bottom: 16px;
          }

          .hero-tagline {
            font-size: 15px;
            margin-bottom: 32px;
          }

          .hero-badge {
            font-size: 13px;
            padding: 10px 20px;
          }

          .btn-primary {
            font-size: 15px;
            padding: 16px 28px;
          }

          .scroll-indicator {
            display: none;
          }

          .hero-blur-1,
          .hero-blur-2 {
            width: 300px;
            height: 300px;
          }

          .floating-orb {
            width: 120px;
            height: 120px;
            filter: blur(40px);
          }

          .hero-particle {
            width: 3px;
            height: 3px;
            box-shadow: 0 0 10px rgba(41, 96, 246, 0.6);
          }

          .diagonal-line {
            opacity: 0.4;
          }

          /* Sections Mobile */
          .why-section,
          .exclusivity-section,
          .testimonials-section {
            padding: 60px 5%;
          }

          .section-title {
            font-size: 32px;
            line-height: 1.2;
            margin-bottom: 20px;
          }

          .section-intro {
            font-size: 16px;
            margin-bottom: 40px;
          }

          /* Features Grid Mobile */
          .features-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .feature-card {
            padding: 32px 24px;
          }

          .feature-card h3 {
            font-size: 18px;
          }

          .feature-number {
            font-size: 80px;
            opacity: 0.06;
          }

          .feature-icon {
            font-size: 36px;
            margin-bottom: 16px;
          }

          /* Final Point Mobile */
          .final-point {
            margin-top: 40px;
            padding: 28px 24px;
          }

          .final-point p {
            font-size: 16px;
          }

          .sparkle {
            font-size: 20px;
          }

          /* Exclusivity Mobile */
          .exclusivity-text {
            font-size: 17px;
            line-height: 1.7;
            margin-bottom: 40px;
          }

          .mission-box {
            flex-direction: column;
            text-align: center;
            padding: 32px 24px;
            gap: 20px;
          }

          .mission-icon {
            font-size: 40px;
          }

          .mission-label {
            font-size: 13px;
          }

          .mission-text {
            font-size: 17px;
          }

          /* Testimonials Mobile */
          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .video-placeholder {
            height: 240px;
          }

          .testimonial-content {
            padding: 24px 20px;
          }

          .testimonial-name {
            font-size: 17px;
          }

          .testimonial-handle {
            font-size: 14px;
          }

          .testimonial-quote {
            font-size: 15px;
            line-height: 1.6;
          }

          /* CTA Mid Mobile */
          .cta-mid-section {
            padding: 60px 5%;
          }

          .cta-title {
            font-size: 26px;
            line-height: 1.3;
            margin-bottom: 16px;
          }

          .cta-subtitle {
            font-size: 16px;
            margin-bottom: 32px;
          }

          .btn-white {
            width: 100%;
            font-size: 15px;
            padding: 16px 28px;
          }

          /* FAQ Mobile */
          .faq-section {
            padding: 60px 5%;
          }

          .faq-item {
            padding: 24px 20px;
          }

          .faq-question {
            font-size: 16px;
            padding-right: 32px;
          }

          .faq-toggle {
            font-size: 20px;
            width: 28px;
            height: 28px;
          }

          .faq-answer {
            font-size: 15px;
            line-height: 1.6;
            padding-top: 16px;
          }

          /* Final CTA Mobile */
          .final-cta {
            padding: 80px 5%;
          }

          .final-cta-title {
            font-size: 36px;
            line-height: 1.2;
            margin-bottom: 16px;
          }

          .final-cta-subtitle {
            font-size: 16px;
            margin-bottom: 40px;
          }

          .final-cta-buttons {
            flex-direction: column;
            gap: 16px;
          }

          .btn-primary.large,
          .btn-outline.large {
            width: 100%;
            font-size: 16px;
            padding: 18px 32px;
          }
        }

        /* Extra Small Mobile */
        @media (max-width: 480px) {
          .hero-title {
            font-size: 30px;
          }

          .hero-subtitle {
            font-size: 20px;
          }

          .section-title {
            font-size: 28px;
          }

          .final-cta-title {
            font-size: 30px;
          }

          .feature-card h3 {
            font-size: 16px;
          }

          .btn-primary,
          .btn-outline {
            padding: 14px 24px;
            font-size: 14px;
          }
        }

        /* Modal Desktop */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .modal-content {
          background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
          border: 2px solid rgba(41, 96, 246, 0.3);
          border-radius: 24px;
          padding: 48px;
          max-width: 500px;
          width: 100%;
          position: relative;
          box-shadow: 0 20px 60px rgba(41, 96, 246, 0.2);
          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          font-size: 24px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .modal-close:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: rotate(90deg);
        }

        .modal-icon {
          font-size: 64px;
          text-align: center;
          margin-bottom: 24px;
        }

        .modal-title {
          font-family: GRIFTER, 'Plus Jakarta Sans', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: #ffffff;
          text-align: center;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .modal-text {
          font-size: 16px;
          line-height: 1.7;
          color: #cbd5e1;
          text-align: center;
          margin-bottom: 32px;
        }

        .modal-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .modal-btn-primary {
          background: linear-gradient(135deg, #2960f6 0%, #1d50d6 100%);
          color: #ffffff;
          padding: 16px 32px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 16px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          box-shadow: 0 4px 16px rgba(41, 96, 246, 0.3);
          text-decoration: none;
          display: block;
        }

        .modal-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(41, 96, 246, 0.4);
        }

        @media (max-width: 768px) {
          .modal-content {
            padding: 32px 24px;
          }

          .modal-title {
            font-size: 24px;
          }

          .modal-text {
            font-size: 15px;
          }

          .modal-icon {
            font-size: 48px;
          }
        }
      `}</style>

      <style jsx global>{`
        @font-face {
          font-family: GRIFTER;
          src: url('/fonts/grifterbold.otf') format("opentype");
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }

        body {
          background: #ffffff;
        }
      `}</style>
    </div>
  )
}
