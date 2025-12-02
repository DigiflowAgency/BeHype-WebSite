'use client'

import { useState } from 'react'
import Link from 'next/link'
import HomeNavbar from './HomeNavbar'
import Footer from './Footer'

export default function InfluencerPageTemplate({
  name,
  handle,
  city,
  region,
  instagramUrl,
  tiktokUrl,
  followers,
  description,
  specialty,
  contentStyle,
  whyCollaborate,
  popularContent,
  stats,
  faq
}) {
  const [openFaq, setOpenFaq] = useState(null)

  const defaultFaq = [
    {
      question: `Comment contacter ${name} pour une collaboration ?`,
      answer: `La meilleure façon de contacter ${name} pour une collaboration professionnelle est de passer par la plateforme BEHYPE. Cela permet de gérer facilement les demandes, de sécuriser les échanges et d'assurer un suivi professionnel de la collaboration. Vous pouvez également le/la contacter via ses réseaux sociaux, mais les temps de réponse peuvent être plus longs.`
    },
    {
      question: `Quel est le tarif de ${name} pour une collaboration ?`,
      answer: `Les tarifs de ${name} varient en fonction du type de contenu demandé (story, reel, post, TikTok), de la complexité de la production et des droits d'utilisation souhaités. Sur BEHYPE, vous pouvez proposer des collaborations gratuites (invitation au restaurant) ou rémunérées. Nous vous recommandons de passer par notre plateforme pour obtenir un devis personnalisé.`
    },
    {
      question: `${name} accepte-t-il/elle les collaborations gratuites ?`,
      answer: `Oui, ${name} est ouvert(e) aux collaborations gratuites pour découvrir de nouveaux établissements à ${city}. Ces collaborations permettent de créer du contenu authentique en échange d'une expérience offerte. C'est une excellente façon de démarrer une relation avec cet influenceur avant d'envisager des partenariats rémunérés.`
    },
    {
      question: `Quelle est l'audience de ${name} ?`,
      answer: `${name} dispose d'une communauté engagée principalement basée à ${city} et dans la région ${region}. Son audience est composée de passionnés de gastronomie, de foodies locaux et de personnes à la recherche de bonnes adresses. Le taux d'engagement est généralement supérieur à la moyenne du secteur, ce qui garantit une bonne visibilité pour votre établissement.`
    },
    {
      question: `Combien de temps faut-il pour organiser une collaboration avec ${name} ?`,
      answer: `En passant par BEHYPE, une collaboration peut être organisée en quelques jours seulement. Le processus est simple : vous créez votre demande, ${name} reçoit une notification, et vous convenez ensemble d'une date. Comptez généralement 1 à 2 semaines entre la demande initiale et la publication du contenu.`
    }
  ]

  const finalFaq = faq || defaultFaq

  return (
    <div className="influencer-page">
      <HomeNavbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="badge">
            <span className="badge-icon">📍</span>
            <span>Influenceur Food · {city}</span>
          </div>

          <h1>{name}</h1>
          <p className="handle">{handle}</p>

          <p className="intro">{description}</p>

          <div className="social-links">
            {instagramUrl && (
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="social-btn instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
            )}
            {tiktokUrl && (
              <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" className="social-btn tiktok">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                TikTok
              </a>
            )}
          </div>

          <div className="cta-buttons">
            <Link href="/calendly" className="btn-primary">
              Collaborer avec {name.split(' ')[0]}
            </Link>
            <Link href="/offres" className="btn-secondary">
              Voir nos offres
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {stats && (
        <section className="stats-section">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat-card">
                <div className="stat-number">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2>Qui est {name} ?</h2>

          <div className="about-content">
            <div className="about-text">
              <h3>Spécialité</h3>
              <p>{specialty}</p>

              <h3>Style de contenu</h3>
              <p>{contentStyle}</p>

              <h3>Pourquoi collaborer avec {name} ?</h3>
              <p>{whyCollaborate}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Content Section */}
      {popularContent && (
        <section className="content-section">
          <div className="container">
            <h2>Le contenu populaire de {name}</h2>
            <div className="content-grid">
              {popularContent.map((content, i) => (
                <div key={i} className="content-card">
                  <div className="content-icon">{content.icon}</div>
                  <h3>{content.title}</h3>
                  <p>{content.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why BEHYPE Section */}
      <section className="why-section">
        <div className="container">
          <h2>Collaborer avec {name} via BEHYPE</h2>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Contact simplifié</h3>
              <p>Plus besoin de passer par les DM Instagram. Envoyez votre demande directement via notre plateforme et recevez une réponse rapide.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Tarifs transparents</h3>
              <p>Choisissez entre une collaboration gratuite (invitation) ou rémunérée. Tous les tarifs sont clairement affichés, sans mauvaise surprise.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Suivi des résultats</h3>
              <p>Accédez aux statistiques de performance de vos collaborations : impressions, engagement, portée. Mesurez votre ROI en temps réel.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Paiement sécurisé</h3>
              <p>Pour les collaborations rémunérées, les paiements sont sécurisés via Stripe. L'influenceur est payé après validation du contenu.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="location-section">
        <div className="container">
          <h2>Influenceur food à {city}</h2>
          <p className="location-text">
            {name} fait partie des créateurs de contenu food les plus influents de {city} et de la région {region}.
            Grâce à sa connaissance approfondie de la scène gastronomique locale, {name.split(' ')[0]} sait mettre en valeur
            les établissements de la ville avec authenticité et créativité. Que vous soyez un restaurant traditionnel,
            un bar à cocktails tendance, un coffee shop ou une boulangerie artisanale, {name.split(' ')[0]} saura
            créer du contenu qui résonne avec son audience locale.
          </p>
          <p className="location-text">
            La communauté de {name} est principalement composée d'habitants de {city} et des environs, ce qui garantit
            une audience qualifiée et locale pour votre établissement. Les followers de {handle} sont des passionnés
            de gastronomie, toujours à la recherche de nouvelles adresses à découvrir et à partager.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Questions fréquentes sur {name}</h2>
          <div className="faq-list">
            {finalFaq.map((item, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'active' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon">
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Influencers Section */}
      <section className="other-section">
        <div className="container">
          <h2>Autres influenceurs food à {city}</h2>
          <p>Découvrez d'autres créateurs de contenu food à {city} disponibles sur BEHYPE pour vos collaborations.</p>
          <Link href={`/influenceur-food-${city.toLowerCase().replace(/\s+/g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`} className="btn-secondary">
            Voir tous les influenceurs à {city}
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Prêt à collaborer avec {name} ?</h2>
          <p>Boostez la visibilité de votre établissement à {city} avec BEHYPE</p>
          <div className="cta-buttons">
            <Link href="/calendly" className="btn-primary large">
              Réserver une démo gratuite
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .influencer-page {
          min-height: 100vh;
          background: #ffffff;
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .container {
          max-width: 900px;
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
          font-size: 56px;
          font-weight: 800;
          line-height: 1.2;
          margin: 0 0 8px 0;
          color: #1a1a1a;
        }

        .handle {
          font-size: 24px;
          color: #2465f7;
          margin: 0 0 24px 0;
          font-weight: 600;
        }

        .intro {
          font-size: 20px;
          color: #6b7280;
          margin: 0 0 32px 0;
          line-height: 1.7;
        }

        .social-links {
          display: flex;
          gap: 16px;
          justify-content: center;
          margin-bottom: 40px;
        }

        .social-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          transition: all 0.3s;
        }

        .social-btn.instagram {
          background: linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
          color: white;
        }

        .social-btn.tiktok {
          background: #000;
          color: white;
        }

        .social-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
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
          padding: 60px 24px;
          background: white;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          max-width: 900px;
          margin: 0 auto;
        }

        .stat-card {
          text-align: center;
          padding: 32px 20px;
          background: #f8fafc;
          border-radius: 16px;
        }

        .stat-number {
          font-size: 36px;
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

        /* About Section */
        .about-section {
          padding: 100px 24px;
          background: #f8fafc;
        }

        .about-section h2 {
          text-align: center;
          font-size: 40px;
          font-weight: 800;
          margin: 0 0 48px 0;
          color: #1a1a1a;
        }

        .about-text h3 {
          font-size: 22px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 32px 0 16px 0;
        }

        .about-text h3:first-child {
          margin-top: 0;
        }

        .about-text p {
          font-size: 17px;
          line-height: 1.8;
          color: #4b5563;
          margin: 0;
        }

        /* Content Section */
        .content-section {
          padding: 100px 24px;
          background: white;
        }

        .content-section h2 {
          text-align: center;
          font-size: 36px;
          font-weight: 800;
          margin: 0 0 48px 0;
          color: #1a1a1a;
        }

        .content-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .content-card {
          background: #f8fafc;
          padding: 32px;
          border-radius: 20px;
          text-align: center;
        }

        .content-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }

        .content-card h3 {
          font-size: 18px;
          font-weight: 700;
          margin: 0 0 12px 0;
          color: #1a1a1a;
        }

        .content-card p {
          font-size: 15px;
          color: #6b7280;
          margin: 0;
          line-height: 1.6;
        }

        /* Why Section */
        .why-section {
          padding: 100px 24px;
          background: #f8fafc;
        }

        .why-section h2 {
          text-align: center;
          font-size: 36px;
          font-weight: 800;
          margin: 0 0 48px 0;
          color: #1a1a1a;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          max-width: 900px;
          margin: 0 auto;
        }

        .feature-card {
          background: white;
          padding: 32px;
          border-radius: 20px;
          border: 1px solid #e5e7eb;
        }

        .feature-icon {
          font-size: 40px;
          margin-bottom: 16px;
        }

        .feature-card h3 {
          font-size: 20px;
          font-weight: 700;
          margin: 0 0 12px 0;
          color: #1a1a1a;
        }

        .feature-card p {
          font-size: 15px;
          color: #6b7280;
          margin: 0;
          line-height: 1.7;
        }

        /* Location Section */
        .location-section {
          padding: 100px 24px;
          background: white;
        }

        .location-section h2 {
          text-align: center;
          font-size: 36px;
          font-weight: 800;
          margin: 0 0 32px 0;
          color: #1a1a1a;
        }

        .location-text {
          font-size: 17px;
          line-height: 1.8;
          color: #4b5563;
          margin: 0 0 24px 0;
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
          font-size: 16px;
        }

        /* Other Section */
        .other-section {
          padding: 80px 24px;
          background: white;
          text-align: center;
        }

        .other-section h2 {
          font-size: 32px;
          font-weight: 800;
          margin: 0 0 16px 0;
          color: #1a1a1a;
        }

        .other-section p {
          font-size: 18px;
          color: #6b7280;
          margin: 0 0 32px 0;
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
            font-size: 36px;
          }

          .handle {
            font-size: 18px;
          }

          .intro {
            font-size: 16px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .content-grid {
            grid-template-columns: 1fr;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .social-links {
            flex-direction: column;
            align-items: center;
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