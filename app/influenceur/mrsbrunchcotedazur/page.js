import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Mrs Brunch Côte d'Azur (@mrsbrunchcotedazur) - Influenceuse Food Nice | BEHYPE",
  description: "Collaborez avec Mrs Brunch Côte d'Azur, spécialiste des brunchs sur la Riviera. Petit-déjeuners et matinées gourmandes. Contactez via BEHYPE.",
  keywords: "mrsbrunchcotedazur, mrs brunch cote d azur instagram, influenceuse brunch nice, brunchs nice, collaboration restaurant nice",
  openGraph: {
    title: "Mrs Brunch Côte d'Azur (@mrsbrunchcotedazur) - Influenceuse Food Nice",
    description: "Collaborez avec Mrs Brunch Côte d'Azur, spécialiste des brunchs sur la Riviera.",
    url: "https://behype.fr/influenceur/mrsbrunchcotedazur",
  },
  alternates: { canonical: "https://behype.fr/influenceur/mrsbrunchcotedazur" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Mrs Brunch Côte d'Azur"
      handle="@mrsbrunchcotedazur"
      city="Nice"
      region="Alpes-Maritimes"
      instagramUrl="https://instagram.com/mrsbrunchcotedazur"
      followers="16K+"
      description="Mrs Brunch Côte d'Azur est LA spécialiste des matinées gourmandes sur la Riviera. Des brunchs dominicaux ensoleillés aux petits-déjeuners en terrasse face à la mer, elle guide sa communauté vers les meilleures expériences pour bien commencer la journée sur la Côte d'Azur."
      specialty="Mrs Brunch Côte d'Azur a développé une expertise unique sur les brunchs et petits-déjeuners de la région. Sa spécialité couvre les brunchs du dimanche (buffets, à la carte, formules), les cafés pour travailler le matin, les pâtisseries pour les viennoiseries, et les hôtels qui proposent des petits-déjeuners ouverts aux extérieurs. Elle note systématiquement la qualité du café, critère essentiel pour sa communauté."
      contentStyle="Le contenu de Mrs Brunch Côte d'Azur est lumineux et appétissant, capturant l'esprit des matinées azuréennes. Les photos mettent en scène des tables bien garnies, des pancakes moelleux, des œufs benedict parfaits et des cafés fumants. Les avis sont détaillés sur chaque composante du brunch. Les stories du dimanche partagent ses découvertes en direct, créant un rendez-vous avec sa communauté."
      whyCollaborate="Mrs Brunch Côte d'Azur est le partenaire idéal pour tout établissement proposant une offre brunch ou petit-déjeuner. Son audience est composée de personnes qui planifient activement leur weekend et cherchent des recommandations précises. La spécialisation du compte garantit une audience ultra-qualifiée pour ce créneau horaire spécifique."
      stats={[
        { value: "16K+", label: "Followers Instagram" },
        { value: "8%", label: "Taux d'engagement" },
        { value: "100+", label: "Brunchs testés" },
        { value: "35+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "🥞", title: "Brunchs complets", description: "Tests détaillés des meilleurs brunchs de la Riviera" },
        { icon: "☕", title: "Cafés du matin", description: "Où prendre un bon café pour bien démarrer la journée" },
        { icon: "🌅", title: "Petit-déj vue mer", description: "Les plus belles terrasses pour un breakfast face à la Méditerranée" }
      ]}
    />
  )
}
