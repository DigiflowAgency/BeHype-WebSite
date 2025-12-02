import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Les Bonnes Adresses de Lille (@lesbonnesadressesdelille) - Influenceur Food Lille | BEHYPE",
  description: "Collaborez avec Les Bonnes Adresses de Lille, référence pour les meilleures tables lilloises. Guide food complet. Contactez via BEHYPE.",
  keywords: "lesbonnesadressesdelille, les bonnes adresses de lille instagram, influenceur food lille, guide restaurants lille, collaboration restaurant lille",
  openGraph: {
    title: "Les Bonnes Adresses de Lille (@lesbonnesadressesdelille) - Influenceur Food Lille",
    description: "Collaborez avec Les Bonnes Adresses de Lille, référence pour les meilleures tables lilloises.",
    url: "https://behype.fr/influenceur/lesbonnesadressesdelille",
  },
  alternates: { canonical: "https://behype.fr/influenceur/lesbonnesadressesdelille" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Les Bonnes Adresses de Lille"
      handle="@lesbonnesadressesdelille"
      city="Lille"
      region="Nord"
      instagramUrl="https://instagram.com/lesbonnesadressesdelille"
      followers="35K+"
      description="Les Bonnes Adresses de Lille est devenu le guide de référence incontournable pour tous les Lillois en quête de nouvelles expériences culinaires. Ce compte rassemble une communauté passionnée qui compte sur ses recommandations pour découvrir le meilleur de la gastronomie locale, des institutions aux nouvelles pépites."
      specialty="Les Bonnes Adresses de Lille couvre l'ensemble du spectre gastronomique lillois avec une approche encyclopédique. Sa force réside dans sa capacité à catégoriser et organiser les recommandations : par quartier, par type de cuisine, par budget, par occasion. Les guides thématiques (meilleurs brunchs, pizzas, burgers, restaurants romantiques...) sont des références consultées régulièrement par sa communauté. L'équipe derrière le compte teste rigoureusement chaque établissement avant de le recommander."
      contentStyle="Le style éditorial des Bonnes Adresses de Lille est professionnel et structuré. Chaque post est informatif avec des détails pratiques (adresse, prix moyens, réservation recommandée). Les visuels sont soignés et cohérents, respectant une identité visuelle reconnaissable. Les carrousels permettent de présenter plusieurs aspects d'un même établissement ou plusieurs options d'une même catégorie. Les stories mettent en avant les nouveautés et les coups de cœur du moment."
      whyCollaborate="Les Bonnes Adresses de Lille offre une visibilité exceptionnelle grâce à sa large audience et sa crédibilité établie. Être référencé par ce compte, c'est obtenir une validation qui influence réellement les choix des Lillois. Les établissements partenaires bénéficient d'un contenu professionnel et d'une mise en avant dans les guides thématiques pertinents. La diversité de l'audience permet de toucher différents profils de clients potentiels."
      stats={[
        { value: "35K+", label: "Followers Instagram" },
        { value: "6%", label: "Taux d'engagement" },
        { value: "300+", label: "Adresses référencées" },
        { value: "80+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "📋", title: "Guides thématiques", description: "Classements par catégorie des meilleures adresses lilloises" },
        { icon: "🆕", title: "Ouvertures", description: "Première couverture des nouveaux restaurants de la métropole" },
        { icon: "💡", title: "Bons plans", description: "Menus du jour, happy hours et offres spéciales à ne pas manquer" }
      ]}
    />
  )
}
