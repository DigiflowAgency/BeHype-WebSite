import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Nancy - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Nancy. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant.",
  keywords: "influenceur food nancy, créateur contenu food nancy, collaboration restaurant nancy, marketing influenceur nancy",
  openGraph: {
    title: "Influenceurs Food Nancy - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Nancy.",
    url: "https://be-hype.com/influenceur-food-nancy",
  },
  alternates: { canonical: "https://be-hype.com/influenceur-food-nancy" },
}

export default function Page() {
  return <CityPageTemplate city="Nancy" citySlug="nancy" region="Meurthe-et-Moselle" influencers={[]} />
}
