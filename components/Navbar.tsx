'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="S-BUD Parterowy"
              width={120}
              height={48}
              className="object-contain md:w-[160px]"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/parterowy-z-garazem"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Z garażem
            </Link>
            <Link
              href="/parterowy-bez-garazu"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Bez garażu
            </Link>
            <Link
              href="/obszar-dzialalnosci"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Obszar działalności
            </Link>
            <Link
              href="/kontakt"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Kontakt
            </Link>
            <a
              href="tel:577282100"
              className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
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
          <Link
            href="/kontakt"
            className="text-lg font-medium text-gray-900 py-3 border-b border-gray-100 hover:text-white/60 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Kontakt
          </Link>
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
