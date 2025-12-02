import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Léna Food Lover (@lena.food.lover) - Influenceuse Food Lille | BEHYPE",
  description: "Collaborez avec Léna Food Lover, passionnée de cuisine et découvertes culinaires à Lille. Avis sincères et coups de cœur. Contactez via BEHYPE.",
  keywords: "lena.food.lover, lena food lover instagram, influenceuse food lille, découvertes culinaires lille, collaboration restaurant lille",
  openGraph: {
    title: "Léna Food Lover (@lena.food.lover) - Influenceuse Food Lille",
    description: "Collaborez avec Léna Food Lover, passionnée de cuisine et découvertes culinaires à Lille.",
    url: "https://behype.fr/influenceur/lena.food.lover",
  },
  alternates: { canonical: "https://behype.fr/influenceur/lena.food.lover" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Léna Food Lover"
      handle="@lena.food.lover"
      city="Lille"
      region="Nord"
      instagramUrl="https://instagram.com/lena.food.lover"
      followers="9K+"
      description="Léna Food Lover partage sa passion débordante pour la gastronomie lilloise avec sincérité et enthousiasme. Cette amoureuse des bonnes choses explore sans relâche la scène food locale, des petites adresses de quartier aux restaurants tendance, toujours avec le même appétit de découverte."
      specialty="Léna Food Lover couvre un large spectre de la restauration lilloise avec une approche généraliste mais curieuse. Sa force réside dans sa capacité à s'émerveiller devant chaque bonne surprise, qu'il s'agisse d'un simple sandwich bien fait ou d'un plat élaboré. Elle excelle particulièrement dans les recommandations du quotidien : où déjeuner rapidement, où prendre un goûter, où commander un bon plat à emporter."
      contentStyle="Le style de Léna Food Lover est naturel et accessible. Les photos sont spontanées, prises sur le vif avant de déguster. Les avis sont sincères, exprimant aussi bien les coups de cœur que les petites déceptions. Le ton est celui d'une amie qui partage ses découvertes sans filtre. Les stories sont particulièrement vivantes, capturant ses réactions en direct lors des dégustations."
      whyCollaborate="Léna Food Lover offre une visibilité authentique auprès d'une audience de proximité. Sa communauté, bien que plus modeste, est très engagée et fait confiance à ses recommandations. Pour les petits établissements qui cherchent à se faire connaître, elle représente un excellent premier pas dans le marketing d'influence. Son approche sincère garantit des retours positifs si la qualité est au rendez-vous."
      stats={[
        { value: "9K+", label: "Followers Instagram" },
        { value: "9%", label: "Taux d'engagement" },
        { value: "55+", label: "Restaurants testés" },
        { value: "15+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "💕", title: "Coups de cœur", description: "Les adresses qui ont fait battre son cœur de foodie" },
        { icon: "🥪", title: "Pause déj", description: "Où manger vite et bien dans le centre de Lille" },
        { icon: "📱", title: "Avis live", description: "Réactions à chaud en stories lors des dégustations" }
      ]}
    />
  )
}
