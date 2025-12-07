import CityPageTemplate from '../components/CityPageTemplate'
import { cityData } from '../data/cityData'

export const metadata = {
  title: "Influenceurs Food Nice - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Nice. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant niçois.",
  keywords: "influenceur food nice, créateur contenu food nice, collaboration restaurant nice, marketing influenceur nice",
  openGraph: {
    title: "Influenceurs Food Nice - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Nice.",
    url: "https://be-hype.com/influenceur-food-nice",
  },
  alternates: { canonical: "https://be-hype.com/influenceur-food-nice" },
}

export default function Page() {
  const influencers = [
    { name: "Foode Nice", handle: "@foodenice", slug: "foodenice" },
    { name: "Food Lover Nice", handle: "@food.lover.nice", slug: "food.lover.nice" },
    { name: "Saspi Mathieu", handle: "@saspi.mathieu", slug: "saspi.mathieu" },
    { name: "Ambre Verywhere", handle: "@ambreverywhere", slug: "ambreverywhere" },
    { name: "Côte d'Azur Spots", handle: "@cotedazurspots", slug: "cotedazurspots" },
    { name: "Valentin Donato", handle: "@valentin.donato", slug: "valentin.donato" },
    { name: "Nice Food Guide", handle: "@nice_foodguide", slug: "nice_foodguide" },
    { name: "We Like Côte d'Azur", handle: "@welikecotedazur", slug: "welikecotedazur" },
    { name: "Nature Voyages Découvertes", handle: "@nature_voyages_decouvertes", slug: "nature_voyages_decouvertes" },
    { name: "Amour Boire et Manger", handle: "@amour.boire.et.manger", slug: "amour.boire.et.manger" },
    { name: "Nice Storique", handle: "@nicestorique", slug: "nicestorique" },
    { name: "Rémi Ragnar", handle: "@remi_ragnar", slug: "remi_ragnar" },
    { name: "Twins B Fit", handle: "@twinsb_fit", slug: "twinsb_fit" },
    { name: "Roro Cuistot", handle: "@roro_cuistot", slug: "roro_cuistot" }
  ]

  return <CityPageTemplate city="Nice" citySlug="nice" region="Côte d'Azur" influencers={influencers} cityData={cityData["Nice"]} />
}
