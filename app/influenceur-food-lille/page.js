import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Lille - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Lille. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant lillois.",
  keywords: "influenceur food lille, créateur contenu food lille, collaboration restaurant lille, marketing influenceur lille",
  openGraph: {
    title: "Influenceurs Food Lille - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Lille.",
    url: "https://behype.fr/influenceur-food-lille",
  },
  alternates: { canonical: "https://behype.fr/influenceur-food-lille" },
}

export default function Page() {
  return <CityPageTemplate city="Lille" citySlug="lille" region="Hauts-de-France" influencers={["@lillefood", "@foodielille", "@lillegourmand"]} />
}
