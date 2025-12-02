import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Montreuil - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Montreuil. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant.",
  keywords: "influenceur food montreuil, créateur contenu food montreuil, collaboration restaurant montreuil, marketing influenceur montreuil",
  openGraph: {
    title: "Influenceurs Food Montreuil - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Montreuil.",
    url: "https://behype.fr/influenceur-food-montreuil",
  },
  alternates: { canonical: "https://behype.fr/influenceur-food-montreuil" },
}

export default function Page() {
  return <CityPageTemplate city="Montreuil" citySlug="montreuil" region="Seine-Saint-Denis" influencers={[]} />
}
