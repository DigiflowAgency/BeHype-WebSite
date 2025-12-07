import CityPageTemplate from '../components/CityPageTemplate'

export const metadata = {
  title: "Influenceurs Food Clermont-Ferrand - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Clermont-Ferrand. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant.",
  keywords: "influenceur food clermont-ferrand, créateur contenu food clermont-ferrand, collaboration restaurant clermont-ferrand, marketing influenceur clermont-ferrand",
  openGraph: {
    title: "Influenceurs Food Clermont-Ferrand - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Clermont-Ferrand.",
    url: "https://be-hype.com/influenceur-food-clermont-ferrand",
  },
  alternates: { canonical: "https://be-hype.com/influenceur-food-clermont-ferrand" },
}

export default function Page() {
  return <CityPageTemplate city="Clermont-Ferrand" citySlug="clermont-ferrand" region="Puy-de-Dôme" influencers={[]} />
}
