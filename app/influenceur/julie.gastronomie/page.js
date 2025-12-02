import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Julie Gastronomie (@julie.gastronomie) - Influenceuse Food Lille | BEHYPE",
  description: "Collaborez avec Julie Gastronomie, experte en gastronomie et restaurants à Lille. Critique culinaire et belles tables. Contactez via BEHYPE.",
  keywords: "julie.gastronomie, julie gastronomie instagram, influenceuse food lille, critique gastronomique lille, restaurants gastronomiques lille",
  openGraph: {
    title: "Julie Gastronomie (@julie.gastronomie) - Influenceuse Food Lille",
    description: "Collaborez avec Julie Gastronomie, experte en gastronomie et restaurants à Lille.",
    url: "https://behype.fr/influenceur/julie.gastronomie",
  },
  alternates: { canonical: "https://behype.fr/influenceur/julie.gastronomie" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Julie Gastronomie"
      handle="@julie.gastronomie"
      city="Lille"
      region="Nord"
      instagramUrl="https://instagram.com/julie.gastronomie"
      followers="14K+"
      description="Julie Gastronomie est une fine bouche lilloise qui partage sa passion pour la haute gastronomie et les belles tables. Son approche raffinée et ses critiques détaillées en font une référence pour les amateurs de cuisine d'exception dans la métropole lilloise et au-delà."
      specialty="Julie Gastronomie s'est positionnée sur le segment premium de la restauration lilloise. Sa spécialité : les restaurants gastronomiques, les tables étoilées, les bistronomiques de qualité et les établissements qui proposent une expérience culinaire complète. Son expertise couvre les accords mets-vins, le service, le dressage et l'ensemble des éléments qui font une grande table. Elle sait décrypter le travail des chefs et le transmettre à sa communauté."
      contentStyle="Le contenu de Julie Gastronomie reflète le raffinement des tables qu'elle fréquente. Les photos sont artistiques, mettant en valeur le dressage et la créativité des chefs. Les descriptions sont précises et techniques, utilisant un vocabulaire gastronomique approprié. Les stories offrent des coulisses exclusives et des rencontres avec les équipes. Le ton est passionné mais exigeant, reflétant les standards élevés de sa communauté."
      whyCollaborate="Julie Gastronomie touche une clientèle premium, à la recherche d'expériences gastronomiques mémorables. Pour les établissements haut de gamme, elle représente un canal de communication idéal vers des clients à fort pouvoir d'achat. Sa crédibilité dans le milieu gastronomique confère une légitimité précieuse. Les collaborations sont traitées avec le même soin que les critiques indépendantes, garantissant un contenu de qualité."
      stats={[
        { value: "14K+", label: "Followers Instagram" },
        { value: "7%", label: "Taux d'engagement" },
        { value: "60+", label: "Tables gastronomiques" },
        { value: "25+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "⭐", title: "Tables étoilées", description: "Expériences dans les restaurants gastronomiques de la région" },
        { icon: "🍷", title: "Accords mets-vins", description: "Suggestions d'accompagnements pour sublimer les plats" },
        { icon: "👨‍🍳", title: "Portraits de chefs", description: "Rencontres avec les talents de la gastronomie lilloise" }
      ]}
    />
  )
}
