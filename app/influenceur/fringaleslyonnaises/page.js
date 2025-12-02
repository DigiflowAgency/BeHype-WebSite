import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Fringales Lyonnaises (@fringaleslyonnaises) - Influenceur Food Lyon | BEHYPE",
  description: "Collaborez avec Fringales Lyonnaises, référence food incontournable à Lyon. Gastronomie lyonnaise et bonnes adresses. Contactez via BEHYPE.",
  keywords: "fringaleslyonnaises, fringales lyonnaises instagram, influenceur food lyon, gastronomie lyon, collaboration restaurant lyon",
  openGraph: {
    title: "Fringales Lyonnaises (@fringaleslyonnaises) - Influenceur Food Lyon",
    description: "Collaborez avec Fringales Lyonnaises, référence food incontournable à Lyon.",
    url: "https://behype.fr/influenceur/fringaleslyonnaises",
  },
  alternates: { canonical: "https://behype.fr/influenceur/fringaleslyonnaises" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Fringales Lyonnaises"
      handle="@fringaleslyonnaises"
      city="Lyon"
      region="Rhône"
      instagramUrl="https://instagram.com/fringaleslyonnaises"
      followers="45K+"
      description="Fringales Lyonnaises est LA référence incontournable pour découvrir la scène gastronomique de la capitale des Gaules. Ce compte emblématique rassemble une communauté massive de gourmets lyonnais qui font confiance à ses recommandations pour explorer le meilleur de la cuisine locale, des bouchons traditionnels aux tables contemporaines."
      specialty="Fringales Lyonnaises maîtrise parfaitement la richesse gastronomique lyonnaise. Sa spécialité englobe les bouchons authentiques, les restaurants de haute gastronomie, les bistronomiques créatifs et les nouvelles adresses qui façonnent Lyon comme capitale mondiale de la gastronomie. Son expertise sur les traditions culinaires locales (quenelles, tablier de sapeur, cervelle de canut) en fait un ambassadeur de la cuisine lyonnaise."
      contentStyle="Le style de Fringales Lyonnaises allie professionnalisme et gourmandise. Les photos sont léchées, dignes de publications gastronomiques. Les descriptions sont riches et détaillées, évoquant saveurs, textures et émotions. Les carrousels thématiques (meilleurs bouchons, brunchs, terrasses) sont des références. Les stories offrent un accès aux coulisses et aux rencontres avec les chefs."
      whyCollaborate="Fringales Lyonnaises offre une visibilité exceptionnelle dans la capitale de la gastronomie française. Son audience massive et engagée garantit des retombées significatives. La crédibilité établie du compte en fait un prescripteur dont les recommandations se traduisent par des réservations. Pour tout établissement lyonnais ambitieux, c'est le partenaire incontournable."
      stats={[
        { value: "45K+", label: "Followers Instagram" },
        { value: "6%", label: "Taux d'engagement" },
        { value: "400+", label: "Restaurants testés" },
        { value: "120+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "🦁", title: "Bouchons lyonnais", description: "Les authentiques adresses de la tradition lyonnaise" },
        { icon: "⭐", title: "Tables gastronomiques", description: "Le meilleur de la haute cuisine à Lyon" },
        { icon: "📋", title: "Guides complets", description: "Sélections thématiques des meilleures adresses" }
      ]}
    />
  )
}
