import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Eat Your Lunch Lyon (@eat_your_lunch_lyon) - Influenceur Food Lyon | BEHYPE",
  description: "Collaborez avec Eat Your Lunch Lyon, spécialiste des déjeuners à Lyon. Pause midi et formules. Contactez via BEHYPE.",
  keywords: "eat_your_lunch_lyon, eat your lunch lyon instagram, influenceur food lyon, déjeuners lyon, collaboration restaurant lyon",
  openGraph: {
    title: "Eat Your Lunch Lyon (@eat_your_lunch_lyon) - Influenceur Food Lyon",
    description: "Collaborez avec Eat Your Lunch Lyon, spécialiste des déjeuners à Lyon.",
    url: "https://behype.fr/influenceur/eat_your_lunch_lyon",
  },
  alternates: { canonical: "https://behype.fr/influenceur/eat_your_lunch_lyon" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Eat Your Lunch Lyon"
      handle="@eat_your_lunch_lyon"
      city="Lyon"
      region="Rhône"
      instagramUrl="https://instagram.com/eat_your_lunch_lyon"
      followers="11K+"
      description="Eat Your Lunch Lyon est LE spécialiste de la pause déjeuner lyonnaise. Ce créateur de contenu aide les actifs à trouver le spot parfait pour leur lunch, que ce soit pour un repas rapide, un déjeuner d'affaires ou une vraie pause gourmande entre collègues."
      specialty="Eat Your Lunch Lyon se concentre exclusivement sur l'offre du midi à Lyon. Sa spécialité : les menus du jour, les formules déjeuner, les sandwicheries de qualité, les restaurants rapides mais bons, les spots pour un business lunch. Il catégorise les adresses par durée de repas (express, tranquille, long) et par type (solo, collègues, client), répondant aux besoins précis des travailleurs."
      contentStyle="Le contenu d'Eat Your Lunch Lyon est pratique et optimisé pour les actifs pressés. Les posts indiquent clairement les formules, les prix et le temps de service. Les stories du midi partagent les découvertes du jour en temps réel. Les recommandations sont géolocalisées par quartier d'affaires. Le ton est efficace et informatif."
      whyCollaborate="Eat Your Lunch Lyon touche directement les actifs lyonnais au moment où ils cherchent où déjeuner. Pour les restaurants qui ciblent la clientèle du midi, c'est le canal idéal. La spécialisation garantit une audience ultra-qualifiée pour ce créneau horaire. Le format pratique des recommandations facilite la conversion en réservations."
      stats={[
        { value: "11K+", label: "Followers Instagram" },
        { value: "8%", label: "Taux d'engagement" },
        { value: "85+", label: "Spots lunch testés" },
        { value: "25+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "⏱️", title: "Lunch express", description: "Où manger vite et bien quand le temps presse" },
        { icon: "💼", title: "Business lunch", description: "Adresses pour un déjeuner pro réussi" },
        { icon: "🥗", title: "Pause healthy", description: "Options équilibrées pour rester en forme" }
      ]}
    />
  )
}
