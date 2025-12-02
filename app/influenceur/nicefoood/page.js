import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Nice Foood (@nicefoood) - Influenceur Food Nice | BEHYPE",
  description: "Collaborez avec Nice Foood, référence food incontournable à Nice. Cuisine méditerranéenne et bonnes adresses. Contactez via BEHYPE.",
  keywords: "nicefoood, nice foood instagram, influenceur food nice, gastronomie nice, collaboration restaurant nice",
  openGraph: {
    title: "Nice Foood (@nicefoood) - Influenceur Food Nice",
    description: "Collaborez avec Nice Foood, référence food incontournable à Nice.",
    url: "https://behype.fr/influenceur/nicefoood",
  },
  alternates: { canonical: "https://behype.fr/influenceur/nicefoood" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Nice Foood"
      handle="@nicefoood"
      city="Nice"
      region="Alpes-Maritimes"
      instagramUrl="https://instagram.com/nicefoood"
      followers="32K+"
      description="Nice Foood est LA référence pour découvrir les meilleures adresses de la Côte d'Azur. Ce compte Instagram emblématique rassemble une communauté passionnée de gastronomes niçois et de visiteurs en quête des saveurs authentiques de la Méditerranée, du petit socca du Vieux-Nice aux tables étoilées."
      specialty="Nice Foood couvre l'ensemble de la richesse gastronomique niçoise avec une expertise reconnue. Sa spécialité englobe la cuisine nissarde traditionnelle (socca, pissaladière, pan bagnat), les restaurants de poissons et fruits de mer, les adresses italiennes authentiques et les tables méditerranéennes créatives. Son ancrage local lui permet de distinguer les vraies bonnes adresses des attrape-touristes."
      contentStyle="Le style de Nice Foood reflète la luminosité et les couleurs de la Côte d'Azur. Les photos baignent dans la lumière méditerranéenne, mettant en valeur les plats ensoleillés et les terrasses avec vue mer. Les descriptions sont généreuses en informations pratiques et en conseils d'initiés. Les stories quotidiennes partagent les découvertes du moment et les événements food de la région."
      whyCollaborate="Nice Foood offre une visibilité exceptionnelle auprès d'une audience locale et touristique. La double cible (habitants et visiteurs) permet de maintenir une fréquentation constante tout au long de l'année. Sa crédibilité établie en fait un prescripteur de confiance dont les recommandations se traduisent par des tables remplies. Pour tout établissement niçois, c'est le partenaire incontournable."
      stats={[
        { value: "32K+", label: "Followers Instagram" },
        { value: "6%", label: "Taux d'engagement" },
        { value: "250+", label: "Restaurants testés" },
        { value: "80+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "🌊", title: "Vue mer", description: "Les meilleurs restaurants avec terrasse face à la Méditerranée" },
        { icon: "🍕", title: "Cuisine nissarde", description: "Les adresses authentiques pour goûter aux spécialités locales" },
        { icon: "☀️", title: "Terrasses", description: "Où profiter du soleil azuréen en déjeunant" }
      ]}
    />
  )
}
