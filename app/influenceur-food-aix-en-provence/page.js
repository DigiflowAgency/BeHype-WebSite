import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Aix-en-Provence - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Aix-en-Provence. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant.",
  keywords: "influenceur food aix-en-provence, créateur contenu food aix-en-provence, collaboration restaurant aix-en-provence, marketing influenceur aix-en-provence",
  openGraph: {
    title: "Influenceurs Food Aix-en-Provence - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Aix-en-Provence.",
    url: "https://behype.fr/influenceur-food-aix-en-provence",
  },
  alternates: { canonical: "https://behype.fr/influenceur-food-aix-en-provence" },
}

export default function Page() {
  return <CityPageTemplate city="Aix-en-Provence" citySlug="aix-en-provence" region="Bouches-du-Rhône" influencers={[]} />
}
