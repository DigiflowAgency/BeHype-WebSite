import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Marseille Bonnes Adresses (@marseille_bonnes_adresses) - Influenceur Food Marseille | BEHYPE",
  description: "Collaborez avec Marseille Bonnes Adresses, guide des meilleures tables marseillaises. Sélection rigoureuse. Contactez via BEHYPE.",
  keywords: "marseille_bonnes_adresses, marseille bonnes adresses instagram, influenceur food marseille, guide restaurants marseille, collaboration restaurant marseille",
  openGraph: {
    title: "Marseille Bonnes Adresses (@marseille_bonnes_adresses) - Influenceur Food Marseille",
    description: "Collaborez avec Marseille Bonnes Adresses, guide des meilleures tables marseillaises.",
    url: "https://behype.fr/influenceur/marseille_bonnes_adresses",
  },
  alternates: { canonical: "https://behype.fr/influenceur/marseille_bonnes_adresses" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Marseille Bonnes Adresses"
      handle="@marseille_bonnes_adresses"
      city="Marseille"
      region="Bouches-du-Rhône"
      instagramUrl="https://instagram.com/marseille_bonnes_adresses"
      followers="24K+"
      description="Marseille Bonnes Adresses s'est imposé comme le guide de confiance pour les gourmets marseillais. Chaque recommandation est le fruit d'une sélection rigoureuse, garantissant des expériences culinaires de qualité. Un compte pour ceux qui ne veulent pas prendre de risque."
      specialty="Marseille Bonnes Adresses se distingue par sa rigueur dans la sélection. Sa spécialité : les valeurs sûres, les adresses testées et approuvées. Les guides thématiques (meilleurs italiens, sushis, brunchs...) sont des références. L'équipe teste chaque établissement avant de le recommander."
      contentStyle="Le contenu est structuré et informatif. Chaque post inclut les informations essentielles : adresse, prix moyens, spécialités. Les visuels sont soignés et représentatifs. Les carrousels thématiques sont très partagés. Le ton est professionnel mais accessible."
      whyCollaborate="Marseille Bonnes Adresses offre une validation de qualité très appréciée. Être référencé par ce compte est un gage d'excellence. Son audience cherche des garanties avant de réserver. Pour les établissements de qualité, c'est l'opportunité d'obtenir une recommandation crédible."
      stats={[
        { value: "24K+", label: "Followers Instagram" },
        { value: "6%", label: "Taux d'engagement" },
        { value: "200+", label: "Adresses validées" },
        { value: "60+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "✅", title: "Valeurs sûres", description: "Les adresses qui ne déçoivent jamais" },
        { icon: "📋", title: "Tops thématiques", description: "Classements par type de cuisine" },
        { icon: "💯", title: "Avis détaillés", description: "Critiques complètes avec infos pratiques" }
      ]}
    />
  )
}
