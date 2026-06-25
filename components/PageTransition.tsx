'use client'

import { useEffect, useState } from 'react'

export default function PageTransition({
  children,
  ready,
}: {
  children: React.ReactNode
  ready?: boolean
}) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (ready === false) return
    const timer = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(timer)
  }, [ready])

  return (
    <div
      className="transition-opacity duration-700"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {children}
    </div>
  )
}
