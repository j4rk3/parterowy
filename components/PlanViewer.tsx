'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function PlanViewer({ src, alt, label }: { src: string, alt: string, label: string }) {
  const [lightbox, setLightbox] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (lightbox) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  return (
    <>
      <div>
        <div
          className="relative rounded-2xl overflow-hidden h-64 border border-gray-100 cursor-zoom-in"
          onClick={() => setLightbox(true)}
        >
          <Image src={src} alt={alt} fill sizes="(max-width: 767px) 90vw, 400px" className="object-contain p-4" />
        </div>
        <p className="text-xs text-gray-400 text-center mt-2">{label}</p>
      </div>

      {mounted && lightbox && createPortal(
        <div
          onClick={() => setLightbox(false)}
          style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}
        >
          <button
            onClick={() => setLightbox(false)}
            style={{ position: 'fixed', top: '20px', right: '20px', color: 'white', fontSize: '28px', background: 'none', border: 'none', cursor: 'pointer', zIndex: 10000 }}
          >✕</button>
          <div style={{ position: 'relative', width: '80vw', height: '70vh' }}>
            <Image src={src} alt={alt} fill sizes="80vw" style={{ objectFit: 'contain' }} />
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
