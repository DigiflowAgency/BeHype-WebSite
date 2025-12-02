import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Sheiina (@sheiina__) - Influenceuse Food Lille | BEHYPE",
  description: "Collaborez avec Sheiina, influenceuse food et lifestyle à Lille. Brunchs, cafés et adresses trendy. Contactez via BEHYPE.",
  keywords: "sheiina__, sheiina instagram, influenceuse food lille, lifestyle lille, brunchs lille",
  openGraph: {
    title: "Sheiina (@sheiina__) - Influenceuse Food Lille",
    description: "Collaborez avec Sheiina, influenceuse food et lifestyle à Lille.",
    url: "https://behype.fr/influenceur/sheiina__",
  },
  alternates: { canonical: "https://behype.fr/influenceur/sheiina__" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Sheiina"
      handle="@sheiina__"
      city="Lille"
      region="Nord"
      instagramUrl="https://instagram.com/sheiina__"
      followers="22K+"
      description="Sheiina est une créatrice de contenu lifestyle et food qui partage son art de vivre à la lilloise. Entre brunchs raffinés, coffee shops cosy et adresses trendy, elle guide sa communauté vers les lieux où il fait bon vivre, manger et s'inspirer dans la capitale des Flandres."
      specialty="Sheiina excelle dans la découverte des adresses qui combinent esthétique et qualité. Sa spécialité englobe les brunchs instagrammables, les salons de thé élégants, les coffee shops pour freelances, et les restaurants à la décoration soignée. Son œil pour la déco et l'ambiance lui permet de repérer les lieux qui offrent une expérience complète, au-delà de la simple assiette. Elle est particulièrement suivie pour ses recommandations de lieux de travail alternatifs."
      contentStyle="Le contenu de Sheiina est un équilibre parfait entre food et lifestyle. Les photos sont lumineuses et aériennes, mettant en valeur tant les plats que les décors. Son style vestimentaire et sa mise en scène créent un univers aspirationnel cohérent. Les stories offrent des aperçus de son quotidien et des recommandations spontanées. Les reels lifestyle mêlent food, mode et moments de vie, touchant une audience large au-delà du simple food content."
      whyCollaborate="Sheiina touche une audience féminine urbaine et connectée, particulièrement réceptive aux expériences esthétiques. Pour les établissements qui soignent leur décoration et leur ambiance, elle est l'ambassadrice parfaite. Son approche lifestyle permet de valoriser l'expérience globale de votre établissement. Sa communauté engagée suit ses recommandations et cherche à reproduire son art de vivre à la lilloise."
      stats={[
        { value: "22K+", label: "Followers Instagram" },
        { value: "6%", label: "Taux d'engagement" },
        { value: "75+", label: "Adresses partagées" },
        { value: "40+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "🥐", title: "Brunchs chics", description: "Les plus beaux brunchs de Lille avec décor et menu détaillés" },
        { icon: "☕", title: "Work-friendly cafés", description: "Les meilleurs spots pour travailler au calme avec wifi" },
        { icon: "✨", title: "Lifestyle moments", description: "Tranches de vie gourmandes et inspirantes" }
      ]}
    />
  )
}
