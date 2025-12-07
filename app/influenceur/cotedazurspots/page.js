import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Côte d'Azur Spots (@cotedazurspots) - Influenceur Food Nice | BEHYPE",
  description: "Collaborez avec Côte d'Azur Spots, influenceur food à Nice et sur la Côte d'Azur. Découvrez ses meilleures adresses. Contactez via BEHYPE.",
  keywords: "cotedazurspots, Côte d'Azur Spots instagram, influenceur food nice, créateur contenu food nice, collaboration restaurant nice, côte d'azur",
  openGraph: {
    title: "Côte d'Azur Spots (@cotedazurspots) - Influenceur Food Nice",
    description: "Collaborez avec Côte d'Azur Spots, influenceur food à Nice.",
    url: "https://be-hype.com/influenceur/cotedazurspots",
  },
  alternates: { canonical: "https://be-hype.com/influenceur/cotedazurspots" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Côte d'Azur Spots"
      handle="@cotedazurspots"
      city="Nice"
      region="Côte d'Azur"
      instagramUrl="https://instagram.com/cotedazurspots"
      description="Côte d'Azur Spots est un créateur de contenu food passionné basé à Nice et sur la Côte d'Azur. Spécialiste des bonnes adresses niçoises, il partage ses découvertes culinaires avec une communauté engagée de foodies en quête de nouvelles expériences gastronomiques."
      specialty="Côte d'Azur Spots explore la scène food de Nice et de la Côte d'Azur avec curiosité et expertise. Sa spécialité couvre les restaurants tendance, la cuisine méditerranéenne, les nouveaux concepts et les établissements qui font le buzz sur la Riviera."
      contentStyle="Le contenu de Côte d'Azur Spots se caractérise par des visuels soignés et des avis authentiques. Les publications mettent en avant l'expérience complète : ambiance, service et qualité des plats sous le soleil azuréen."
      whyCollaborate="Collaborer avec Côte d'Azur Spots, c'est bénéficier d'une visibilité premium auprès d'une audience niçoise et azuréenne qualifiée. Sa crédibilité établie et son engagement authentique garantissent un impact réel pour votre établissement."
      popularContent={[
        { icon: "🍽️", title: "Tests restaurants", description: "Découvertes des meilleures tables niçoises" },
        { icon: "📍", title: "Bonnes adresses", description: "Sélection des spots incontournables de Nice" },
        { icon: "🎬", title: "Contenu immersif", description: "Vidéos et photos qui donnent envie" }
      ]}
    />
  )
}
