import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Strasbourg - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Strasbourg. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant strasbourgeois.",
  keywords: "influenceur food strasbourg, créateur contenu food strasbourg, collaboration restaurant strasbourg, marketing influenceur strasbourg",
  openGraph: {
    title: "Influenceurs Food Strasbourg - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Strasbourg.",
    url: "https://be-hype.com/influenceur-food-strasbourg",
  },
  alternates: { canonical: "https://be-hype.com/influenceur-food-strasbourg" },
}

export default function Page() {
  return <CityPageTemplate city="Strasbourg" citySlug="strasbourg" region="Grand Est" influencers={["@strasbourgfood", "@foodiestrasbourg", "@alsacegourmand"]} />
}
