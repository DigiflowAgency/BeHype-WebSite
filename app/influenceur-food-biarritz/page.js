import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Biarritz - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Biarritz. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant.",
  keywords: "influenceur food biarritz, créateur contenu food biarritz, collaboration restaurant biarritz, marketing influenceur biarritz",
  openGraph: {
    title: "Influenceurs Food Biarritz - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Biarritz.",
    url: "https://be-hype.com/influenceur-food-biarritz",
  },
  alternates: { canonical: "https://be-hype.com/influenceur-food-biarritz" },
}

export default function Page() {
  return <CityPageTemplate city="Biarritz" citySlug="biarritz" region="Pyrénées-Atlantiques" influencers={[]} />
}
