'use client'

import { useEffect } from 'react'

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Politique de confidentialité - BEHYPE"
  }, [])

  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden' }}>
      <iframe
        src="/privacy-policy.html"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          margin: 0,
          padding: 0,
          display: 'block'
        }}
        title="Politique de confidentialité"
      />
    </div>
  )
}
