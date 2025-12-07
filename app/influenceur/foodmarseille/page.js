import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Food Marseille (@foodmarseille) - Influenceur Food Marseille | BEHYPE",
  description: "Collaborez avec Food Marseille, référence food incontournable de la cité phocéenne. Gastronomie méditerranéenne. Contactez via BEHYPE.",
  keywords: "foodmarseille, food marseille instagram, influenceur food marseille, gastronomie marseille, collaboration restaurant marseille",
  openGraph: {
    title: "Food Marseille (@foodmarseille) - Influenceur Food Marseille",
    description: "Collaborez avec Food Marseille, référence food incontournable de la cité phocéenne.",
    url: "https://be-hype.com/influenceur/foodmarseille",
  },
  alternates: { canonical: "https://be-hype.com/influenceur/foodmarseille" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Food Marseille"
      handle="@foodmarseille"
      city="Marseille"
      region="Bouches-du-Rhône"
      instagramUrl="https://instagram.com/foodmarseille"
      description="Food Marseille est LA référence pour découvrir les meilleures adresses de la cité phocéenne. Ce compte emblématique rassemble une communauté passionnée de Marseillais et de visiteurs en quête des saveurs authentiques de la Méditerranée, de la bouillabaisse traditionnelle aux créations contemporaines."
      specialty="Food Marseille couvre l'ensemble de la richesse gastronomique marseillaise avec une expertise reconnue. Sa spécialité englobe les restaurants de poissons et fruits de mer, la cuisine méditerranéenne, les pizzerias napolitaines, les adresses du Vieux-Port et des quartiers populaires. Son ancrage local lui permet de distinguer les vraies bonnes adresses des attrape-touristes."
      contentStyle="Le style de Food Marseille reflète l'énergie solaire de la ville. Les photos baignent dans la lumière méditerranéenne, mettant en valeur les produits de la mer et les terrasses avec vue. Les descriptions sont généreuses et passionnées, à l'image du tempérament marseillais. Les stories quotidiennes partagent la vie food de la ville en temps réel."
      whyCollaborate="Food Marseille offre une visibilité exceptionnelle auprès d'une audience locale et touristique massive. La double cible permet une fréquentation équilibrée tout au long de l'année. Sa crédibilité établie en fait un prescripteur de confiance dont les recommandations remplissent les tables. Pour tout établissement marseillais, c'est le partenaire incontournable."
      popularContent={[
        { icon: "🐟", title: "Fruits de mer", description: "Les meilleures adresses pour déguster les produits de la mer" },
        { icon: "🌊", title: "Vue mer", description: "Restaurants avec terrasse face à la Méditerranée" },
        { icon: "🍕", title: "Pizzas marseillaises", description: "Les pizzerias qui font la fierté de la ville" }
      ]}
    />
  )
}
