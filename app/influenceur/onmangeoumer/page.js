import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "On Mange Où Mer (@onmangeoumer) - Influenceur Food Marseille | BEHYPE",
  description: "Collaborez avec On Mange Où Mer, spécialiste des restaurants de poisson à Marseille. Fruits de mer et vue mer. Contactez via BEHYPE.",
  keywords: "onmangeoumer, on mange ou mer instagram, influenceur food marseille, restaurants poisson marseille, collaboration restaurant marseille",
  openGraph: {
    title: "On Mange Où Mer (@onmangeoumer) - Influenceur Food Marseille",
    description: "Collaborez avec On Mange Où Mer, spécialiste des restaurants de poisson à Marseille.",
    url: "https://be-hype.com/influenceur/onmangeoumer",
  },
  alternates: { canonical: "https://be-hype.com/influenceur/onmangeoumer" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="On Mange Où Mer"
      handle="@onmangeoumer"
      city="Marseille"
      region="Bouches-du-Rhône"
      instagramUrl="https://instagram.com/onmangeoumer"
      description="On Mange Où Mer est LE spécialiste des restaurants de poisson et fruits de mer à Marseille. Ce créateur de contenu expert guide les amateurs vers les meilleures adresses pour déguster les trésors de la Méditerranée, de la bouillabaisse authentique aux plateaux de fruits de mer."
      specialty="On Mange Où Mer a développé une expertise unique sur les restaurants de la mer à Marseille. Sa spécialité englobe les restaurants de poisson traditionnels, les bars à huîtres, les établissements du Vieux-Port, les adresses des Calanques, et tous les spots où la fraîcheur du poisson est garantie. Il sait distinguer les vraies bonnes tables des attrape-touristes."
      contentStyle="Le contenu d'On Mange Où Mer sent l'iode et le sel. Les photos mettent en valeur les produits de la mer : écailles brillantes, coquillages ouverts, plateaux généreux. Les descriptions détaillent la provenance des produits et la qualité de la cuisson. Les stories emmènent au marché aux poissons et dans les cuisines des restaurants."
      whyCollaborate="On Mange Où Mer est le partenaire incontournable pour les restaurants de poisson et fruits de mer marseillais. Son audience ultra-ciblée est composée d'amateurs de produits de la mer prêts à se déplacer pour une bonne table. Sa spécialisation garantit une crédibilité maximale dans cette catégorie."
      popularContent={[
        { icon: "🐟", title: "Poissons frais", description: "Les meilleures adresses pour du poisson de qualité" },
        { icon: "🦪", title: "Fruits de mer", description: "Où déguster huîtres, oursins et coquillages" },
        { icon: "🥘", title: "Bouillabaisse", description: "Comparatif des vraies bouillabaisses marseillaises" }
      ]}
    />
  )
}
