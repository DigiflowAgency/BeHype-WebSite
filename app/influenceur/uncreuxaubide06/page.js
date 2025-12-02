import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Un Creux au Bide 06 (@uncreuxaubide06) - Influenceur Food Nice | BEHYPE",
  description: "Collaborez avec Un Creux au Bide 06, créateur de contenu food gourmand à Nice. Cuisine généreuse et recommandations. Contactez via BEHYPE.",
  keywords: "uncreuxaubide06, un creux au bide 06 instagram, influenceur food nice, restaurants généreux nice, collaboration restaurant nice",
  openGraph: {
    title: "Un Creux au Bide 06 (@uncreuxaubide06) - Influenceur Food Nice",
    description: "Collaborez avec Un Creux au Bide 06, créateur de contenu food gourmand à Nice.",
    url: "https://behype.fr/influenceur/uncreuxaubide06",
  },
  alternates: { canonical: "https://behype.fr/influenceur/uncreuxaubide06" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Un Creux au Bide 06"
      handle="@uncreuxaubide06"
      city="Nice"
      region="Alpes-Maritimes"
      instagramUrl="https://instagram.com/uncreuxaubide06"
      followers="10K+"
      description="Un Creux au Bide 06 répond à l'appel de la faim sur la Côte d'Azur avec des recommandations qui tiennent au corps. Ce créateur de contenu célèbre les adresses généreuses où l'on sort le ventre plein et le sourire aux lèvres, sans chichis mais avec beaucoup de saveur."
      specialty="Un Creux au Bide 06 est le spécialiste des portions généreuses et de la cuisine qui nourrit son homme (et sa femme). Sa spécialité : les restos où on en a pour son argent, les plats copieux, les formules complètes satisfaisantes. Il excelle dans les catégories populaires : pizzerias, kebabs premium, restaurants de viande, trattorias familiales. Son approche pragmatique répond aux besoins de ceux qui cherchent d'abord à bien manger."
      contentStyle="Le style d'Un Creux au Bide 06 est direct et généreux comme les plats qu'il recommande. Les photos montrent des assiettes bien remplies sans artifice. Les avis sont cash et mettent l'accent sur le rapport quantité/qualité/prix. Le ton est populaire et accessible, loin du snobisme foodie. Les stories capturent les repas du quotidien et les pauses déj entre amis."
      whyCollaborate="Un Creux au Bide 06 touche une audience qui cherche avant tout à bien manger copieusement. Pour les établissements qui misent sur la générosité et l'authenticité plutôt que sur le raffinement, c'est le partenaire idéal. Sa communauté apprécie les recommandations terre-à-terre et suit les avis pour leurs repas de tous les jours. Le retour sur investissement est direct et mesurable."
      stats={[
        { value: "10K+", label: "Followers Instagram" },
        { value: "9%", label: "Taux d'engagement" },
        { value: "70+", label: "Restaurants testés" },
        { value: "20+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "🍕", title: "Portions XXL", description: "Les adresses où on ne ressort jamais avec un creux" },
        { icon: "💶", title: "Bon plan price", description: "Bien manger sans casser la tirelire" },
        { icon: "👌", title: "Sans chichis", description: "Les vraies bonnes cantines pour manger sur le pouce" }
      ]}
    />
  )
}
