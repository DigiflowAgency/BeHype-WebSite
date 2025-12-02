import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Lyon City Crunch (@lyoncitycrunch) - Influenceur Food Lyon | BEHYPE",
  description: "Collaborez avec Lyon City Crunch, média lifestyle et food de référence à Lyon. Large audience et contenu premium. Contactez via BEHYPE.",
  keywords: "lyoncitycrunch, lyon city crunch instagram, influenceur food lyon, média food lyon, collaboration restaurant lyon",
  openGraph: {
    title: "Lyon City Crunch (@lyoncitycrunch) - Influenceur Food Lyon",
    description: "Collaborez avec Lyon City Crunch, média lifestyle et food de référence à Lyon.",
    url: "https://behype.fr/influenceur/lyoncitycrunch",
  },
  alternates: { canonical: "https://behype.fr/influenceur/lyoncitycrunch" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Lyon City Crunch"
      handle="@lyoncitycrunch"
      city="Lyon"
      region="Rhône"
      instagramUrl="https://instagram.com/lyoncitycrunch"
      followers="55K+"
      description="Lyon City Crunch est le média digital lifestyle de référence pour les Lyonnais. Couvrant food, sorties, culture et bons plans, ce compte incontournable rassemble une communauté massive qui fait confiance à ses recommandations pour profiter du meilleur de la vie lyonnaise."
      specialty="Lyon City Crunch couvre l'ensemble du lifestyle lyonnais avec une approche éditoriale professionnelle. En food, sa spécialité inclut les nouvelles ouvertures, les événements gastronomiques, les concepts innovants et les guides saisonniers. L'équipe de rédacteurs teste rigoureusement chaque adresse. Les formats 'top' et 'guide' sont des références consultées par des milliers de Lyonnais."
      contentStyle="Le style de Lyon City Crunch est magazine et professionnel. Les visuels suivent une charte graphique reconnaissable, avec des photos de qualité et une mise en page travaillée. Les articles sont bien documentés et informatifs. La variété des formats (posts, carrousels, reels, stories, guides) assure une présence diversifiée. Le ton est enthousiate mais crédible."
      whyCollaborate="Lyon City Crunch offre la plus grande visibilité locale possible grâce à son audience massive. L'impact d'une publication touche une part significative des Lyonnais connectés. Le professionnalisme de l'équipe garantit un contenu de qualité qui valorise les partenaires. Les différents formats permettent des collaborations adaptées à chaque objectif et budget."
      stats={[
        { value: "55K+", label: "Followers Instagram" },
        { value: "5%", label: "Taux d'engagement" },
        { value: "500+", label: "Adresses couvertes" },
        { value: "150+", label: "Partenariats" }
      ]}
      popularContent={[
        { icon: "📰", title: "Actualités food", description: "Couverture des événements et ouvertures lyonnaises" },
        { icon: "📋", title: "Tops & guides", description: "Classements de référence par catégorie" },
        { icon: "🎉", title: "Événements", description: "Agenda des rendez-vous food et lifestyle" }
      ]}
    />
  )
}
