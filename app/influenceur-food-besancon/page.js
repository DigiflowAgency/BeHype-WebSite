import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Besançon - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Besançon. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant.",
  keywords: "influenceur food besançon, créateur contenu food besançon, collaboration restaurant besançon, marketing influenceur besançon",
  openGraph: {
    title: "Influenceurs Food Besançon - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Besançon.",
    url: "https://behype.fr/influenceur-food-besancon",
  },
  alternates: { canonical: "https://behype.fr/influenceur-food-besancon" },
}

export default function Page() {
  return <CityPageTemplate city="Besançon" citySlug="besancon" region="Doubs" influencers={[]} />
}
