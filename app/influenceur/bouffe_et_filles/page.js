import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Bouffe et Filles (@bouffe_et_filles) - Influenceuses Food Lyon | BEHYPE",
  description: "Collaborez avec Bouffe et Filles, collectif féminin de passionnées food à Lyon. Sorties et recommandations. Contactez via BEHYPE.",
  keywords: "bouffe_et_filles, bouffe et filles instagram, influenceuses food lyon, collectif food lyon, collaboration restaurant lyon",
  openGraph: {
    title: "Bouffe et Filles (@bouffe_et_filles) - Influenceuses Food Lyon",
    description: "Collaborez avec Bouffe et Filles, collectif féminin de passionnées food à Lyon.",
    url: "https://behype.fr/influenceur/bouffe_et_filles",
  },
  alternates: { canonical: "https://behype.fr/influenceur/bouffe_et_filles" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Bouffe et Filles"
      handle="@bouffe_et_filles"
      city="Lyon"
      region="Rhône"
      instagramUrl="https://instagram.com/bouffe_et_filles"
      followers="12K+"
      description="Bouffe et Filles est un collectif de copines unies par leur amour de la bonne bouffe lyonnaise. Ces passionnées partagent leurs sorties gourmandes avec authenticité et bonne humeur, offrant des recommandations pour des moments de partage entre amies autour de bonnes tables."
      specialty="Bouffe et Filles excelle dans les recommandations pour les sorties entre copines. Leur spécialité : les adresses parfaites pour un brunch dominical, un apéro qui s'éternise, une soirée filles, un anniversaire à célébrer. Leur regard collectif permet d'évaluer les établissements sur leur capacité à accueillir des groupes et à créer une ambiance conviviale."
      contentStyle="Le contenu de Bouffe et Filles respire la convivialité et la bonne humeur. Les photos montrent le collectif en action, partageant des plats et des fous rires. Le format des avis multiples apporte de la richesse aux recommandations. Les stories sont spontanées et festives. Le ton est celui d'un groupe de copines qui partagent leurs bons plans."
      whyCollaborate="Bouffe et Filles touche une audience féminine qui cherche des idées de sorties entre amies. Pour les établissements qui accueillent bien les groupes et proposent des concepts de partage, c'est le partenariat idéal. Le format collectif génère plusieurs avis et perspectives, renforçant la crédibilité de la recommandation. L'énergie positive du groupe crée un contenu engageant."
      stats={[
        { value: "12K+", label: "Followers Instagram" },
        { value: "10%", label: "Taux d'engagement" },
        { value: "75+", label: "Sorties partagées" },
        { value: "25+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "👯", title: "Sorties filles", description: "Les meilleures adresses pour un moment entre copines" },
        { icon: "🥳", title: "Anniversaires", description: "Où célébrer les occasions spéciales" },
        { icon: "🍹", title: "Apéros", description: "Les spots parfaits pour un afterwork qui dure" }
      ]}
    />
  )
}
