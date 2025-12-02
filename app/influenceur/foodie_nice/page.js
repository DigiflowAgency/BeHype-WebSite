import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Foodie Nice (@foodie_nice) - Influenceur Food Nice | BEHYPE",
  description: "Collaborez avec Foodie Nice, créateur de contenu food moderne à Nice. Tendances et découvertes culinaires. Contactez via BEHYPE.",
  keywords: "foodie_nice, foodie nice instagram, influenceur food nice, tendances food nice, collaboration restaurant nice",
  openGraph: {
    title: "Foodie Nice (@foodie_nice) - Influenceur Food Nice",
    description: "Collaborez avec Foodie Nice, créateur de contenu food moderne à Nice.",
    url: "https://behype.fr/influenceur/foodie_nice",
  },
  alternates: { canonical: "https://behype.fr/influenceur/foodie_nice" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Foodie Nice"
      handle="@foodie_nice"
      city="Nice"
      region="Alpes-Maritimes"
      instagramUrl="https://instagram.com/foodie_nice"
      followers="13K+"
      description="Foodie Nice est un créateur de contenu qui capture la scène food niçoise avec un œil moderne et créatif. Son approche visuelle soignée et son sens des tendances en font une référence pour les jeunes gourmets de la Côte d'Azur à la recherche d'expériences culinaires photogéniques."
      specialty="Foodie Nice se distingue par son expertise sur les adresses instagrammables et les concepts tendance. Sa spécialité : les restaurants au décor soigné, les plats photogéniques, les nouveaux concepts qui font le buzz. Il excelle dans l'identification des spots qui combinent belle déco et bonne cuisine. Son radar sur les tendances food (bowls, brunchs healthy, café de spécialité) en fait un early adopter des nouveaux concepts."
      contentStyle="Le contenu de Foodie Nice est visuellement léché et cohérent. Les photos respectent une esthétique reconnaissable avec des compositions soignées et des couleurs harmonieuses. Les flat lays sont particulièrement travaillés. Le feed Instagram forme un ensemble cohérent qui attire les marques. Les stories sont utilisées pour des contenus plus spontanés qui humanisent le compte."
      whyCollaborate="Foodie Nice touche une audience jeune et connectée, très active sur les réseaux sociaux. Pour les établissements qui soignent leur présentation et leur décor, c'est le partenaire idéal. Son style visuel valorise les efforts déco et permet de créer du contenu que les clients voudront repartager. L'effet de mimétisme sur Instagram génère une visibilité organique supplémentaire."
      stats={[
        { value: "13K+", label: "Followers Instagram" },
        { value: "7%", label: "Taux d'engagement" },
        { value: "80+", label: "Spots partagés" },
        { value: "30+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "📸", title: "Spots instagrammables", description: "Les adresses les plus photogéniques de Nice" },
        { icon: "🎨", title: "Feed esthétique", description: "Contenu visuel soigné et cohérent" },
        { icon: "💫", title: "Tendances", description: "Les concepts food en vogue sur la Riviera" }
      ]}
    />
  )
}
