import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Paris - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Paris. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant parisien.",
  keywords: "influenceur food paris, créateur contenu food paris, collaboration restaurant paris, marketing influenceur paris",
  openGraph: {
    title: "Influenceurs Food Paris - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Paris. Boostez la visibilité de votre restaurant.",
    url: "https://behype.fr/influenceur-food-paris",
  },
  alternates: {
    canonical: "https://behype.fr/influenceur-food-paris",
  },
}

export default function InfluenceurFoodParis() {
  const influencers = [
    "@leparisd'alexis", "@parisbouge", "@foodinparis", "@parisfoodguide",
    "@bonabordeaux", "@tastyparis", "@parisianfoodie", "@foodparis"
  ]

  return (
    <CityPageTemplate
      city="Paris"
      citySlug="paris"
      region="Île-de-France"
      influencers={influencers}
    />
  )
}
