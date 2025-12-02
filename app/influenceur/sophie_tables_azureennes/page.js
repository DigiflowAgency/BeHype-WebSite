import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Sophie Tables Azuréennes (@sophie_tables_azureennes) - Influenceuse Food Nice | BEHYPE",
  description: "Collaborez avec Sophie Tables Azuréennes, experte gastronomie sur la Côte d'Azur. Tables d'exception et critiques éclairées. Contactez via BEHYPE.",
  keywords: "sophie_tables_azureennes, sophie tables azureennes instagram, influenceuse gastronomie nice, restaurants gastronomiques nice, collaboration restaurant nice",
  openGraph: {
    title: "Sophie Tables Azuréennes (@sophie_tables_azureennes) - Influenceuse Food Nice",
    description: "Collaborez avec Sophie Tables Azuréennes, experte gastronomie sur la Côte d'Azur.",
    url: "https://behype.fr/influenceur/sophie_tables_azureennes",
  },
  alternates: { canonical: "https://behype.fr/influenceur/sophie_tables_azureennes" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Sophie Tables Azuréennes"
      handle="@sophie_tables_azureennes"
      city="Nice"
      region="Alpes-Maritimes"
      instagramUrl="https://instagram.com/sophie_tables_azureennes"
      followers="14K+"
      description="Sophie Tables Azuréennes est une critique gastronomique passionnée qui décrypte avec finesse les meilleures tables de la Côte d'Azur. Son expertise et son palais affûté en font une référence pour les amateurs de haute gastronomie dans la région, des étoilés de Monaco aux bistronomiques niçois."
      specialty="Sophie Tables Azuréennes s'est positionnée sur le segment premium de la restauration azuréenne. Sa spécialité : les restaurants gastronomiques, les tables étoilées, les chefs qui font rayonner la cuisine méditerranéenne. Son expertise couvre les accords mets-vins, les techniques culinaires et le service d'excellence. Elle sait décrypter le travail des brigades et mettre en mots les émotions gustatives."
      contentStyle="Le contenu de Sophie Tables Azuréennes reflète le raffinement des tables qu'elle fréquente. Les photos sont artistiques, dignes de publications gastronomiques. Les descriptions sont précises et techniques, utilisant un vocabulaire d'experte. Les stories offrent des accès privilégiés en coulisses et des rencontres avec les chefs. Le ton est passionné mais exigeant."
      whyCollaborate="Sophie Tables Azuréennes touche une clientèle premium prête à investir dans des expériences gastronomiques d'exception. Pour les restaurants haut de gamme et les établissements étoilés, elle représente un canal de communication vers les fins gourmets de la région. Sa crédibilité dans le milieu gastronomique confère une légitimité précieuse aux établissements qu'elle recommande."
      stats={[
        { value: "14K+", label: "Followers Instagram" },
        { value: "8%", label: "Taux d'engagement" },
        { value: "70+", label: "Tables gastronomiques" },
        { value: "30+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "⭐", title: "Étoilés", description: "Critiques des restaurants gastronomiques de la région" },
        { icon: "👨‍🍳", title: "Rencontres chefs", description: "Portraits et interviews des talents azuréens" },
        { icon: "🍾", title: "Accords", description: "Suggestions de vins pour accompagner les menus" }
      ]}
    />
  )
}
