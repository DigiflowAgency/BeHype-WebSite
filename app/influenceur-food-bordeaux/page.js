import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Bordeaux - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Bordeaux. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant bordelais.",
  keywords: "influenceur food bordeaux, créateur contenu food bordeaux, collaboration restaurant bordeaux, marketing influenceur bordeaux",
  openGraph: {
    title: "Influenceurs Food Bordeaux - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Bordeaux. Boostez la visibilité de votre restaurant.",
    url: "https://behype.fr/influenceur-food-bordeaux",
  },
  alternates: {
    canonical: "https://behype.fr/influenceur-food-bordeaux",
  },
}

export default function InfluenceurFoodBordeaux() {
  const influencers = [
    "@bouffdlolo", "@bordeauxfood", "@foodiebordeaux", "@bordeauxgourmand",
    "@tastybordeaux", "@bordeauxfoodie", "@vinifood33"
  ]

  return (
    <CityPageTemplate
      city="Bordeaux"
      citySlug="bordeaux"
      region="Nouvelle-Aquitaine"
      influencers={influencers}
    />
  )
}
