import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Lyes Foodgasmic (@lyes.foodgasmic) - Influenceur Food Lille | BEHYPE",
  description: "Collaborez avec Lyes Foodgasmic, créateur de contenu food gourmand à Lille. Critiques détaillées et coups de cœur culinaires. Contactez via BEHYPE.",
  keywords: "lyes.foodgasmic, lyes foodgasmic instagram, influenceur food lille, critique culinaire lille, collaboration restaurant lille",
  openGraph: {
    title: "Lyes Foodgasmic (@lyes.foodgasmic) - Influenceur Food Lille",
    description: "Collaborez avec Lyes Foodgasmic, créateur de contenu food gourmand à Lille.",
    url: "https://behype.fr/influenceur/lyes.foodgasmic",
  },
  alternates: { canonical: "https://behype.fr/influenceur/lyes.foodgasmic" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Lyes Foodgasmic"
      handle="@lyes.foodgasmic"
      city="Lille"
      region="Nord"
      instagramUrl="https://instagram.com/lyes.foodgasmic"
      followers="15K+"
      description="Lyes Foodgasmic est un épicurien passionné qui vit chaque repas comme une expérience sensorielle intense. Basé à Lille, ce créateur de contenu partage ses moments de pur bonheur gustatif avec une communauté qui apprécie son enthousiasme communicatif et ses avis détaillés sur la scène gastronomique locale."
      specialty="Lyes Foodgasmic se distingue par son approche émotionnelle de la gastronomie. Sa spécialité : identifier les plats qui procurent une véritable extase gustative, d'où son nom évocateur. Il excelle particulièrement dans les reviews de burgers, pizzas, et cuisine réconfortante. Son expertise sur les viandes et les cuissons en fait une référence pour les amateurs de steakhouses et grillades. Il sait décrire avec précision les sensations en bouche et transmettre son plaisir à travers ses contenus."
      contentStyle="Le style de Lyes Foodgasmic est expressif et généreux. Les photos montrent des plats copieux et réconfortants, avec des gros plans sur les détails qui font saliver : le fromage qui file, la viande juteuse, la sauce qui coule. Les vidéos capturent les premières bouchées avec des réactions authentiques. Les légendes sont enthousiastes et détaillées, décrivant les saveurs avec un vocabulaire gourmand qui met l'eau à la bouche."
      whyCollaborate="Lyes Foodgasmic apporte une énergie positive à chaque collaboration. Son enthousiasme sincère se transmet à sa communauté et génère un engagement fort. Les établissements qui misent sur des plats généreux et savoureux trouvent en lui un ambassadeur idéal. Son authenticité et son plaisir visible donnent envie de vivre la même expérience. Les followers viennent ensuite nombreux pour retrouver les sensations décrites."
      stats={[
        { value: "15K+", label: "Followers Instagram" },
        { value: "9%", label: "Taux d'engagement" },
        { value: "85+", label: "Restaurants testés" },
        { value: "30+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "🍔", title: "Tests burgers", description: "Comparatifs des meilleurs burgers de la métropole lilloise" },
        { icon: "🤤", title: "Réactions ASMR", description: "Vidéos des premières bouchées avec réactions authentiques" },
        { icon: "⭐", title: "Coups de cœur", description: "Les plats qui ont provoqué une extase gustative" }
      ]}
    />
  )
}
