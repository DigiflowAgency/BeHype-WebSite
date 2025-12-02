import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Argenteuil - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Argenteuil. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant.",
  keywords: "influenceur food argenteuil, créateur contenu food argenteuil, collaboration restaurant argenteuil, marketing influenceur argenteuil",
  openGraph: {
    title: "Influenceurs Food Argenteuil - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Argenteuil.",
    url: "https://behype.fr/influenceur-food-argenteuil",
  },
  alternates: { canonical: "https://behype.fr/influenceur-food-argenteuil" },
}

export default function Page() {
  return <CityPageTemplate city="Argenteuil" citySlug="argenteuil" region="Val-d'Oise" influencers={[]} />
}
