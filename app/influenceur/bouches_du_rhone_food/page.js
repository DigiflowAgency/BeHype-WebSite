import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Bouches-du-Rhône Food (@bouches_du_rhone_food) - Influenceur Food PACA | BEHYPE",
  description: "Collaborez avec Bouches-du-Rhône Food, guide food du département. Marseille, Aix et alentours. Contactez via BEHYPE.",
  keywords: "bouches_du_rhone_food, bouches du rhone food instagram, influenceur food paca, restaurants bouches du rhone, collaboration restaurant paca",
  openGraph: {
    title: "Bouches-du-Rhône Food (@bouches_du_rhone_food) - Influenceur Food PACA",
    description: "Collaborez avec Bouches-du-Rhône Food, guide food du département.",
    url: "https://behype.fr/influenceur/bouches_du_rhone_food",
  },
  alternates: { canonical: "https://behype.fr/influenceur/bouches_du_rhone_food" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Bouches-du-Rhône Food"
      handle="@bouches_du_rhone_food"
      city="Marseille"
      region="Bouches-du-Rhône"
      instagramUrl="https://instagram.com/bouches_du_rhone_food"
      followers="15K+"
      description="Bouches-du-Rhône Food explore toute la richesse gastronomique du département 13. De Marseille à Aix, des Alpilles à la Camargue, ce créateur de contenu couvre l'ensemble du territoire avec un appétit insatiable pour les bonnes adresses locales."
      specialty="Bouches-du-Rhône Food se démarque par sa couverture géographique étendue. Sa spécialité : les adresses hors des grands centres, les restaurants des villages provençaux, les auberges de campagne. Cette expertise territoriale en fait une référence pour ceux qui veulent explorer au-delà de Marseille et Aix."
      contentStyle="Le contenu met en valeur la diversité des paysages et des cuisines du département. Les photos capturent aussi bien les calanques que les Alpilles. Les publications incluent toujours des indications géographiques précises. Les stories documentent les road trips gourmands à travers le 13."
      whyCollaborate="Bouches-du-Rhône Food est idéal pour les établissements situés hors de Marseille. Son audience départementale se déplace pour les bonnes adresses. Pour les restaurants de Cassis, Arles, Salon ou des villages, il offre une visibilité précieuse."
      stats={[
        { value: "15K+", label: "Followers Instagram" },
        { value: "7%", label: "Taux d'engagement" },
        { value: "130+", label: "Restaurants testés" },
        { value: "35+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "🗺️", title: "Tour du 13", description: "Découvertes dans tout le département" },
        { icon: "🏡", title: "Villages", description: "Les pépites des villages provençaux" },
        { icon: "🚗", title: "Road trips", description: "Itinéraires gourmands dans les Bouches-du-Rhône" }
      ]}
    />
  )
}
