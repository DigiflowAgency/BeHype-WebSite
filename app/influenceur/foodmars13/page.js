import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Food Mars 13 (@foodmars13) - Influenceur Food Marseille | BEHYPE",
  description: "Collaborez avec Food Mars 13, créateur de contenu food passionné à Marseille. Découvertes et tests. Contactez via BEHYPE.",
  keywords: "foodmars13, food mars 13 instagram, influenceur food marseille, tests restaurants marseille, collaboration restaurant marseille",
  openGraph: {
    title: "Food Mars 13 (@foodmars13) - Influenceur Food Marseille",
    description: "Collaborez avec Food Mars 13, créateur de contenu food passionné à Marseille.",
    url: "https://be-hype.com/influenceur/foodmars13",
  },
  alternates: { canonical: "https://be-hype.com/influenceur/foodmars13" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Food Mars 13"
      handle="@foodmars13"
      city="Marseille"
      region="Bouches-du-Rhône"
      instagramUrl="https://instagram.com/foodmars13"
      description="Food Mars 13 explore la scène food marseillaise avec un appétit insatiable et une curiosité sans limite. Ce créateur de contenu local parcourt tous les quartiers du 13 à la recherche des meilleures adresses, des institutions historiques aux nouveaux concepts."
      specialty="Food Mars 13 couvre l'ensemble de la diversité culinaire marseillaise sans préjugés. Sa force : une connaissance terrain de tous les arrondissements, des quartiers populaires aux zones plus chics. Il excelle dans les recommandations authentiques qui reflètent la vraie vie food des Marseillais, loin des circuits touristiques."
      contentStyle="Le style de Food Mars 13 est direct et marseillais dans l'âme. Les photos sont sincères, montrant les plats comme ils arrivent. Les avis sont francs et sans détour, avec l'accent du sud qu'on devine entre les lignes. Les stories sont spontanées et reflètent les découvertes du quotidien. Le ton est celui d'un pote qui connaît les bons plans."
      whyCollaborate="Food Mars 13 touche une audience de vrais Marseillais qui cherchent des recommandations locales. Pour les restaurants de quartier et les adresses authentiques, c'est le partenaire idéal. Sa crédibilité vient de son ancrage local et de ses avis sincères. Les followers suivent ses conseils pour leur quotidien food."
      popularContent={[
        { icon: "📍", title: "Quartier par quartier", description: "Exploration food de chaque arrondissement" },
        { icon: "👌", title: "Vrais avis", description: "Tests sincères sans langue de bois" },
        { icon: "🏠", title: "Locaux only", description: "Les adresses que seuls les Marseillais connaissent" }
      ]}
    />
  )
}
