'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import { withGarage, withoutGarage } from '@/lib/projects'

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [parallaxY, setParallaxY] = useState(0)
  const [statsVisible, setStatsVisible] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  const count1 = useCountUp(80, 1500, statsVisible)
  const count2 = useCountUp(15, 1500, statsVisible)
  const count3 = useCountUp(100, 1500, statsVisible)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 80)
      setParallaxY(y * 0.4)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true)
      },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div>
      <style>{`
        nav {
          background: ${scrolled ? 'rgba(255,255,255,0.82)' : 'transparent'} !important;
          backdrop-filter: ${scrolled ? 'blur(14px)' : 'none'} !important;
          border-bottom: ${scrolled ? '0.5px solid rgba(0,0,0,0.08)' : 'none'} !important;
          box-shadow: none !important;
          transition: background 0.4s ease, border-color 0.4s ease;
        }
        nav a { color: ${scrolled ? '#111' : '#fff'} !important; transition: color 0.3s; }
        nav button { color: ${scrolled ? '#111' : '#fff'} !important; transition: color 0.3s; }
        nav a[href="tel:577282100"] {
          background: ${scrolled ? '#111' : 'rgba(255,255,255,0.15)'} !important;
          border: 1px solid ${scrolled ? 'transparent' : 'rgba(255,255,255,0.35)'} !important;
          color: #fff !important;
        }
      `}</style>

      {/* Hero */}
      <section className="relative w-full h-screen min-h-[700px] overflow-hidden">
        <div
          className="absolute w-full"
          style={{
            height: '120%',
            top: '-10%',
            transform: `translateY(${parallaxY * 0.3}px)`,
          }}
        >
          <Image
            src="/images/pageMain.jpg"
            alt="S-BUD domy parterowe"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col items-center justify-end px-4 pb-16 text-center">
          <p
            className="text-xs uppercase tracking-widest text-white/60 mb-3"
            style={{ marginBottom: '12px', transform: 'translateY(-50px)' }}
          >
            S-BUD Firma Ogólnobudowlana · Wodzisław Śląski
          </p>
          <h1
            className="text-5xl md:text-6xl font-medium text-white leading-tight max-w-3xl mb-4"
            style={{ transform: 'translateY(-50px)' }}
          >
            Domy parterowe budowane z pasją
          </h1>
          <p
            className="text-white/70 text-base max-w-lg mb-12 leading-relaxed"
            style={{ transform: 'translateY(-50px)' }}
          >
            Budujemy od fundamentów po stan deweloperski na Śląsku.
          </p>

          {/* Kafle — zdjęcie na górze, białe tło na dole */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-3xl">
            <Link
              href="/parterowy-z-garazem"
              className="group overflow-hidden rounded-2xl bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-56">
                <Image
                  src="/images/pageGarage.jpg"
                  alt="Dom parterowy z garażem"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5 text-left bg-white">
                <h2 className="text-base font-medium text-gray-900 mb-1">
                  Z garażem
                </h2>
                <p className="text-sm text-gray-500 mb-3">
                  Miejsce dla auta zintegrowane z bryłą domu.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    {withGarage.length} projekty
                  </span>
                  <span className="text-gray-400 group-hover:text-gray-900 transition-colors">
                    →
                  </span>
                </div>
              </div>
            </Link>

            <Link
              href="/parterowy-bez-garazu"
              className="group overflow-hidden rounded-2xl bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-56">
                <Image
                  src="/images/pageNoGarage.jpg"
                  alt="Dom parterowy bez garażu"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5 text-left bg-white">
                <h2 className="text-base font-medium text-gray-900 mb-1">
                  Bez garażu
                </h2>
                <p className="text-sm text-gray-500 mb-3">
                  Maksymalna przestrzeń użytkowa dla rodziny.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    {withoutGarage.length} projekty
                  </span>
                  <span className="text-gray-400 group-hover:text-gray-900 transition-colors">
                    →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        ref={statsRef}
        className="bg-white grid grid-cols-3 border-b border-gray-100"
      >
        <div className="py-14 text-center border-r border-gray-100">
          <div className="text-4xl font-medium text-gray-900 mb-2">
            {count1}+
          </div>
          <div className="text-xs text-gray-400 uppercase tracking-wider">
            Zrealizowanych domów
          </div>
        </div>
        <div className="py-14 text-center border-r border-gray-100">
          <div className="text-4xl font-medium text-gray-900 mb-2">
            {count2} lat
          </div>
          <div className="text-xs text-gray-400 uppercase tracking-wider">
            Doświadczenia
          </div>
        </div>
        <div className="py-14 text-center">
          <div className="text-4xl font-medium text-gray-900 mb-2">
            {count3}%
          </div>
          <div className="text-xs text-gray-400 uppercase tracking-wider">
            Stan deweloperski w cenie
          </div>
        </div>
      </section>

      {/* SEO */}
      <section className="bg-white max-w-3xl mx-auto px-4 py-20">
        <h2 className="text-2xl font-medium text-gray-900 mb-6">
          Domy parterowe Wodzisław Śląski
        </h2>
        <div className="space-y-4 text-sm text-gray-500 leading-relaxed">
          <p>
            Domy parterowe Wodzisław Śląski to doskonała opcja dla rodzin z
            dziećmi, seniorów i wszystkich, którzy lubią prostą i wygodną
            przestrzeń. Parterówka od S-BUD łączy nowoczesny design z
            funkcjonalnością.
          </p>
          <p>
            Nasza firma S-BUD z Wodzisławia Śląskiego specjalizuje się w budowie
            domów parterowych. Każda parterówka powstaje od fundamentów aż po
            stan deweloperski. Działamy w Wodzisławiu Śląskim, Rybniku, Żorach i
            okolicznych miejscowościach na Śląsku.
          </p>
          <p>
            Brak schodów zapewnia bezpieczeństwo zarówno dla dzieci jak i dla
            seniorów. Parterówka do 150 m² jest tańsza w budowie niż dom
            piętrowy o tej samej wielkości.
          </p>
        </div>
      </section>
    </div>
  )
}
