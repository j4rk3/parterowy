'use client'

import { useEffect, useRef, useState } from 'react'

export default function MapEmbed({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="rounded-2xl overflow-hidden border border-gray-100 flex-1 min-h-[360px] bg-gray-50"
    >
      {loaded ? (
        <iframe
          src={src}
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: '360px' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="w-full h-full min-h-[360px] flex flex-col items-center justify-center text-gray-400 gap-2">
          <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
          </svg>
          <span className="text-xs">Mapa się ładuje...</span>
        </div>
      )}
    </div>
  )
}
