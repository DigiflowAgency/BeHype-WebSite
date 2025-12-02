import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Nice Food Advisor (@nicefoodadvisor) - Influenceur Food Nice | BEHYPE",
  description: "Collaborez avec Nice Food Advisor, conseiller culinaire de confiance à Nice. Avis éclairés et recommandations. Contactez via BEHYPE.",
  keywords: "nicefoodadvisor, nice food advisor instagram, influenceur food nice, avis restaurants nice, collaboration restaurant nice",
  openGraph: {
    title: "Nice Food Advisor (@nicefoodadvisor) - Influenceur Food Nice",
    description: "Collaborez avec Nice Food Advisor, conseiller culinaire de confiance à Nice.",
    url: "https://behype.fr/influenceur/nicefoodadvisor",
  },
  alternates: { canonical: "https://behype.fr/influenceur/nicefoodadvisor" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Nice Food Advisor"
      handle="@nicefoodadvisor"
      city="Nice"
      region="Alpes-Maritimes"
      instagramUrl="https://instagram.com/nicefoodadvisor"
      followers="17K+"
      description="Nice Food Advisor est le conseiller culinaire de confiance pour tous ceux qui veulent bien manger à Nice. Avec une approche méthodique et des critères d'évaluation clairs, ce créateur de contenu fournit des avis éclairés qui aident sa communauté à faire les bons choix pour chaque occasion."
      specialty="Nice Food Advisor se distingue par sa méthodologie rigoureuse d'évaluation. Chaque établissement est noté selon des critères objectifs : qualité des plats, service, cadre, rapport qualité-prix. Sa spécialité : les avis comparatifs qui aident à choisir entre plusieurs options. Il excelle dans les recommandations par occasion (romantique, business, famille, groupe) qui guident précisément les décisions."
      contentStyle="Le contenu de Nice Food Advisor est structuré et informatif. Les posts suivent un format d'évaluation reconnaissable avec des notes détaillées par critère. Les photos sont représentatives et honnêtes. Les carrousels comparatifs sont particulièrement appréciés. Le ton est objectif et mesuré, évitant les superlatifs excessifs. Les points positifs comme négatifs sont mentionnés."
      whyCollaborate="Nice Food Advisor offre une validation crédible grâce à son approche objective. Les établissements bien notés bénéficient d'une recommandation perçue comme fiable et méritée. Son système de notation permet de mettre en avant les forces spécifiques de chaque restaurant. L'audience apprécie cette approche rationnelle et suit les conseils pour des décisions éclairées."
      stats={[
        { value: "17K+", label: "Followers Instagram" },
        { value: "6%", label: "Taux d'engagement" },
        { value: "130+", label: "Établissements notés" },
        { value: "40+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "⭐", title: "Notes détaillées", description: "Évaluations objectives sur plusieurs critères" },
        { icon: "🔄", title: "Comparatifs", description: "Aide au choix entre plusieurs options similaires" },
        { icon: "🎯", title: "Par occasion", description: "Recommandations ciblées selon le contexte du repas" }
      ]}
    />
  )
}
