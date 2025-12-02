import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Top Restos PACA (@toprestospaca) - Influenceur Food PACA | BEHYPE",
  description: "Collaborez avec Top Restos PACA, guide des meilleurs restaurants de la région. Sélection premium. Contactez via BEHYPE.",
  keywords: "toprestospaca, top restos paca instagram, influenceur food paca, meilleurs restaurants paca, collaboration restaurant paca",
  openGraph: {
    title: "Top Restos PACA (@toprestospaca) - Influenceur Food PACA",
    description: "Collaborez avec Top Restos PACA, guide des meilleurs restaurants de la région.",
    url: "https://behype.fr/influenceur/toprestospaca",
  },
  alternates: { canonical: "https://behype.fr/influenceur/toprestospaca" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Top Restos PACA"
      handle="@toprestospaca"
      city="Marseille"
      region="Provence-Alpes-Côte d'Azur"
      instagramUrl="https://instagram.com/toprestospaca"
      followers="22K+"
      description="Top Restos PACA recense les meilleures tables de toute la région Provence-Alpes-Côte d'Azur. De Marseille à Nice, d'Avignon à Cannes, ce guide exhaustif est la référence pour les gourmets qui parcourent le sud de la France à la recherche d'expériences culinaires d'exception."
      specialty="Top Restos PACA couvre l'ensemble de la région avec une approche sélective. Sa spécialité : les meilleures tables classées par ville, type de cuisine, budget et occasion. Les guides 'best of' par département sont des références. L'équipe teste rigoureusement avant de décerner le label 'Top'."
      contentStyle="Le contenu est structuré comme un guide professionnel. Chaque publication suit un format standardisé avec notation et informations pratiques. Les visuels sont de qualité magazine. Les carrousels comparatifs permettent de choisir selon ses critères. Le ton est objectif et informatif."
      whyCollaborate="Top Restos PACA offre une visibilité régionale exceptionnelle. Être dans la sélection 'Top' est un gage de qualité reconnu. L'audience de la région entière planifie ses sorties grâce à ces recommandations. Idéal pour les établissements qui attirent une clientèle de passage."
      stats={[
        { value: "22K+", label: "Followers Instagram" },
        { value: "5%", label: "Taux d'engagement" },
        { value: "300+", label: "Tops décernés" },
        { value: "75+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "🏆", title: "Best of PACA", description: "Les meilleurs restaurants de chaque département" },
        { icon: "📊", title: "Classements", description: "Rankings par catégorie et par ville" },
        { icon: "⭐", title: "Label Top", description: "Sélection rigoureuse des meilleures tables" }
      ]}
    />
  )
}
