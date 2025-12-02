import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Good Food In Nice (@good_food_in_nice) - Influenceur Food Nice | BEHYPE",
  description: "Collaborez avec Good Food In Nice, créateur de contenu food passionné à Nice. Bonnes adresses et découvertes. Contactez via BEHYPE.",
  keywords: "good_food_in_nice, good food in nice instagram, influenceur food nice, bonnes adresses nice, collaboration restaurant nice",
  openGraph: {
    title: "Good Food In Nice (@good_food_in_nice) - Influenceur Food Nice",
    description: "Collaborez avec Good Food In Nice, créateur de contenu food passionné à Nice.",
    url: "https://behype.fr/influenceur/good_food_in_nice",
  },
  alternates: { canonical: "https://behype.fr/influenceur/good_food_in_nice" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Good Food In Nice"
      handle="@good_food_in_nice"
      city="Nice"
      region="Alpes-Maritimes"
      instagramUrl="https://instagram.com/good_food_in_nice"
      followers="12K+"
      description="Good Food In Nice partage sa quête permanente de bons petits plats dans la capitale azuréenne. Ce créateur de contenu authentique explore tous les quartiers de Nice avec un seul objectif : dénicher les adresses où l'on mange vraiment bien, des cantines de quartier aux tables plus recherchées."
      specialty="Good Food In Nice couvre la scène food niçoise dans toute sa diversité, sans snobisme ni préjugés. Sa force : les recommandations du quotidien, les adresses où les locaux vont vraiment, les trouvailles rapport qualité-prix. Il excelle dans les catégories accessibles : pizzerias, kebabs de qualité, snacks méditerranéens, trattorias de quartier. Son approche terre-à-terre résonne avec une audience qui cherche à bien manger sans se ruiner."
      contentStyle="Le style de Good Food In Nice est direct et sans chichis. Les photos montrent la réalité des plats, sans filtre excessif. Les avis sont francs et honnêtes, évoquant aussi bien les points positifs que les petits bémols. Le ton est celui d'un ami qui partage ses bonnes adresses. Les stories capturent les repas spontanés et les découvertes de dernière minute."
      whyCollaborate="Good Food In Nice touche une audience de Niçois qui cherchent des adresses authentiques et accessibles. Pour les restaurants de quartier, les pizzerias, les snacks de qualité, c'est le partenaire idéal. Son approche sincère garantit une recommandation crédible auprès d'une clientèle locale fidèle. Les retombées sont durables car ses followers deviennent de vrais habitués des adresses recommandées."
      stats={[
        { value: "12K+", label: "Followers Instagram" },
        { value: "9%", label: "Taux d'engagement" },
        { value: "90+", label: "Restaurants testés" },
        { value: "25+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "💰", title: "Bon rapport Q/P", description: "Les meilleures adresses pour bien manger sans se ruiner" },
        { icon: "🏘️", title: "Quartier par quartier", description: "Exploration des bonnes tables de chaque coin de Nice" },
        { icon: "👍", title: "Avis sincères", description: "Tests honnêtes sans langue de bois" }
      ]}
    />
  )
}
