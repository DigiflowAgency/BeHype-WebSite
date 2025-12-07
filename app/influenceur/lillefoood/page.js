import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Lille Foood (@lillefoood) - Influenceur Food Lille | BEHYPE",
  description: "Collaborez avec Lille Foood, influenceur food à Lille. Découvrez ses meilleures adresses lilloises. Contactez via BEHYPE.",
  keywords: "lillefoood, Lille Foood instagram, influenceur food lille, créateur contenu food lille, collaboration restaurant lille",
  openGraph: {
    title: "Lille Foood (@lillefoood) - Influenceur Food Lille",
    description: "Collaborez avec Lille Foood, influenceur food à Lille.",
    url: "https://be-hype.com/influenceur/lillefoood",
  },
  alternates: { canonical: "https://be-hype.com/influenceur/lillefoood" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Lille Foood"
      handle="@lillefoood"
      city="Lille"
      region="Hauts-de-France"
      instagramUrl="https://instagram.com/lillefoood"
      description="Lille Foood est un créateur de contenu food passionné basé à Lille. Spécialiste des bonnes adresses lilloises, il partage ses découvertes culinaires avec une communauté engagée de foodies en quête de nouvelles expériences gastronomiques."
      specialty="Lille Foood explore la scène food lilloise avec curiosité et expertise. Sa spécialité couvre les restaurants tendance, les estaminets traditionnels, les nouveaux concepts et les établissements qui font le buzz dans la métropole lilloise."
      contentStyle="Le contenu de Lille Foood se caractérise par des visuels soignés et des avis authentiques. Les publications mettent en avant l'expérience complète : ambiance, service et qualité des plats."
      whyCollaborate="Collaborer avec Lille Foood, c'est bénéficier d'une visibilité premium auprès d'une audience lilloise qualifiée. Sa crédibilité établie et son engagement authentique garantissent un impact réel pour votre établissement."
      popularContent={[
        { icon: "🍽️", title: "Tests restaurants", description: "Découvertes des meilleures tables lilloises" },
        { icon: "📍", title: "Bonnes adresses", description: "Sélection des spots incontournables de Lille" },
        { icon: "🎬", title: "Contenu immersif", description: "Vidéos et photos qui donnent envie" }
      ]}
    />
  )
}
