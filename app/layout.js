import Script from 'next/script'

export const metadata = {
  title: "BEHYPE - Plateforme N°1 pour connecter restaurants et influenceurs food",
  description: "Boostez la visibilité de votre restaurant avec +3 000 influenceurs food. Collaborations authentiques, résultats mesurables. Rejoignez +500 établissements satisfaits.",
  keywords: "influenceur food, marketing restaurant, collaboration influenceur, visibilité restaurant, food influencer, marketing digital restauration",
  authors: [{ name: "BEHYPE" }],
  creator: "BEHYPE",
  publisher: "BEHYPE",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://behype.fr",
    siteName: "BEHYPE",
    title: "BEHYPE - Connectez votre restaurant avec des influenceurs food",
    description: "La plateforme qui révolutionne les collaborations entre restaurants et influenceurs. +3 000 créateurs, +500 établissements.",
    images: [
      {
        url: "/images/LOGO-BEHYPE-WHITE_1.webp",
        width: 1200,
        height: 630,
        alt: "BEHYPE - Restaurants & Influenceurs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BEHYPE - Restaurants & Influenceurs",
    description: "Boostez la visibilité de votre restaurant avec +3 000 influenceurs food",
    images: ["/images/LOGO-BEHYPE-WHITE_1.webp"],
    creator: "@behype",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "G-CWJWKLZM41",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-51GFV221RX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-51GFV221RX');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning style={{ margin: 0, padding: 0, overflow: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}
