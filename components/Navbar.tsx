'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const transparent = pathname === '/'
  const isLight = transparent && !scrolled

  useEffect(() => {
    if (!transparent) return
    const handleScroll = () => setScrolled(window.scrollY > 80)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [transparent])

  const linkClass = `text-sm transition-colors ${
    isLight ? 'text-white hover:text-white/70' : 'text-gray-600 hover:text-gray-900'
  }`

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isLight
            ? 'bg-transparent border-b border-transparent shadow-none'
            : 'bg-white border-b border-gray-100 shadow-sm'
        }`}
        style={isLight ? undefined : { backdropFilter: transparent ? 'blur(14px)' : undefined }}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="S-BUD Parterowy"
              width={100}
              height={40}
              className="object-contain"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/parterowy-z-garazem" className={linkClass}>
              Z garażem
            </Link>
            <Link href="/parterowy-bez-garazu" className={linkClass}>
              Bez garażu
            </Link>
            <Link href="/obszar-dzialalnosci" className={linkClass}>
              Obszar działalności
            </Link>
            <a
              href="#kontakt"
              className={linkClass}
              onClick={(e) => {
                e.preventDefault()
                document
                  .getElementById('kontakt')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Kontakt
            </a>
            <a
              href="tel:577282100"
              className={`text-sm px-4 py-2 rounded-lg transition-colors ${
                isLight
                  ? 'bg-white/15 border border-white/35 text-white hover:bg-white/25'
                  : 'bg-gray-900 text-white border border-transparent hover:bg-gray-700'
              }`}
            >
              577-282-100
            </a>
          </div>

          {/* Hamburger — zawsze widoczny ponad menu */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-[60] relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2 bg-white' : 'bg-gray-900'}`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${isOpen ? 'opacity-0 bg-white' : 'bg-gray-900'}`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2 bg-white' : 'bg-gray-900'}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 right-0 bg-white/50 backdrop-blur-xl pt-24 pb-8 px-6 flex flex-col gap-1 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
        >
          <Link
            href="/parterowy-z-garazem"
            className="text-lg font-medium text-gray-900 py-3 border-b border-gray-100 hover:text-white/60 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Z garażem
          </Link>
          <Link
            href="/parterowy-bez-garazu"
            className="text-lg font-medium text-gray-900 py-3 border-b border-gray-100 hover:text-white/60 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Bez garażu
          </Link>
          <Link
            href="/obszar-dzialalnosci"
            className="text-lg font-medium text-gray-900 py-3 border-b border-gray-100 hover:text-white/60 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Obszar działalności
          </Link>
          <a
            href="#kontakt"
            className="text-lg font-medium text-white py-3 border-b border-white/10 hover:text-white/60 transition-colors block"
            onClick={() => {
              setIsOpen(false)
              setTimeout(() => {
                document
                  .getElementById('kontakt')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }, 300)
            }}
          >
            Kontakt
          </a>

          <a
            href="tel:577282100"
            className="mt-4 bg-gray-900 text-white text-base px-4 py-3 rounded-xl text-center font-medium"
            onClick={() => setIsOpen(false)}
          >
            577-282-100
          </a>
        </div>
      </div>
    </>
  )
}
