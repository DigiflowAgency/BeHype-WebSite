import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Nîmes - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Nîmes. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant.",
  keywords: "influenceur food nîmes, créateur contenu food nîmes, collaboration restaurant nîmes, marketing influenceur nîmes",
  openGraph: {
    title: "Influenceurs Food Nîmes - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Nîmes.",
    url: "https://behype.fr/influenceur-food-nimes",
  },
  alternates: { canonical: "https://behype.fr/influenceur-food-nimes" },
}

export default function Page() {
  return <CityPageTemplate city="Nîmes" citySlug="nimes" region="Gard" influencers={[]} />
}
