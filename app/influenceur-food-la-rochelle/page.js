import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food La Rochelle - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à La Rochelle. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant.",
  keywords: "influenceur food la rochelle, créateur contenu food la rochelle, collaboration restaurant la rochelle, marketing influenceur la rochelle",
  openGraph: {
    title: "Influenceurs Food La Rochelle - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à La Rochelle.",
    url: "https://be-hype.com/influenceur-food-la-rochelle",
  },
  alternates: { canonical: "https://be-hype.com/influenceur-food-la-rochelle" },
}

export default function Page() {
  return <CityPageTemplate city="La Rochelle" citySlug="la-rochelle" region="Charente-Maritime" influencers={[]} />
}
