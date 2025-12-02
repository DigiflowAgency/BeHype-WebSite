import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Dijon - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Dijon. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant dijonnais.",
  keywords: "influenceur food dijon, créateur contenu food dijon, collaboration restaurant dijon, marketing influenceur dijon",
  openGraph: {
    title: "Influenceurs Food Dijon - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Dijon.",
    url: "https://behype.fr/influenceur-food-dijon",
  },
  alternates: { canonical: "https://behype.fr/influenceur-food-dijon" },
}

export default function Page() {
  return <CityPageTemplate city="Dijon" citySlug="dijon" region="Bourgogne" influencers={["@dijonfood", "@foodiedijon", "@bourgognegourmand"]} />
}
