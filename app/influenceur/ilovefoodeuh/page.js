import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "I Love Foodeuh (@ilovefoodeuh) - Influenceur Food Marseille | BEHYPE",
  description: "Collaborez avec I Love Foodeuh, créateur de contenu food fun à Marseille. Découvertes avec humour. Contactez via BEHYPE.",
  keywords: "ilovefoodeuh, i love foodeuh instagram, influenceur food marseille, food fun marseille, collaboration restaurant marseille",
  openGraph: {
    title: "I Love Foodeuh (@ilovefoodeuh) - Influenceur Food Marseille",
    description: "Collaborez avec I Love Foodeuh, créateur de contenu food fun à Marseille.",
    url: "https://be-hype.com/influenceur/ilovefoodeuh",
  },
  alternates: { canonical: "https://be-hype.com/influenceur/ilovefoodeuh" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="I Love Foodeuh"
      handle="@ilovefoodeuh"
      city="Marseille"
      region="Bouches-du-Rhône"
      instagramUrl="https://instagram.com/ilovefoodeuh"
      description="I Love Foodeuh apporte une touche d'humour et de légèreté bienvenue dans l'univers food marseillais. Ce créateur de contenu explore la scène culinaire locale avec un regard amusé et des commentaires savoureux qui font autant sourire que saliver."
      specialty="I Love Foodeuh excelle dans le divertissement food. Sa spécialité : les tests décalés, les challenges culinaires, les comparatifs hilarants, les réactions exagérées devant les plats. Il couvre tous types d'adresses avec une préférence pour la comfort food qui se prête bien au format entertainment. Son approche fun rend le contenu très partageable."
      contentStyle="Le contenu d'I Love Foodeuh est dynamique et drôle. Les vidéos sont montées avec rythme, effets et punchlines. Les réactions aux plats sont théâtrales et mémorables. Le ton est léger mais les avis restent pertinents derrière l'humour. Les stories sont interactives avec des jeux et des sondages. L'énergie du compte est contagieuse."
      whyCollaborate="I Love Foodeuh apporte une visibilité fun et différenciante. Les collaborations génèrent du contenu viral grâce au format divertissant. Les restaurants qui jouent le jeu de l'humour gagnent une image sympathique et moderne. Son audience jeune réagit fortement et partage massivement le contenu qui la fait rire."
      popularContent={[
        { icon: "😂", title: "Tests décalés", description: "Découvertes culinaires avec humour et second degré" },
        { icon: "🎬", title: "Réactions", description: "Premières bouchées avec expressions mémorables" },
        { icon: "🏆", title: "Challenges", description: "Défis food et comparatifs amusants" }
      ]}
    />
  )
}
