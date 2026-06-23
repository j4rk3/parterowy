'use client'

import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'

function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {children}
    </div>
  )
}

export default function SeoSection() {
  return (
    <div>
      {/* Intro — tekst na tle zdjęcia */}
      <section className="relative py-32 px-4 overflow-hidden">
        <Image
          src="/images/pageSEO.jpg"
          alt="Domy parterowe S-BUD"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-white/50 mb-4">
              O nas
            </p>
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
              Domy parterowe Wodzisław Śląski
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Nasza firma S-BUD z Wodzisławia Śląskiego specjalizuje się w
              budowie domów parterowych. Każda parterówka powstaje od
              fundamentów aż po stan deweloperski. Wybierając domy parterowe,
              zyskujesz przede wszystkim wygodę i bezpieczeństwo.
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              W parterówce łatwo połączyć salon z jadalnią i kuchnią. Gładkie
              przejście na taras bez progu to wygoda i bezpieczeństwo. Prosta
              bryła domu ułatwia też szybką rozbudowę o garaż czy pokój
              gościnny.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Zalety — 3 kafelki na białym tle */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-2 text-center">
              Dlaczego parterówka
            </p>
            <h3 className="text-2xl font-medium text-gray-900 mb-14 text-center">
              Zalety domów parterowych
            </h3>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0}>
              <div className="border-t-2 border-gray-900 pt-6">
                <h4 className="text-base font-medium text-gray-900 mb-3">
                  Niższe koszty budowy
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Mniej betonu pod fundamenty i łatwiejszy dach to realna
                  oszczędność. Parterówka do 150 m² jest tańsza niż dom piętrowy
                  o tej samej wielkości.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="border-t-2 border-gray-900 pt-6">
                <h4 className="text-base font-medium text-gray-900 mb-3">
                  Łatwa rozbudowa
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Jeśli kiedyś zechcesz dobudować garaż czy pokój dla gości,
                  parterówka ułatwia pracę i znacznie zmniejsza koszty
                  przeróbek.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="border-t-2 border-gray-900 pt-6">
                <h4 className="text-base font-medium text-gray-900 mb-3">
                  Bezpieczna przestrzeń
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Brak schodów zapewnia bezpieczeństwo dla dzieci i seniorów.
                  Gładkie przejście na taras bez progu to codzienna wygoda.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* W skrócie — ciemne tło */}
      <section className="bg-gray-950 py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-4">
              Podsumowanie
            </p>
            <p className="text-white/80 text-base leading-relaxed">
              Domy parterowe Wodzisław Śląski to doskonała opcja dla rodzin z
              dziećmi, seniorów i wszystkich, którzy lubią prostą i wygodną
              przestrzeń. Parterówka od S-BUD łączy nowoczesny design z
              funkcjonalnością. Jeśli marzysz o domu, w którym każdy krok jest
              prosty, a ogród staje się częścią wnętrza — skontaktuj się z nami
              już dziś.
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
