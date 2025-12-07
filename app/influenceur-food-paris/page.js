import CityPageTemplate from '../components/CityPageTemplate'
import { cityData } from '../data/cityData'

export const metadata = {
  title: "Influenceurs Food Paris - Top Créateurs 2025 | BEHYPE",
  description: "Découvrez les meilleurs influenceurs food à Paris. Collaborez avec des créateurs locaux pour booster la visibilité de votre restaurant parisien.",
  keywords: "influenceur food paris, créateur contenu food paris, collaboration restaurant paris, marketing influenceur paris",
  openGraph: {
    title: "Influenceurs Food Paris - Top Créateurs 2025",
    description: "Découvrez les meilleurs influenceurs food à Paris. Boostez la visibilité de votre restaurant.",
    url: "https://be-hype.com/influenceur-food-paris",
  },
  alternates: {
    canonical: "https://be-hype.com/influenceur-food-paris",
  },
}

export default function InfluenceurFoodParis() {
  const influencers = [
    { name: "Strop Bon", handle: "@strop_bon", slug: "strop_bon" },
    { name: "Alan Food", handle: "@alan_food", slug: "alan_food" },
    { name: "Le Requin 92", handle: "@lerequin92officiel", slug: "lerequin92officiel" },
    { name: "My Bouffe", handle: "@my.bouffe", slug: "my.bouffe" },
    { name: "Le Paris d Alexis", handle: "@leparisdalexis", slug: "leparisdalexis" },
    { name: "Hunter Food", handle: "@hunterfood.fr", slug: "hunterfood.fr" },
    { name: "Paname a Faim", handle: "@panameafaim", slug: "panameafaim" },
    { name: "Paris ZigZag", handle: "@pariszigzag", slug: "pariszigzag" },
    { name: "Food Lovers Paris", handle: "@foodloverspvris", slug: "foodloverspvris" },
    { name: "The Paris Food Guide", handle: "@theparisfoodguide", slug: "theparisfoodguide" },
    { name: "Paris Secret", handle: "@parissecret", slug: "parissecret" },
    { name: "Top Paris Resto", handle: "@topparisresto", slug: "topparisresto" },
    { name: "Bonnes Adresses de Paris", handle: "@bonnesadressesdeparis", slug: "bonnesadressesdeparis" },
    { name: "Le Guide Ultime", handle: "@leguideultime", slug: "leguideultime" },
    { name: "La Grande Bouffe", handle: "@lagrande_bouffe", slug: "lagrande_bouffe" },
    { name: "Cook With Bash", handle: "@cookwithbash", slug: "cookwithbash" },
    { name: "Spicy Noemie", handle: "@spicynoemie", slug: "spicynoemie" },
    { name: "Le Street Foodist", handle: "@lestreetfoodist", slug: "lestreetfoodist" },
    { name: "Paris Is My Kitchen", handle: "@parisismykitchen", slug: "parisismykitchen" },
    { name: "Hungry Consti", handle: "@hungryconsti", slug: "hungryconsti" }
  ]

  return (
    <CityPageTemplate
      city="Paris"
      citySlug="paris"
      region="Île-de-France"
      influencers={influencers}
      cityData={cityData["Paris"]}
    />
  )
}
