import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "The Nice Food Club (@thenicefoodclub) - Influenceur Food Nice | BEHYPE",
  description: "Collaborez avec The Nice Food Club, communauté de gourmets niçois. Partage et découvertes culinaires. Contactez via BEHYPE.",
  keywords: "thenicefoodclub, the nice food club instagram, influenceur food nice, communauté food nice, collaboration restaurant nice",
  openGraph: {
    title: "The Nice Food Club (@thenicefoodclub) - Influenceur Food Nice",
    description: "Collaborez avec The Nice Food Club, communauté de gourmets niçois.",
    url: "https://behype.fr/influenceur/thenicefoodclub",
  },
  alternates: { canonical: "https://behype.fr/influenceur/thenicefoodclub" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="The Nice Food Club"
      handle="@thenicefoodclub"
      city="Nice"
      region="Alpes-Maritimes"
      instagramUrl="https://instagram.com/thenicefoodclub"
      followers="15K+"
      description="The Nice Food Club rassemble les passionnés de gastronomie niçoise dans un esprit de club exclusif. Cette communauté de gourmets partage ses découvertes, organise des événements et crée une émulation positive autour des meilleures tables de la ville. Faire partie du club, c'est avoir accès aux vraies bonnes adresses."
      specialty="The Nice Food Club excelle dans l'animation d'une communauté active de passionnés. Sa spécialité : les événements food (dîners à thème, découvertes privées, rencontres avec des chefs), les avant-premières d'ouvertures, et les accès VIP dans certains établissements partenaires. Le compte valorise l'aspect social de la gastronomie et les moments de partage autour de la table."
      contentStyle="Le contenu de The Nice Food Club met en avant l'esprit de communauté. Les photos montrent des tables conviviales, des groupes qui partagent des plats, des moments de célébration. Les stories documentent les événements du club et les coulisses des dîners privés. Le ton est inclusif et enthousiaste, invitant à rejoindre le mouvement. Les membres sont régulièrement mis à l'honneur."
      whyCollaborate="The Nice Food Club offre une approche unique grâce à son format communautaire. Les collaborations peuvent prendre la forme d'événements privés, de dîners découverte ou de soirées d'ouverture. L'engagement de la communauté garantit une participation active aux événements organisés. Pour les restaurants, c'est l'opportunité de créer une relation privilégiée avec un groupe de clients ambassadeurs."
      stats={[
        { value: "15K+", label: "Followers Instagram" },
        { value: "8%", label: "Taux d'engagement" },
        { value: "40+", label: "Événements organisés" },
        { value: "35+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "🎉", title: "Événements club", description: "Dîners privés et découvertes exclusives entre membres" },
        { icon: "🤝", title: "Communauté", description: "Partage et entraide entre passionnés de food" },
        { icon: "🎁", title: "Avantages", description: "Accès VIP et offres spéciales pour les membres" }
      ]}
    />
  )
}
