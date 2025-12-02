import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Bon Plan Lyon (@bonplanlyon) - Influenceur Food Lyon | BEHYPE",
  description: "Collaborez avec Bon Plan Lyon, spécialiste des bonnes affaires food à Lyon. Rapport qualité-prix et bons plans. Contactez via BEHYPE.",
  keywords: "bonplanlyon, bon plan lyon instagram, influenceur food lyon, bons plans restaurants lyon, collaboration restaurant lyon",
  openGraph: {
    title: "Bon Plan Lyon (@bonplanlyon) - Influenceur Food Lyon",
    description: "Collaborez avec Bon Plan Lyon, spécialiste des bonnes affaires food à Lyon.",
    url: "https://behype.fr/influenceur/bonplanlyon",
  },
  alternates: { canonical: "https://behype.fr/influenceur/bonplanlyon" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Bon Plan Lyon"
      handle="@bonplanlyon"
      city="Lyon"
      region="Rhône"
      instagramUrl="https://instagram.com/bonplanlyon"
      followers="25K+"
      description="Bon Plan Lyon déniche les meilleures affaires culinaires de la ville pour permettre à tous de bien manger sans se ruiner. Ce compte est devenu la référence des Lyonnais malins qui veulent profiter des menus du jour, happy hours, formules avantageuses et promotions des restaurants."
      specialty="Bon Plan Lyon est le spécialiste du rapport qualité-prix dans la restauration lyonnaise. Sa spécialité : les menus du jour généreux, les formules du midi accessibles, les happy hours prolongés, les restaurants BYOB, les brunchs abordables. Il excelle dans la veille des offres spéciales et des promotions ponctuelles. Son réseau lui permet d'avoir des infos en avant-première sur les bons plans."
      contentStyle="Le contenu de Bon Plan Lyon est pratique et actionnable. Chaque post indique clairement les prix et ce qui est inclus. Les stories relaient en temps réel les offres du jour et les dernières minutes. Le ton est celui d'un chasseur de bons plans qui partage ses trouvailles. Les carrousels comparatifs montrent où manger pour moins de 15€, 20€, etc."
      whyCollaborate="Bon Plan Lyon attire une audience large qui cherche à bien manger avec un budget maîtrisé. Pour les restaurants qui proposent des formules attractives ou qui veulent remplir leurs services creux, c'est le canal idéal. La mise en avant d'une offre spéciale génère un afflux rapide de clients. Le format répond parfaitement aux attentes d'une audience en quête de bons plans."
      stats={[
        { value: "25K+", label: "Followers Instagram" },
        { value: "7%", label: "Taux d'engagement" },
        { value: "180+", label: "Bons plans partagés" },
        { value: "60+", label: "Collaborations" }
      ]}
      popularContent={[
        { icon: "💰", title: "Petits prix", description: "Bien manger à Lyon sans casser la tirelire" },
        { icon: "🍽️", title: "Menus du jour", description: "Les meilleures formules midi de la ville" },
        { icon: "🍸", title: "Happy hours", description: "Où profiter des tarifs réduits après le travail" }
      ]}
    />
  )
}
