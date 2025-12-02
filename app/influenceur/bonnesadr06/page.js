import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Bonnes Adresses 06 (@bonnesadr06) - Influenceur Food Nice | BEHYPE",
  description: "Collaborez avec Bonnes Adresses 06, guide des meilleurs restaurants des Alpes-Maritimes. Sélection rigoureuse. Contactez via BEHYPE.",
  keywords: "bonnesadr06, bonnes adresses 06 instagram, influenceur food nice, guide restaurants nice, collaboration restaurant nice",
  openGraph: {
    title: "Bonnes Adresses 06 (@bonnesadr06) - Influenceur Food Nice",
    description: "Collaborez avec Bonnes Adresses 06, guide des meilleurs restaurants des Alpes-Maritimes.",
    url: "https://behype.fr/influenceur/bonnesadr06",
  },
  alternates: { canonical: "https://behype.fr/influenceur/bonnesadr06" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Bonnes Adresses 06"
      handle="@bonnesadr06"
      city="Nice"
      region="Alpes-Maritimes"
      instagramUrl="https://instagram.com/bonnesadr06"
      followers="22K+"
      description="Bonnes Adresses 06 s'est imposé comme le guide de confiance pour les gourmets des Alpes-Maritimes. Chaque recommandation est le fruit d'une sélection rigoureuse, garantissant à la communauté des expériences culinaires de qualité. Un compte pour ceux qui ne veulent prendre aucun risque sur le choix du restaurant."
      specialty="Bonnes Adresses 06 se distingue par sa rigueur dans la sélection des établissements recommandés. Sa spécialité : les valeurs sûres, les adresses testées et approuvées qui ne déçoivent jamais. Le compte excelle dans les formats 'top' et les guides par catégorie (meilleurs italiens, meilleurs poissons, meilleurs pour un date...) qui deviennent des références pour les habitants."
      contentStyle="Le contenu de Bonnes Adresses 06 est structuré et informatif. Chaque post suit un format reconnaissable avec les informations essentielles : adresse, fourchette de prix, spécialités, réservation conseillée. Les visuels sont soignés et représentatifs de l'expérience réelle. Les carrousels thématiques sont particulièrement appréciés pour leur côté pratique. Les stories relaient les retours de la communauté."
      whyCollaborate="Bonnes Adresses 06 offre une validation de qualité très appréciée par sa communauté. Être référencé par ce compte est perçu comme un label d'excellence. Son audience est composée de personnes exigeantes qui cherchent des garanties avant de réserver. Pour les établissements de qualité, c'est l'opportunité d'obtenir une recommandation qui pèse dans les décisions des clients potentiels."
      stats={[
        { value: "22K+", label: "Followers Instagram" },
        { value: "6%", label: "Taux d'engagement" },
        { value: "180+", label: "Adresses validées" },
        { value: "55+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "✅", title: "Valeurs sûres", description: "Les adresses qui ne déçoivent jamais, testées et approuvées" },
        { icon: "📋", title: "Tops thématiques", description: "Classements par type de cuisine ou occasion" },
        { icon: "💯", title: "Avis détaillés", description: "Critiques complètes avec toutes les infos pratiques" }
      ]}
    />
  )
}
