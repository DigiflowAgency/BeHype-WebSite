import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Lyon Eats (@lyoneats) - Influenceur Food Lyon | BEHYPE",
  description: "Collaborez avec Lyon Eats, créateur de contenu food gourmand à Lyon. Tests et découvertes culinaires. Contactez via BEHYPE.",
  keywords: "lyoneats, lyon eats instagram, influenceur food lyon, tests restaurants lyon, collaboration restaurant lyon",
  openGraph: {
    title: "Lyon Eats (@lyoneats) - Influenceur Food Lyon",
    description: "Collaborez avec Lyon Eats, créateur de contenu food gourmand à Lyon.",
    url: "https://behype.fr/influenceur/lyoneats",
  },
  alternates: { canonical: "https://behype.fr/influenceur/lyoneats" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Lyon Eats"
      handle="@lyoneats"
      city="Lyon"
      region="Rhône"
      instagramUrl="https://instagram.com/lyoneats"
      followers="16K+"
      description="Lyon Eats est un créateur de contenu food passionné qui dévore Lyon une adresse à la fois. Son appétit insatiable pour les découvertes culinaires l'amène à explorer tous les coins de la ville, partageant avec enthousiasme ses meilleures trouvailles avec sa communauté gourmande."
      specialty="Lyon Eats couvre la scène food lyonnaise dans toute sa diversité, sans préjugés ni frontières. Sa force : une curiosité qui le pousse aussi bien vers les bouchons traditionnels que vers le dernier food court trendy. Il excelle particulièrement dans les tests de comfort food (burgers, pizzas, tacos) et les formats comparatifs qui départagent les meilleures adresses d'une catégorie."
      contentStyle="Le style de Lyon Eats est dynamique et engageant. Les photos sont appétissantes et spontanées, capturant les plats tels qu'ils arrivent à table. Les vidéos de dégustation avec réactions sont populaires. Le ton est enthousiaste et accessible, celui d'un pote qui partage ses bonnes adresses. Les stories documentent les sessions de test en temps réel avec la communauté."
      whyCollaborate="Lyon Eats apporte une énergie positive et un enthousiasme communicatif à chaque collaboration. Son audience apprécie les recommandations sincères et les tests comparatifs. Pour les restaurants de comfort food et les nouvelles adresses qui veulent se faire connaître, il offre une visibilité efficace auprès d'une communauté engagée et réactive."
      stats={[
        { value: "16K+", label: "Followers Instagram" },
        { value: "9%", label: "Taux d'engagement" },
        { value: "110+", label: "Restaurants testés" },
        { value: "35+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "🍔", title: "Tests burgers", description: "Comparatifs des meilleurs burgers de Lyon" },
        { icon: "🎬", title: "Réactions live", description: "Vidéos de dégustation avec avis à chaud" },
        { icon: "⚔️", title: "Versus", description: "Duels entre adresses concurrentes" }
      ]}
    />
  )
}
