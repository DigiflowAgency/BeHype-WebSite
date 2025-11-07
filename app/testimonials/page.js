'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Testimonials() {
  const router = useRouter()

  useEffect(() => {
    router.push('/testimonials-new')
  }, [router])

  return null
}