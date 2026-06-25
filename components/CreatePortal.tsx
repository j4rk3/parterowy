'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function PlanViewer({
  src,
  alt,
  label,
}: {
  src: string
  alt: string
  label: string
}) {
  const [lightbox, setLightbox] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [lightbox])

  return (
    <>
      <div>
        <div
          className="relative rounded-2xl overflow-hidden h-64 border border-gray-100 cursor-zoom-in"
          onClick={() => setLightbox(true)}
        >
          <Image src={src} alt={alt} fill className="object-contain p-4" />
        </div>
        <p className="text-xs text-gray-400 text-center mt-2">{label}</p>
      </div>

      {mounted &&
        lightbox &&
        createPortal(
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 9999,
              background: 'rgba(0,0,0,0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
            }}
            onClick={() => setLightbox(false)}
          >
            <button
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                color: 'white',
                fontSize: '28px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={() => setLightbox(false)}
            >
              ✕
            </button>
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '700px',
                aspectRatio: '4/3',
              }}
            >
              <Image
                src={src}
                alt={alt}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>,
          document.body
        )}
    </>
  )
}
