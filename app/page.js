'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Précharger l'iframe
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Loader minimal pour FCP rapide */}
      {!loaded && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: '#2465f7',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999
        }}>
          <img
            src="/images/LOGO-BEHYPE-WHITE_1.webp"
            alt="BE HYPE"
            width="200"
            height="auto"
            style={{ opacity: loaded ? 0 : 1, transition: 'opacity 0.3s' }}
          />
        </div>
      )}

      <iframe
        src="/index.html"
        loading="eager"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          border: 'none',
          margin: 0,
          padding: 0,
          overflow: 'hidden',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.3s'
        }}
        onLoad={() => setLoaded(true)}
      />
    </>
  )
}