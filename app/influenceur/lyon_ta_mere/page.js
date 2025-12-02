import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Lyon Ta Mère (@lyon_ta_mere) - Influenceur Food Lyon | BEHYPE",
  description: "Collaborez avec Lyon Ta Mère, créateur de contenu food décalé à Lyon. Ton humoristique et tests sans filtre. Contactez via BEHYPE.",
  keywords: "lyon_ta_mere, lyon ta mere instagram, influenceur food lyon, tests food lyon, collaboration restaurant lyon",
  openGraph: {
    title: "Lyon Ta Mère (@lyon_ta_mere) - Influenceur Food Lyon",
    description: "Collaborez avec Lyon Ta Mère, créateur de contenu food décalé à Lyon.",
    url: "https://behype.fr/influenceur/lyon_ta_mere",
  },
  alternates: { canonical: "https://behype.fr/influenceur/lyon_ta_mere" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Lyon Ta Mère"
      handle="@lyon_ta_mere"
      city="Lyon"
      region="Rhône"
      instagramUrl="https://instagram.com/lyon_ta_mere"
      followers="19K+"
      description="Lyon Ta Mère bouscule les codes du food content avec un humour décapant et des avis sans langue de bois. Ce créateur de contenu iconoclaste offre une vision rafraîchissante de la scène food lyonnaise, osant dire ce que les autres pensent tout bas avec une bonne dose de second degré."
      specialty="Lyon Ta Mère excelle dans les tests cash et les comparatifs décalés. Sa spécialité : oser critiquer, confronter les réputations à la réalité, démonter les hypes injustifiées et révéler les vraies pépites. Il excelle dans les formats VS provocants et les classements qui font réagir. Son ton unique attire une communauté qui en a marre du politiquement correct du food content classique."
      contentStyle="Le contenu de Lyon Ta Mère est punchy et mémorable. Les vidéos sont montées avec dynamisme et punchlines. Le ton est irrévérencieux mais jamais méchant, drôle mais toujours fondé. Les légendes sont percutantes. Les stories sont interactives et engagent les débats. L'humour sert l'honnêteté des avis, créant un lien de confiance particulier avec l'audience."
      whyCollaborate="Lyon Ta Mère apporte une visibilité différente grâce à son ton unique. Les restaurants qui jouent le jeu et osent l'authenticité y gagnent une image cool et décontractée. Une validation de sa part est perçue comme d'autant plus crédible qu'il n'hésite pas à critiquer. Son audience jeune et engagée réagit fortement aux recommandations."
      stats={[
        { value: "19K+", label: "Followers Instagram" },
        { value: "11%", label: "Taux d'engagement" },
        { value: "95+", label: "Tests décalés" },
        { value: "40+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "🔥", title: "Clash tests", description: "Vérité crue sur les adresses surcotées" },
        { icon: "😂", title: "Humour food", description: "La bouffe lyonnaise vue avec ironie" },
        { icon: "⚔️", title: "VS épiques", description: "Comparatifs sans concession entre concurrents" }
      ]}
    />
  )
}
