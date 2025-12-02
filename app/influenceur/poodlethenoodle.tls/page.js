import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Poodle The Noodle TLS (@poodlethenoodle.tls) - Influenceur Food Toulouse | BEHYPE",
  description: "Collaborez avec Poodle The Noodle TLS, spécialiste de la cuisine asiatique et des nouilles à Toulouse. Ramen, pho, dim sum. Contactez via BEHYPE.",
  keywords: "poodlethenoodle.tls, poodle the noodle toulouse instagram, influenceur cuisine asiatique toulouse, ramen toulouse, restaurants asiatiques toulouse",
  openGraph: {
    title: "Poodle The Noodle TLS (@poodlethenoodle.tls) - Influenceur Food Toulouse",
    description: "Collaborez avec Poodle The Noodle TLS, spécialiste de la cuisine asiatique à Toulouse.",
    url: "https://behype.fr/influenceur/poodlethenoodle.tls",
  },
  alternates: { canonical: "https://behype.fr/influenceur/poodlethenoodle.tls" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Poodle The Noodle TLS"
      handle="@poodlethenoodle.tls"
      city="Toulouse"
      region="Haute-Garonne"
      instagramUrl="https://instagram.com/poodlethenoodle.tls"
      followers="10K+"
      description="Poodle The Noodle TLS est le spécialiste incontesté de la cuisine asiatique à Toulouse. Des ramens fumants aux dim sum délicats, en passant par les pho réconfortants et les currys épicés, ce créateur de contenu guide sa communauté vers les meilleures adresses asiatiques de la ville rose."
      specialty="Poodle The Noodle TLS possède une expertise pointue sur l'ensemble des cuisines asiatiques présentes à Toulouse : japonaise, chinoise, vietnamienne, thaïlandaise, coréenne... Sa connaissance des saveurs authentiques lui permet de distinguer les établissements qui respectent les traditions culinaires de ceux qui les adaptent pour le palais occidental. Véritable encyclopédie vivante des restaurants asiatiques toulousains, il sait orienter sa communauté selon leurs envies précises."
      contentStyle="Le contenu de Poodle The Noodle TLS est un voyage visuel à travers l'Asie sans quitter Toulouse. Les photos capturent parfaitement les vapeurs s'échappant d'un bol de ramen, les textures des nouilles, et les couleurs vives des plats. Les vidéos immersives montrent la préparation en cuisine et le service à table. Les descriptions sont détaillées sur les ingrédients et les techniques culinaires, éduquant les followers sur les subtilités de chaque cuisine."
      whyCollaborate="Pour les restaurants asiatiques de Toulouse, Poodle The Noodle TLS représente le partenaire idéal. Son audience est composée d'amateurs éclairés de cuisine asiatique, à la recherche d'authenticité et de qualité. Une recommandation de sa part est perçue comme un gage de confiance par cette communauté de passionnés. Son expertise permet de mettre en valeur les spécificités de votre cuisine et de toucher exactement les clients susceptibles d'apprécier votre offre."
      stats={[
        { value: "10K+", label: "Followers Instagram" },
        { value: "9%", label: "Taux d'engagement" },
        { value: "60+", label: "Restos asiatiques testés" },
        { value: "20+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "🍜", title: "Tests ramens", description: "Comparatifs et avis détaillés sur les ramens de la ville" },
        { icon: "🥟", title: "Dim sum & dumplings", description: "À la découverte des meilleures bouchées vapeur toulousaines" },
        { icon: "🌶️", title: "Épicé ou pas", description: "Guide des niveaux de piquant pour chaque restaurant" }
      ]}
    />
  )
}
