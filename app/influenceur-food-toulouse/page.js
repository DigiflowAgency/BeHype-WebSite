import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Toulouse - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Toulouse. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant toulousain.",
  keywords: "influenceur food toulouse, créateur contenu food toulouse, collaboration restaurant toulouse, marketing influenceur toulouse",
  openGraph: {
    title: "Influenceurs Food Toulouse - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Toulouse. Boostez la visibilité de votre restaurant.",
    url: "https://behype.fr/influenceur-food-toulouse",
  },
  alternates: {
    canonical: "https://behype.fr/influenceur-food-toulouse",
  },
}

export default function InfluenceurFoodToulouse() {
  const influencers = [
    "@toulousefood", "@foodietoulouse", "@toulousegourmand", "@cassouletlovers",
    "@tastytoulouse", "@toulousefoodie", "@villerosetable"
  ]

  return (
    <CityPageTemplate
      city="Toulouse"
      citySlug="toulouse"
      region="Occitanie"
      influencers={influencers}
    />
  )
}
