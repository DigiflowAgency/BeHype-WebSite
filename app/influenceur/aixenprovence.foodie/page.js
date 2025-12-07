import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Aix-en-Provence Foodie (@aixenprovence.foodie) - Influenceur Food Aix | BEHYPE",
  description: "Collaborez avec Aix-en-Provence Foodie, référence food à Aix. Gastronomie aixoise et découvertes. Contactez via BEHYPE.",
  keywords: "aixenprovence.foodie, aix en provence foodie instagram, influenceur food aix, restaurants aix en provence, collaboration restaurant aix",
  openGraph: {
    title: "Aix-en-Provence Foodie (@aixenprovence.foodie) - Influenceur Food Aix",
    description: "Collaborez avec Aix-en-Provence Foodie, référence food à Aix.",
    url: "https://be-hype.com/influenceur/aixenprovence.foodie",
  },
  alternates: { canonical: "https://be-hype.com/influenceur/aixenprovence.foodie" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Aix-en-Provence Foodie"
      handle="@aixenprovence.foodie"
      city="Aix-en-Provence"
      region="Bouches-du-Rhône"
      instagramUrl="https://instagram.com/aixenprovence.foodie"
      description="Aix-en-Provence Foodie est LA référence pour découvrir les meilleures adresses de la cité du Roy René. Ce créateur de contenu guide les Aixois et les visiteurs vers les bonnes tables qui font le charme gastronomique de cette ville d'art et d'histoire."
      specialty="Aix-en-Provence Foodie connaît parfaitement la scène food aixoise. Sa spécialité englobe les terrasses du Cours Mirabeau, les restaurants du centre historique, les bistrots de la place des Cardeurs, les pâtisseries pour les calissons. Il sait distinguer les vraies bonnes adresses des pièges à touristes."
      contentStyle="Le contenu respire l'élégance aixoise. Les photos capturent le charme des fontaines, des places ombragées et des terrasses ensoleillées. Le ton est raffiné mais accessible, à l'image de la ville. Les stories partagent les découvertes au fil des promenades dans le centre historique."
      whyCollaborate="Aix-en-Provence Foodie offre une visibilité ciblée sur le marché aixois. Son audience locale est complétée par des visiteurs qui préparent leur séjour. Pour les restaurants d'Aix, c'est le canal privilégié vers une clientèle qualifiée, souvent plus aisée que la moyenne."
      popularContent={[
        { icon: "⛲", title: "Centre historique", description: "Les meilleures tables du vieux Aix" },
        { icon: "☕", title: "Terrasses", description: "Où profiter du soleil aixois en terrasse" },
        { icon: "🍬", title: "Douceurs", description: "Calissons et pâtisseries provençales" }
      ]}
    />
  )
}
