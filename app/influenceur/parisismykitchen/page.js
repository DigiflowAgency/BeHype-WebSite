import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Paris Is My Kitchen (@parisismykitchen) - Influenceur Food Paris | BEHYPE",
  description: "Collaborez avec Paris Is My Kitchen, influenceur food à Paris. Découvrez ses meilleures adresses parisiennes. Contactez via BEHYPE.",
  keywords: "parisismykitchen, Paris Is My Kitchen instagram, influenceur food paris, créateur contenu food paris, collaboration restaurant paris",
  openGraph: {
    title: "Paris Is My Kitchen (@parisismykitchen) - Influenceur Food Paris",
    description: "Collaborez avec Paris Is My Kitchen, influenceur food à Paris.",
    url: "https://be-hype.com/influenceur/parisismykitchen",
  },
  alternates: { canonical: "https://be-hype.com/influenceur/parisismykitchen" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Paris Is My Kitchen"
      handle="@parisismykitchen"
      city="Paris"
      region="Île-de-France"
      instagramUrl="https://instagram.com/parisismykitchen"
      description="Paris Is My Kitchen est un créateur de contenu food passionné basé à Paris. Spécialiste des bonnes adresses parisiennes, il partage ses découvertes culinaires avec une communauté engagée de foodies en quête de nouvelles expériences gastronomiques dans la capitale."
      specialty="Paris Is My Kitchen explore la scène food parisienne avec curiosité et expertise. Sa spécialité couvre les restaurants tendance, les adresses cachées, les nouveaux concepts et les établissements qui font le buzz dans la capitale. Son regard averti permet de dénicher les meilleures tables avant tout le monde."
      contentStyle="Le contenu de Paris Is My Kitchen se caractérise par des visuels soignés et des avis authentiques. Les publications mettent en avant l'expérience complète : ambiance, service et qualité des plats. Les stories dynamiques offrent un aperçu des coulisses et des découvertes en temps réel."
      whyCollaborate="Collaborer avec Paris Is My Kitchen, c'est bénéficier d'une visibilité premium auprès d'une audience parisienne qualifiée. Sa crédibilité établie et son engagement authentique garantissent un impact réel pour votre établissement."
      popularContent={[
        { icon: "🍽️", title: "Tests restaurants", description: "Découvertes des meilleures tables parisiennes" },
        { icon: "📍", title: "Bonnes adresses", description: "Sélection des spots incontournables de Paris" },
        { icon: "🎬", title: "Contenu immersif", description: "Vidéos et photos qui donnent envie" }
      ]}
    />
  )
}
