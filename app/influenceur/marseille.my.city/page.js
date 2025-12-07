import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Marseille My City (@marseille.my.city) - Influenceur Food Marseille | BEHYPE",
  description: "Collaborez avec Marseille My City, média lifestyle et food de la cité phocéenne. Art de vivre marseillais. Contactez via BEHYPE.",
  keywords: "marseille.my.city, marseille my city instagram, influenceur food marseille, lifestyle marseille, collaboration restaurant marseille",
  openGraph: {
    title: "Marseille My City (@marseille.my.city) - Influenceur Food Marseille",
    description: "Collaborez avec Marseille My City, média lifestyle et food de la cité phocéenne.",
    url: "https://be-hype.com/influenceur/marseille.my.city",
  },
  alternates: { canonical: "https://be-hype.com/influenceur/marseille.my.city" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Marseille My City"
      handle="@marseille.my.city"
      city="Marseille"
      region="Bouches-du-Rhône"
      instagramUrl="https://instagram.com/marseille.my.city"
      description="Marseille My City célèbre la cité phocéenne dans toute sa diversité : food, culture, sorties, bons plans. Ce média digital est devenu une référence pour les Marseillais qui veulent profiter pleinement de leur ville et pour les visiteurs qui veulent la découvrir comme des locaux."
      specialty="Marseille My City couvre le lifestyle marseillais sous tous ses angles avec une section food particulièrement développée. Sa force : la connaissance encyclopédique de la ville, quartier par quartier. Les recommandations food s'inscrivent dans un contexte plus large de vie locale, avec des suggestions d'activités complémentaires."
      contentStyle="Le contenu de Marseille My City est varié et professionnel. La section food propose des formats reconnaissables : tops thématiques, découvertes du week-end, ouvertures récentes. Les visuels sont travaillés et cohérents. Le ton est fier et enthousiaste, celui d'amoureux de leur ville qui veulent la faire rayonner."
      whyCollaborate="Marseille My City offre une visibilité massive auprès d'une audience diversifiée de Marseillais et de visiteurs. L'intégration dans un média lifestyle permet de toucher des personnes au-delà du simple intérêt food. Les formats variés permettent des collaborations adaptées à différents objectifs."
      popularContent={[
        { icon: "🌆", title: "Vie marseillaise", description: "Le meilleur de la cité phocéenne au quotidien" },
        { icon: "📋", title: "Tops locaux", description: "Classements des meilleures adresses par catégorie" },
        { icon: "🎉", title: "Week-ends", description: "Idées de sorties food pour le week-end" }
      ]}
    />
  )
}
