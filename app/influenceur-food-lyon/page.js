import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Lyon - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Lyon. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant lyonnais.",
  keywords: "influenceur food lyon, créateur contenu food lyon, collaboration restaurant lyon, marketing influenceur lyon",
  openGraph: {
    title: "Influenceurs Food Lyon - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Lyon. Boostez la visibilité de votre restaurant.",
    url: "https://behype.fr/influenceur-food-lyon",
  },
  alternates: {
    canonical: "https://behype.fr/influenceur-food-lyon",
  },
}

export default function InfluenceurFoodLyon() {
  const influencers = [
    "@lyonfood", "@bouchonlyonnais", "@foodielyon", "@lyongourmand",
    "@tastylyon", "@lyonstreetfood", "@lyonfoodies"
  ]

  return (
    <CityPageTemplate
      city="Lyon"
      citySlug="lyon"
      region="Auvergne-Rhône-Alpes"
      influencers={influencers}
    />
  )
}
