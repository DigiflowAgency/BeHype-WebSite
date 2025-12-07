import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Foodie Marseille (@foodie_marseille) - Influenceur Food Marseille | BEHYPE",
  description: "Collaborez avec Foodie Marseille, créateur de contenu food moderne à Marseille. Tendances et découvertes. Contactez via BEHYPE.",
  keywords: "foodie_marseille, foodie marseille instagram, influenceur food marseille, tendances food marseille, collaboration restaurant marseille",
  openGraph: {
    title: "Foodie Marseille (@foodie_marseille) - Influenceur Food Marseille",
    description: "Collaborez avec Foodie Marseille, créateur de contenu food moderne à Marseille.",
    url: "https://be-hype.com/influenceur/foodie_marseille",
  },
  alternates: { canonical: "https://be-hype.com/influenceur/foodie_marseille" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Foodie Marseille"
      handle="@foodie_marseille"
      city="Marseille"
      region="Bouches-du-Rhône"
      instagramUrl="https://instagram.com/foodie_marseille"
      description="Foodie Marseille capture la scène food phocéenne avec un œil moderne et créatif. Ce créateur de contenu identifie les tendances, les concepts innovants et les adresses instagrammables qui font de Marseille une destination food de plus en plus prisée."
      specialty="Foodie Marseille se distingue par son expertise sur les tendances food. Sa spécialité : les nouveaux concepts, les adresses au décor soigné, les plats photogéniques. Il repère les spots qui combinent esthétique et qualité, et identifie les tendances avant qu'elles deviennent mainstream."
      contentStyle="Le contenu est visuellement léché avec une esthétique contemporaine. Les photos respectent une cohérence visuelle reconnaissable. Les flat lays et compositions sont particulièrement travaillés. Les reels capturent l'énergie des lieux tendance."
      whyCollaborate="Foodie Marseille touche une audience jeune et connectée. Pour les établissements au concept moderne ou au décor soigné, c'est le partenaire idéal. Son style visuel valorise les efforts esthétiques et génère du contenu repartageable."
      popularContent={[
        { icon: "📸", title: "Spots instagrammables", description: "Les adresses les plus photogéniques" },
        { icon: "🔥", title: "Tendances", description: "Les concepts food en vogue à Marseille" },
        { icon: "🎨", title: "Feed esthétique", description: "Contenu visuel soigné et cohérent" }
      ]}
    />
  )
}
