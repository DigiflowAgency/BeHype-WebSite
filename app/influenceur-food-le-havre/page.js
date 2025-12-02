import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Le Havre - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Le Havre. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant.",
  keywords: "influenceur food le havre, créateur contenu food le havre, collaboration restaurant le havre, marketing influenceur le havre",
  openGraph: {
    title: "Influenceurs Food Le Havre - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Le Havre.",
    url: "https://behype.fr/influenceur-food-le-havre",
  },
  alternates: { canonical: "https://behype.fr/influenceur-food-le-havre" },
}

export default function Page() {
  return <CityPageTemplate city="Le Havre" citySlug="le-havre" region="Normandie" influencers={[]} />
}
