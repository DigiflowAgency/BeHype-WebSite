import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "2mafourc (@2mafourc) - Influenceur Food Lille | BEHYPE",
  description: "Collaborez avec 2mafourc, créateur de contenu food passionné à Lille. Découvertes culinaires et bonnes adresses du Nord. Contactez via BEHYPE.",
  keywords: "2mafourc, 2mafourc instagram, influenceur food lille, créateur contenu food lille, collaboration restaurant lille",
  openGraph: {
    title: "2mafourc (@2mafourc) - Influenceur Food Lille",
    description: "Collaborez avec 2mafourc, créateur de contenu food passionné à Lille.",
    url: "https://behype.fr/influenceur/2mafourc",
  },
  alternates: { canonical: "https://behype.fr/influenceur/2mafourc" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="2mafourc"
      handle="@2mafourc"
      city="Lille"
      region="Nord"
      instagramUrl="https://instagram.com/2mafourc"
      followers="20K+"
      description="2mafourc est un créateur de contenu food lillois reconnu pour son approche authentique et généreuse de la gastronomie. Passionné par les bonnes choses, il partage avec enthousiasme ses découvertes culinaires dans la métropole lilloise et au-delà, toujours à la recherche de la prochaine pépite."
      specialty="2mafourc a développé une expertise particulière sur la scène gastronomique lilloise dans toute sa diversité. Sa spécialité englobe aussi bien les estaminets traditionnels que les bistrots modernes, en passant par la street food et les restaurants ethniques. Son regard curieux et son appétit insatiable l'amènent à explorer tous les quartiers de Lille, du Vieux-Lille au quartier Wazemmes, permettant à sa communauté de découvrir des adresses variées et représentatives de la richesse culinaire du Nord."
      contentStyle="Le style de 2mafourc se caractérise par une authenticité désarmante. Les photos sont généreuses comme les portions nordistes, capturant des plats copieux et réconfortants. Le ton des publications est chaleureux et accessible, reflétant la convivialité ch'ti. Les stories sont spontanées, montrant les coulisses des repas et les réactions à chaud. Les reels dynamiques mettent en scène les ambiances des établissements avec humour et bonne humeur."
      whyCollaborate="Collaborer avec 2mafourc, c'est bénéficier d'une recommandation chaleureuse auprès d'une audience lilloise engagée. Sa communauté lui fait confiance pour ses avis sincères et non filtrés. Les restaurants partenaires apprécient son professionnalisme et sa capacité à retranscrire l'âme d'un établissement. Son réseau local et sa connaissance du terrain en font un ambassadeur efficace pour tout type de restaurant dans la région lilloise."
      stats={[
        { value: "20K+", label: "Followers Instagram" },
        { value: "7%", label: "Taux d'engagement" },
        { value: "130+", label: "Restaurants testés" },
        { value: "45+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "🍺", title: "Estaminets & bistrots", description: "Les meilleures adresses traditionnelles du Nord revisitées" },
        { icon: "🎬", title: "Reels gourmands", description: "Vidéos dynamiques capturant les moments food les plus savoureux" },
        { icon: "📍", title: "Quartier par quartier", description: "Exploration systématique des différents quartiers de Lille" }
      ]}
    />
  )
}
