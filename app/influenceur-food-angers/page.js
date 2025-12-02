import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Angers - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Angers. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant.",
  keywords: "influenceur food angers, créateur contenu food angers, collaboration restaurant angers, marketing influenceur angers",
  openGraph: {
    title: "Influenceurs Food Angers - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Angers.",
    url: "https://behype.fr/influenceur-food-angers",
  },
  alternates: { canonical: "https://behype.fr/influenceur-food-angers" },
}

export default function Page() {
  return <CityPageTemplate city="Angers" citySlug="angers" region="Maine-et-Loire" influencers={[]} />
}
