import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Louise et Ses Découvertes (@louise.et.ses.decouvertes) - Influenceuse Food Lille | BEHYPE",
  description: "Collaborez avec Louise et Ses Découvertes, exploratrice culinaire à Lille. Nouvelles adresses et pépites cachées. Contactez via BEHYPE.",
  keywords: "louise.et.ses.decouvertes, louise et ses decouvertes instagram, influenceuse food lille, nouvelles adresses lille, collaboration restaurant lille",
  openGraph: {
    title: "Louise et Ses Découvertes (@louise.et.ses.decouvertes) - Influenceuse Food Lille",
    description: "Collaborez avec Louise et Ses Découvertes, exploratrice culinaire à Lille.",
    url: "https://behype.fr/influenceur/louise.et.ses.decouvertes",
  },
  alternates: { canonical: "https://behype.fr/influenceur/louise.et.ses.decouvertes" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Louise et Ses Découvertes"
      handle="@louise.et.ses.decouvertes"
      city="Lille"
      region="Nord"
      instagramUrl="https://instagram.com/louise.et.ses.decouvertes"
      followers="13K+"
      description="Louise et Ses Découvertes, c'est le carnet de voyage culinaire d'une Lilloise curieuse et aventurière. Louise arpente les rues de sa ville avec un seul objectif : dénicher les pépites que les autres n'ont pas encore trouvées. Son compte est une mine d'or pour les chasseurs de nouvelles adresses."
      specialty="Louise et Ses Découvertes s'est positionnée comme la spécialiste des nouvelles ouvertures et des adresses méconnues. Sa force : être parmi les premières à tester et partager les nouveaux concepts qui ouvrent dans la métropole. Elle excelle aussi dans la redécouverte d'adresses oubliées qui méritent un coup de projecteur. Son réseau dans le milieu de la restauration lui permet d'avoir des informations en avant-première."
      contentStyle="Le contenu de Louise et Ses Découvertes a un parfum d'exclusivité. Les posts annoncent souvent des ouvertures avant tout le monde. Les photos capturent l'essence des lieux avec un œil de découvreuse. Les descriptions mettent en avant ce qui rend chaque adresse unique. Les stories documentent ses explorations en temps réel, emmenant les followers dans ses aventures culinaires."
      whyCollaborate="Louise et Ses Découvertes est le partenaire idéal pour les nouvelles ouvertures et les établissements qui cherchent à (re)faire parler d'eux. Sa spécialisation dans la découverte lui confère une légitimité unique pour présenter les nouveaux concepts. Sa communauté est composée d'early adopters, toujours prêts à tester les nouveautés. Une collaboration avec Louise garantit une visibilité auprès des curieux et des trendsetters."
      stats={[
        { value: "13K+", label: "Followers Instagram" },
        { value: "8%", label: "Taux d'engagement" },
        { value: "80+", label: "Découvertes partagées" },
        { value: "30+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "🆕", title: "Nouvelles ouvertures", description: "Les premiers tests des restaurants qui viennent d'ouvrir" },
        { icon: "💎", title: "Pépites cachées", description: "Adresses méconnues qui méritent d'être découvertes" },
        { icon: "🗺️", title: "Explorations", description: "Aventures culinaires dans les quartiers moins connus" }
      ]}
    />
  )
}
