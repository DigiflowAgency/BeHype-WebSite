'use client'

import { useState } from 'react'
import Link from 'next/link'
import HomeNavbar from './HomeNavbar'
import Footer from './Footer'

export default function CityPageTemplate({ city, citySlug, influencers = [], region = '' }) {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      question: `Comment trouver un influenceur food à ${city} ?`,
      answer: `BEHYPE vous connecte avec les meilleurs créateurs de contenu food de ${city}. Notre plateforme référence des influenceurs locaux vérifiés, avec des statistiques transparentes sur leur audience et leur engagement.`
    },
    {
      question: `Combien coûte une collaboration avec un influenceur à ${city} ?`,
      answer: `Les tarifs varient selon la taille de l'audience et le type de contenu. Sur BEHYPE, vous pouvez proposer des collaborations gratuites (repas offert) ou rémunérées. Nos formules commencent à partir de 99€/mois.`
    },
    {
      question: `Quels types d'établissements peuvent collaborer avec des influenceurs à ${city} ?`,
      answer: `Restaurants, bars, cafés, hôtels, spas, activités de loisirs... Tous les établissements de ${city} peuvent bénéficier du marketing d'influence pour booster leur visibilité locale.`
    },
    {
      question: `Comment BEHYPE sélectionne-t-il les influenceurs à ${city} ?`,
      answer: `Nous vérifions l'authenticité de chaque créateur : engagement réel, qualité du contenu, localisation. Seuls les influenceurs actifs et professionnels sont mis en avant sur notre plateforme.`
    }
  ]

  return (
    <div className="city-page">
      <HomeNavbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="badge">
            <span className="badge-icon">📍</span>
            <span>{city} {region && `· ${region}`}</span>
          </div>
          <h1>Influenceurs Food à <span className="gradient">{city}</span></h1>
          <p>Découvrez les meilleurs créateurs de contenu food de {city} et boostez la visibilité de votre établissement</p>

          <div className="cta-buttons">
            <Link href="/calendly" className="btn-primary">
              Réserver une démo gratuite
            </Link>
            <Link href="/offres" className="btn-secondary">
              Voir nos offres
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">50+</div>
            <div className="stat-label">Influenceurs à {city}</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100+</div>
            <div className="stat-label">Restaurants partenaires</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">500K+</div>
            <div className="stat-label">Audience cumulée</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">98%</div>
            <div className="stat-label">Satisfaction</div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="why-section">
        <div className="container">
          <h2>Pourquoi choisir BEHYPE pour vos collaborations à {city} ?</h2>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Influenceurs locaux vérifiés</h3>
              <p>Des créateurs basés à {city} avec une audience locale engagée</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Tarifs transparents</h3>
              <p>Collaborations gratuites ou rémunérées, vous choisissez votre budget</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Résultats mesurables</h3>
              <p>Suivez les performances de vos campagnes en temps réel</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Accompagnement dédié</h3>
              <p>Notre équipe vous guide dans vos collaborations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Influencers Section */}
      {influencers.length > 0 && (
        <section className="influencers-section">
          <div className="container">
            <h2>Influenceurs food populaires à {city}</h2>
            <div className="influencers-grid">
              {influencers.map((influencer, i) => (
                <div key={i} className="influencer-card">
                  <div className="influencer-name">{influencer}</div>
                </div>
              ))}
            </div>
            <p className="influencers-note">
              Et des dizaines d'autres créateurs disponibles sur notre plateforme...
            </p>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Questions fréquentes</h2>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'active' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">
                    {openFaq === i ? '−' : '+'}
                  </span>
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

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Prêt à booster votre visibilité à {city} ?</h2>
          <p>Rejoignez les établissements qui transforment leur communication avec BEHYPE</p>
          <div className="cta-buttons">
            <Link href="/calendly" className="btn-primary large">
              Réserver une démo gratuite
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .city-page {
          min-height: 100vh;
          background: #ffffff;
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Hero */
        .hero {
          padding: 160px 24px 100px;
          text-align: center;
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          background: rgba(36, 101, 247, 0.08);
          border: 1px solid rgba(36, 101, 247, 0.2);
          border-radius: 100px;
          font-size: 14px;
          margin-bottom: 24px;
          color: #2465f7;
          font-weight: 600;
        }

        .hero h1 {
          font-size: 52px;
          font-weight: 800;
          line-height: 1.2;
          margin: 0 0 20px 0;
          color: #1a1a1a;
        }

        .gradient {
          background: linear-gradient(135deg, #2465f7 0%, #00d4ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero p {
          font-size: 20px;
          color: #6b7280;
          margin: 0 0 40px 0;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          padding: 16px 32px;
          background: linear-gradient(135deg, #2465f7 0%, #1d4ed8 100%);
          color: white;
          border-radius: 12px;
          font-weight: 700;
          font-size: 16px;
          text-decoration: none;
          transition: all 0.3s;
          box-shadow: 0 4px 20px rgba(36, 101, 247, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(36, 101, 247, 0.4);
        }

        .btn-primary.large {
          padding: 20px 48px;
          font-size: 18px;
        }

        .btn-secondary {
          padding: 16px 32px;
          background: white;
          color: #374151;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-weight: 700;
          font-size: 16px;
          text-decoration: none;
          transition: all 0.3s;
        }

        .btn-secondary:hover {
          border-color: #2465f7;
          color: #2465f7;
        }

        /* Stats */
        .stats-section {
          padding: 80px 24px;
          background: white;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .stat-card {
          text-align: center;
          padding: 32px 20px;
          background: #f8fafc;
          border-radius: 16px;
        }

        .stat-number {
          font-size: 40px;
          font-weight: 800;
          background: linear-gradient(135deg, #2465f7, #00d4ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 14px;
          color: #6b7280;
        }

        /* Why Section */
        .why-section {
          padding: 100px 24px;
          background: #f8fafc;
        }

        .why-section h2 {
          text-align: center;
          font-size: 40px;
          font-weight: 800;
          margin: 0 0 60px 0;
          color: #1a1a1a;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          max-width: 900px;
          margin: 0 auto;
        }

        .feature-card {
          background: white;
          padding: 40px;
          border-radius: 20px;
          border: 1px solid #e5e7eb;
          transition: all 0.3s;
        }

        .feature-card:hover {
          border-color: #2465f7;
          box-shadow: 0 10px 40px rgba(36, 101, 247, 0.1);
        }

        .feature-icon {
          font-size: 40px;
          margin-bottom: 20px;
        }

        .feature-card h3 {
          font-size: 20px;
          font-weight: 700;
          margin: 0 0 12px 0;
          color: #1a1a1a;
        }

        .feature-card p {
          font-size: 16px;
          color: #6b7280;
          margin: 0;
          line-height: 1.6;
        }

        /* Influencers Section */
        .influencers-section {
          padding: 100px 24px;
          background: white;
        }

        .influencers-section h2 {
          text-align: center;
          font-size: 36px;
          font-weight: 800;
          margin: 0 0 48px 0;
          color: #1a1a1a;
        }

        .influencers-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .influencer-card {
          padding: 12px 24px;
          background: #f8fafc;
          border-radius: 100px;
          font-weight: 600;
          color: #374151;
          font-size: 14px;
        }

        .influencers-note {
          text-align: center;
          color: #6b7280;
          margin-top: 32px;
          font-style: italic;
        }

        /* FAQ Section */
        .faq-section {
          padding: 100px 24px;
          background: #f8fafc;
        }

        .faq-section h2 {
          text-align: center;
          font-size: 36px;
          font-weight: 800;
          margin: 0 0 48px 0;
          color: #1a1a1a;
        }

        .faq-list {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-item {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          margin-bottom: 16px;
          overflow: hidden;
        }

        .faq-item.active {
          border-color: #2465f7;
        }

        .faq-question {
          width: 100%;
          padding: 24px;
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
        }

        .faq-icon {
          font-size: 24px;
          color: #2465f7;
        }

        .faq-answer {
          padding: 0 24px 24px;
        }

        .faq-answer p {
          margin: 0;
          color: #6b7280;
          line-height: 1.7;
        }

        /* CTA Section */
        .cta-section {
          padding: 120px 24px;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          text-align: center;
        }

        .cta-section h2 {
          font-size: 40px;
          font-weight: 800;
          color: white;
          margin: 0 0 16px 0;
        }

        .cta-section p {
          font-size: 20px;
          color: #94a3b8;
          margin: 0 0 40px 0;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero {
            padding: 120px 20px 80px;
          }

          .hero h1 {
            font-size: 32px;
          }

          .hero p {
            font-size: 16px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .why-section h2,
          .cta-section h2 {
            font-size: 28px;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .btn-primary, .btn-secondary {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </div>
  )
}
