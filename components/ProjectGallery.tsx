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
          className="relative rounded-2xl overflow-hidden h-80 md:h-[460px] mb-3 cursor-zoom-in"
          onClick={() => setLightbox(images[activeImage])}
        >
          <Image
            src={images[activeImage]}
            alt={`${name} - zdjęcie ${activeImage + 1}`}
            fill
            className="object-cover transition-opacity duration-300"
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
                className="object-cover"
              />
            </button>
          ))}
        </div>
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
            onClick={() => setLightbox(null)}
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
              onClick={() => setLightbox(null)}
            >
              ✕
            </button>
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '900px',
                aspectRatio: '16/9',
              }}
            >
              <Image
                src={lightbox}
                alt="Powiększone zdjęcie"
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
