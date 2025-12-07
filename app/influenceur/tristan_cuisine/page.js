import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Tristan Cuisine (@tristan_cuisine) - Influenceur Food Bordeaux | BEHYPE",
  description: "Collaborez avec Tristan Cuisine, influenceur food à Bordeaux. Découvrez ses meilleures adresses bordelaises. Contactez via BEHYPE.",
  keywords: "tristan_cuisine, Tristan Cuisine instagram, influenceur food bordeaux, créateur contenu food bordeaux, collaboration restaurant bordeaux",
  openGraph: {
    title: "Tristan Cuisine (@tristan_cuisine) - Influenceur Food Bordeaux",
    description: "Collaborez avec Tristan Cuisine, influenceur food à Bordeaux.",
    url: "https://be-hype.com/influenceur/tristan_cuisine",
  },
  alternates: { canonical: "https://be-hype.com/influenceur/tristan_cuisine" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Tristan Cuisine"
      handle="@tristan_cuisine"
      city="Bordeaux"
      region="Nouvelle-Aquitaine"
      instagramUrl="https://instagram.com/tristan_cuisine"
      description="Tristan Cuisine est un créateur de contenu food passionné basé à Bordeaux. Spécialiste des bonnes adresses bordelaises, il partage ses découvertes culinaires avec une communauté engagée de foodies en quête de nouvelles expériences gastronomiques."
      specialty="Tristan Cuisine explore la scène food bordelaise avec curiosité et expertise. Sa spécialité couvre les restaurants tendance, les bistrots traditionnels, les nouveaux concepts et les établissements qui font le buzz dans la belle endormie."
      contentStyle="Le contenu de Tristan Cuisine se caractérise par des visuels soignés et des avis authentiques. Les publications mettent en avant l'expérience complète : ambiance, service et qualité des plats."
      whyCollaborate="Collaborer avec Tristan Cuisine, c'est bénéficier d'une visibilité premium auprès d'une audience bordelaise qualifiée. Sa crédibilité établie et son engagement authentique garantissent un impact réel pour votre établissement."
      popularContent={[
        { icon: "🍽️", title: "Tests restaurants", description: "Découvertes des meilleures tables bordelaises" },
        { icon: "📍", title: "Bonnes adresses", description: "Sélection des spots incontournables de Bordeaux" },
        { icon: "🎬", title: "Contenu immersif", description: "Vidéos et photos qui donnent envie" }
      ]}
    />
  )
}
