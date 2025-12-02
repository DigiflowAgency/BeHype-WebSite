import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Bord French Food (@bordfrenchfood) - Influenceur Food Bordeaux | BEHYPE",
  description: "Collaborez avec Bord French Food, créateur de contenu food moderne à Bordeaux. Tendances culinaires et nouvelles adresses. Contactez via BEHYPE.",
  keywords: "bordfrenchfood, bord french food instagram, influenceur food bordeaux, tendances food bordeaux, collaboration restaurant bordeaux",
  openGraph: {
    title: "Bord French Food (@bordfrenchfood) - Influenceur Food Bordeaux",
    description: "Collaborez avec Bord French Food, créateur de contenu food moderne à Bordeaux.",
    url: "https://behype.fr/influenceur/bordfrenchfood",
  },
  alternates: { canonical: "https://behype.fr/influenceur/bordfrenchfood" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Bord French Food"
      handle="@bordfrenchfood"
      city="Bordeaux"
      region="Gironde"
      instagramUrl="https://instagram.com/bordfrenchfood"
      followers="19K+"
      description="Bord French Food capture l'essence de la nouvelle scène food bordelaise avec un regard contemporain et créatif. Ce créateur de contenu met en lumière les concepts innovants, les chefs qui réinventent la cuisine du Sud-Ouest et les adresses qui font de Bordeaux une destination gastronomique incontournable."
      specialty="Bord French Food s'est positionné sur les tendances culinaires qui façonnent le Bordeaux moderne. Sa spécialité : les restaurants qui revisitent la tradition, les concepts de street food premium, les bars à vins naturels et les adresses instagrammables. Il excelle particulièrement dans la couverture des nouvelles ouvertures et des pop-ups éphémères. Son réseau dans le milieu de la restauration lui donne accès aux informations avant tout le monde."
      contentStyle="Le contenu de Bord French Food est visuellement percutant et moderne. Les photos sont travaillées avec une esthétique contemporaine qui met en valeur la créativité des plats. Les vidéos dynamiques capturent l'énergie des lieux et les techniques des chefs. Le ton éditorial est informé et enthousiaste, celui d'un insider qui partage ses découvertes avec passion. Les stories offrent des avant-premières exclusives."
      whyCollaborate="Bord French Food touche une audience jeune et branchée, à l'affût des dernières tendances food. Pour les concepts innovants et les restaurants qui cherchent à attirer une clientèle moderne, il est le partenaire idéal. Son style de contenu valorise particulièrement les présentations originales et les ambiances contemporaines. Sa réactivité sur les nouvelles ouvertures garantit une visibilité rapide pour les nouveaux établissements."
      stats={[
        { value: "19K+", label: "Followers Instagram" },
        { value: "7%", label: "Taux d'engagement" },
        { value: "120+", label: "Adresses testées" },
        { value: "45+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "🆕", title: "Nouvelles ouvertures", description: "Les premiers à découvrir les nouveaux restaurants bordelais" },
        { icon: "🔥", title: "Concepts tendance", description: "Les adresses qui font le buzz dans la métropole" },
        { icon: "🎬", title: "Reels créatifs", description: "Vidéos dynamiques mettant en scène les plats signature" }
      ]}
    />
  )
}
