import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Antibes - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Antibes. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant.",
  keywords: "influenceur food antibes, créateur contenu food antibes, collaboration restaurant antibes, marketing influenceur antibes",
  openGraph: {
    title: "Influenceurs Food Antibes - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Antibes.",
    url: "https://behype.fr/influenceur-food-antibes",
  },
  alternates: { canonical: "https://behype.fr/influenceur-food-antibes" },
}

export default function Page() {
  return <CityPageTemplate city="Antibes" citySlug="antibes" region="Alpes-Maritimes" influencers={[]} />
}
