import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Nice - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Nice. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant niçois.",
  keywords: "influenceur food nice, créateur contenu food nice, collaboration restaurant nice, marketing influenceur nice",
  openGraph: {
    title: "Influenceurs Food Nice - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Nice.",
    url: "https://behype.fr/influenceur-food-nice",
  },
  alternates: { canonical: "https://behype.fr/influenceur-food-nice" },
}

export default function Page() {
  return <CityPageTemplate city="Nice" citySlug="nice" region="Côte d'Azur" influencers={["@nicefood", "@cotedazurfoodie", "@nicegourmand"]} />
}
