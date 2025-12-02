import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Lyon Map (@lyon.map) - Influenceur Food Lyon | BEHYPE",
  description: "Collaborez avec Lyon Map, guide des meilleures adresses lyonnaises. Cartographie food complète. Contactez via BEHYPE.",
  keywords: "lyon.map, lyon map instagram, influenceur food lyon, guide restaurants lyon, collaboration restaurant lyon",
  openGraph: {
    title: "Lyon Map (@lyon.map) - Influenceur Food Lyon",
    description: "Collaborez avec Lyon Map, guide des meilleures adresses lyonnaises.",
    url: "https://behype.fr/influenceur/lyon.map",
  },
  alternates: { canonical: "https://behype.fr/influenceur/lyon.map" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Lyon Map"
      handle="@lyon.map"
      city="Lyon"
      region="Rhône"
      instagramUrl="https://instagram.com/lyon.map"
      followers="18K+"
      description="Lyon Map cartographie les meilleures adresses de la ville des Lumières avec une approche géographique unique. Ce guide visuel permet de découvrir Lyon quartier par quartier, offrant une carte vivante des bonnes tables, des bars à vins et des spots incontournables de chaque arrondissement."
      specialty="Lyon Map se distingue par son approche géolocalisée de la recommandation culinaire. Sa spécialité : les guides par quartier et par arrondissement, permettant de découvrir les pépites à deux pas de chez soi ou d'explorer un nouveau coin de la ville. Il excelle dans les recommandations de proximité et les circuits découverte pour explorer Lyon à pied, de bonne adresse en bonne adresse."
      contentStyle="Le contenu de Lyon Map est organisé de manière intuitive et pratique. Les posts sont souvent accompagnés de mini-cartes ou d'indications géographiques précises. Les carrousels 'balade gourmande' proposent des itinéraires thématiques. Les stories géolocalisées permettent de situer instantanément chaque recommandation. L'approche cartographique rend le contenu particulièrement utile et sauvegardable."
      whyCollaborate="Lyon Map offre une visibilité de proximité très efficace. Les recommandations géolocalisées touchent directement les habitants du quartier et ceux qui le fréquentent. Pour les restaurants de quartier qui cherchent à développer leur clientèle locale, c'est le partenaire idéal. Le format cartographique rend les publications très partageables et utiles."
      stats={[
        { value: "18K+", label: "Followers Instagram" },
        { value: "8%", label: "Taux d'engagement" },
        { value: "200+", label: "Adresses mappées" },
        { value: "45+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "🗺️", title: "Par quartier", description: "Guides des meilleures adresses par arrondissement" },
        { icon: "🚶", title: "Balades gourmandes", description: "Circuits découverte à pied de bonne adresse en bonne adresse" },
        { icon: "📍", title: "Géolocalisation", description: "Recommandations précises avec localisation exacte" }
      ]}
    />
  )
}
