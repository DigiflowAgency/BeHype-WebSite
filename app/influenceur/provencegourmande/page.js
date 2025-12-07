import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Provence Gourmande (@provencegourmande) - Influenceur Food Marseille | BEHYPE",
  description: "Collaborez avec Provence Gourmande, ambassadeur du terroir provençal. Gastronomie régionale et producteurs. Contactez via BEHYPE.",
  keywords: "provencegourmande, provence gourmande instagram, influenceur food marseille, terroir provence, collaboration restaurant marseille",
  openGraph: {
    title: "Provence Gourmande (@provencegourmande) - Influenceur Food Marseille",
    description: "Collaborez avec Provence Gourmande, ambassadeur du terroir provençal.",
    url: "https://be-hype.com/influenceur/provencegourmande",
  },
  alternates: { canonical: "https://be-hype.com/influenceur/provencegourmande" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Provence Gourmande"
      handle="@provencegourmande"
      city="Marseille"
      region="Bouches-du-Rhône"
      instagramUrl="https://instagram.com/provencegourmande"
      description="Provence Gourmande célèbre les trésors culinaires de la région avec passion et authenticité. Ce créateur de contenu met en lumière les producteurs locaux, les restaurants qui cuisinent le terroir et les traditions gastronomiques qui font la richesse de la Provence."
      specialty="Provence Gourmande est le spécialiste du terroir provençal. Sa spécialité englobe les restaurants qui travaillent les produits locaux, les marchés de producteurs, les domaines viticoles, les moulins à huile d'olive. Il crée le lien entre la terre et l'assiette, valorisant les circuits courts et les savoir-faire ancestraux."
      contentStyle="Le contenu respire la Provence : couleurs chaudes, lumière du sud, produits du terroir. Les photos célèbrent la beauté des ingrédients bruts et des paysages provençaux. Les stories emmènent sur les marchés et chez les producteurs. Le ton est amoureux du terroir et engagé pour une alimentation locale."
      whyCollaborate="Provence Gourmande touche une audience sensible aux valeurs d'authenticité et de terroir. Pour les restaurants engagés dans une démarche locale, c'est l'ambassadeur parfait. Ses recommandations valorisent les démarches vertueuses et attirent une clientèle prête à payer pour la qualité."
      popularContent={[
        { icon: "🫒", title: "Terroir", description: "Les restaurants qui subliment les produits locaux" },
        { icon: "👨‍🌾", title: "Producteurs", description: "Rencontres avec ceux qui cultivent la Provence" },
        { icon: "🍷", title: "Vins & huiles", description: "Domaines et moulins de la région" }
      ]}
    />
  )
}
