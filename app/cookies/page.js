'use client'

import { useEffect } from 'react'

export default function Cookies() {
  useEffect(() => {
    document.title = "Politique de cookies - BEHYPE"
  }, [])

  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden' }}>
      <iframe
        src="/cookies.html"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          margin: 0,
          padding: 0,
          display: 'block'
        }}
        title="Politique de cookies"
      />
    </div>
  )
}
