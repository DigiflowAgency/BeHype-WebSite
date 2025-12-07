import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Toulouzinzins (@toulouzinzins) - Influenceur Food Toulouse | BEHYPE",
  description: "Collaborez avec Toulouzinzins, créateur de contenu food passionné à Toulouse. Un regard unique sur la gastronomie toulousaine. Contactez via BEHYPE.",
  keywords: "toulouzinzins, toulouzinzins instagram, influenceur food toulouse, créateur contenu toulouse, collaboration restaurant toulouse",
  openGraph: {
    title: "Toulouzinzins (@toulouzinzins) - Influenceur Food Toulouse",
    description: "Collaborez avec Toulouzinzins, créateur de contenu food passionné à Toulouse.",
    url: "https://be-hype.com/influenceur/toulouzinzins",
  },
  alternates: { canonical: "https://be-hype.com/influenceur/toulouzinzins" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Toulouzinzins"
      handle="@toulouzinzins"
      city="Toulouse"
      region="Haute-Garonne"
      instagramUrl="https://instagram.com/toulouzinzins"
      description="Toulouzinzins incarne l'âme gourmande de Toulouse avec un regard frais et décalé sur la scène food locale. Ce créateur de contenu a su créer une communauté fidèle grâce à ses découvertes originales et son approche authentique de la gastronomie toulousaine, mêlant tradition et modernité."
      specialty="Toulouzinzins excelle dans la mise en lumière des adresses atypiques et des concepts innovants de Toulouse. Sa spécialité réside dans sa capacité à dénicher les perles rares, des néo-bistrots créatifs aux food trucks originaux, en passant par les restaurants familiaux aux recettes transmises de génération en génération. Son regard aiguisé sur les tendances culinaires lui permet d'anticiper les nouvelles adresses qui feront parler d'elles, tout en célébrant les classiques indémodables de la cuisine occitane."
      contentStyle="Le contenu de Toulouzinzins se distingue par son ton authentique et accessible. Les photos capturent l'essence des plats avec un style naturel qui met l'accent sur le goût plutôt que sur la mise en scène artificielle. Les légendes sont généreuses en informations pratiques et en anecdotes personnelles, créant un lien de confiance avec les followers. Les stories sont particulièrement appréciées pour leur spontanéité et les recommandations de dernière minute qui font souvent salle comble."
      whyCollaborate="Travailler avec Toulouzinzins offre une visibilité authentique auprès d'une audience véritablement passionnée par la gastronomie. Sa communauté est active et réactive, avec un taux d'interaction supérieur à la moyenne du secteur. Les retombées des collaborations sont mesurables : les restaurants partenaires constatent régulièrement une augmentation significative de leur fréquentation suite aux publications. Son professionnalisme et sa flexibilité en font un partenaire idéal pour tout type d'établissement."
      popularContent={[
        { icon: "🔍", title: "Découvertes cachées", description: "Déniche les adresses secrètes que seuls les vrais Toulousains connaissent" },
        { icon: "🌟", title: "Coups de cœur", description: "Partage ses favoris avec des avis détaillés et sincères" },
        { icon: "📱", title: "Stories du jour", description: "Recommandations spontanées et tests en direct des nouvelles adresses" }
      ]}
    />
  )
}
