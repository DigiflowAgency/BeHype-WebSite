import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Marseille Bon Plan (@marseille_bon_plan) - Influenceur Food Marseille | BEHYPE",
  description: "Collaborez avec Marseille Bon Plan, spécialiste des bonnes affaires food à Marseille. Bons plans et astuces. Contactez via BEHYPE.",
  keywords: "marseille_bon_plan, marseille bon plan instagram, influenceur food marseille, bons plans marseille, collaboration restaurant marseille",
  openGraph: {
    title: "Marseille Bon Plan (@marseille_bon_plan) - Influenceur Food Marseille",
    description: "Collaborez avec Marseille Bon Plan, spécialiste des bonnes affaires food à Marseille.",
    url: "https://behype.fr/influenceur/marseille_bon_plan",
  },
  alternates: { canonical: "https://behype.fr/influenceur/marseille_bon_plan" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Marseille Bon Plan"
      handle="@marseille_bon_plan"
      city="Marseille"
      region="Bouches-du-Rhône"
      instagramUrl="https://instagram.com/marseille_bon_plan"
      followers="28K+"
      description="Marseille Bon Plan déniche les meilleures affaires culinaires de la cité phocéenne. Ce compte est devenu la référence des Marseillais malins qui veulent profiter des formules avantageuses, happy hours et promotions des restaurants de la ville."
      specialty="Marseille Bon Plan est le spécialiste du rapport qualité-prix à Marseille. Sa spécialité : les menus du jour généreux, les formules accessibles, les restaurants où on mange bien sans se ruiner. Il excelle dans la veille des offres spéciales et connaît tous les bons plans cachés de la ville, des cantines de quartier aux restos du port moins chers."
      contentStyle="Le contenu de Marseille Bon Plan est pratique et direct. Chaque post affiche clairement les prix et ce qu'on obtient pour son argent. Les stories partagent les offres flash et les dernières minutes. Le ton est celui d'un initié marseillais qui partage ses filons. Les formats comparatifs aident à optimiser son budget food."
      whyCollaborate="Marseille Bon Plan attire une audience large à la recherche du meilleur rapport qualité-prix. Pour les restaurants qui proposent des formules attractives ou veulent remplir leurs services creux, c'est le canal idéal. La mise en avant d'une offre génère un afflux rapide de clients sensibles aux bons plans."
      stats={[
        { value: "28K+", label: "Followers Instagram" },
        { value: "7%", label: "Taux d'engagement" },
        { value: "200+", label: "Bons plans partagés" },
        { value: "65+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "💰", title: "Petits prix", description: "Bien manger à Marseille sans se ruiner" },
        { icon: "🍽️", title: "Formules midi", description: "Les meilleurs menus du jour de la ville" },
        { icon: "⚡", title: "Offres flash", description: "Promotions et réductions à saisir vite" }
      ]}
    />
  )
}
