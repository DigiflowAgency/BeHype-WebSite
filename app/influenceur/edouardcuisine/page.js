import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Edouard Cuisine (@edouardcuisine) - Influenceur Food Bordeaux | BEHYPE",
  description: "Collaborez avec Edouard Cuisine, influenceur food à Bordeaux. Découvrez ses meilleures adresses bordelaises. Contactez via BEHYPE.",
  keywords: "edouardcuisine, Edouard Cuisine instagram, influenceur food bordeaux, créateur contenu food bordeaux, collaboration restaurant bordeaux",
  openGraph: {
    title: "Edouard Cuisine (@edouardcuisine) - Influenceur Food Bordeaux",
    description: "Collaborez avec Edouard Cuisine, influenceur food à Bordeaux.",
    url: "https://be-hype.com/influenceur/edouardcuisine",
  },
  alternates: { canonical: "https://be-hype.com/influenceur/edouardcuisine" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Edouard Cuisine"
      handle="@edouardcuisine"
      city="Bordeaux"
      region="Nouvelle-Aquitaine"
      instagramUrl="https://instagram.com/edouardcuisine"
      description="Edouard Cuisine est un créateur de contenu food passionné basé à Bordeaux. Spécialiste des bonnes adresses bordelaises, il partage ses découvertes culinaires avec une communauté engagée de foodies en quête de nouvelles expériences gastronomiques."
      specialty="Edouard Cuisine explore la scène food bordelaise avec curiosité et expertise. Sa spécialité couvre les restaurants tendance, les bistrots traditionnels, les nouveaux concepts et les établissements qui font le buzz dans la belle endormie."
      contentStyle="Le contenu de Edouard Cuisine se caractérise par des visuels soignés et des avis authentiques. Les publications mettent en avant l'expérience complète : ambiance, service et qualité des plats."
      whyCollaborate="Collaborer avec Edouard Cuisine, c'est bénéficier d'une visibilité premium auprès d'une audience bordelaise qualifiée. Sa crédibilité établie et son engagement authentique garantissent un impact réel pour votre établissement."
      popularContent={[
        { icon: "🍽️", title: "Tests restaurants", description: "Découvertes des meilleures tables bordelaises" },
        { icon: "📍", title: "Bonnes adresses", description: "Sélection des spots incontournables de Bordeaux" },
        { icon: "🎬", title: "Contenu immersif", description: "Vidéos et photos qui donnent envie" }
      ]}
    />
  )
}
