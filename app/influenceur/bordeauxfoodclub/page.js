import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Bordeaux Food Club (@bordeauxfoodclub) - Influenceur Food Bordeaux | BEHYPE",
  description: "Collaborez avec Bordeaux Food Club, influenceur food à Bordeaux. Découvrez ses meilleures adresses bordelaises. Contactez via BEHYPE.",
  keywords: "bordeauxfoodclub, Bordeaux Food Club instagram, influenceur food bordeaux, créateur contenu food bordeaux, collaboration restaurant bordeaux",
  openGraph: {
    title: "Bordeaux Food Club (@bordeauxfoodclub) - Influenceur Food Bordeaux",
    description: "Collaborez avec Bordeaux Food Club, influenceur food à Bordeaux.",
    url: "https://be-hype.com/influenceur/bordeauxfoodclub",
  },
  alternates: { canonical: "https://be-hype.com/influenceur/bordeauxfoodclub" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Bordeaux Food Club"
      handle="@bordeauxfoodclub"
      city="Bordeaux"
      region="Nouvelle-Aquitaine"
      instagramUrl="https://instagram.com/bordeauxfoodclub"
      description="Bordeaux Food Club est un créateur de contenu food passionné basé à Bordeaux. Spécialiste des bonnes adresses bordelaises, il partage ses découvertes culinaires avec une communauté engagée de foodies en quête de nouvelles expériences gastronomiques."
      specialty="Bordeaux Food Club explore la scène food bordelaise avec curiosité et expertise. Sa spécialité couvre les restaurants tendance, les bistrots traditionnels, les nouveaux concepts et les établissements qui font le buzz dans la belle endormie."
      contentStyle="Le contenu de Bordeaux Food Club se caractérise par des visuels soignés et des avis authentiques. Les publications mettent en avant l'expérience complète : ambiance, service et qualité des plats."
      whyCollaborate="Collaborer avec Bordeaux Food Club, c'est bénéficier d'une visibilité premium auprès d'une audience bordelaise qualifiée. Sa crédibilité établie et son engagement authentique garantissent un impact réel pour votre établissement."
      popularContent={[
        { icon: "🍽️", title: "Tests restaurants", description: "Découvertes des meilleures tables bordelaises" },
        { icon: "📍", title: "Bonnes adresses", description: "Sélection des spots incontournables de Bordeaux" },
        { icon: "🎬", title: "Contenu immersif", description: "Vidéos et photos qui donnent envie" }
      ]}
    />
  )
}
