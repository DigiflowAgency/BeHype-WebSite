import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Margaux Food & Travel (@margauxfoodandtravel) - Influenceuse Food Bordeaux | BEHYPE",
  description: "Collaborez avec Margaux Food & Travel, influenceuse food et voyage à Bordeaux. Découvertes culinaires et lifestyle. Contactez via BEHYPE.",
  keywords: "margauxfoodandtravel, margaux food and travel instagram, influenceuse food bordeaux, lifestyle bordeaux, collaboration restaurant bordeaux",
  openGraph: {
    title: "Margaux Food & Travel (@margauxfoodandtravel) - Influenceuse Food Bordeaux",
    description: "Collaborez avec Margaux Food & Travel, influenceuse food et voyage à Bordeaux.",
    url: "https://behype.fr/influenceur/margauxfoodandtravel",
  },
  alternates: { canonical: "https://behype.fr/influenceur/margauxfoodandtravel" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Margaux Food & Travel"
      handle="@margauxfoodandtravel"
      city="Bordeaux"
      region="Gironde"
      instagramUrl="https://instagram.com/margauxfoodandtravel"
      followers="24K+"
      description="Margaux Food & Travel mêle avec élégance ses deux passions : la gastronomie et le voyage. Basée à Bordeaux, elle partage ses découvertes culinaires locales autant que ses aventures gourmandes aux quatre coins du monde, offrant à sa communauté une perspective unique et inspirante sur l'art de bien manger."
      specialty="Margaux Food & Travel apporte une vision cosmopolite à la scène food bordelaise. Sa spécialité : les restaurants qui proposent des cuisines du monde, les adresses tenues par des chefs voyageurs, et les établissements qui offrent une expérience dépaysante. Elle excelle aussi dans les recommandations pour les brunchs, les rooftops et les lieux avec vue, parfaits pour des moments lifestyle à partager sur les réseaux."
      contentStyle="Le contenu de Margaux Food & Travel est esthétique et aspirationnel. Les photos sont lumineuses et élégantes, mettant en scène les plats dans des cadres soignés. Son style personnel (tenues, accessoires) fait partie intégrante de l'identité visuelle du compte. Les légendes mêlent recommandations pratiques et récits personnels. Les stories partagent son quotidien entre bons restaurants et projets de voyage."
      whyCollaborate="Margaux Food & Travel touche une audience lifestyle, majoritairement féminine, qui cherche des expériences photogéniques à vivre et à partager. Pour les établissements qui soignent leur décoration, leur ambiance et leur présentation, elle est une ambassadrice idéale. Son approche travel apporte une perspective fraîche qui peut attirer une clientèle de passage ou de week-end à Bordeaux."
      stats={[
        { value: "24K+", label: "Followers Instagram" },
        { value: "5%", label: "Taux d'engagement" },
        { value: "140+", label: "Adresses partagées" },
        { value: "50+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "🌍", title: "Cuisines du monde", description: "Les meilleures adresses internationales de Bordeaux" },
        { icon: "📸", title: "Spots instagrammables", description: "Les lieux les plus photogéniques pour bruncher" },
        { icon: "✈️", title: "Food trips", description: "Escapades gourmandes et découvertes en voyage" }
      ]}
    />
  )
}
