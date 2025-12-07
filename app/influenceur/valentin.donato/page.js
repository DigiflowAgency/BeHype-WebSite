import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Valentin Donato (@valentin.donato) - Influenceur Food Nice | BEHYPE",
  description: "Collaborez avec Valentin Donato, influenceur food à Nice et sur la Côte d'Azur. Découvrez ses meilleures adresses. Contactez via BEHYPE.",
  keywords: "valentin.donato, Valentin Donato instagram, influenceur food nice, créateur contenu food nice, collaboration restaurant nice, côte d'azur",
  openGraph: {
    title: "Valentin Donato (@valentin.donato) - Influenceur Food Nice",
    description: "Collaborez avec Valentin Donato, influenceur food à Nice.",
    url: "https://be-hype.com/influenceur/valentin.donato",
  },
  alternates: { canonical: "https://be-hype.com/influenceur/valentin.donato" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Valentin Donato"
      handle="@valentin.donato"
      city="Nice"
      region="Côte d'Azur"
      instagramUrl="https://instagram.com/valentin.donato"
      description="Valentin Donato est un créateur de contenu food passionné basé à Nice et sur la Côte d'Azur. Spécialiste des bonnes adresses niçoises, il partage ses découvertes culinaires avec une communauté engagée de foodies en quête de nouvelles expériences gastronomiques."
      specialty="Valentin Donato explore la scène food de Nice et de la Côte d'Azur avec curiosité et expertise. Sa spécialité couvre les restaurants tendance, la cuisine méditerranéenne, les nouveaux concepts et les établissements qui font le buzz sur la Riviera."
      contentStyle="Le contenu de Valentin Donato se caractérise par des visuels soignés et des avis authentiques. Les publications mettent en avant l'expérience complète : ambiance, service et qualité des plats sous le soleil azuréen."
      whyCollaborate="Collaborer avec Valentin Donato, c'est bénéficier d'une visibilité premium auprès d'une audience niçoise et azuréenne qualifiée. Sa crédibilité établie et son engagement authentique garantissent un impact réel pour votre établissement."
      popularContent={[
        { icon: "🍽️", title: "Tests restaurants", description: "Découvertes des meilleures tables niçoises" },
        { icon: "📍", title: "Bonnes adresses", description: "Sélection des spots incontournables de Nice" },
        { icon: "🎬", title: "Contenu immersif", description: "Vidéos et photos qui donnent envie" }
      ]}
    />
  )
}
