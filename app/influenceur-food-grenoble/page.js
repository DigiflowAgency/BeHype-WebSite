import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Grenoble - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Grenoble. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant grenoblois.",
  keywords: "influenceur food grenoble, créateur contenu food grenoble, collaboration restaurant grenoble, marketing influenceur grenoble",
  openGraph: {
    title: "Influenceurs Food Grenoble - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Grenoble.",
    url: "https://behype.fr/influenceur-food-grenoble",
  },
  alternates: { canonical: "https://behype.fr/influenceur-food-grenoble" },
}

export default function Page() {
  return <CityPageTemplate city="Grenoble" citySlug="grenoble" region="Isère" influencers={["@grenoblefood", "@foodiegrenoble", "@alpegourmand"]} />
}
