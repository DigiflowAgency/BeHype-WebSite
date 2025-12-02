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
    google: "G-51GFV221RX",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Google Analytics - DOIT être en premier pour Search Console */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-51GFV221RX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-51GFV221RX');
            `,
          }}
        />

        {/* Preconnect pour ressources critiques */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://player.vimeo.com" />
        <link rel="preconnect" href="https://d3e54v103j8qbb.cloudfront.net" />
        <link rel="dns-prefetch" href="https://static.hotjar.com" />

        {/* Preload logo pour FCP rapide */}
        <link rel="preload" href="/images/LOGO-BEHYPE-WHITE_1.webp" as="image" />

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T3PJSCWZ');
          `}
        </Script>

        {/* Hotjar Tracking Code */}
        <Script id="hotjar" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:6365087,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning style={{ margin: 0, padding: 0, overflow: 'hidden' }}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T3PJSCWZ"
            height="0"
            width="0"
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
