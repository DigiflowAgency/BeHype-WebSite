import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Boulogne-Billancourt - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Boulogne-Billancourt. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant.",
  keywords: "influenceur food boulogne-billancourt, créateur contenu food boulogne-billancourt, collaboration restaurant boulogne-billancourt, marketing influenceur boulogne-billancourt",
  openGraph: {
    title: "Influenceurs Food Boulogne-Billancourt - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Boulogne-Billancourt.",
    url: "https://behype.fr/influenceur-food-boulogne-billancourt",
  },
  alternates: { canonical: "https://behype.fr/influenceur-food-boulogne-billancourt" },
}

export default function Page() {
  return <CityPageTemplate city="Boulogne-Billancourt" citySlug="boulogne-billancourt" region="Hauts-de-Seine" influencers={[]} />
}
