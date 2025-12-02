import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Tours - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Tours. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant.",
  keywords: "influenceur food tours, créateur contenu food tours, collaboration restaurant tours, marketing influenceur tours",
  openGraph: {
    title: "Influenceurs Food Tours - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Tours.",
    url: "https://behype.fr/influenceur-food-tours",
  },
  alternates: { canonical: "https://behype.fr/influenceur-food-tours" },
}

export default function Page() {
  return <CityPageTemplate city="Tours" citySlug="tours" region="Centre-Val de Loire" influencers={[]} />
}
