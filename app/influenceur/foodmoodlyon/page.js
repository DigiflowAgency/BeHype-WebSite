import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Food Mood Lyon (@foodmoodlyon) - Influenceur Food Lyon | BEHYPE",
  description: "Collaborez avec Food Mood Lyon, créateur de contenu food selon l'humeur à Lyon. Recommandations par envie. Contactez via BEHYPE.",
  keywords: "foodmoodlyon, food mood lyon instagram, influenceur food lyon, restaurants lyon, collaboration restaurant lyon",
  openGraph: {
    title: "Food Mood Lyon (@foodmoodlyon) - Influenceur Food Lyon",
    description: "Collaborez avec Food Mood Lyon, créateur de contenu food selon l'humeur à Lyon.",
    url: "https://behype.fr/influenceur/foodmoodlyon",
  },
  alternates: { canonical: "https://behype.fr/influenceur/foodmoodlyon" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Food Mood Lyon"
      handle="@foodmoodlyon"
      city="Lyon"
      region="Rhône"
      instagramUrl="https://instagram.com/foodmoodlyon"
      followers="14K+"
      description="Food Mood Lyon propose des recommandations culinaires adaptées à chaque humeur et chaque envie. Envie de réconfort, de fraîcheur, de quelque chose de festif ? Ce créateur de contenu guide les Lyonnais vers l'adresse parfaite en fonction de leur mood du moment."
      specialty="Food Mood Lyon excelle dans les recommandations contextuelles et émotionnelles. Sa spécialité : classifier les restaurants par type d'envie plutôt que par type de cuisine. Comfort food pour les jours de blues, brunchs festifs pour célébrer, restaurants calmes pour se ressourcer, ambiances animées pour faire la fête. Cette approche originale répond aux besoins réels des personnes qui cherchent une adresse."
      contentStyle="Le contenu de Food Mood Lyon est organisé autour des émotions et des situations. Les posts sont tagués par mood (#comfortfood, #datemoment, #friendsvibes). Les carrousels proposent plusieurs options selon l'humeur du jour. Les stories interactives avec sondages permettent d'engager la communauté sur ses envies. Le ton est empathique et compréhensif."
      whyCollaborate="Food Mood Lyon offre un angle de communication original et différenciant. Plutôt que de classer un restaurant par sa cuisine, il le positionne par l'émotion qu'il procure. Pour les établissements avec une ambiance marquée ou une identité forte, c'est l'opportunité d'être recommandés pour un mood spécifique, créant une association mémorable."
      stats={[
        { value: "14K+", label: "Followers Instagram" },
        { value: "9%", label: "Taux d'engagement" },
        { value: "90+", label: "Moods partagés" },
        { value: "30+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "🤗", title: "Comfort food", description: "Les adresses réconfortantes pour les jours de blues" },
        { icon: "💑", title: "Date mood", description: "Restaurants romantiques pour un tête-à-tête réussi" },
        { icon: "🎊", title: "Party vibes", description: "Où sortir pour une soirée entre amis mémorable" }
      ]}
    />
  )
}
