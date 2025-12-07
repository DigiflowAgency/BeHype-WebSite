import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Toulon - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Toulon. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant toulonnais.",
  keywords: "influenceur food toulon, créateur contenu food toulon, collaboration restaurant toulon, marketing influenceur toulon",
  openGraph: {
    title: "Influenceurs Food Toulon - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Toulon.",
    url: "https://be-hype.com/influenceur-food-toulon",
  },
  alternates: { canonical: "https://be-hype.com/influenceur-food-toulon" },
}

export default function Page() {
  return <CityPageTemplate city="Toulon" citySlug="toulon" region="Var" influencers={["@toulonfood", "@foodietoulon", "@vargourmand"]} />
}
