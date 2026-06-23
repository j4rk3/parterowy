import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white text-black mt-24">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Image
            src="/images/logo.png"
            alt="S-BUD Parterowy"
            width={140}
            height={56}
            className="object-contain mb-4"
          />
          <p className="text-sm leading-relaxed">
            Firma ogólnobudowlana S-BUD z Wodzisławia Śląskiego. Budujemy domy
            parterowe od fundamentów po stan deweloperski.
          </p>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">
            Oferta
          </h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/parterowy-z-garazem"
                className="text-sm hover:text-white transition-colors"
              >
                Domy z garażem
              </Link>
            </li>
            <li>
              <Link
                href="/parterowy-bez-garazu"
                className="text-sm hover:text-white transition-colors"
              >
                Domy bez garażu
              </Link>
            </li>
            <li>
              <Link
                href="/obszar-dzialalnosci"
                className="text-sm hover:text-white transition-colors"
              >
                Obszar działalności
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">
            Kontakt
          </h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>ul. Rynek 6, 44-300 Wodzisław Śląski</li>
            <li>NIP: 647-179-65-27</li>
            <li>
              <a
                href="tel:577282100"
                className="hover:text-white transition-colors"
              >
                577-282-100
              </a>
            </li>
            <li>
              <a
                href="mailto:s_bud@onet.pl"
                className="hover:text-white transition-colors"
              >
                s_bud@onet.pl
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-600">
          <span>
            © {new Date().getFullYear()} S-BUD Firma Ogólnobudowlana. Wszelkie
            prawa zastrzeżone.
          </span>
          <Link href="/rodo" className="hover:text-gray-400 transition-colors">
            Polityka prywatności / RODO
          </Link>
        </div>
      </div>
    </footer>
  )
}
