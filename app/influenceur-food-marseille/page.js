import CityPageTemplate from '../components/CityPageTemplate'
import { cityData } from '../data/cityData'

export const metadata = {
  title: "Influenceurs Food Marseille - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Marseille. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant marseillais.",
  keywords: "influenceur food marseille, créateur contenu food marseille, collaboration restaurant marseille, marketing influenceur marseille",
  openGraph: {
    title: "Influenceurs Food Marseille - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Marseille. Boostez la visibilité de votre restaurant.",
    url: "https://be-hype.com/influenceur-food-marseille",
  },
  alternates: {
    canonical: "https://be-hype.com/influenceur-food-marseille",
  },
}

export default function InfluenceurFoodMarseille() {
  const influencers = [
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

  return (
    <CityPageTemplate
      city="Marseille"
      citySlug="marseille"
      region="Provence-Alpes-Côte d'Azur"
      influencers={influencers}
      cityData={cityData["Marseille"]}
    />
  )
}
