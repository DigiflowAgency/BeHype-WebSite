import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Agathe & Fanny (@agathe.fanny) - Influenceuses Food Lille | BEHYPE",
  description: "Collaborez avec Agathe & Fanny, duo d'amies passionnées de food à Lille. Sorties entre copines et bonnes adresses. Contactez via BEHYPE.",
  keywords: "agathe.fanny, agathe fanny instagram, influenceuses food lille, sorties lille, restaurants lille",
  openGraph: {
    title: "Agathe & Fanny (@agathe.fanny) - Influenceuses Food Lille",
    description: "Collaborez avec Agathe & Fanny, duo d'amies passionnées de food à Lille.",
    url: "https://behype.fr/influenceur/agathe.fanny",
  },
  alternates: { canonical: "https://behype.fr/influenceur/agathe.fanny" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Agathe & Fanny"
      handle="@agathe.fanny"
      city="Lille"
      region="Nord"
      instagramUrl="https://instagram.com/agathe.fanny"
      followers="11K+"
      description="Agathe & Fanny, c'est l'histoire d'une amitié scellée autour des bonnes tables lilloises. Ce duo complice partage ses sorties gourmandes et ses découvertes avec une authenticité rafraîchissante. Leur compte est une invitation à vivre des moments de convivialité entre amis autour de bons petits plats."
      specialty="Agathe & Fanny excellent dans les recommandations pour les sorties entre amis. Leur spécialité : les adresses parfaites pour un anniversaire, une soirée filles, un apéro décontracté ou un repas de groupe. Leur double regard permet d'évaluer les établissements sous différents angles : l'une plus sensible à l'ambiance, l'autre au contenu de l'assiette. Ensemble, elles offrent des avis complets et nuancés."
      contentStyle="Le contenu d'Agathe & Fanny respire la bonne humeur et la complicité. Les photos les montrent en situation, partageant des plats et des moments de rire. Le format 'before/after' avec leurs deux avis respectifs est particulièrement apprécié. Les stories capturent la spontanéité de leurs sorties. Le ton est celui de deux copines qui partagent leurs bons plans, créant une proximité avec les followers."
      whyCollaborate="Agathe & Fanny touchent une audience qui cherche des idées de sorties entre amis. Pour les établissements qui proposent des formules groupe, des ambiances conviviales ou des concepts de partage, elles sont des ambassadrices idéales. La double validation renforce la crédibilité des recommandations. Leur contenu met en avant l'expérience sociale autant que culinaire, un angle parfait pour les lieux de vie."
      stats={[
        { value: "11K+", label: "Followers Instagram" },
        { value: "8%", label: "Taux d'engagement" },
        { value: "65+", label: "Sorties partagées" },
        { value: "20+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "👯", title: "Sorties duo", description: "Tests à deux avec double avis et recommandations" },
        { icon: "🎉", title: "Idées soirées", description: "Les meilleures adresses pour sortir entre amis" },
        { icon: "📊", title: "Double verdict", description: "Format comparatif avec les avis d'Agathe et Fanny" }
      ]}
    />
  )
}
