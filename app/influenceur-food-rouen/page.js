import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Rouen - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Rouen. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant.",
  keywords: "influenceur food rouen, créateur contenu food rouen, collaboration restaurant rouen, marketing influenceur rouen",
  openGraph: {
    title: "Influenceurs Food Rouen - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Rouen.",
    url: "https://behype.fr/influenceur-food-rouen",
  },
  alternates: { canonical: "https://behype.fr/influenceur-food-rouen" },
}

export default function Page() {
  return <CityPageTemplate city="Rouen" citySlug="rouen" region="Normandie" influencers={[]} />
}
