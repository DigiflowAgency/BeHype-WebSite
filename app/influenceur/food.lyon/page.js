import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Food Lyon (@food.lyon) - Influenceur Food Lyon | BEHYPE",
  description: "Collaborez avec Food Lyon, influenceur food à Lyon. Découvrez ses meilleures adresses lyonnaises. Contactez via BEHYPE.",
  keywords: "food.lyon, Food Lyon instagram, influenceur food lyon, créateur contenu food lyon, collaboration restaurant lyon",
  openGraph: {
    title: "Food Lyon (@food.lyon) - Influenceur Food Lyon",
    description: "Collaborez avec Food Lyon, influenceur food à Lyon.",
    url: "https://be-hype.com/influenceur/food.lyon",
  },
  alternates: { canonical: "https://be-hype.com/influenceur/food.lyon" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Food Lyon"
      handle="@food.lyon"
      city="Lyon"
      region="Auvergne-Rhône-Alpes"
      instagramUrl="https://instagram.com/food.lyon"
      description="Food Lyon est un créateur de contenu food passionné basé à Lyon. Spécialiste des bonnes adresses lyonnaises, il partage ses découvertes culinaires avec une communauté engagée de foodies en quête de nouvelles expériences gastronomiques."
      specialty="Food Lyon explore la scène food lyonnaise avec curiosité et expertise. Sa spécialité couvre les restaurants tendance, les bouchons traditionnels, les nouveaux concepts et les établissements qui font le buzz dans la capitale des Gaules."
      contentStyle="Le contenu de Food Lyon se caractérise par des visuels soignés et des avis authentiques. Les publications mettent en avant l'expérience complète : ambiance, service et qualité des plats."
      whyCollaborate="Collaborer avec Food Lyon, c'est bénéficier d'une visibilité premium auprès d'une audience lyonnaise qualifiée. Sa crédibilité établie et son engagement authentique garantissent un impact réel pour votre établissement."
      popularContent={[
        { icon: "🍽️", title: "Tests restaurants", description: "Découvertes des meilleures tables lyonnaises" },
        { icon: "📍", title: "Bonnes adresses", description: "Sélection des spots incontournables de Lyon" },
        { icon: "🎬", title: "Contenu immersif", description: "Vidéos et photos qui donnent envie" }
      ]}
    />
  )
}
