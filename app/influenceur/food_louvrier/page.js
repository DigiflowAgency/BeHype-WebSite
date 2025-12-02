import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Food Louvrier (@food_louvrier) - Influenceur Food Lille | BEHYPE",
  description: "Collaborez avec Food Louvrier, créateur de contenu food authentique à Lille. Cuisine du terroir et bonnes adresses. Contactez via BEHYPE.",
  keywords: "food_louvrier, food louvrier instagram, influenceur food lille, cuisine du nord lille, collaboration restaurant lille",
  openGraph: {
    title: "Food Louvrier (@food_louvrier) - Influenceur Food Lille",
    description: "Collaborez avec Food Louvrier, créateur de contenu food authentique à Lille.",
    url: "https://behype.fr/influenceur/food_louvrier",
  },
  alternates: { canonical: "https://behype.fr/influenceur/food_louvrier" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Food Louvrier"
      handle="@food_louvrier"
      city="Lille"
      region="Nord"
      instagramUrl="https://instagram.com/food_louvrier"
      followers="12K+"
      description="Food Louvrier incarne l'amour de la bonne bouffe simple et généreuse, héritée de la tradition ouvrière du Nord. Ce créateur de contenu célèbre les plats qui réchauffent le cœur et l'estomac, des carbonades flamandes aux fricadelles, en passant par les trouvailles de la nouvelle génération de cuisiniers lillois."
      specialty="Food Louvrier est le spécialiste de la cuisine authentique du Nord. Sa spécialité : les estaminets traditionnels, la cuisine flamande, les brasseries généreuses et tous les établissements qui perpétuent l'héritage culinaire de la région. Il sait aussi repérer les chefs qui revisitent les classiques avec créativité. Son approche sans chichis et son amour pour les portions généreuses en font le référent pour tous ceux qui cherchent à manger copieusement et bien."
      contentStyle="Le style de Food Louvrier est direct et sans prétention, à l'image de la cuisine qu'il défend. Les photos montrent des plats copieux, souvent accompagnés d'une bière locale. Le ton est chaleureux et teinté d'humour ch'ti. Les anecdotes sur l'histoire des plats et des établissements enrichissent les publications. Les vidéos capturent l'ambiance conviviale des estaminets et la générosité des assiettes."
      whyCollaborate="Food Louvrier est le partenaire idéal pour les établissements qui misent sur l'authenticité et la générosité. Sa communauté est composée de personnes qui apprécient les vraies saveurs et les portions honnêtes. Une recommandation de sa part est perçue comme un label d'authenticité. Pour les estaminets, brasseries et restaurants du terroir, il apporte une visibilité auprès d'une audience parfaitement ciblée."
      stats={[
        { value: "12K+", label: "Followers Instagram" },
        { value: "8%", label: "Taux d'engagement" },
        { value: "70+", label: "Estaminets testés" },
        { value: "25+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "🍺", title: "Estaminets", description: "Les meilleures adresses pour découvrir la cuisine flamande" },
        { icon: "🥘", title: "Plats du Nord", description: "Carbonades, waterzooï, potjevleesch et autres classiques" },
        { icon: "🎉", title: "Ambiance ch'ti", description: "Capture de la convivialité nordiste authentique" }
      ]}
    />
  )
}
