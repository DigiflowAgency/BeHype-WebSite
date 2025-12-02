import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Côte d'Azur Food Guide (@cotedazur.foodguide) - Influenceur Food Nice | BEHYPE",
  description: "Collaborez avec Côte d'Azur Food Guide, référence gastronomique de la Riviera. Guide complet des meilleures adresses. Contactez via BEHYPE.",
  keywords: "cotedazur.foodguide, cote d azur food guide instagram, influenceur food nice, guide restaurants cote d azur, collaboration restaurant nice",
  openGraph: {
    title: "Côte d'Azur Food Guide (@cotedazur.foodguide) - Influenceur Food Nice",
    description: "Collaborez avec Côte d'Azur Food Guide, référence gastronomique de la Riviera.",
    url: "https://behype.fr/influenceur/cotedazur.foodguide",
  },
  alternates: { canonical: "https://behype.fr/influenceur/cotedazur.foodguide" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Côte d'Azur Food Guide"
      handle="@cotedazur.foodguide"
      city="Nice"
      region="Alpes-Maritimes"
      instagramUrl="https://instagram.com/cotedazur.foodguide"
      followers="28K+"
      description="Côte d'Azur Food Guide est le guide gastronomique de référence pour toute la Riviera française. De Menton à Cannes, ce compte exhaustif recense les meilleures adresses de la région, offrant une ressource inestimable aux habitants comme aux visiteurs en quête d'expériences culinaires mémorables."
      specialty="Côte d'Azur Food Guide couvre l'ensemble du territoire azuréen avec une approche encyclopédique. Sa force : une base de données vivante des meilleurs restaurants classés par ville, type de cuisine, budget et occasion. Les guides par catégorie (meilleurs italiens, sushis, poissons, brunchs...) sont des références consultées régulièrement. L'équipe teste rigoureusement chaque établissement avant de le référencer."
      contentStyle="Le contenu de Côte d'Azur Food Guide est professionnel et structuré. Chaque publication suit un format éditorial clair avec toutes les informations pratiques. Les photos sont de qualité magazine, représentatives de l'expérience réelle. Les carrousels permettent de présenter plusieurs options d'une même catégorie. La régularité des publications maintient l'intérêt de la communauté."
      whyCollaborate="Côte d'Azur Food Guide offre une visibilité régionale exceptionnelle grâce à son audience large et diversifiée. Être référencé dans ce guide est un gage de qualité reconnu. La double audience (locaux et touristes) permet une fréquentation équilibrée tout au long de l'année. Les formats thématiques offrent des opportunités de mise en avant ciblée."
      stats={[
        { value: "28K+", label: "Followers Instagram" },
        { value: "5%", label: "Taux d'engagement" },
        { value: "350+", label: "Adresses référencées" },
        { value: "90+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "📚", title: "Guides complets", description: "Répertoire exhaustif des meilleures adresses par catégorie" },
        { icon: "🗺️", title: "Par ville", description: "Sélections dédiées à chaque ville de la Côte d'Azur" },
        { icon: "🏆", title: "Best of", description: "Classements annuels des meilleures tables de la région" }
      ]}
    />
  )
}
