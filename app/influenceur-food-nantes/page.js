import CityPageTemplate from '../components/CityPageTemplate'
import { cityData } from '../data/cityData'

export const metadata = {
  title: "Influenceurs Food Nantes - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Nantes. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant nantais.",
  keywords: "influenceur food nantes, créateur contenu food nantes, collaboration restaurant nantes, marketing influenceur nantes",
  openGraph: {
    title: "Influenceurs Food Nantes - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Nantes.",
    url: "https://be-hype.com/influenceur-food-nantes",
  },
  alternates: { canonical: "https://be-hype.com/influenceur-food-nantes" },
}

export default function Page() {
  // Vrais influenceurs food à Nantes (comptes Instagram vérifiés)
  const influencers = [
    { name: "Nantes Food Guide", handle: "@nantes_foodguide" },
    { name: "Nantes Foodie", handle: "@nantesfoodie" },
    { name: "Barbidule 44", handle: "@barbidule44" },
    { name: "Les Tables de Nantes", handle: "@lestablesdenantes.officiel" },
    { name: "Nantes Végétal", handle: "@nantesvegetal" },
    { name: "Caroline", handle: "@carolineovrd" }
  ]

  return (
    <CityPageTemplate
      city="Nantes"
      citySlug="nantes"
      region="Pays de la Loire"
      influencers={influencers}
      cityData={cityData["Nantes"]}
    />
  )
}
