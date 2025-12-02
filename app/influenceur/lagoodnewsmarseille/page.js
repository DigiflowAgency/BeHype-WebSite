import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "La Good News Marseille (@lagoodnewsmarseille) - Influenceur Food Marseille | BEHYPE",
  description: "Collaborez avec La Good News Marseille, média positif sur Marseille. Food et actualités joyeuses. Contactez via BEHYPE.",
  keywords: "lagoodnewsmarseille, la good news marseille instagram, influenceur food marseille, bonnes nouvelles marseille, collaboration restaurant marseille",
  openGraph: {
    title: "La Good News Marseille (@lagoodnewsmarseille) - Influenceur Food Marseille",
    description: "Collaborez avec La Good News Marseille, média positif sur Marseille.",
    url: "https://behype.fr/influenceur/lagoodnewsmarseille",
  },
  alternates: { canonical: "https://behype.fr/influenceur/lagoodnewsmarseille" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="La Good News Marseille"
      handle="@lagoodnewsmarseille"
      city="Marseille"
      region="Bouches-du-Rhône"
      instagramUrl="https://instagram.com/lagoodnewsmarseille"
      followers="26K+"
      description="La Good News Marseille partage les bonnes nouvelles de la cité phocéenne avec optimisme et bienveillance. Dans un monde d'infos anxiogènes, ce média positif met en lumière les initiatives inspirantes, les ouvertures enthousiasmantes et les belles histoires de la ville, food inclus."
      specialty="La Good News Marseille couvre les bonnes nouvelles marseillaises avec une section food très développée. Sa spécialité : les ouvertures de restaurants, les initiatives solidaires de restaurateurs, les projets food innovants, les success stories locales. L'angle positif différencie le contenu des critiques classiques."
      contentStyle="Le contenu est résolument optimiste et bienveillant. Les publications mettent en avant le positif : nouvelles ouvertures, projets inspirants, parcours de réussite. Le ton est enthousiaste et encourageant. Les stories célèbrent les petites et grandes victoires de la scène food marseillaise."
      whyCollaborate="La Good News Marseille offre une mise en lumière bienveillante. L'angle 'bonne nouvelle' génère de l'engouement et du partage. Pour les nouvelles ouvertures et les projets food inspirants, c'est le canal idéal. L'énergie positive du compte attire une audience optimiste et curieuse."
      stats={[
        { value: "26K+", label: "Followers Instagram" },
        { value: "6%", label: "Taux d'engagement" },
        { value: "150+", label: "Good news food" },
        { value: "55+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "✨", title: "Ouvertures", description: "Les nouvelles adresses qui font du bien" },
        { icon: "💪", title: "Success stories", description: "Parcours inspirants de restaurateurs" },
        { icon: "❤️", title: "Initiatives solidaires", description: "Quand la food fait du bien à tous" }
      ]}
    />
  )
}
