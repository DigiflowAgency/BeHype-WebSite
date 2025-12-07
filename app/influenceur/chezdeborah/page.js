import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Chez Deborah (@chezdeborah) - Influenceuse Food Marseille | BEHYPE",
  description: "Collaborez avec Chez Deborah, influenceuse food et lifestyle à Marseille. Découvertes gourmandes et art de vivre. Contactez via BEHYPE.",
  keywords: "chezdeborah, chez deborah instagram, influenceuse food marseille, lifestyle marseille, collaboration restaurant marseille",
  openGraph: {
    title: "Chez Deborah (@chezdeborah) - Influenceuse Food Marseille",
    description: "Collaborez avec Chez Deborah, influenceuse food et lifestyle à Marseille.",
    url: "https://be-hype.com/influenceur/chezdeborah",
  },
  alternates: { canonical: "https://be-hype.com/influenceur/chezdeborah" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Chez Deborah"
      handle="@chezdeborah"
      city="Marseille"
      region="Bouches-du-Rhône"
      instagramUrl="https://instagram.com/chezdeborah"
      description="Chez Deborah, c'est l'art de vivre marseillais sublimé avec élégance et authenticité. Cette créatrice de contenu lifestyle partage ses découvertes gourmandes, ses adresses coups de cœur et ses moments de vie ensoleillés dans la cité phocéenne."
      specialty="Chez Deborah excelle dans les recommandations lifestyle qui mêlent food et art de vivre. Sa spécialité : les brunchs avec vue, les rooftops pour l'apéro, les terrasses cachées des quartiers chics, les adresses où l'on voit et où l'on est vu. Elle sait repérer les lieux qui offrent une expérience complète au-delà de l'assiette."
      contentStyle="Le contenu de Chez Deborah est solaire et aspirationnel. Les photos sont lumineuses et élégantes, mettant en scène des moments de vie enviables. Son style personnel fait partie de l'identité du compte. Les stories partagent son quotidien marseillais entre bonnes tables et beaux endroits. Le ton est chaleureux et personnel."
      whyCollaborate="Chez Deborah touche une audience qui aspire à un certain art de vivre méditerranéen. Pour les établissements haut de gamme, les hôtels avec restaurant, les rooftops et les adresses lifestyle, elle est l'ambassadrice parfaite. Son style valorise les lieux qui soignent l'expérience globale et l'esthétique."
      popularContent={[
        { icon: "🌅", title: "Sunset spots", description: "Les plus beaux endroits pour un apéro au coucher du soleil" },
        { icon: "✨", title: "Art de vivre", description: "Moments lifestyle ensoleillés à la marseillaise" },
        { icon: "📸", title: "Spots instagrammables", description: "Les adresses les plus photogéniques de la ville" }
      ]}
    />
  )
}
