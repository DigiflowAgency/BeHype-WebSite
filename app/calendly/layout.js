export const metadata = {
  title: "Réserver une Démo BEHYPE - Consultation Gratuite",
  description: "Prenez RDV avec notre équipe pour découvrir comment BEHYPE peut transformer la visibilité de votre restaurant. Consultation gratuite.",
  keywords: "démo behype, réservation consultation, rendez-vous marketing restaurant, présentation plateforme influenceur",
  openGraph: {
    title: "Réserver une Démo BEHYPE - Consultation Gratuite",
    description: "Prenez RDV pour découvrir comment BEHYPE peut transformer votre visibilité.",
    url: "https://behype.fr/calendly",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Démo BEHYPE",
    description: "Consultation gratuite. Découvrez notre plateforme.",
  },
  alternates: {
    canonical: "https://behype.fr/calendly",
  },
}

export default function CalendlyLayout({ children }) {
  return children
}
