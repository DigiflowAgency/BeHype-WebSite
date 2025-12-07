import CityPageTemplate from '../components/CityPageTemplate'
import { cityData } from '../data/cityData'

export const metadata = {
  title: "Influenceurs Food Bordeaux - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Bordeaux. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant bordelais.",
  keywords: "influenceur food bordeaux, créateur contenu food bordeaux, collaboration restaurant bordeaux, marketing influenceur bordeaux",
  openGraph: {
    title: "Influenceurs Food Bordeaux - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Bordeaux. Boostez la visibilité de votre restaurant.",
    url: "https://be-hype.com/influenceur-food-bordeaux",
  },
  alternates: {
    canonical: "https://be-hype.com/influenceur-food-bordeaux",
  },
}

export default function InfluenceurFoodBordeaux() {
  const influencers = [
    { name: "Tristan Cuisine", handle: "@tristan_cuisine", slug: "tristan_cuisine" },
    { name: "Edouard Cuisine", handle: "@edouardcuisine", slug: "edouardcuisine" },
    { name: "Bordeaux Food Club", handle: "@bordeauxfoodclub", slug: "bordeauxfoodclub" }
  ]

  return (
    <CityPageTemplate
      city="Bordeaux"
      citySlug="bordeaux"
      region="Nouvelle-Aquitaine"
      influencers={influencers}
      cityData={cityData["Bordeaux"]}
    />
  )
}
