'use client'

import { useEffect } from 'react'

export default function TermsOfUse() {
  useEffect(() => {
    document.title = "Conditions d'utilisation - BEHYPE"
  }, [])

  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden' }}>
      <iframe
        src="/terms-of-use.html"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          margin: 0,
          padding: 0,
          display: 'block'
        }}
        title="Conditions d'utilisation"
      />
    </div>
  )
}
