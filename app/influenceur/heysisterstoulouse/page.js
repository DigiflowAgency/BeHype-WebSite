import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Hey Sisters Toulouse (@heysisterstoulouse) - Influenceuses Food Toulouse | BEHYPE",
  description: "Collaborez avec Hey Sisters Toulouse, duo de sœurs passionnées par les brunchs et coffee shops à Toulouse. Ambiances cosy et déco. Contactez via BEHYPE.",
  keywords: "heysisterstoulouse, hey sisters toulouse instagram, influenceuses food toulouse, brunchs toulouse, coffee shops toulouse",
  openGraph: {
    title: "Hey Sisters Toulouse (@heysisterstoulouse) - Influenceuses Food Toulouse",
    description: "Collaborez avec Hey Sisters Toulouse, duo de sœurs passionnées par les brunchs et coffee shops.",
    url: "https://behype.fr/influenceur/heysisterstoulouse",
  },
  alternates: { canonical: "https://behype.fr/influenceur/heysisterstoulouse" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Hey Sisters Toulouse"
      handle="@heysisterstoulouse"
      city="Toulouse"
      region="Haute-Garonne"
      instagramUrl="https://instagram.com/heysisterstoulouse"
      followers="14K+"
      description="Hey Sisters Toulouse, c'est l'histoire de deux sœurs unies par leur passion pour les bonnes adresses et les moments de partage. Spécialisées dans les brunchs, coffee shops et adresses cosy de Toulouse, elles partagent leurs découvertes avec une communauté fidèle qui apprécie leur regard à quatre yeux sur la scène food locale."
      specialty="Hey Sisters Toulouse excelle dans la découverte des lieux où il fait bon vivre : les brunchs du dimanche, les coffee shops pour travailler ou papoter, les salons de thé élégants et les adresses instagrammables. Leur double regard permet d'évaluer les établissements sous différents angles, offrant des avis plus complets et nuancés. Elles sont particulièrement reconnues pour leur expertise en matière de déco et d'ambiance, éléments clés pour leur communauté."
      contentStyle="Le contenu de Hey Sisters Toulouse est résolument esthétique et chaleureux. Les photos mettent en scène les deux sœurs dans des décors soignés, créant une atmosphère aspirationnelle qui donne envie de vivre les mêmes moments. Les carrousels avant/après et les stories comparatives permettent de voir les deux points de vue. Le ton est complice et accessible, comme si une amie partageait ses bons plans. L'accent est mis autant sur l'ambiance que sur la nourriture."
      whyCollaborate="Hey Sisters Toulouse touche une audience majoritairement féminine, entre 20 et 35 ans, à la recherche d'expériences à partager entre amies ou en famille. Pour les établissements ciblant cette clientèle (brunchs, salons de thé, coffee shops, restaurants instagrammables), c'est le partenariat idéal. Le duo apporte une double validation qui renforce la crédibilité de la recommandation. Leur attention à la déco permet de valoriser l'ambiance et l'atmosphère de votre lieu."
      stats={[
        { value: "14K+", label: "Followers Instagram" },
        { value: "8%", label: "Taux d'engagement" },
        { value: "90+", label: "Adresses testées" },
        { value: "30+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "🥐", title: "Brunchs du dimanche", description: "Les meilleures adresses pour un brunch parfait entre amies" },
        { icon: "☕", title: "Coffee shops", description: "Cafés cosy pour travailler, lire ou papoter des heures" },
        { icon: "📸", title: "Spots instagrammables", description: "Les plus beaux décors pour vos photos Instagram" }
      ]}
    />
  )
}
