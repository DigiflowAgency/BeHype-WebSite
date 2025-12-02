import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Marseille Food Lover (@marseille_food_lover) - Influenceur Food Marseille | BEHYPE",
  description: "Collaborez avec Marseille Food Lover, passionné de gastronomie marseillaise. Découvertes et coups de cœur. Contactez via BEHYPE.",
  keywords: "marseille_food_lover, marseille food lover instagram, influenceur food marseille, passionné food marseille, collaboration restaurant marseille",
  openGraph: {
    title: "Marseille Food Lover (@marseille_food_lover) - Influenceur Food Marseille",
    description: "Collaborez avec Marseille Food Lover, passionné de gastronomie marseillaise.",
    url: "https://behype.fr/influenceur/marseille_food_lover",
  },
  alternates: { canonical: "https://behype.fr/influenceur/marseille_food_lover" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Marseille Food Lover"
      handle="@marseille_food_lover"
      city="Marseille"
      region="Bouches-du-Rhône"
      instagramUrl="https://instagram.com/marseille_food_lover"
      followers="12K+"
      description="Marseille Food Lover partage sa passion dévorante pour la gastronomie phocéenne avec sincérité et enthousiasme. Ce créateur de contenu explore sans relâche la scène food locale, partageant ses coups de cœur avec une communauté qui apprécie ses recommandations authentiques."
      specialty="Marseille Food Lover couvre la scène food marseillaise avec une approche passionnée et accessible. Sa force : une curiosité sans limite qui le pousse vers tous types d'adresses. Il excelle dans les coups de cœur sincères et les découvertes spontanées, du petit resto de quartier au nouveau concept tendance."
      contentStyle="Le style est naturel et authentique. Les photos sont spontanées, capturant les plats avant de les dévorer. Les avis sont sincères, exprimant les vrais coups de cœur. Le ton est celui d'un passionné qui partage sa love story avec la food marseillaise. Les stories sont vivantes et engageantes."
      whyCollaborate="Marseille Food Lover offre une recommandation authentique auprès d'une communauté engagée. Son enthousiasme sincère se transmet à ses followers. Pour les restaurants qui méritent d'être découverts, il apporte une visibilité chaleureuse et crédible."
      stats={[
        { value: "12K+", label: "Followers Instagram" },
        { value: "10%", label: "Taux d'engagement" },
        { value: "75+", label: "Coups de cœur" },
        { value: "25+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "💕", title: "Coups de cœur", description: "Les adresses qui font battre le cœur" },
        { icon: "🎯", title: "Découvertes", description: "Nouvelles trouvailles partagées avec passion" },
        { icon: "📱", title: "Avis live", description: "Réactions sincères en stories" }
      ]}
    />
  )
}
