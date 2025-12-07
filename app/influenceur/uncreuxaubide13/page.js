import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Un Creux au Bide 13 (@uncreuxaubide13) - Influenceur Food Marseille | BEHYPE",
  description: "Collaborez avec Un Creux au Bide 13, créateur de contenu food gourmand à Marseille. Portions généreuses. Contactez via BEHYPE.",
  keywords: "uncreuxaubide13, un creux au bide 13 instagram, influenceur food marseille, restaurants généreux marseille, collaboration restaurant marseille",
  openGraph: {
    title: "Un Creux au Bide 13 (@uncreuxaubide13) - Influenceur Food Marseille",
    description: "Collaborez avec Un Creux au Bide 13, créateur de contenu food gourmand à Marseille.",
    url: "https://be-hype.com/influenceur/uncreuxaubide13",
  },
  alternates: { canonical: "https://be-hype.com/influenceur/uncreuxaubide13" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Un Creux au Bide 13"
      handle="@uncreuxaubide13"
      city="Marseille"
      region="Bouches-du-Rhône"
      instagramUrl="https://instagram.com/uncreuxaubide13"
      description="Un Creux au Bide 13 répond à la faim marseillaise avec des recommandations qui calent pour de bon. Ce créateur de contenu célèbre les adresses généreuses où l'on sort repu et heureux, sans chichis mais avec beaucoup de saveur et une pointe d'accent du sud."
      specialty="Un Creux au Bide 13 est le spécialiste des portions généreuses à Marseille. Sa spécialité : les restos où on en a vraiment pour son argent, les plats copieux, les formules qui tiennent au corps. Pizzas géantes, couscous royal, grillades XL... Il connaît toutes les adresses où les vrais Marseillais vont pour bien manger."
      contentStyle="Le style d'Un Creux au Bide 13 est direct et sans prétention. Les photos montrent des assiettes bien remplies qui donnent faim. Les avis vont droit au but : on mange combien, pour combien, et c'est bon ou pas. Le ton marseillais transparaît dans les expressions et l'humour. Les stories capturent les repas entre potes dans les cantines du coin."
      whyCollaborate="Un Creux au Bide 13 touche une audience qui cherche à bien manger copieusement sans se ruiner. Pour les restaurants qui misent sur la générosité et l'authenticité, c'est le partenaire idéal. Ses recommandations amènent une clientèle fidèle qui revient régulièrement dans les adresses validées."
      popularContent={[
        { icon: "🍕", title: "Portions XXL", description: "Les adresses où on ne ressort jamais le ventre vide" },
        { icon: "💶", title: "Prix doux", description: "Bien manger à Marseille sans casser la tirelire" },
        { icon: "🍖", title: "Viandes & grillades", description: "Les meilleurs spots pour les carnivores" }
      ]}
    />
  )
}
