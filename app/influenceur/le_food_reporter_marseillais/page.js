import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Le Food Reporter Marseillais (@le_food_reporter_marseillais) - Influenceur Food Marseille | BEHYPE",
  description: "Collaborez avec Le Food Reporter Marseillais, journaliste food amateur à Marseille. Reportages et enquêtes culinaires. Contactez via BEHYPE.",
  keywords: "le_food_reporter_marseillais, le food reporter marseillais instagram, influenceur food marseille, reportages food marseille, collaboration restaurant marseille",
  openGraph: {
    title: "Le Food Reporter Marseillais (@le_food_reporter_marseillais) - Influenceur Food Marseille",
    description: "Collaborez avec Le Food Reporter Marseillais, journaliste food amateur à Marseille.",
    url: "https://be-hype.com/influenceur/le_food_reporter_marseillais",
  },
  alternates: { canonical: "https://be-hype.com/influenceur/le_food_reporter_marseillais" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Le Food Reporter Marseillais"
      handle="@le_food_reporter_marseillais"
      city="Marseille"
      region="Bouches-du-Rhône"
      instagramUrl="https://instagram.com/le_food_reporter_marseillais"
      description="Le Food Reporter Marseillais aborde la scène culinaire locale avec l'œil d'un journaliste et la passion d'un gourmand. Ses reportages approfondis racontent les histoires derrière les plats, les parcours des restaurateurs et les traditions qui font la richesse gastronomique de Marseille."
      specialty="Le Food Reporter Marseillais excelle dans le format reportage et enquête. Sa spécialité : creuser au-delà de l'assiette pour raconter les histoires des établissements. Il s'intéresse aux savoir-faire, aux parcours de vie, aux traditions familiales, aux producteurs locaux. Chaque publication est un mini-documentaire qui donne de la profondeur aux recommandations."
      contentStyle="Le contenu du Food Reporter Marseillais est narratif et immersif. Les carrousels racontent des histoires complètes avec un fil rouge. Les photos alternent portraits de restaurateurs, coulisses de cuisine et plats servis. Les légendes sont développées, avec un vrai travail d'écriture. Les stories documentent les rencontres et les interviews."
      whyCollaborate="Le Food Reporter Marseillais offre un format de collaboration original : le reportage. Au lieu d'un simple post promotionnel, il propose de raconter votre histoire, votre parcours, votre savoir-faire. Cette approche génère un contenu riche et mémorable qui crée une connexion émotionnelle avec l'audience. Parfait pour les établissements avec une histoire à raconter."
      popularContent={[
        { icon: "📰", title: "Reportages", description: "Enquêtes approfondies sur les établissements" },
        { icon: "👤", title: "Portraits", description: "Histoires de vie des restaurateurs marseillais" },
        { icon: "🎬", title: "Coulisses", description: "Immersion dans les cuisines et les métiers" }
      ]}
    />
  )
}
