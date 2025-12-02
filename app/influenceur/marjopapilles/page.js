import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Marjo Papilles (@marjopapilles) - Influenceuse Food Bordeaux | BEHYPE",
  description: "Collaborez avec Marjo Papilles, influenceuse food passionnée à Bordeaux. Gastronomie bordelaise et découvertes culinaires. Contactez via BEHYPE.",
  keywords: "marjopapilles, marjo papilles instagram, influenceuse food bordeaux, gastronomie bordeaux, collaboration restaurant bordeaux",
  openGraph: {
    title: "Marjo Papilles (@marjopapilles) - Influenceuse Food Bordeaux",
    description: "Collaborez avec Marjo Papilles, influenceuse food passionnée à Bordeaux.",
    url: "https://behype.fr/influenceur/marjopapilles",
  },
  alternates: { canonical: "https://behype.fr/influenceur/marjopapilles" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Marjo Papilles"
      handle="@marjopapilles"
      city="Bordeaux"
      region="Gironde"
      instagramUrl="https://instagram.com/marjopapilles"
      followers="28K+"
      description="Marjo Papilles est une épicurienne bordelaise qui partage sa passion pour la gastronomie locale avec générosité et authenticité. Son compte Instagram est devenu une référence pour découvrir les meilleures adresses de Bordeaux et de sa région, des tables étoilées aux bistrots de quartier."
      specialty="Marjo Papilles a développé une expertise complète sur la scène gastronomique bordelaise. Sa spécialité englobe naturellement les accords mets-vins, incontournables dans la capitale mondiale du vin, mais aussi les restaurants de poissons et fruits de mer du Bassin d'Arcachon, les bistrots du centre historique et les nouvelles tables qui font vibrer la rive droite. Son palais affûté lui permet de repérer les établissements qui respectent le terroir aquitain."
      contentStyle="Le style de Marjo Papilles allie élégance bordelaise et chaleur du Sud-Ouest. Les photos mettent en valeur les plats avec des compositions soignées, souvent accompagnées d'un verre de vin local. Les descriptions sont riches en détails gustatifs et en conseils pratiques. Les stories dévoilent ses pérégrinations gourmandes au quotidien. Le ton est passionné et généreux, à l'image de la cuisine qu'elle défend."
      whyCollaborate="Marjo Papilles touche une audience de gastronomes bordelais exigeants, amateurs de bons produits et de belles tables. Sa crédibilité dans le milieu lui permet de recommander aussi bien des adresses accessibles que des restaurants gastronomiques. Pour les établissements bordelais, elle représente un canal privilégié vers une clientèle qui apprécie la qualité et n'hésite pas à investir dans une belle expérience culinaire."
      stats={[
        { value: "28K+", label: "Followers Instagram" },
        { value: "6%", label: "Taux d'engagement" },
        { value: "180+", label: "Restaurants testés" },
        { value: "60+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "🍷", title: "Accords mets-vins", description: "Les meilleures associations avec les vins de Bordeaux" },
        { icon: "🦪", title: "Fruits de mer", description: "Adresses du Bassin d'Arcachon et spécialités océanes" },
        { icon: "⭐", title: "Tables d'exception", description: "Découverte des restaurants gastronomiques bordelais" }
      ]}
    />
  )
}
