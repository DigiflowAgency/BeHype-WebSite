import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Cannes - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Cannes. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant.",
  keywords: "influenceur food cannes, créateur contenu food cannes, collaboration restaurant cannes, marketing influenceur cannes",
  openGraph: {
    title: "Influenceurs Food Cannes - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Cannes.",
    url: "https://behype.fr/influenceur-food-cannes",
  },
  alternates: { canonical: "https://behype.fr/influenceur-food-cannes" },
}

export default function Page() {
  return <CityPageTemplate city="Cannes" citySlug="cannes" region="Alpes-Maritimes" influencers={[]} />
}
