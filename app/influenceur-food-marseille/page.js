import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Marseille - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Marseille. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant marseillais.",
  keywords: "influenceur food marseille, créateur contenu food marseille, collaboration restaurant marseille, marketing influenceur marseille",
  openGraph: {
    title: "Influenceurs Food Marseille - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Marseille. Boostez la visibilité de votre restaurant.",
    url: "https://behype.fr/influenceur-food-marseille",
  },
  alternates: {
    canonical: "https://behype.fr/influenceur-food-marseille",
  },
}

export default function InfluenceurFoodMarseille() {
  const influencers = [
    "@localfoodmarseille", "@marseillefood", "@bouillabaisselovers", "@marseillegourmand",
    "@foodiemarseille", "@marseillefoodie", "@tastymars"
  ]

  return (
    <CityPageTemplate
      city="Marseille"
      citySlug="marseille"
      region="Provence-Alpes-Côte d'Azur"
      influencers={influencers}
    />
  )
}
