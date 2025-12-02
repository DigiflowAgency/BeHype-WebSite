import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Mulhouse - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Mulhouse. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant.",
  keywords: "influenceur food mulhouse, créateur contenu food mulhouse, collaboration restaurant mulhouse, marketing influenceur mulhouse",
  openGraph: {
    title: "Influenceurs Food Mulhouse - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Mulhouse.",
    url: "https://behype.fr/influenceur-food-mulhouse",
  },
  alternates: { canonical: "https://behype.fr/influenceur-food-mulhouse" },
}

export default function Page() {
  return <CityPageTemplate city="Mulhouse" citySlug="mulhouse" region="Haut-Rhin" influencers={[]} />
}
