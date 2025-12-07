'use client'

import { useState } from 'react'
import Link from 'next/link'
import HomeNavbar from './HomeNavbar'
import Footer from './Footer'

// Mapping des influenceurs par ville pour le maillage interne
const influencersByCity = {
  "Paris": [
    { name: "Strop Bon", handle: "@strop_bon", slug: "strop_bon" },
    { name: "Alan Food", handle: "@alan_food", slug: "alan_food" },
    { name: "Le Requin 92", handle: "@lerequin92officiel", slug: "lerequin92officiel" },
    { name: "My Bouffe", handle: "@my.bouffe", slug: "my.bouffe" },
    { name: "Le Paris d Alexis", handle: "@leparisdalexis", slug: "leparisdalexis" },
    { name: "Hunter Food", handle: "@hunterfood.fr", slug: "hunterfood.fr" },
    { name: "Paname a Faim", handle: "@panameafaim", slug: "panameafaim" },
    { name: "Paris ZigZag", handle: "@pariszigzag", slug: "pariszigzag" },
    { name: "Food Lovers Paris", handle: "@foodloverspvris", slug: "foodloverspvris" },
    { name: "The Paris Food Guide", handle: "@theparisfoodguide", slug: "theparisfoodguide" },
    { name: "Paris Secret", handle: "@parissecret", slug: "parissecret" },
    { name: "Top Paris Resto", handle: "@topparisresto", slug: "topparisresto" },
    { name: "Bonnes Adresses de Paris", handle: "@bonnesadressesdeparis", slug: "bonnesadressesdeparis" },
    { name: "Le Guide Ultime", handle: "@leguideultime", slug: "leguideultime" },
    { name: "La Grande Bouffe", handle: "@lagrande_bouffe", slug: "lagrande_bouffe" },
    { name: "Cook With Bash", handle: "@cookwithbash", slug: "cookwithbash" },
    { name: "Spicy Noemie", handle: "@spicynoemie", slug: "spicynoemie" },
    { name: "Le Street Foodist", handle: "@lestreetfoodist", slug: "lestreetfoodist" }
  ],
  "Toulouse": [
    { name: "Toulouse Food Guide", handle: "@toulouse.foodguide", slug: "toulouse.foodguide" },
    { name: "Toulouzinzins", handle: "@toulouzinzins", slug: "toulouzinzins" },
    { name: "Le Bonbon Toulouse", handle: "@le_bonbon_toulouse", slug: "le_bonbon_toulouse" },
    { name: "Toulouse By Night Fever", handle: "@toulousebynightfever", slug: "toulousebynightfever" },
    { name: "Epicu Toulouse Food", handle: "@epicutoulouse_food", slug: "epicutoulouse_food" },
    { name: "La Food Locale", handle: "@lafoodlocale", slug: "lafoodlocale" },
    { name: "Poodle The Noodle TLS", handle: "@poodlethenoodle.tls", slug: "poodlethenoodle.tls" },
    { name: "Hey Sisters Toulouse", handle: "@heysisterstoulouse", slug: "heysisterstoulouse" }
  ],
  "Lille": [
    { name: "Sortir Lille", handle: "@sortir.lille", slug: "sortir.lille" },
    { name: "Lille Food Guide", handle: "@lille.foodguide", slug: "lille.foodguide" },
    { name: "Food Lille and Co", handle: "@foodlilleandco", slug: "foodlilleandco" },
    { name: "Lille Foood", handle: "@lillefoood", slug: "lillefoood" },
    { name: "Lille Addict", handle: "@lille_addict", slug: "lille_addict" },
    { name: "Les Sorties d'une Lilloise", handle: "@lessortiesdunelilloise", slug: "lessortiesdunelilloise" },
    { name: "Plans en Nord", handle: "@plansennord", slug: "plansennord" },
    { name: "Le Bonbon Lille", handle: "@le_bonbon_lille", slug: "le_bonbon_lille" },
    { name: "Food Lovers Lille", handle: "@foodlovers_lille", slug: "foodlovers_lille" },
    { name: "Koul Halal", handle: "@koul_halal", slug: "koul_halal" },
    { name: "Halal Food Lille", handle: "@halal.food.lille", slug: "halal.food.lille" }
  ],
  "Bordeaux": [
    { name: "Tristan Cuisine", handle: "@tristan_cuisine", slug: "tristan_cuisine" },
    { name: "Edouard Cuisine", handle: "@edouardcuisine", slug: "edouardcuisine" },
    { name: "Bordeaux Food Club", handle: "@bordeauxfoodclub", slug: "bordeauxfoodclub" }
  ],
  "Nice": [
    { name: "Foode Nice", handle: "@foodenice", slug: "foodenice" },
    { name: "Food Lover Nice", handle: "@food.lover.nice", slug: "food.lover.nice" },
    { name: "Saspi Mathieu", handle: "@saspi.mathieu", slug: "saspi.mathieu" },
    { name: "Ambre Verywhere", handle: "@ambreverywhere", slug: "ambreverywhere" },
    { name: "Côte d'Azur Spots", handle: "@cotedazurspots", slug: "cotedazurspots" },
    { name: "Valentin Donato", handle: "@valentin.donato", slug: "valentin.donato" },
    { name: "Nice Food Guide", handle: "@nice_foodguide", slug: "nice_foodguide" },
    { name: "We Like Côte d'Azur", handle: "@welikecotedazur", slug: "welikecotedazur" },
    { name: "Nature Voyages Découvertes", handle: "@nature_voyages_decouvertes", slug: "nature_voyages_decouvertes" },
    { name: "Amour Boire et Manger", handle: "@amour.boire.et.manger", slug: "amour.boire.et.manger" },
    { name: "Nice Storique", handle: "@nicestorique", slug: "nicestorique" },
    { name: "Rémi Ragnar", handle: "@remi_ragnar", slug: "remi_ragnar" },
    { name: "Twins B Fit", handle: "@twinsb_fit", slug: "twinsb_fit" },
    { name: "Roro Cuistot", handle: "@roro_cuistot", slug: "roro_cuistot" }
  ],
  "Lyon": [
    { name: "C'est Cherbon", handle: "@cest_cherbon", slug: "cest_cherbon" },
    { name: "Lyon Tasting", handle: "@lyontasting", slug: "lyontasting" },
    { name: "On Mange Où à Lyon", handle: "@onmangeoualyon", slug: "onmangeoualyon" },
    { name: "Tu Viens Manger", handle: "@tuviensmanger", slug: "tuviensmanger" },
    { name: "Lyon Foodies", handle: "@lyonfoodies", slug: "lyonfoodies" },
    { name: "Wanna Eat Food", handle: "@wanna.eatfood", slug: "wanna.eatfood" },
    { name: "Food By Lyon", handle: "@foodbylyon", slug: "foodbylyon" },
    { name: "Food et Toi Lyon", handle: "@foodetoi_lyon", slug: "foodetoi_lyon" },
    { name: "Food Lyon", handle: "@food.lyon", slug: "food.lyon" },
    { name: "Monsieur Voyage", handle: "@monsieur.voyagee", slug: "monsieur.voyagee" }
  ],
  "Marseille": [
    { name: "Food Marseille", handle: "@foodmarseille", slug: "foodmarseille" },
    { name: "Marseille Bon Plan", handle: "@marseille_bon_plan", slug: "marseille_bon_plan" },
    { name: "Chez Deborah", handle: "@chezdeborah", slug: "chezdeborah" },
    { name: "Food Mars 13", handle: "@foodmars13", slug: "foodmars13" },
    { name: "The Bibendum Marseille", handle: "@thebibendummarseille", slug: "thebibendummarseille" },
    { name: "Le Food Reporter Marseillais", handle: "@le_food_reporter_marseillais", slug: "le_food_reporter_marseillais" },
    { name: "I Love Foodeuh", handle: "@ilovefoodeuh", slug: "ilovefoodeuh" },
    { name: "Marseille My City", handle: "@marseille.my.city", slug: "marseille.my.city" },
    { name: "On Mange Ou Mer", handle: "@onmangeoumer", slug: "onmangeoumer" },
    { name: "Un Creux au Bide 13", handle: "@uncreuxaubide13", slug: "uncreuxaubide13" },
    { name: "Marseille Bonnes Adresses", handle: "@marseille_bonnes_adresses", slug: "marseille_bonnes_adresses" },
    { name: "Foodie Marseille", handle: "@foodie_marseille", slug: "foodie_marseille" },
    { name: "Provence Gourmande", handle: "@provencegourmande", slug: "provencegourmande" },
    { name: "Aix-en-Provence Foodie", handle: "@aixenprovence.foodie", slug: "aixenprovence.foodie" },
    { name: "Bouches-du-Rhône Food", handle: "@bouches_du_rhone_food", slug: "bouches_du_rhone_food" },
    { name: "Top Restos PACA", handle: "@toprestospaca", slug: "toprestospaca" },
    { name: "Marseille Food Lover", handle: "@marseille_food_lover", slug: "marseille_food_lover" },
    { name: "La Good News Marseille", handle: "@lagoodnewsmarseille", slug: "lagoodnewsmarseille" }
  ]
}

