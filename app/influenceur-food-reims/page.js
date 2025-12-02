import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Reims - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Reims. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant rémois.",
  keywords: "influenceur food reims, créateur contenu food reims, collaboration restaurant reims, marketing influenceur reims",
  openGraph: {
    title: "Influenceurs Food Reims - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Reims.",
    url: "https://behype.fr/influenceur-food-reims",
  },
  alternates: { canonical: "https://behype.fr/influenceur-food-reims" },
}

export default function Page() {
  return <CityPageTemplate city="Reims" citySlug="reims" region="Grand Est" influencers={["@reimsfood", "@foodiereims", "@champagnegourmand"]} />
}
