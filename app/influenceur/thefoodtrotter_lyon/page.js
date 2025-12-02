import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "The Food Trotter Lyon (@thefoodtrotter_lyon) - Influenceur Food Lyon | BEHYPE",
  description: "Collaborez avec The Food Trotter Lyon, explorateur culinaire passionné à Lyon. Découvertes et voyages gourmands. Contactez via BEHYPE.",
  keywords: "thefoodtrotter_lyon, the food trotter lyon instagram, influenceur food lyon, découvertes culinaires lyon, collaboration restaurant lyon",
  openGraph: {
    title: "The Food Trotter Lyon (@thefoodtrotter_lyon) - Influenceur Food Lyon",
    description: "Collaborez avec The Food Trotter Lyon, explorateur culinaire passionné à Lyon.",
    url: "https://behype.fr/influenceur/thefoodtrotter_lyon",
  },
  alternates: { canonical: "https://behype.fr/influenceur/thefoodtrotter_lyon" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="The Food Trotter Lyon"
      handle="@thefoodtrotter_lyon"
      city="Lyon"
      region="Rhône"
      instagramUrl="https://instagram.com/thefoodtrotter_lyon"
      followers="22K+"
      description="The Food Trotter Lyon explore la scène gastronomique lyonnaise avec l'âme d'un voyageur, toujours en quête de nouvelles saveurs et d'expériences inédites. Ce créateur de contenu apporte une perspective cosmopolite sur la cuisine de Lyon, mêlant tradition locale et influences du monde entier."
      specialty="The Food Trotter Lyon excelle dans la découverte des cuisines du monde présentes à Lyon. Sa spécialité : les restaurants ethniques authentiques, les concepts fusion, les adresses tenues par des chefs voyageurs qui importent des saveurs d'ailleurs. Il sait aussi mettre en valeur la cuisine lyonnaise traditionnelle avec le regard frais de quelqu'un qui la compare aux gastronomies du monde."
      contentStyle="Le contenu de The Food Trotter Lyon est coloré et dépaysant. Les photos capturent la diversité culinaire de la ville, des épices orientales aux saveurs asiatiques. Les légendes racontent les histoires derrière les plats et les parcours des restaurateurs. Les stories documentent les explorations de quartiers multiculturels comme la Guillotière. Les reels font voyager sans quitter Lyon."
      whyCollaborate="The Food Trotter Lyon touche une audience curieuse et ouverte sur le monde. Pour les restaurants ethniques, les concepts fusion et les établissements qui proposent des cuisines internationales, c'est le partenaire idéal. Son approche storytelling permet de mettre en avant l'authenticité et le parcours des restaurateurs, un angle différenciant dans la communication."
      stats={[
        { value: "22K+", label: "Followers Instagram" },
        { value: "7%", label: "Taux d'engagement" },
        { value: "150+", label: "Voyages culinaires" },
        { value: "50+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "🌍", title: "Cuisines du monde", description: "Tour du monde gastronomique sans quitter Lyon" },
        { icon: "✈️", title: "Food trips", description: "Escapades gourmandes et parallèles avec les voyages" },
        { icon: "📖", title: "Histoires", description: "Récits des parcours de restaurateurs venus d'ailleurs" }
      ]}
    />
  )
}