export default function InfluencerPageTemplate({
  name,
  handle,
  city,
  region,
  instagramUrl,
  tiktokUrl,
  description,
  specialty,
  contentStyle,
  whyCollaborate,
  popularContent,
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

          {influencersByCity[city] && (
            <div className="other-influencers-grid">
              {influencersByCity[city]
                .filter(inf => inf.handle !== handle)
                .slice(0, 6)
                .map((inf, i) => (
                  <Link key={i} href={`/influenceur/${inf.slug}`} className="other-influencer-card">
                    <span className="other-name">{inf.name}</span>
                    <span className="other-handle">{inf.handle}</span>
                  </Link>
                ))}
            </div>
          )}

          <div className="cta-buttons" style={{ marginTop: '32px' }}>
            <Link href={`/influenceur-food-${city.toLowerCase().replace(/\s+/g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`} className="btn-primary">
              Voir tous les influenceurs à {city}
            </Link>
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

        .other-influencers-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          max-width: 800px;
          margin: 0 auto;
        }

        .other-influencer-card {
          display: flex;
          flex-direction: column;
          padding: 20px;
          background: #f8fafc;
          border-radius: 16px;
          text-decoration: none;
          transition: all 0.3s;
          border: 1px solid transparent;
        }

        .other-influencer-card:hover {
          background: white;
          border-color: #2465f7;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(36, 101, 247, 0.15);
        }

        .other-name {
          font-weight: 700;
          color: #1a1a1a;
          font-size: 14px;
          margin-bottom: 4px;
        }

        .other-handle {
          font-size: 13px;
          color: #2465f7;
          font-weight: 600;
        }

        /* Cities Section */
        .cities-section {
          padding: 80px 24px;
          background: #f8fafc;
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
          background: white;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.3s;
          border: 2px solid #e5e7eb;
        }

        .city-card:hover {
          border-color: #2465f7;
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

          .other-influencers-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .cities-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  )
}