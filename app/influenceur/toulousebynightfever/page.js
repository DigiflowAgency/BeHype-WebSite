import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Toulouse By Night Fever (@toulousebynightfever) - Influenceur Food Toulouse | BEHYPE",
  description: "Collaborez avec Toulouse By Night Fever, spécialiste des sorties nocturnes et food à Toulouse. Bars, restaurants, vie nocturne. Contactez via BEHYPE.",
  keywords: "toulousebynightfever, toulouse by night fever instagram, influenceur food toulouse, sorties toulouse, bars restaurants toulouse",
  openGraph: {
    title: "Toulouse By Night Fever (@toulousebynightfever) - Influenceur Food Toulouse",
    description: "Collaborez avec Toulouse By Night Fever, spécialiste des sorties nocturnes et food à Toulouse.",
    url: "https://be-hype.com/influenceur/toulousebynightfever",
  },
  alternates: { canonical: "https://be-hype.com/influenceur/toulousebynightfever" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Toulouse By Night Fever"
      handle="@toulousebynightfever"
      city="Toulouse"
      region="Haute-Garonne"
      instagramUrl="https://instagram.com/toulousebynightfever"
      description="Toulouse By Night Fever est le guide ultime pour les noctambules gourmands de la ville rose. Spécialisé dans les sorties nocturnes, ce compte dévoile les meilleurs bars à cocktails, restaurants ouverts tard et spots où prolonger la soirée autour d'une bonne table. Une référence pour ceux qui aiment vivre Toulouse après le coucher du soleil."
      specialty="Toulouse By Night Fever a développé une expertise unique sur les adresses qui font vibrer Toulouse quand les étoiles s'allument. Sa spécialité englobe les bars à cocktails d'exception, les restaurants proposant un service tardif, les rooftops avec vue, et les établissements parfaits pour un dîner suivi d'une soirée. Cette niche précise lui permet de toucher une audience spécifique : les jeunes actifs et étudiants qui cherchent à combiner gastronomie et vie nocturne."
      contentStyle="Le contenu de Toulouse By Night Fever capture l'atmosphère nocturne de la ville avec des photos et vidéos qui retranscrivent parfaitement les ambiances tamisées et festives. Les lumières, les cocktails colorés et les plats photographiés dans leur contexte soirée créent une esthétique reconnaissable. Les stories en direct des soirées permettent aux followers de vivre l'expérience en temps réel et de découvrir les ambiances avant de se déplacer."
      whyCollaborate="Pour les établissements ciblant une clientèle du soir et de la nuit, Toulouse By Night Fever est le partenaire idéal. Son audience correspond exactement aux personnes qui sortent, consomment et recherchent des expériences nocturnes de qualité. Les horaires de publication sont optimisés pour toucher cette audience au moment où elle planifie ses sorties. Le format de contenu immersif permet de montrer l'ambiance de votre établissement, argument décisif pour attirer une clientèle nocturne."
      popularContent={[
        { icon: "🍸", title: "Cocktails & bars", description: "Les meilleurs spots pour boire un verre dans une ambiance unique" },
        { icon: "🌙", title: "Dîners tardifs", description: "Restaurants ouverts tard pour les repas after-work ou after-party" },
        { icon: "🎶", title: "Ambiances", description: "Vidéos immersives capturant l'énergie des nuits toulousaines" }
      ]}
    />
  )
}
