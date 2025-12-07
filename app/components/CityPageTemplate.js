'use client'

import { useState } from 'react'
import Link from 'next/link'
import HomeNavbar from './HomeNavbar'
import Footer from './Footer'

export default function CityPageTemplate({ city, citySlug, influencers = [], region = '', cityData = null }) {
  const [openFaq, setOpenFaq] = useState(null)

  // Données par défaut si pas de cityData fourni
  const data = cityData || {
    intro: {
      paragraph1: `${city} est une ville dynamique où la scène gastronomique ne cesse de se réinventer.`,
      paragraph2: `Les influenceurs food de ${city} disposent d'une audience locale fidèle et engagée.`,
      paragraph3: `BEHYPE a développé un réseau solide d'influenceurs food à ${city}.`
    },
    specialties: [],
    neighborhoods: [],
    stats: { influencers: "30+", restaurants: "1000+", avgEngagement: "4.5%" },
    localInsight: "",
    whyCity: "",
    testimonialContext: ""
  }

  // FAQs dynamiques avec le nom de la ville
  const faqs = [
    {
      question: `Comment trouver un influenceur food à ${city} ?`,
      answer: `BEHYPE vous met en relation avec les meilleurs influenceurs food de ${city}. Notre plateforme vous permet de consulter les profils, statistiques et portfolios de chaque créateur, puis de les contacter directement pour organiser une collaboration. Nous vérifions l'authenticité de chaque influenceur pour garantir des partenariats de qualité.`
    },
    {
      question: `Combien coûte une collaboration avec un influenceur à ${city} ?`,
      answer: `Les tarifs varient selon le nombre d'abonnés, le taux d'engagement et le type de contenu demandé. À ${city}, comptez entre une invitation repas (pour les micro-influenceurs) et plusieurs centaines d'euros pour les profils les plus importants. BEHYPE affiche les tarifs de manière transparente pour chaque influenceur.`
    },
    {
      question: `Quels types de contenus peuvent créer les influenceurs de ${city} ?`,
      answer: `Les créateurs de contenu food à ${city} proposent différents formats : stories Instagram, posts feed, reels vidéo, TikTok, articles de blog ou encore avis Google. Chaque format a ses avantages en termes de visibilité et d'engagement. Nous vous conseillons sur le format le plus adapté à vos objectifs.`
    },
    {
      question: `Comment mesurer l'impact d'une campagne d'influence à ${city} ?`,
      answer: `BEHYPE vous fournit des statistiques détaillées après chaque collaboration : nombre de vues, likes, commentaires, partages, clics vers votre établissement et estimation de la portée. Vous pouvez également suivre l'évolution de vos réservations et de votre fréquentation pour mesurer le retour sur investissement.`
    },
    {
      question: `Pourquoi choisir BEHYPE plutôt que contacter directement les influenceurs ?`,
      answer: `BEHYPE vous fait gagner du temps en centralisant tous les profils vérifiés de ${city} sur une seule plateforme. Nous garantissons l'authenticité des audiences, négocions les meilleurs tarifs et assurons un suivi professionnel de chaque collaboration. Notre expertise vous évite les mauvaises surprises.`
    },
    {
      question: `Quel est le délai pour organiser une collaboration à ${city} ?`,
      answer: `Une fois votre offre publiée sur BEHYPE, vous recevez généralement des candidatures sous 24 à 48 heures. La collaboration peut ensuite être organisée selon vos disponibilités et celles de l'influenceur. En moyenne, comptez une semaine entre la première prise de contact et la publication du contenu.`
    },
    {
      question: `Les influenceurs de ${city} acceptent-ils les collaborations non rémunérées ?`,
      answer: `Oui, de nombreux micro-influenceurs à ${city} acceptent des collaborations en échange d'une expérience gratuite (repas, dégustation). C'est une excellente option pour les établissements avec un budget limité. BEHYPE vous permet de filtrer les influenceurs selon leur mode de collaboration préféré.`
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

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2>Le marketing d'influence food à {city}</h2>
          <div className="about-content">
            <p>{data.intro.paragraph1}</p>
            <p>{data.intro.paragraph2}</p>
            <p>{data.intro.paragraph3}</p>
          </div>

          {/* Spécialités locales */}
          {data.specialties && data.specialties.length > 0 && (
            <div className="local-specialties">
              <h3>Les spécialités culinaires à {city}</h3>
              <div className="specialties-list">
                {data.specialties.map((specialty, i) => (
                  <span key={i} className="specialty-tag">{specialty}</span>
                ))}
              </div>
            </div>
          )}

          {/* Quartiers food */}
          {data.neighborhoods && data.neighborhoods.length > 0 && (
            <div className="neighborhoods-info">
              <h3>Les quartiers food à découvrir</h3>
              <p>Les influenceurs de {city} explorent principalement les quartiers de {data.neighborhoods.join(', ')}. Chaque zone possède son identité gastronomique et ses adresses incontournables.</p>
            </div>
          )}

          {/* Insight local */}
          {data.localInsight && (
            <div className="local-insight">
              <p><strong>💡 Le saviez-vous ?</strong> {data.localInsight}</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      {data.stats && (
        <section className="stats-section">
          <div className="container">
            <h2>{city} en chiffres</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">{data.stats.influencers}</div>
                <div className="stat-label">Influenceurs partenaires</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{data.stats.restaurants}</div>
                <div className="stat-label">Restaurants référencés</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{data.stats.avgEngagement}</div>
                <div className="stat-label">Taux d'engagement moyen</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Section */}
      <section className="why-section">
        <div className="container">
          <h2>Pourquoi choisir BEHYPE pour vos collaborations à {city} ?</h2>

          {data.whyCity && (
            <p className="why-intro">{data.whyCity}</p>
          )}

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Influenceurs {city.toLowerCase() === 'paris' ? 'parisiens' : city.toLowerCase() === 'lyon' ? 'lyonnais' : city.toLowerCase() === 'marseille' ? 'marseillais' : city.toLowerCase() === 'toulouse' ? 'toulousains' : city.toLowerCase() === 'nice' ? 'niçois' : city.toLowerCase() === 'bordeaux' ? 'bordelais' : city.toLowerCase() === 'lille' ? 'lillois' : 'nantais'} vérifiés</h3>
              <p>Des créateurs basés à {city} avec une audience {region} engagée. Chaque profil est vérifié pour garantir l'authenticité de l'audience et la qualité du contenu produit.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Tarifs transparents</h3>
              <p>Collaborations gratuites ou rémunérées, vous choisissez votre budget. Pas de frais cachés, pas de commissions surprises. Vous maîtrisez votre investissement.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Résultats mesurables</h3>
              <p>Suivez les performances de vos campagnes à {city} en temps réel grâce à notre tableau de bord. Impressions, engagement, clics : toutes les données pour optimiser votre stratégie.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Accompagnement dédié</h3>
              <p>Notre équipe d'experts en marketing d'influence vous guide à chaque étape pour maximiser votre visibilité à {city} et {region}.</p>
            </div>
          </div>

          {data.testimonialContext && (
            <div className="testimonial-context">
              <p>📈 {data.testimonialContext}</p>
            </div>
          )}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-section">
        <div className="container">
          <h2>Comment fonctionne BEHYPE à {city} ?</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Créez votre profil établissement</h3>
              <p>Inscrivez-vous gratuitement sur BEHYPE et présentez votre restaurant, bar ou café. Ajoutez des photos, décrivez votre concept et définissez le type d'expérience que vous souhaitez offrir aux influenceurs.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Publiez votre offre</h3>
              <p>Créez une offre attractive pour les influenceurs de {city}. Précisez ce que vous proposez (repas pour 2, dégustation, soirée privée...) et ce que vous attendez en retour (story, post, reel...).</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Recevez des candidatures</h3>
              <p>Les influenceurs food de {city} intéressés par votre offre vous envoient leur candidature. Consultez leurs profils, leurs statistiques et leurs précédentes collaborations.</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3>Choisissez vos influenceurs</h3>
              <p>Sélectionnez les créateurs qui correspondent le mieux à votre image de marque. Organisez la collaboration directement via la plateforme et préparez l'accueil.</p>
            </div>
            <div className="step-card">
              <div className="step-number">5</div>
              <h3>Vivez l'expérience</h3>
              <p>Accueillez l'influenceur dans votre établissement. Faites-lui découvrir vos spécialités et laissez-le capturer les meilleurs moments pour sa communauté.</p>
            </div>
            <div className="step-card">
              <div className="step-number">6</div>
              <h3>Profitez des retombées</h3>
              <p>L'influenceur publie son contenu et vous bénéficiez d'une visibilité immédiate auprès de son audience. Suivez les statistiques et mesurez l'impact sur votre fréquentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <h2>Les avantages du marketing d'influence pour votre établissement à {city}</h2>
          <div className="benefits-content">
            <div className="benefit-item">
              <h3>Visibilité locale ciblée</h3>
              <p>Les influenceurs food de {city} ont construit leur audience autour des amateurs de gastronomie locale. Leurs abonnés sont des habitants de {city} et des environs, potentiellement intéressés par découvrir de nouvelles adresses près de chez eux. C'est une audience qualifiée que vous ne pourriez pas atteindre aussi efficacement avec la publicité traditionnelle.</p>
            </div>
            <div className="benefit-item">
              <h3>Crédibilité et confiance</h3>
              <p>Les recommandations d'un influenceur sont perçues comme authentiques par sa communauté. Contrairement à une publicité classique, le contenu créé par un influenceur ressemble à un conseil d'ami. Cette dimension humaine et personnelle génère un taux de conversion bien supérieur aux canaux publicitaires traditionnels.</p>
            </div>
            <div className="benefit-item">
              <h3>Contenu de qualité réutilisable</h3>
              <p>Les influenceurs professionnels produisent du contenu de haute qualité : photos soignées, vidéos immersives, storytelling engageant. Ce contenu peut être réutilisé sur vos propres réseaux sociaux, votre site web ou vos supports marketing, ce qui représente une valeur ajoutée considérable.</p>
            </div>
            <div className="benefit-item">
              <h3>Retour sur investissement mesurable</h3>
              <p>Avec BEHYPE, vous suivez précisément les performances de chaque collaboration : nombre de vues, likes, commentaires, partages, clics vers votre établissement. Vous pouvez calculer exactement le coût d'acquisition d'un nouveau client et optimiser votre budget en conséquence.</p>
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
              {influencers.map((influencer, i) => {
                const handle = influencer.handle || influencer
                const name = influencer.name || handle
                const slug = influencer.slug
                const hasPage = !!slug

                if (hasPage) {
                  return (
                    <Link key={i} href={`/influenceur/${slug}`} className="influencer-card clickable">
                      <div className="influencer-name">{name}</div>
                      <div className="influencer-handle">{handle.startsWith('@') ? handle : `@${handle}`}</div>
                    </Link>
                  )
                }

                return (
                  <div key={i} className="influencer-card">
                    <div className="influencer-name">{name}</div>
                    <div className="influencer-handle">{handle.startsWith('@') ? handle : `@${handle}`}</div>
                  </div>
                )
              })}
            </div>
            <p className="influencers-note">
              Et des dizaines d'autres créateurs disponibles sur notre plateforme...
            </p>
            <div className="cta-buttons" style={{ marginTop: '32px' }}>
              <Link href="/calendly" className="btn-primary">
                Collaborer avec un influenceur
              </Link>
            </div>
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

      {/* Other Cities Section */}
      <section className="cities-section">
        <div className="container">
          <h2>Influenceurs food dans les autres villes</h2>
          <p>Découvrez nos influenceurs food partenaires dans toute la France</p>

          <div className="cities-grid">
            {[
              { name: "Paris", slug: "paris" },
              { name: "Lyon", slug: "lyon" },
              { name: "Marseille", slug: "marseille" },
              { name: "Toulouse", slug: "toulouse" },
              { name: "Nice", slug: "nice" },
              { name: "Bordeaux", slug: "bordeaux" },
              { name: "Lille", slug: "lille" },
              { name: "Nantes", slug: "nantes" }
            ].filter(c => c.name !== city).slice(0, 6).map((cityItem, i) => (
              <Link key={i} href={`/influenceur-food-${cityItem.slug}`} className="city-card">
                <span className="city-name">Influenceurs à {cityItem.name}</span>
              </Link>
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

        .cta-buttons :global(.btn-primary),
        .btn-primary {
          display: inline-block;
          padding: 16px 32px;
          background: linear-gradient(135deg, #2465f7 0%, #1d4ed8 100%);
          color: white !important;
          border-radius: 12px;
          font-weight: 700;
          font-size: 16px;
          text-decoration: none !important;
          transition: all 0.3s;
          box-shadow: 0 4px 20px rgba(36, 101, 247, 0.3);
          cursor: pointer;
          border: none;
        }

        .cta-buttons :global(.btn-primary):hover,
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(36, 101, 247, 0.4);
        }

        .btn-primary.large,
        :global(.btn-primary.large) {
          padding: 20px 48px;
          font-size: 18px;
        }

        .cta-buttons :global(.btn-secondary),
        .btn-secondary {
          display: inline-block;
          padding: 16px 32px;
          background: white;
          color: #374151 !important;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-weight: 700;
          font-size: 16px;
          text-decoration: none !important;
          transition: all 0.3s;
          cursor: pointer;
        }

        .cta-buttons :global(.btn-secondary):hover,
        .btn-secondary:hover {
          border-color: #2465f7;
          color: #2465f7 !important;
        }

        /* About Section */
        .about-section {
          padding: 80px 24px;
          background: white;
        }

        .about-section h2 {
          text-align: center;
          font-size: 36px;
          font-weight: 800;
          margin: 0 0 40px 0;
          color: #1a1a1a;
        }

        .about-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .about-content p {
          font-size: 17px;
          line-height: 1.8;
          color: #4b5563;
          margin-bottom: 24px;
          text-align: justify;
        }

        /* Local Specialties */
        .local-specialties {
          margin-top: 48px;
          padding-top: 40px;
          border-top: 1px solid #e5e7eb;
        }

        .local-specialties h3,
        .neighborhoods-info h3 {
          font-size: 24px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 20px 0;
          text-align: center;
        }

        .specialties-list {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
        }

        .specialty-tag {
          padding: 10px 20px;
          background: linear-gradient(135deg, rgba(36, 101, 247, 0.08) 0%, rgba(0, 212, 255, 0.08) 100%);
          border: 1px solid rgba(36, 101, 247, 0.2);
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          color: #2465f7;
        }

        /* Neighborhoods Info */
        .neighborhoods-info {
          margin-top: 40px;
          padding: 32px;
          background: #f8fafc;
          border-radius: 16px;
        }

        .neighborhoods-info p {
          text-align: center;
          margin: 0;
          font-size: 16px;
          line-height: 1.7;
          color: #4b5563;
        }

        /* Local Insight */
        .local-insight {
          margin-top: 32px;
          padding: 24px 32px;
          background: linear-gradient(135deg, #2465f7 0%, #1d4ed8 100%);
          border-radius: 16px;
        }

        .local-insight p {
          color: white !important;
          text-align: center;
          margin: 0;
          font-size: 16px;
          line-height: 1.7;
        }

        /* Stats Section */
        .stats-section {
          padding: 80px 24px;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
        }

        .stats-section h2 {
          text-align: center;
          font-size: 32px;
          font-weight: 800;
          color: white;
          margin: 0 0 48px 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          max-width: 800px;
          margin: 0 auto;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 48px;
          font-weight: 800;
          background: linear-gradient(135deg, #2465f7 0%, #00d4ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 16px;
          color: #94a3b8;
          font-weight: 500;
        }

        /* Why Section Additions */
        .why-intro {
          text-align: center;
          max-width: 800px;
          margin: -40px auto 48px;
          font-size: 18px;
          line-height: 1.7;
          color: #4b5563;
        }

        .testimonial-context {
          margin-top: 48px;
          padding: 24px 32px;
          background: white;
          border-left: 4px solid #2465f7;
          border-radius: 0 12px 12px 0;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .testimonial-context p {
          margin: 0;
          font-size: 16px;
          line-height: 1.7;
          color: #4b5563;
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

        /* How It Works Section */
        .how-section {
          padding: 100px 24px;
          background: white;
        }

        .how-section h2 {
          text-align: center;
          font-size: 36px;
          font-weight: 800;
          margin: 0 0 60px 0;
          color: #1a1a1a;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .step-card {
          text-align: center;
          padding: 32px 24px;
        }

        .step-number {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #2465f7 0%, #1d4ed8 100%);
          color: white;
          font-size: 20px;
          font-weight: 800;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }

        .step-card h3 {
          font-size: 18px;
          font-weight: 700;
          margin: 0 0 12px 0;
          color: #1a1a1a;
        }

        .step-card p {
          font-size: 15px;
          color: #6b7280;
          margin: 0;
          line-height: 1.6;
        }

        /* Benefits Section */
        .benefits-section {
          padding: 100px 24px;
          background: #f8fafc;
        }

        .benefits-section h2 {
          text-align: center;
          font-size: 36px;
          font-weight: 800;
          margin: 0 0 60px 0;
          color: #1a1a1a;
        }

        .benefits-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .benefit-item {
          margin-bottom: 40px;
          padding-bottom: 40px;
          border-bottom: 1px solid #e5e7eb;
        }

        .benefit-item:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }

        .benefit-item h3 {
          font-size: 22px;
          font-weight: 700;
          margin: 0 0 16px 0;
          color: #1a1a1a;
        }

        .benefit-item p {
          font-size: 16px;
          line-height: 1.8;
          color: #4b5563;
          margin: 0;
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
          padding: 20px 28px;
          background: #f8fafc;
          border-radius: 16px;
          text-decoration: none;
          text-align: center;
          transition: all 0.3s;
          border: 1px solid transparent;
        }

        .influencer-card.clickable:hover {
          background: white;
          border-color: #2465f7;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(36, 101, 247, 0.15);
          cursor: pointer;
        }

        .influencer-name {
          font-weight: 700;
          color: #1a1a1a;
          font-size: 15px;
          margin-bottom: 4px;
        }

        .influencer-handle {
          font-size: 13px;
          color: #2465f7;
          font-weight: 600;
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

        /* Cities Section */
        .cities-section {
          padding: 80px 24px;
          background: white;
          text-align: center;
        }

        .cities-section h2 {
          font-size: 32px;
          font-weight: 800;
          margin: 0 0 16px 0;
          color: #1a1a1a;
        }

        .cities-section p {
          font-size: 18px;
          color: #6b7280;
          margin: 0 0 32px 0;
        }

        .cities-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          max-width: 700px;
          margin: 0 auto;
        }

        .city-card {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px 24px;
          background: #f8fafc;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.3s;
          border: 2px solid transparent;
        }

        .city-card:hover {
          border-color: #2465f7;
          background: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(36, 101, 247, 0.15);
        }

        .city-name {
          font-weight: 700;
          color: #1a1a1a;
          font-size: 15px;
        }

        .city-card:hover .city-name {
          color: #2465f7;
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

          .steps-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .about-section h2,
          .how-section h2,
          .benefits-section h2,
          .why-section h2,
          .cta-section h2 {
            font-size: 28px;
          }

          .about-content p {
            text-align: left;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .btn-primary, .btn-secondary {
            width: 100%;
            text-align: center;
          }

          .cities-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  )
}
