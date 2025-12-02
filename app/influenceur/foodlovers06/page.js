import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Food Lovers 06 (@foodlovers06) - Influenceur Food Nice | BEHYPE",
  description: "Collaborez avec Food Lovers 06, créateur de contenu food dans les Alpes-Maritimes. Toute la Côte d'Azur gourmande. Contactez via BEHYPE.",
  keywords: "foodlovers06, food lovers 06 instagram, influenceur food nice, alpes maritimes food, collaboration restaurant nice",
  openGraph: {
    title: "Food Lovers 06 (@foodlovers06) - Influenceur Food Nice",
    description: "Collaborez avec Food Lovers 06, créateur de contenu food dans les Alpes-Maritimes.",
    url: "https://behype.fr/influenceur/foodlovers06",
  },
  alternates: { canonical: "https://behype.fr/influenceur/foodlovers06" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Food Lovers 06"
      handle="@foodlovers06"
      city="Nice"
      region="Alpes-Maritimes"
      instagramUrl="https://instagram.com/foodlovers06"
      followers="15K+"
      description="Food Lovers 06 explore toute la richesse gastronomique du département des Alpes-Maritimes. De Nice à Menton, de Cannes à Grasse, ce créateur de contenu couvre l'ensemble de la Côte d'Azur avec un appétit insatiable pour les bonnes adresses locales et les découvertes culinaires."
      specialty="Food Lovers 06 se démarque par sa couverture géographique étendue sur tout le 06. Sa spécialité : les adresses hors de Nice, souvent moins médiatisées mais tout aussi méritantes. Il excelle dans les recommandations pour Antibes, Cannes, Menton, et les villages de l'arrière-pays. Cette expertise territoriale en fait une référence pour ceux qui veulent explorer au-delà du centre de Nice."
      contentStyle="Le contenu de Food Lovers 06 met en valeur la diversité des paysages azuréens. Les photos capturent aussi bien les terrasses vue mer que les restaurants nichés dans les villages perchés. Les publications incluent toujours des indications géographiques précises pour faciliter les déplacements. Les stories documentent les road trips gourmands à travers le département."
      whyCollaborate="Food Lovers 06 est le partenaire idéal pour les établissements situés hors de Nice intra-muros. Son audience est composée de résidents des Alpes-Maritimes qui se déplacent dans tout le département. Pour les restaurants d'Antibes, Cannes, Villefranche ou de l'arrière-pays, il offre une visibilité précieuse auprès d'une clientèle locale prête à faire le déplacement pour une bonne table."
      stats={[
        { value: "15K+", label: "Followers Instagram" },
        { value: "7%", label: "Taux d'engagement" },
        { value: "130+", label: "Restaurants testés" },
        { value: "35+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "🗺️", title: "Tour du 06", description: "Découvertes dans tout le département des Alpes-Maritimes" },
        { icon: "🏔️", title: "Arrière-pays", description: "Les pépites cachées des villages de montagne" },
        { icon: "🚗", title: "Road trips food", description: "Itinéraires gourmands le long de la Côte d'Azur" }
      ]}
    />
  )
}
