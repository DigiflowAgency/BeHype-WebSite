import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Metz - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Metz. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant.",
  keywords: "influenceur food metz, créateur contenu food metz, collaboration restaurant metz, marketing influenceur metz",
  openGraph: {
    title: "Influenceurs Food Metz - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Metz.",
    url: "https://be-hype.com/influenceur-food-metz",
  },
  alternates: { canonical: "https://be-hype.com/influenceur-food-metz" },
}

export default function Page() {
  return <CityPageTemplate city="Metz" citySlug="metz" region="Moselle" influencers={[]} />
}
