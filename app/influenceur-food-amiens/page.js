import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Amiens - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Amiens. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant.",
  keywords: "influenceur food amiens, créateur contenu food amiens, collaboration restaurant amiens, marketing influenceur amiens",
  openGraph: {
    title: "Influenceurs Food Amiens - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Amiens.",
    url: "https://behype.fr/influenceur-food-amiens",
  },
  alternates: { canonical: "https://behype.fr/influenceur-food-amiens" },
}

export default function Page() {
  return <CityPageTemplate city="Amiens" citySlug="amiens" region="Somme" influencers={[]} />
}
