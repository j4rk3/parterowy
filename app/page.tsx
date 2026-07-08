'use client'
import SeoSection from '@/components/SeoSection'
import YouTubeFacade from '@/components/YouTubeFacade'
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

function TypewriterHero({ ready }: { ready: boolean }) {
  const text = 'Domy parterowe budowane z pasją...'
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  const i = useRef(0)

  useEffect(() => {
    if (!ready) return
    const delay = setTimeout(() => {
      i.current = 0
      setDisplayed('')
      const interval = setInterval(() => {
        if (i.current < text.length) {
          setDisplayed(text.slice(0, i.current + 1))
          i.current++
        } else {
          clearInterval(interval)
          setTimeout(() => setDone(true), 200)
        }
      }, 55)
    }, 750)
    return () => clearTimeout(delay)
  }, [ready])

  return (
    <div className="hidden md:block text-center mb-12">
      <p
        className={`text-xs uppercase tracking-widest text-white/60 mb-4 whitespace-nowrap transition-opacity duration-700 ${done ? 'opacity-100' : 'opacity-0'}`}
      >
        S-BUD Firma Ogólnobudowlana · Wodzisław Śląski
      </p>
      <h1 className="text-4xl md:text-6xl font-medium text-white leading-tight mb-4 min-h-[1.2em]">
        {displayed}
        <span
          className={`inline-block w-0.5 h-[0.9em] bg-white ml-1 align-middle animate-pulse ${done ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        />
      </h1>
      <p
        className={`hidden md:block text-white/70 text-base max-w-lg mx-auto leading-relaxed transition-opacity duration-700 ${done ? 'opacity-100' : 'opacity-0'}`}
      >
        Budujemy od fundamentów po stan deweloperski na Śląsku.
      </p>
    </div>
  )
}

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
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      {children}
    </div>
  )
}

export default function Home() {
  const [parallaxY, setParallaxY] = useState(0)
  const [statsVisible, setStatsVisible] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)
  const [heroReady, setHeroReady] = useState(false)

  const count1 = useCountUp(80, 1500, statsVisible)
  const count2 = useCountUp(15, 1500, statsVisible)
  const count3 = useCountUp(100, 1500, statsVisible)

  useEffect(() => {
    const handleScroll = () => {
      setParallaxY(window.scrollY * 0.4)
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
              sizes="100vw"
              className="object-cover object-top md:object-center"
              priority
              onLoad={() => setHeroReady(true)}
            />
          </div>
          <div className="absolute inset-0 bg-black/40" />

          {/* Mobile layout */}
          <div className="md:hidden absolute inset-0 flex flex-col px-6 pt-24 pb-8">
            <div className="text-center mb-5">
              <p className="text-xs uppercase tracking-widest text-white/50 mb-3">
                S-BUD · Wodzisław Śląski
              </p>
              <h1 className="text-2xl font-medium text-white leading-tight mb-2">
                Domy parterowe
                <br />
                budowane z pasją
              </h1>
              <p className="text-white/60 text-xs leading-relaxed">
                Budujemy od fundamentów po stan deweloperski na Śląsku.
              </p>
            </div>

            <div className="flex flex-col gap-4 flex-1">
              <Link
                href="/parterowy-z-garazem"
                className="group flex flex-col overflow-hidden rounded-2xl flex-1"
              >
                <div className="relative flex-1 min-h-0">
                  <Image
                    src="/images/pageGarage.jpg"
                    alt="Dom parterowy z garażem"
                    fill
                    sizes="(max-width: 767px) 90vw, 384px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-3 bg-white/10 backdrop-blur-md shrink-0">
                  <h2 className="text-sm font-medium text-white mb-1">
                    Z garażem
                  </h2>
                  <p className="text-xs text-white/65 mb-2">
                    Miejsce dla auta zintegrowane z bryłą domu.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/40">
                      {withGarage.length} projekty
                    </span>
                    <span className="text-white/50 group-hover:text-white transition-colors">
                      →
                    </span>
                  </div>
                </div>
              </Link>

              <Link
                href="/parterowy-bez-garazu"
                className="group flex flex-col overflow-hidden rounded-2xl flex-1"
              >
                <div className="relative flex-1 min-h-0">
                  <Image
                    src="/images/pageNoGarage.jpg"
                    alt="Dom parterowy bez garażu"
                    fill
                    sizes="(max-width: 767px) 90vw, 384px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-3 bg-white/10 backdrop-blur-md shrink-0">
                  <h2 className="text-sm font-medium text-white mb-1">
                    Bez garażu
                  </h2>
                  <p className="text-xs text-white/65 mb-2">
                    Maksymalna przestrzeń użytkowa dla rodziny.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/40">
                      {withoutGarage.length} projekty
                    </span>
                    <span className="text-white/50 group-hover:text-white transition-colors">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden md:flex absolute inset-0 flex-col items-center justify-end pb-0 xl:justify-start xl:pt-48 text-center">
            <TypewriterHero ready={heroReady} />
            <div className="grid grid-cols-2 gap-4 w-full max-w-3xl px-4">
              <Link
                href="/parterowy-z-garazem"
                className="group overflow-hidden rounded-2xl transition-all duration-300"
              >
                <div className="relative h-56">
                  <Image
                    src="/images/pageGarage.jpg"
                    alt="Dom parterowy z garażem"
                    fill
                    sizes="384px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5 text-left bg-white/10 backdrop-blur-md">
                  <h2 className="text-base font-medium text-white mb-1">
                    Z garażem
                  </h2>
                  <p className="text-sm text-white/70 mb-3">
                    Miejsce dla auta zintegrowane z bryłą domu.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/50">
                      {withGarage.length} projekty
                    </span>
                    <span className="text-white/50 group-hover:text-white transition-colors">
                      →
                    </span>
                  </div>
                </div>
              </Link>
              <Link
                href="/parterowy-bez-garazu"
                className="group overflow-hidden rounded-2xl transition-all duration-300"
              >
                <div className="relative h-56">
                  <Image
                    src="/images/pageNoGarage.jpg"
                    alt="Dom parterowy bez garażu"
                    fill
                    sizes="384px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5 text-left bg-white/10 backdrop-blur-md">
                  <h2 className="text-base font-medium text-white mb-1">
                    Bez garażu
                  </h2>
                  <p className="text-sm text-white/70 mb-3">
                    Maksymalna przestrzeń użytkowa dla rodziny.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/50">
                      {withoutGarage.length} projekty
                    </span>
                    <span className="text-white/50 group-hover:text-white transition-colors">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

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

        <section className="bg-white py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2 text-center">
                Realizacje
              </p>
              <h3 className="text-2xl font-medium text-gray-900 mb-14 text-center">
                Zobacz nasze domy w akcji
              </h3>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeIn delay={0}>
                <YouTubeFacade videoId="KdPN9DvguHo" title="Realizacja S-BUD — dom parterowy 1" />
              </FadeIn>
              <FadeIn delay={150}>
                <YouTubeFacade videoId="_8Uqko7fZYw" title="Realizacja S-BUD — dom parterowy 2" />
              </FadeIn>
            </div>
          </div>
        </section>

      <SeoSection />
    </div>
  )
}
