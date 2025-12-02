import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Epicu Toulouse Food (@epicutoulouse_food) - Influenceur Food Toulouse | BEHYPE",
  description: "Collaborez avec Epicu Toulouse Food, créateur de contenu passionné par la gastronomie toulousaine. Photos appétissantes et avis détaillés. Contactez via BEHYPE.",
  keywords: "epicutoulouse_food, epicu toulouse food instagram, influenceur food toulouse, créateur contenu culinaire toulouse, collaboration restaurant toulouse",
  openGraph: {
    title: "Epicu Toulouse Food (@epicutoulouse_food) - Influenceur Food Toulouse",
    description: "Collaborez avec Epicu Toulouse Food, créateur de contenu passionné par la gastronomie toulousaine.",
    url: "https://behype.fr/influenceur/epicutoulouse_food",
  },
  alternates: { canonical: "https://behype.fr/influenceur/epicutoulouse_food" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Epicu Toulouse Food"
      handle="@epicutoulouse_food"
      city="Toulouse"
      region="Haute-Garonne"
      instagramUrl="https://instagram.com/epicutoulouse_food"
      followers="15K+"
      description="Epicu Toulouse Food est un épicurien moderne qui partage sa passion pour la gastronomie toulousaine avec authenticité et gourmandise. Chaque publication est une invitation à découvrir les saveurs de la ville rose, des plats traditionnels revisités aux créations contemporaines des chefs locaux."
      specialty="Epicu Toulouse Food se distingue par son approche centrée sur le plaisir gustatif pur. Sa spécialité : identifier les plats qui procurent une véritable émotion gustative, qu'il s'agisse d'une simple entrecôte parfaitement cuite ou d'une création gastronomique élaborée. Son expertise couvre particulièrement bien la cuisine du terroir sud-ouest, les bistronomiques et les restaurants de viande et grillades. Il sait reconnaître et mettre en avant le savoir-faire des cuisiniers."
      contentStyle="Le style d'Epicu Toulouse Food mise sur des photos très appétissantes, avec un éclairage naturel qui sublime les textures et les couleurs des plats. Les gros plans sur les détails culinaires font saliver les followers. Les descriptions sont précises sur les saveurs, les cuissons et les associations, permettant aux lecteurs de se projeter dans l'expérience gustative. Le ton est celui d'un passionné qui partage ses découvertes avec générosité."
      whyCollaborate="Epicu Toulouse Food attire une audience de véritables gastronomes, des personnes qui accordent une importance particulière à la qualité de ce qu'elles mangent. Collaborer avec ce créateur permet de toucher des clients potentiels à fort pouvoir d'achat, prêts à investir dans une belle expérience culinaire. Ses avis détaillés sur les plats permettent de mettre en valeur le travail de votre cuisine et de votre chef."
      stats={[
        { value: "15K+", label: "Followers Instagram" },
        { value: "7%", label: "Taux d'engagement" },
        { value: "100+", label: "Plats recommandés" },
        { value: "30+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "🥩", title: "Focus plats", description: "Gros plans appétissants sur les plats signature des restaurants" },
        { icon: "👨‍🍳", title: "Rencontres chefs", description: "Portraits et interviews des cuisiniers derrière les fourneaux" },
        { icon: "⭐", title: "Avis détaillés", description: "Critiques complètes des expériences gustatives vécues" }
      ]}
    />
  )
}
