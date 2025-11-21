'use client'

import { useState, useEffect } from 'react'
import HomeNavbar from '../components/HomeNavbar'
import Footer from '../components/Footer'

export default function InfluenceTest() {
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    document.title = "Le futur de l'influence se construit aujourd'hui - BEHYPE"
  }, [])

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
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Le futur de l'influence & de la creator economy <span className="highlight">se construit aujourd'hui</span>
            </h1>

            <h2 className="hero-subtitle">
              Collabore. Choisis. Gagne.
            </h2>

            <p className="hero-description">
              BeHype — La 1ère marketplace française qui connecte les créateurs avec les lieux d'expériences (restaurants, hôtels, activités de loisirs et bien-être).
            </p>

            <p className="hero-tagline">
              Collabs gratuites & rémunérées. Pas d'intermédiaire. Pas de stress.
            </p>

            <div className="hero-cta">
              <a href="https://onelink.to/qpqfep" className="btn-primary">
                👉 Créer mon compte gratuitement
              </a>
            </div>

            <div className="hero-badge">
              🚀 Rejoins le mouvement
            </div>
          </div>
        </div>
      </section>

      {/* Why BeHype Section */}
      <section className="why-section">
        <div className="container">
          <h2 className="section-title">Enfin une plateforme pensée pour toi</h2>
          <p className="section-intro">
            Avec BeHype, tu ne dépends plus des DM, de l'aléatoire ou des opportunités qui passent sous le radar.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📍</div>
              <h3>Tu choisis les lieux avec lesquels tu veux collaborer</h3>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Tu proposes des collaborations gratuites pour découvrir & créer</h3>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💸</div>
              <h3>Tu acceptes des collaborations rémunérées quand ton contenu le mérite</h3>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Tu développes ton image & ton business comme un vrai pro</h3>
            </div>
          </div>

          <div className="final-point">
            <p>✨ Et surtout : tu gardes le contrôle <strong>du début à la fin.</strong></p>
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
              <p className="mission-text">
                <strong>Notre mission :</strong><br/>
                Créer un monde où chaque créateur a un vrai pouvoir sur son avenir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Ils créent déjà avec BeHype</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="testimonial-card">
                <div className="video-placeholder">
                  <div className="play-icon">▶</div>
                  <p className="video-label">Vidéo témoignage</p>
                </div>
                <div className="testimonial-content">
                  <p className="testimonial-name">{testimonial.name} <span className="testimonial-handle">{testimonial.handle}</span></p>
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Mid Section */}
      <section className="cta-mid-section">
        <div className="container">
          <h2 className="cta-title">🚀 Tu veux faire partie des 1ers créateurs mis en avant ?</h2>
          <p className="cta-subtitle">Places limitées pour le lancement officiel.</p>
          <a href="https://onelink.to/qpqfep" className="btn-primary">
            👉 Créer mon profil maintenant
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">FAQ</h2>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <button
                  className={`faq-question ${openFaq === i ? 'active' : ''}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <h2 className="final-cta-title">
            Ton contenu mérite d'être vu. <span className="highlight">Et rémunéré.</span>
          </h2>
          <p className="final-cta-subtitle">
            Collabore. Choisis. Gagne.
          </p>
          <div className="final-cta-buttons">
            <a href="https://onelink.to/qpqfep" className="btn-primary large">
              🔥 Rejoindre la nouvelle ère
            </a>
            <a href="https://onelink.to/qpqfep" className="btn-secondary large">
              👉 Je crée mon profil maintenant
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .page {
          background: #ffffff;
          color: #1a1a1a;
          min-height: 100vh;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Hero Section */
        .hero {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          padding: 140px 24px 100px;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(41, 96, 246, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .hero-container {
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .hero-title {
          font-size: 56px;
          font-weight: 800;
          line-height: 1.2;
          color: #ffffff;
          margin: 0 0 24px 0;
          letter-spacing: -0.02em;
        }

        .hero-title .highlight {
          background: linear-gradient(135deg, #2960f6 0%, #4a90f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 36px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 32px 0;
        }

        .hero-description {
          font-size: 20px;
          line-height: 1.6;
          color: #cbd5e1;
          margin: 0 0 20px 0;
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
          margin-bottom: 32px;
        }

        .hero-badge {
          display: inline-block;
          padding: 12px 24px;
          background: rgba(41, 96, 246, 0.1);
          border: 2px solid rgba(41, 96, 246, 0.3);
          border-radius: 50px;
          color: #60a5fa;
          font-weight: 600;
          font-size: 16px;
        }

        /* Buttons */
        .btn-primary {
          display: inline-block;
          padding: 18px 40px;
          background: linear-gradient(135deg, #2960f6 0%, #4a90f7 100%);
          color: #ffffff;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 8px 24px rgba(41, 96, 246, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(41, 96, 246, 0.4);
        }

        .btn-primary.large {
          padding: 22px 48px;
          font-size: 20px;
        }

        .btn-secondary {
          display: inline-block;
          padding: 18px 40px;
          background: transparent;
          color: #2960f6;
          border: 2px solid #2960f6;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background: #2960f6;
          color: #ffffff;
        }

        .btn-secondary.large {
          padding: 22px 48px;
          font-size: 20px;
        }

        /* Why Section */
        .why-section {
          padding: 100px 24px;
          background: #fafafa;
        }

        .section-title {
          font-size: 42px;
          font-weight: 800;
          text-align: center;
          margin: 0 0 24px 0;
          color: #1a1a1a;
        }

        .section-intro {
          font-size: 20px;
          text-align: center;
          color: #64748b;
          margin: 0 0 60px 0;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
          margin-bottom: 48px;
        }

        .feature-card {
          background: #ffffff;
          padding: 40px 32px;
          border-radius: 16px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          border-color: #2960f6;
        }

        .feature-icon {
          font-size: 48px;
          margin-bottom: 20px;
        }

        .feature-card h3 {
          font-size: 20px;
          font-weight: 600;
          line-height: 1.4;
          color: #1a1a1a;
          margin: 0;
        }

        .final-point {
          text-align: center;
          margin-top: 48px;
        }

        .final-point p {
          font-size: 24px;
          color: #2960f6;
          font-weight: 600;
        }

        /* Exclusivity Section */
        .exclusivity-section {
          padding: 100px 24px;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: #ffffff;
        }

        .exclusivity-section .section-title {
          color: #ffffff;
          margin-bottom: 48px;
        }

        .exclusivity-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .exclusivity-text {
          font-size: 22px;
          line-height: 1.7;
          text-align: center;
          margin-bottom: 48px;
          color: #cbd5e1;
        }

        .mission-box {
          background: rgba(41, 96, 246, 0.1);
          border: 2px solid rgba(41, 96, 246, 0.3);
          border-radius: 16px;
          padding: 40px;
          text-align: center;
        }

        .mission-icon {
          font-size: 56px;
          margin-bottom: 20px;
        }

        .mission-text {
          font-size: 20px;
          line-height: 1.6;
          color: #ffffff;
          margin: 0;
        }

        /* Testimonials Section */
        .testimonials-section {
          padding: 100px 24px;
          background: #ffffff;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 40px;
          margin-top: 60px;
        }

        .testimonial-card {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
        }

        .video-placeholder {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          height: 240px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .play-icon {
          width: 80px;
          height: 80px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          color: #10b981;
          margin-bottom: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .play-icon:hover {
          transform: scale(1.1);
          background: #ffffff;
        }

        .video-label {
          color: #ffffff;
          font-size: 16px;
          font-weight: 600;
        }

        .testimonial-content {
          padding: 32px;
        }

        .testimonial-name {
          font-size: 18px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 16px 0;
        }

        .testimonial-handle {
          color: #2960f6;
          font-weight: 600;
        }

        .testimonial-quote {
          font-size: 16px;
          line-height: 1.6;
          color: #64748b;
          margin: 0;
          font-style: italic;
        }

        /* CTA Mid Section */
        .cta-mid-section {
          padding: 100px 24px;
          background: linear-gradient(135deg, #2960f6 0%, #4a90f7 100%);
          text-align: center;
        }

        .cta-title {
          font-size: 42px;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 16px 0;
        }

        .cta-subtitle {
          font-size: 20px;
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 40px 0;
        }

        .cta-mid-section .btn-primary {
          background: #ffffff;
          color: #2960f6;
        }

        .cta-mid-section .btn-primary:hover {
          background: #f8fafc;
        }

        /* FAQ Section */
        .faq-section {
          padding: 100px 24px;
          background: #fafafa;
        }

        .faq-list {
          max-width: 800px;
          margin: 60px auto 0;
        }

        .faq-item {
          background: #ffffff;
          border-radius: 12px;
          margin-bottom: 16px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .faq-question {
          width: 100%;
          padding: 24px 32px;
          background: none;
          border: none;
          text-align: left;
          font-size: 18px;
          font-weight: 600;
          color: #1a1a1a;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s ease;
        }

        .faq-question:hover {
          color: #2960f6;
        }

        .faq-question.active {
          color: #2960f6;
        }

        .faq-icon {
          font-size: 24px;
          font-weight: 300;
          color: #2960f6;
        }

        .faq-answer {
          padding: 0 32px 24px;
          animation: slideDown 0.3s ease;
        }

        .faq-answer p {
          font-size: 16px;
          line-height: 1.6;
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
          padding: 120px 24px;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          text-align: center;
        }

        .final-cta-title {
          font-size: 52px;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 24px 0;
          line-height: 1.2;
        }

        .final-cta-title .highlight {
          background: linear-gradient(135deg, #2960f6 0%, #4a90f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .final-cta-subtitle {
          font-size: 28px;
          font-weight: 600;
          color: #cbd5e1;
          margin: 0 0 48px 0;
        }

        .final-cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 36px;
          }

          .hero-subtitle {
            font-size: 24px;
          }

          .hero-description {
            font-size: 18px;
          }

          .section-title {
            font-size: 32px;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
          }

          .final-cta-title {
            font-size: 36px;
          }

          .final-cta-subtitle {
            font-size: 20px;
          }

          .final-cta-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .btn-primary.large,
          .btn-secondary.large {
            width: 100%;
          }
        }
      `}</style>

      <style jsx global>{`
        body {
          background: #ffffff;
        }
      `}</style>
    </div>
  )
}
