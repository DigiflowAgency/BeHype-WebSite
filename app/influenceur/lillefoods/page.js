import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Lille Foods (@lillefoods) - Influenceur Food Lille | BEHYPE",
  description: "Collaborez avec Lille Foods, créateur de contenu food dynamique à Lille. Photos appétissantes et découvertes culinaires. Contactez via BEHYPE.",
  keywords: "lillefoods, lille foods instagram, influenceur food lille, créateur contenu culinaire lille, collaboration restaurant lille",
  openGraph: {
    title: "Lille Foods (@lillefoods) - Influenceur Food Lille",
    description: "Collaborez avec Lille Foods, créateur de contenu food dynamique à Lille.",
    url: "https://behype.fr/influenceur/lillefoods",
  },
  alternates: { canonical: "https://behype.fr/influenceur/lillefoods" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Lille Foods"
      handle="@lillefoods"
      city="Lille"
      region="Nord"
      instagramUrl="https://instagram.com/lillefoods"
      followers="18K+"
      description="Lille Foods capture l'essence de la scène food lilloise avec un œil moderne et créatif. Ce créateur de contenu dynamique explore la métropole à la recherche des meilleures expériences culinaires, des street food aux tables gastronomiques, partageant ses découvertes avec une communauté gourmande et curieuse."
      specialty="Lille Foods excelle dans la mise en valeur de la diversité culinaire lilloise. Sa spécialité couvre particulièrement les tendances food du moment : bowls healthy, smash burgers, cuisines fusion, desserts instagrammables. Son approche résolument moderne attire une audience jeune et connectée, à l'affût des dernières nouveautés. Il sait repérer les concepts innovants avant qu'ils ne deviennent mainstream et les présenter de manière attractive à sa communauté."
      contentStyle="Le contenu de Lille Foods est visuellement percutant, avec des photos qui mettent en valeur les textures, les couleurs et la générosité des plats. L'esthétique est contemporaine, avec une attention particulière aux compositions et à la lumière. Les reels sont dynamiques et rythmés, parfaits pour capturer l'attention sur les réseaux sociaux. Les légendes sont concises mais informatives, avec les détails essentiels pour passer à l'action."
      whyCollaborate="Lille Foods attire une audience jeune et active sur les réseaux sociaux, très réceptive aux nouvelles expériences. Collaborer avec ce créateur permet de toucher les 18-35 ans lillois qui représentent une clientèle à fort potentiel. Son style visuel moderne valorise particulièrement les établissements au concept original ou à la présentation soignée. La viralité de ses contenus offre une portée qui dépasse souvent sa base de followers."
      stats={[
        { value: "18K+", label: "Followers Instagram" },
        { value: "8%", label: "Taux d'engagement" },
        { value: "100+", label: "Restaurants testés" },
        { value: "35+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "📸", title: "Food porn", description: "Photos ultra appétissantes des plats les plus photogéniques" },
        { icon: "🔥", title: "Tendances", description: "Les concepts food en vogue à découvrir absolument" },
        { icon: "🎥", title: "Reels viraux", description: "Vidéos courtes et percutantes qui donnent faim" }
      ]}
    />
  )
}
