import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Mr Bouchetrou (@mr.bouchetrou) - Influenceur Food Lille | BEHYPE",
  description: "Collaborez avec Mr Bouchetrou, créateur de contenu food humoristique à Lille. Tests décalés et avis sincères. Contactez via BEHYPE.",
  keywords: "mr.bouchetrou, mr bouchetrou instagram, influenceur food lille, tests food lille, collaboration restaurant lille",
  openGraph: {
    title: "Mr Bouchetrou (@mr.bouchetrou) - Influenceur Food Lille",
    description: "Collaborez avec Mr Bouchetrou, créateur de contenu food humoristique à Lille.",
    url: "https://behype.fr/influenceur/mr.bouchetrou",
  },
  alternates: { canonical: "https://behype.fr/influenceur/mr.bouchetrou" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Mr Bouchetrou"
      handle="@mr.bouchetrou"
      city="Lille"
      region="Nord"
      instagramUrl="https://instagram.com/mr.bouchetrou"
      followers="16K+"
      description="Mr Bouchetrou apporte une touche d'humour bienvenue dans l'univers parfois trop sérieux du food content. Ce créateur lillois teste les restaurants avec un regard décalé et des commentaires qui font mouche, tout en restant sincère et constructif dans ses critiques. Sa personnalité attachante lui a valu une communauté fidèle et engagée."
      specialty="Mr Bouchetrou s'est spécialisé dans les tests comparatifs et les défis culinaires. Sa marque de fabrique : comparer les mêmes plats dans différents restaurants (meilleur kebab, meilleure carbonade, meilleur tacos...) avec un système de notation rigoureux malgré le ton léger. Son approche divertissante permet d'aborder la critique culinaire de manière accessible et fun. Il excelle aussi dans les formats 'à tester' qui deviennent des références virales."
      contentStyle="Le contenu de Mr Bouchetrou est dynamique et divertissant. Les vidéos sont rythmées, avec un montage punchy et des punchlines mémorables. Le ton est décontracté mais jamais méchant. Les réactions aux plats sont théâtrales et drôles, créant des moments de viralité. Malgré l'humour, les avis restent pertinents et les recommandations fiables. Les stories interactives impliquent la communauté dans les choix et les votes."
      whyCollaborate="Mr Bouchetrou apporte une visibilité originale grâce à son ton unique. Les collaborations sont perçues comme authentiques car son style reste constant. Sa capacité à créer du contenu viral offre une portée dépassant largement sa base de followers. Les restaurants qui jouent le jeu de l'humour bénéficient d'une image sympathique et accessible. L'engagement de sa communauté garantit des retombées concrètes."
      stats={[
        { value: "16K+", label: "Followers Instagram" },
        { value: "10%", label: "Taux d'engagement" },
        { value: "90+", label: "Tests réalisés" },
        { value: "35+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "🏆", title: "Comparatifs", description: "Quel restaurant fait le meilleur plat ? Le verdict en vidéo" },
        { icon: "😂", title: "Tests décalés", description: "Découvertes culinaires avec humour et dérision" },
        { icon: "🗳️", title: "Sondages", description: "La communauté vote pour les prochains tests" }
      ]}
    />
  )
}
