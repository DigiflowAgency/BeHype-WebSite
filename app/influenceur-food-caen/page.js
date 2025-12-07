import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Caen - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Caen. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant.",
  keywords: "influenceur food caen, créateur contenu food caen, collaboration restaurant caen, marketing influenceur caen",
  openGraph: {
    title: "Influenceurs Food Caen - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Caen.",
    url: "https://be-hype.com/influenceur-food-caen",
  },
  alternates: { canonical: "https://be-hype.com/influenceur-food-caen" },
}

export default function Page() {
  return <CityPageTemplate city="Caen" citySlug="caen" region="Calvados" influencers={[]} />
}
