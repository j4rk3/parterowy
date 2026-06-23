'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="S-BUD Parterowy"
            width={120}
            height={48}
            className="object-contain"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/parterowy-z-garazem"
            className="text-sm text-gray-600 hover:text-green-700 transition-colors"
          >
            Z garażem
          </Link>
          <Link
            href="/parterowy-bez-garazu"
            className="text-sm text-gray-600 hover:text-green-700 transition-colors"
          >
            Bez garażu
          </Link>
          <Link
            href="/obszar-dzialalnosci"
            className="text-sm text-gray-600 hover:text-green-700 transition-colors"
          >
            Obszar działalności
          </Link>
          <Link
            href="/kontakt"
            className="text-sm text-gray-600 hover:text-green-700 transition-colors"
          >
            Kontakt
          </Link>
          <a
            href="tel:577282100"
            className="bg-green-700 text-white text-sm px-4 py-2 rounded-lg hover:bg-green-800 transition-colors"
          >
            577-282-100
          </a>
        </div>

        <button
          className="md:hidden text-gray-600 text-sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'Zamknij' : 'Menu'}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          <Link
            href="/parterowy-z-garazem"
            className="text-sm text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Z garażem
          </Link>
          <Link
            href="/parterowy-bez-garazu"
            className="text-sm text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Bez garażu
          </Link>
          <Link
            href="/obszar-dzialalnosci"
            className="text-sm text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Obszar działalności
          </Link>
          <Link
            href="/kontakt"
            className="text-sm text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Kontakt
          </Link>
          <a
            href="tel:577282100"
            className="bg-green-700 text-white text-sm px-4 py-2 rounded-lg text-center"
          >
            577-282-100
          </a>
        </div>
      )}
    </nav>
  )
}
