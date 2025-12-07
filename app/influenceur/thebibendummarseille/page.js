import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "The Bibendum Marseille (@thebibendummarseille) - Influenceur Food Marseille | BEHYPE",
  description: "Collaborez avec The Bibendum Marseille, expert gastronomie et vins à Marseille. Tables d'exception. Contactez via BEHYPE.",
  keywords: "thebibendummarseille, the bibendum marseille instagram, influenceur gastronomie marseille, restaurants gastronomiques marseille, collaboration restaurant marseille",
  openGraph: {
    title: "The Bibendum Marseille (@thebibendummarseille) - Influenceur Food Marseille",
    description: "Collaborez avec The Bibendum Marseille, expert gastronomie et vins à Marseille.",
    url: "https://be-hype.com/influenceur/thebibendummarseille",
  },
  alternates: { canonical: "https://be-hype.com/influenceur/thebibendummarseille" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="The Bibendum Marseille"
      handle="@thebibendummarseille"
      city="Marseille"
      region="Bouches-du-Rhône"
      instagramUrl="https://instagram.com/thebibendummarseille"
      description="The Bibendum Marseille est un épicurien passionné qui explore la haute gastronomie marseillaise avec expertise et raffinement. Son nom, clin d'œil au guide Michelin, annonce la couleur : ici, on parle de vraie cuisine, de belles bouteilles et d'expériences gustatives mémorables."
      specialty="The Bibendum Marseille s'est positionné sur le segment premium de la restauration marseillaise. Sa spécialité : les restaurants gastronomiques, les tables étoilées, les bistronomiques de qualité et les bars à vins d'exception. Son expertise œnologique apporte une dimension supplémentaire avec des recommandations d'accords mets-vins pointues."
      contentStyle="Le contenu de The Bibendum Marseille reflète le raffinement des tables qu'il fréquente. Les photos sont soignées et artistiques, dignes de publications gastronomiques. Les descriptions techniques décrivent saveurs, textures et techniques culinaires. Les stories offrent des accès privilégiés aux coulisses des cuisines étoilées. Le ton est celui d'un connaisseur passionné."
      whyCollaborate="The Bibendum Marseille touche une clientèle premium à la recherche d'expériences gastronomiques d'exception. Pour les restaurants haut de gamme et les établissements étoilés, il représente un canal vers les fins gourmets de la région. Sa crédibilité dans le milieu gastronomique confère une légitimité précieuse."
      popularContent={[
        { icon: "⭐", title: "Étoilés", description: "Critiques des restaurants gastronomiques marseillais" },
        { icon: "🍷", title: "Accords mets-vins", description: "Sélections œnologiques pour sublimer les plats" },
        { icon: "👨‍🍳", title: "Portraits chefs", description: "Rencontres avec les talents de la cuisine marseillaise" }
      ]}
    />
  )
}
