import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "The Niçoise (@thenicoise) - Influenceuse Food Nice | BEHYPE",
  description: "Collaborez avec The Niçoise, influenceuse lifestyle et food à Nice. Art de vivre méditerranéen. Contactez via BEHYPE.",
  keywords: "thenicoise, the nicoise instagram, influenceuse food nice, lifestyle nice, collaboration restaurant nice",
  openGraph: {
    title: "The Niçoise (@thenicoise) - Influenceuse Food Nice",
    description: "Collaborez avec The Niçoise, influenceuse lifestyle et food à Nice.",
    url: "https://behype.fr/influenceur/thenicoise",
  },
  alternates: { canonical: "https://behype.fr/influenceur/thenicoise" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="The Niçoise"
      handle="@theniçoise"
      city="Nice"
      region="Alpes-Maritimes"
      instagramUrl="https://instagram.com/thenicoise"
      followers="26K+"
      description="The Niçoise incarne l'art de vivre à la niçoise avec élégance et authenticité. Cette créatrice de contenu lifestyle partage sa vision du bonheur méditerranéen à travers les bonnes tables, les beaux endroits et les moments de vie qui font le charme de la Côte d'Azur."
      specialty="The Niçoise excelle dans la mise en valeur de l'expérience globale au-delà de la simple assiette. Sa spécialité : les adresses qui offrent un cadre exceptionnel, une ambiance unique, une vue imprenable. Elle sait repérer les lieux qui permettent de vivre le lifestyle azuréen : beach clubs, rooftops, restaurants avec terrasse panoramique, bistrots chics du Vieux-Nice."
      contentStyle="Le contenu de The Niçoise est un hymne à la douceur de vivre niçoise. Les photos sont baignées de lumière dorée, mettant en scène des moments lifestyle enviables. Son style personnel fait partie de l'identité du compte, créant une esthétique cohérente et aspirationnelle. Les légendes célèbrent l'art de prendre le temps, de savourer, de profiter. Les stories partagent son quotidien ensoleillé."
      whyCollaborate="The Niçoise touche une audience aspirationnelle qui rêve du lifestyle côte d'azuréen. Pour les établissements haut de gamme, les beach clubs, les restaurants avec vue, elle est l'ambassadrice parfaite. Son style de vie enviable donne envie de vivre les mêmes expériences. Sa communauté, locale et internationale, inclut des visiteurs fortunés prêts à s'offrir le meilleur de Nice."
      stats={[
        { value: "26K+", label: "Followers Instagram" },
        { value: "5%", label: "Taux d'engagement" },
        { value: "120+", label: "Lieux partagés" },
        { value: "50+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "🌅", title: "Sunset spots", description: "Les plus beaux endroits pour dîner face au coucher de soleil" },
        { icon: "🏖️", title: "Beach clubs", description: "Les meilleures adresses pieds dans l'eau" },
        { icon: "✨", title: "Art de vivre", description: "Moments de vie à la niçoise à savourer" }
      ]}
    />
  )
}
