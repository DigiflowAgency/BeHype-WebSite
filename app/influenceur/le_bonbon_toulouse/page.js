import InfluencerPageTemplate from '../../components/InfluencerPageTemplate'

export const metadata = {
  title: "Le Bonbon Toulouse (@le_bonbon_toulouse) - Influenceur Food Toulouse | BEHYPE",
  description: "Collaborez avec Le Bonbon Toulouse, média lifestyle et food référent à Toulouse. Large audience locale et contenu premium. Contactez via BEHYPE.",
  keywords: "le_bonbon_toulouse, le bonbon toulouse instagram, influenceur food toulouse, média food toulouse, collaboration restaurant toulouse",
  openGraph: {
    title: "Le Bonbon Toulouse (@le_bonbon_toulouse) - Influenceur Food Toulouse",
    description: "Collaborez avec Le Bonbon Toulouse, média lifestyle et food référent à Toulouse.",
    url: "https://behype.fr/influenceur/le_bonbon_toulouse",
  },
  alternates: { canonical: "https://behype.fr/influenceur/le_bonbon_toulouse" },
}

export default function Page() {
  return (
    <InfluencerPageTemplate
      name="Le Bonbon Toulouse"
      handle="@le_bonbon_toulouse"
      city="Toulouse"
      region="Haute-Garonne"
      instagramUrl="https://instagram.com/le_bonbon_toulouse"
      followers="85K+"
      description="Le Bonbon Toulouse est le média digital de référence pour découvrir le meilleur de la vie toulousaine. Reconnu pour son expertise dans les domaines food, culture et lifestyle, ce compte Instagram rassemble une communauté massive et engagée de Toulousains à la recherche des meilleures expériences de leur ville."
      specialty="Le Bonbon Toulouse couvre l'ensemble de la scène gastronomique de la ville rose avec une approche éditoriale professionnelle. Sa force réside dans sa capacité à identifier les tendances avant tout le monde et à mettre en lumière aussi bien les grandes ouvertures que les petites adresses de quartier. Le compte excelle particulièrement dans les formats 'top' et les guides thématiques (meilleurs brunchs, meilleures terrasses, restaurants romantiques...) qui deviennent des références pour les habitants."
      contentStyle="Le style éditorial du Bonbon Toulouse allie professionnalisme et proximité. Les visuels sont travaillés selon une charte graphique reconnaissable, avec des photos de qualité magazine et des carrousels informatifs très partagés. Les légendes combinent informations pratiques, storytelling et touches d'humour caractéristiques de l'identité du média. La régularité des publications et la diversité des formats (posts, reels, stories, guides) garantissent une présence continue et variée."
      whyCollaborate="Collaborer avec Le Bonbon Toulouse, c'est accéder à la plus grande communauté locale dédiée au lifestyle toulousain. L'impact d'une publication est considérable grâce à la taille de l'audience et à sa qualification : ce sont des habitants actifs, consommateurs réguliers de sorties restaurants. Le professionnalisme de l'équipe assure un contenu de haute qualité qui valorise véritablement votre établissement. Les formats publicitaires sont clairement identifiés, garantissant transparence et conformité."
      stats={[
        { value: "85K+", label: "Followers Instagram" },
        { value: "5%", label: "Taux d'engagement" },
        { value: "500+", label: "Adresses référencées" },
        { value: "200+", label: "Partenariats" }
      ]}
      popularContent={[
        { icon: "📋", title: "Tops & Guides", description: "Classements thématiques des meilleures adresses par catégorie" },
        { icon: "🆕", title: "Nouvelles ouvertures", description: "Première couverture des nouveaux restaurants de la ville" },
        { icon: "🎉", title: "Événements food", description: "Couverture des festivals, pop-ups et événements gastronomiques" }
      ]}
    />
  )
}
