import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "La Food Locale (@lafoodlocale) - Influenceur Food Toulouse | BEHYPE",
  description: "Collaborez avec La Food Locale, défenseur du circuit court et de la gastronomie locale à Toulouse. Producteurs et restaurants engagés. Contactez via BEHYPE.",
  keywords: "lafoodlocale, la food locale instagram, influenceur food toulouse, circuit court toulouse, restaurants locavores toulouse",
  openGraph: {
    title: "La Food Locale (@lafoodlocale) - Influenceur Food Toulouse",
    description: "Collaborez avec La Food Locale, défenseur du circuit court et de la gastronomie locale à Toulouse.",
    url: "https://be-hype.com/influenceur/lafoodlocale",
  },
  alternates: { canonical: "https://be-hype.com/influenceur/lafoodlocale" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="La Food Locale"
      handle="@lafoodlocale"
      city="Toulouse"
      region="Haute-Garonne"
      instagramUrl="https://instagram.com/lafoodlocale"
      description="La Food Locale est le compte de référence pour les amoureux d'une gastronomie responsable et ancrée dans le terroir toulousain. Ce créateur de contenu met en lumière les restaurants qui privilégient les circuits courts, les producteurs locaux et une cuisine respectueuse de l'environnement et des saisons."
      specialty="La Food Locale s'est positionné comme le porte-voix de la gastronomie durable à Toulouse. Sa spécialité unique : identifier et promouvoir les établissements qui s'engagent pour une alimentation responsable, que ce soit par le choix de fournisseurs locaux, la réduction des déchets, ou la proposition de menus végétariens créatifs. Le compte met également en avant les producteurs et artisans de la région, créant un pont entre la terre et l'assiette."
      contentStyle="Le contenu de La Food Locale raconte une histoire : celle des produits, de leur origine, et des personnes qui les cultivent ou les transforment. Les photos mettent en valeur la fraîcheur des ingrédients et le travail artisanal. Les légendes sont éducatives, expliquant les engagements des établissements et sensibilisant à une consommation plus responsable. Ce storytelling engagé crée une communauté de followers partageant les mêmes valeurs."
      whyCollaborate="Pour les restaurants engagés dans une démarche locale et responsable, La Food Locale offre une visibilité parfaitement ciblée. Son audience est composée de consommateurs conscients, prêts à payer plus pour une alimentation de qualité et éthique. La collaboration avec ce créateur permet de valoriser vos engagements et d'attirer une clientèle fidèle qui partage vos valeurs. C'est aussi l'occasion de rejoindre un réseau d'établissements vertueux mis en avant par le compte."
      popularContent={[
        { icon: "🌱", title: "Restaurants engagés", description: "Focus sur les établissements qui privilégient le local et le durable" },
        { icon: "👨‍🌾", title: "Portraits producteurs", description: "Rencontres avec les agriculteurs et artisans de la région" },
        { icon: "♻️", title: "Initiatives vertes", description: "Mise en avant des démarches éco-responsables dans la restauration" }
      ]}
    />
  )
}
