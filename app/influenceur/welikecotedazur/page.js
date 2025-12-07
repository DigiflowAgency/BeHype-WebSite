import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "We Like Côte d'Azur (@welikecotedazur) - Influenceur Food Nice | BEHYPE",
  description: "Collaborez avec We Like Côte d'Azur, influenceur food à Nice et sur la Côte d'Azur. Découvrez ses meilleures adresses. Contactez via BEHYPE.",
  keywords: "welikecotedazur, We Like Côte d'Azur instagram, influenceur food nice, créateur contenu food nice, collaboration restaurant nice, côte d'azur",
  openGraph: {
    title: "We Like Côte d'Azur (@welikecotedazur) - Influenceur Food Nice",
    description: "Collaborez avec We Like Côte d'Azur, influenceur food à Nice.",
    url: "https://be-hype.com/influenceur/welikecotedazur",
  },
  alternates: { canonical: "https://be-hype.com/influenceur/welikecotedazur" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="We Like Côte d'Azur"
      handle="@welikecotedazur"
      city="Nice"
      region="Côte d'Azur"
      instagramUrl="https://instagram.com/welikecotedazur"
      description="We Like Côte d'Azur est un créateur de contenu food passionné basé à Nice et sur la Côte d'Azur. Spécialiste des bonnes adresses niçoises, il partage ses découvertes culinaires avec une communauté engagée de foodies en quête de nouvelles expériences gastronomiques."
      specialty="We Like Côte d'Azur explore la scène food de Nice et de la Côte d'Azur avec curiosité et expertise. Sa spécialité couvre les restaurants tendance, la cuisine méditerranéenne, les nouveaux concepts et les établissements qui font le buzz sur la Riviera."
      contentStyle="Le contenu de We Like Côte d'Azur se caractérise par des visuels soignés et des avis authentiques. Les publications mettent en avant l'expérience complète : ambiance, service et qualité des plats sous le soleil azuréen."
      whyCollaborate="Collaborer avec We Like Côte d'Azur, c'est bénéficier d'une visibilité premium auprès d'une audience niçoise et azuréenne qualifiée. Sa crédibilité établie et son engagement authentique garantissent un impact réel pour votre établissement."
      popularContent={[
        { icon: "🍽️", title: "Tests restaurants", description: "Découvertes des meilleures tables niçoises" },
        { icon: "📍", title: "Bonnes adresses", description: "Sélection des spots incontournables de Nice" },
        { icon: "🎬", title: "Contenu immersif", description: "Vidéos et photos qui donnent envie" }
      ]}
    />
  )
}
