import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Rennes - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Rennes. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant rennais.",
  keywords: "influenceur food rennes, créateur contenu food rennes, collaboration restaurant rennes, marketing influenceur rennes",
  openGraph: {
    title: "Influenceurs Food Rennes - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Rennes.",
    url: "https://be-hype.com/influenceur-food-rennes",
  },
  alternates: { canonical: "https://be-hype.com/influenceur-food-rennes" },
}

export default function Page() {
  return <CityPageTemplate city="Rennes" citySlug="rennes" region="Bretagne" influencers={["@rennesfood", "@foodierennes", "@bretagnegourmand"]} />
}
