'use client'

import { useState } from 'react'

export default function YouTubeFacade({
  videoId,
  title,
}: {
  videoId: string
  title: string
}) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <div className="aspect-video rounded-2xl overflow-hidden bg-black">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Odtwórz: ${title}`}
      className="group relative block w-full aspect-video rounded-2xl overflow-hidden bg-black"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 group-hover:bg-white transition-colors shadow-lg">
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-900 ml-1" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  )
}
