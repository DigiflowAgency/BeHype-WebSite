import CityPageTemplate from '../components/CityPageTemplate'
import { cityData } from '../data/cityData'

export const metadata = {
  title: "Influenceurs Food Toulouse - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Toulouse. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant toulousain.",
  keywords: "influenceur food toulouse, créateur contenu food toulouse, collaboration restaurant toulouse, marketing influenceur toulouse",
  openGraph: {
    title: "Influenceurs Food Toulouse - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Toulouse. Boostez la visibilité de votre restaurant.",
    url: "https://be-hype.com/influenceur-food-toulouse",
  },
  alternates: {
    canonical: "https://be-hype.com/influenceur-food-toulouse",
  },
}

export default function InfluenceurFoodToulouse() {
  const influencers = [
    { name: "Toulouse Food Guide", handle: "@toulouse.foodguide", slug: "toulouse.foodguide" },
    { name: "Toulouzinzins", handle: "@toulouzinzins", slug: "toulouzinzins" },
    { name: "Le Bonbon Toulouse", handle: "@le_bonbon_toulouse", slug: "le_bonbon_toulouse" },
    { name: "Toulouse By Night Fever", handle: "@toulousebynightfever", slug: "toulousebynightfever" },
    { name: "Epicu Toulouse Food", handle: "@epicutoulouse_food", slug: "epicutoulouse_food" },
    { name: "La Food Locale", handle: "@lafoodlocale", slug: "lafoodlocale" },
    { name: "Poodle The Noodle TLS", handle: "@poodlethenoodle.tls", slug: "poodlethenoodle.tls" },
    { name: "Hey Sisters Toulouse", handle: "@heysisterstoulouse", slug: "heysisterstoulouse" }
  ]

  return (
    <CityPageTemplate
      city="Toulouse"
      citySlug="toulouse"
      region="Occitanie"
      influencers={influencers}
      cityData={cityData["Toulouse"]}
    />
  )
}
