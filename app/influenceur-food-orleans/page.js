import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Orléans - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Orléans. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant.",
  keywords: "influenceur food orléans, créateur contenu food orléans, collaboration restaurant orléans, marketing influenceur orléans",
  openGraph: {
    title: "Influenceurs Food Orléans - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Orléans.",
    url: "https://be-hype.com/influenceur-food-orleans",
  },
  alternates: { canonical: "https://be-hype.com/influenceur-food-orleans" },
}

export default function Page() {
  return <CityPageTemplate city="Orléans" citySlug="orleans" region="Loiret" influencers={[]} />
}
