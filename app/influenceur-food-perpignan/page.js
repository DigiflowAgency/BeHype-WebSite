import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Perpignan - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Perpignan. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant.",
  keywords: "influenceur food perpignan, créateur contenu food perpignan, collaboration restaurant perpignan, marketing influenceur perpignan",
  openGraph: {
    title: "Influenceurs Food Perpignan - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Perpignan.",
    url: "https://behype.fr/influenceur-food-perpignan",
  },
  alternates: { canonical: "https://behype.fr/influenceur-food-perpignan" },
}

export default function Page() {
  return <CityPageTemplate city="Perpignan" citySlug="perpignan" region="Pyrénées-Orientales" influencers={[]} />
}
