import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Saint-Étienne - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Saint-Étienne. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant.",
  keywords: "influenceur food saint-étienne, créateur contenu food saint-étienne, collaboration restaurant saint-étienne, marketing influenceur saint-étienne",
  openGraph: {
    title: "Influenceurs Food Saint-Étienne - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Saint-Étienne.",
    url: "https://be-hype.com/influenceur-food-saint-etienne",
  },
  alternates: { canonical: "https://be-hype.com/influenceur-food-saint-etienne" },
}

export default function Page() {
  return <CityPageTemplate city="Saint-Étienne" citySlug="saint-etienne" region="Loire" influencers={[]} />
}
