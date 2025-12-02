import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Nice Food Addict (@nice_food_addict) - Influenceur Food Nice | BEHYPE",
  description: "Collaborez avec Nice Food Addict, créateur de contenu food passionné à Nice. Addiction gourmande et découvertes. Contactez via BEHYPE.",
  keywords: "nice_food_addict, nice food addict instagram, influenceur food nice, passionné food nice, collaboration restaurant nice",
  openGraph: {
    title: "Nice Food Addict (@nice_food_addict) - Influenceur Food Nice",
    description: "Collaborez avec Nice Food Addict, créateur de contenu food passionné à Nice.",
    url: "https://behype.fr/influenceur/nice_food_addict",
  },
  alternates: { canonical: "https://behype.fr/influenceur/nice_food_addict" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Nice Food Addict"
      handle="@nice_food_addict"
      city="Nice"
      region="Alpes-Maritimes"
      instagramUrl="https://instagram.com/nice_food_addict"
      followers="11K+"
      description="Nice Food Addict assume pleinement son addiction à la bonne cuisine niçoise. Ce créateur de contenu partage sa passion dévorante pour les découvertes culinaires avec une énergie communicative, transformant chaque repas en une aventure gustative à partager avec sa communauté."
      specialty="Nice Food Addict excelle dans l'exploration enthousiaste de tous les types de cuisines présents à Nice. Sa force : une curiosité sans limite qui l'amène à tester aussi bien la socca traditionnelle que le dernier restaurant fusion. Il est particulièrement reconnu pour ses tests de fast-food premium, burgers gourmet et comfort food. Son addiction assumée au sucré en fait aussi une référence pour les pâtisseries et desserts."
      contentStyle="Le contenu de Nice Food Addict transpire l'enthousiasme. Les photos capturent des plats généreux et réconfortants. Les réactions aux premières bouchées sont expressives et sincères. Le ton est passionné, parfois excessif, mais toujours authentique. Les stories sont particulièrement vivantes, documentant en temps réel les sessions de dégustation. Les reels mettent en scène les plats les plus addictifs."
      whyCollaborate="Nice Food Addict apporte une énergie positive à chaque collaboration. Son enthousiasme communicatif donne envie de découvrir les adresses qu'il recommande. Pour les établissements qui proposent une cuisine généreuse et addictive, il est l'ambassadeur idéal. Son audience apprécie les recommandations sans retenue pour les vrais plaisirs gourmands."
      stats={[
        { value: "11K+", label: "Followers Instagram" },
        { value: "10%", label: "Taux d'engagement" },
        { value: "75+", label: "Addictions testées" },
        { value: "20+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "🤤", title: "Plats addictifs", description: "Les spécialités dont on ne peut plus se passer" },
        { icon: "🍔", title: "Comfort food", description: "Les meilleures adresses pour un repas réconfortant" },
        { icon: "🍰", title: "Sweet addiction", description: "Les desserts et pâtisseries qui créent la dépendance" }
      ]}
    />
  )
}
