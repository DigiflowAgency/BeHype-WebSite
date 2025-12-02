import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Toulouse Food Guide (@toulouse.foodguide) - Influenceur Food Toulouse | BEHYPE",
  description: "Collaborez avec Toulouse Food Guide, influenceur food incontournable à Toulouse. Découvrez les meilleures adresses de la ville rose à travers son contenu authentique. Contactez-le via BEHYPE.",
  keywords: "toulouse.foodguide, toulouse food guide instagram, influenceur food toulouse, créateur contenu food toulouse, collaboration restaurant toulouse",
  openGraph: {
    title: "Toulouse Food Guide (@toulouse.foodguide) - Influenceur Food Toulouse",
    description: "Collaborez avec Toulouse Food Guide, influenceur food incontournable à Toulouse.",
    url: "https://behype.fr/influenceur/toulouse.foodguide",
  },
  alternates: { canonical: "https://behype.fr/influenceur/toulouse.foodguide" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Toulouse Food Guide"
      handle="@toulouse.foodguide"
      city="Toulouse"
      region="Haute-Garonne"
      instagramUrl="https://instagram.com/toulouse.foodguide"
      followers="25K+"
      description="Toulouse Food Guide est LA référence pour découvrir les meilleures adresses food de la ville rose. Ce compte Instagram est devenu incontournable pour les Toulousains en quête de nouvelles expériences culinaires, des restaurants gastronomiques aux street food en passant par les brunchs tendance."
      specialty="Toulouse Food Guide s'est spécialisé dans la découverte et le partage des pépites culinaires toulousaines. Son expertise couvre l'ensemble de la scène gastronomique locale : restaurants traditionnels du Sud-Ouest, bistrots modernes, coffee shops artisanaux, et adresses de street food. Sa connaissance approfondie du terroir occitan lui permet de mettre en valeur aussi bien les établissements historiques que les nouveaux concepts qui font vibrer la ville rose. Chaque recommandation est le fruit d'une expérience personnelle, garantissant des avis authentiques et détaillés."
      contentStyle="Le style de Toulouse Food Guide se caractérise par des photos soignées mettant en valeur les plats dans leur meilleur jour, accompagnées de descriptions détaillées qui donnent envie de réserver immédiatement. Les stories quotidiennes offrent un aperçu des coulisses et des découvertes spontanées, créant une proximité avec la communauté. Les reels dynamiques présentent les ambiances des lieux et les moments forts des dégustations, permettant aux followers de se projeter facilement dans l'expérience."
      whyCollaborate="Collaborer avec Toulouse Food Guide, c'est bénéficier d'une visibilité ciblée auprès d'une audience locale qualifiée et engagée. Sa communauté lui fait confiance pour ses recommandations authentiques, ce qui se traduit par un taux de conversion élevé pour les établissements partenaires. Son approche professionnelle et sa connaissance du secteur garantissent un contenu de qualité qui met véritablement en valeur votre établissement. De plus, sa régularité de publication assure une présence continue dans le fil d'actualité de sa communauté."
      stats={[
        { value: "25K+", label: "Followers Instagram" },
        { value: "8%", label: "Taux d'engagement" },
        { value: "150+", label: "Restaurants testés" },
        { value: "50+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "🍽️", title: "Tests restaurants", description: "Découvertes détaillées des meilleures tables toulousaines avec avis complets" },
        { icon: "📍", title: "Bonnes adresses", description: "Sélection des spots incontournables classés par quartier et type de cuisine" },
        { icon: "🎬", title: "Reels immersifs", description: "Vidéos dynamiques présentant l'ambiance et les plats signature des établissements" }
      ]}
    />
  )
}
