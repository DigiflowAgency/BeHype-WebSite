import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Food Lovers Nice (@food_lovers_nice) - Influenceur Food Nice | BEHYPE",
  description: "Collaborez avec Food Lovers Nice, communauté de passionnés food à Nice. Découvertes et partage. Contactez via BEHYPE.",
  keywords: "food_lovers_nice, food lovers nice instagram, influenceur food nice, communauté food nice, collaboration restaurant nice",
  openGraph: {
    title: "Food Lovers Nice (@food_lovers_nice) - Influenceur Food Nice",
    description: "Collaborez avec Food Lovers Nice, communauté de passionnés food à Nice.",
    url: "https://behype.fr/influenceur/food_lovers_nice",
  },
  alternates: { canonical: "https://behype.fr/influenceur/food_lovers_nice" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Food Lovers Nice"
      handle="@food_lovers_nice"
      city="Nice"
      region="Alpes-Maritimes"
      instagramUrl="https://instagram.com/food_lovers_nice"
      followers="18K+"
      description="Food Lovers Nice rassemble une communauté vibrante d'amoureux de la bonne cuisine sur la Côte d'Azur. Ce compte collaboratif partage les découvertes de passionnés qui arpentent Nice et ses environs à la recherche des meilleures expériences culinaires, créant un guide vivant et authentique."
      specialty="Food Lovers Nice se distingue par son approche communautaire de la recommandation culinaire. Les contributeurs partagent leurs découvertes dans tous les domaines : restaurants traditionnels, street food, pâtisseries, glaciers, bars à tapas... Cette diversité de regards permet de couvrir l'ensemble de l'offre gastronomique niçoise avec des avis multiples et complémentaires."
      contentStyle="Le contenu de Food Lovers Nice est varié et dynamique, reflétant la diversité de ses contributeurs. Les posts mettent en avant des plats de toutes catégories, des plus simples aux plus élaborés. Le format participatif encourage les followers à partager leurs propres découvertes. Les stories reprennent les meilleures suggestions de la communauté. L'ambiance est conviviale et inclusive."
      whyCollaborate="Food Lovers Nice offre une visibilité auprès d'une communauté engagée et participative. Les recommandations partagées bénéficient d'un effet de bouche-à-oreille amplifié par le réseau de contributeurs. Pour les établissements, c'est l'opportunité d'être découverts par de vrais passionnés qui partageront ensuite leur expérience. L'authenticité du format communautaire renforce la crédibilité des avis."
      stats={[
        { value: "18K+", label: "Followers Instagram" },
        { value: "7%", label: "Taux d'engagement" },
        { value: "150+", label: "Adresses partagées" },
        { value: "40+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "🤝", title: "Partages communauté", description: "Découvertes partagées par les membres actifs du groupe" },
        { icon: "📍", title: "Coins secrets", description: "Les pépites que seuls les locaux connaissent" },
        { icon: "💬", title: "Avis collectifs", description: "Retours multiples sur les meilleures adresses" }
      ]}
    />
  )
}
