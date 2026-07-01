'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function ProjectGallery({
  images,
  name,
}: {
  images: string[]
  name: string
}) {
  const [activeImage, setActiveImage] = useState(0)
  const [lightbox, setLightbox] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (lightbox) {
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [lightbox])

  return (
    <div style={{ position: 'relative' }}>
      <div
        className="relative rounded-2xl overflow-hidden h-80 md:h-[460px] mb-3 cursor-zoom-in"
        onClick={() => setLightbox(images[activeImage])}
      >
        <Image
          src={images[activeImage]}
          alt={`${name} - zdjęcie ${activeImage + 1}`}
          fill
          className="object-contain transition-opacity duration-300"
          priority
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveImage(i)}
            className={`relative rounded-xl overflow-hidden h-20 border-2 transition-all ${activeImage === i ? 'border-gray-900' : 'border-transparent'}`}
          >
            <Image
              src={img}
              alt={`miniatura ${i + 1}`}
              fill
              className="object-contain"
            />
          </button>
        ))}
      </div>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 99999,
            background: 'rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              color: 'white',
              fontSize: '32px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              lineHeight: 1,
            }}
          >
            ✕
          </button>
          <img
            src={lightbox}
            alt="Powiększone zdjęcie"
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              objectFit: 'contain',
            }}
          />
        </div>
      )}
    </div>
  )
}
