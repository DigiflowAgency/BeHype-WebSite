import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Limoges - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Limoges. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant.",
  keywords: "influenceur food limoges, créateur contenu food limoges, collaboration restaurant limoges, marketing influenceur limoges",
  openGraph: {
    title: "Influenceurs Food Limoges - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Limoges.",
    url: "https://be-hype.com/influenceur-food-limoges",
  },
  alternates: { canonical: "https://be-hype.com/influenceur-food-limoges" },
}

export default function Page() {
  return <CityPageTemplate city="Limoges" citySlug="limoges" region="Haute-Vienne" influencers={[]} />
}
