import CityPageTemplate from '../components/CityPageTemplate'
import { cityData } from '../data/cityData'

export const metadata = {
  title: "Influenceurs Food Lyon - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Lyon. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant lyonnais.",
  keywords: "influenceur food lyon, créateur contenu food lyon, collaboration restaurant lyon, marketing influenceur lyon",
  openGraph: {
    title: "Influenceurs Food Lyon - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Lyon. Boostez la visibilité de votre restaurant.",
    url: "https://be-hype.com/influenceur-food-lyon",
  },
  alternates: {
    canonical: "https://be-hype.com/influenceur-food-lyon",
  },
}

export default function InfluenceurFoodLyon() {
  const influencers = [
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
  ]

  return (
    <CityPageTemplate
      city="Lyon"
      citySlug="lyon"
      region="Auvergne-Rhône-Alpes"
      influencers={influencers}
      cityData={cityData["Lyon"]}
    />
  )
}
