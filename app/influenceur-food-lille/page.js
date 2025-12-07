import CityPageTemplate from '../components/CityPageTemplate'
import { cityData } from '../data/cityData'

export const metadata = {
  title: "Influenceurs Food Lille - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Lille. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant lillois.",
  keywords: "influenceur food lille, créateur contenu food lille, collaboration restaurant lille, marketing influenceur lille",
  openGraph: {
    title: "Influenceurs Food Lille - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Lille.",
    url: "https://be-hype.com/influenceur-food-lille",
  },
  alternates: { canonical: "https://be-hype.com/influenceur-food-lille" },
}

export default function Page() {
  const influencers = [
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
  ]

  return <CityPageTemplate city="Lille" citySlug="lille" region="Hauts-de-France" influencers={influencers} cityData={cityData["Lille"]} />
}
