import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Halal Food Lille (@halal.food.lille) - Influenceur Food Lille | BEHYPE",
  description: "Collaborez avec Halal Food Lille, influenceur food à Lille. Découvrez ses meilleures adresses lilloises. Contactez via BEHYPE.",
  keywords: "halal.food.lille, Halal Food Lille instagram, influenceur food lille, créateur contenu food lille, collaboration restaurant lille",
  openGraph: {
    title: "Halal Food Lille (@halal.food.lille) - Influenceur Food Lille",
    description: "Collaborez avec Halal Food Lille, influenceur food à Lille.",
    url: "https://be-hype.com/influenceur/halal.food.lille",
  },
  alternates: { canonical: "https://be-hype.com/influenceur/halal.food.lille" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Halal Food Lille"
      handle="@halal.food.lille"
      city="Lille"
      region="Hauts-de-France"
      instagramUrl="https://instagram.com/halal.food.lille"
      description="Halal Food Lille est un créateur de contenu food passionné basé à Lille. Spécialiste des bonnes adresses lilloises, il partage ses découvertes culinaires avec une communauté engagée de foodies en quête de nouvelles expériences gastronomiques."
      specialty="Halal Food Lille explore la scène food lilloise avec curiosité et expertise. Sa spécialité couvre les restaurants tendance, les estaminets traditionnels, les nouveaux concepts et les établissements qui font le buzz dans la métropole lilloise."
      contentStyle="Le contenu de Halal Food Lille se caractérise par des visuels soignés et des avis authentiques. Les publications mettent en avant l'expérience complète : ambiance, service et qualité des plats."
      whyCollaborate="Collaborer avec Halal Food Lille, c'est bénéficier d'une visibilité premium auprès d'une audience lilloise qualifiée. Sa crédibilité établie et son engagement authentique garantissent un impact réel pour votre établissement."
      popularContent={[
        { icon: "🍽️", title: "Tests restaurants", description: "Découvertes des meilleures tables lilloises" },
        { icon: "📍", title: "Bonnes adresses", description: "Sélection des spots incontournables de Lille" },
        { icon: "🎬", title: "Contenu immersif", description: "Vidéos et photos qui donnent envie" }
      ]}
    />
  )
}
