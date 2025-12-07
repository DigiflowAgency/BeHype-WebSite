import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Montpellier - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Montpellier. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant montpelliérain.",
  keywords: "influenceur food montpellier, créateur contenu food montpellier, collaboration restaurant montpellier, marketing influenceur montpellier",
  openGraph: {
    title: "Influenceurs Food Montpellier - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Montpellier.",
    url: "https://be-hype.com/influenceur-food-montpellier",
  },
  alternates: { canonical: "https://be-hype.com/influenceur-food-montpellier" },
}

export default function Page() {
  return <CityPageTemplate city="Montpellier" citySlug="montpellier" region="Occitanie" influencers={["@montpellierfood", "@foodiemontpellier", "@montpelliergourmand"]} />
}
