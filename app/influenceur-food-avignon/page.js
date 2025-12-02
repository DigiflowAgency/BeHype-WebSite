import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Avignon - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Avignon. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant.",
  keywords: "influenceur food avignon, créateur contenu food avignon, collaboration restaurant avignon, marketing influenceur avignon",
  openGraph: {
    title: "Influenceurs Food Avignon - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Avignon.",
    url: "https://behype.fr/influenceur-food-avignon",
  },
  alternates: { canonical: "https://behype.fr/influenceur-food-avignon" },
}

export default function Page() {
  return <CityPageTemplate city="Avignon" citySlug="avignon" region="Vaucluse" influencers={[]} />
}
