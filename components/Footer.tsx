import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white text-gray-400">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Desktop — 4 kolumny */}
        <div className="hidden md:grid grid-cols-4 gap-10 mb-10">
          <div>
            <Image
              src="/images/logo.png"
              alt="S-BUD Parterowy"
              width={130}
              height={52}
              className="object-contain mb-5"
            />
            <p className="text-sm leading-relaxed">
              Firma ogólnobudowlana S-BUD. Budujemy domy parterowe od
              fundamentów po stan deweloperski na Śląsku.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 text-xs font-semibold mb-4 uppercase tracking-wider">
              Oferta
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/parterowy-z-garazem"
                  className="text-sm hover:text-gray-900 transition-colors"
                >
                  Domy z garażem
                </Link>
              </li>
              <li>
                <Link
                  href="/parterowy-bez-garazu"
                  className="text-sm hover:text-gray-900 transition-colors"
                >
                  Domy bez garażu
                </Link>
              </li>
              <li>
                <Link
                  href="/obszar-dzialalnosci"
                  className="text-sm hover:text-gray-900 transition-colors"
                >
                  Obszar działalności
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-sm hover:text-gray-900 transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 text-xs font-semibold mb-4 uppercase tracking-wider">
              Kontakt
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="leading-relaxed">
                ul. Rynek 6<br />
                44-300 Wodzisław Śląski
              </li>
              <li>
                <a
                  href="tel:577282100"
                  className="hover:text-gray-900 transition-colors"
                >
                  577-282-100
                </a>
              </li>
              <li>
                <a
                  href="mailto:s_bud@onet.pl"
                  className="hover:text-gray-900 transition-colors"
                >
                  s_bud@onet.pl
                </a>
              </li>
              <li>NIP: 647-179-65-27</li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 text-xs font-semibold mb-4 uppercase tracking-wider">
              Social media
            </h3>
            <a
              href="https://www.facebook.com/parterowy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gray-100 hover:bg-gray-200 transition-colors rounded-xl px-4 py-3 text-sm text-gray-900"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Obserwuj na Facebooku
            </a>
          </div>
        </div>

        {/* Mobile — logo + 2 kolumny + social */}
        <div className="md:hidden">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/logo.png"
              alt="S-BUD Parterowy"
              width={110}
              height={44}
              className="object-contain"
            />
          </div>
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-gray-900 text-xs font-semibold mb-4 uppercase tracking-wider">
                Oferta
              </h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href="/parterowy-z-garazem"
                    className="text-sm hover:text-gray-900 transition-colors"
                  >
                    Domy z garażem
                  </Link>
                </li>
                <li>
                  <Link
                    href="/parterowy-bez-garazu"
                    className="text-sm hover:text-gray-900 transition-colors"
                  >
                    Domy bez garażu
                  </Link>
                </li>
                <li>
                  <Link
                    href="/obszar-dzialalnosci"
                    className="text-sm hover:text-gray-900 transition-colors"
                  >
                    Obszar działalności
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kontakt"
                    className="text-sm hover:text-gray-900 transition-colors"
                  >
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-900 text-xs font-semibold mb-4 uppercase tracking-wider">
                Kontakt
              </h3>
              <ul className="flex flex-col gap-3 text-sm">
                <li className="leading-relaxed">
                  ul. Rynek 6<br />
                  44-300 Wodzisław Śląski
                </li>
                <li>
                  <a
                    href="tel:577282100"
                    className="hover:text-gray-900 transition-colors"
                  >
                    577-282-100
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:s_bud@onet.pl"
                    className="hover:text-gray-900 transition-colors"
                  >
                    s_bud@onet.pl
                  </a>
                </li>
                <li>NIP: 647-179-65-27</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <a
              href="https://www.facebook.com/parterowy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gray-100 hover:bg-gray-200 transition-colors rounded-xl px-5 py-3 text-sm text-gray-900"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Obserwuj na Facebooku
            </a>
          </div>
        </div>
      </div>

      {/* Dolny pasek — ciemny */}
      <div className="bg-gray-950 border-t border-gray-800 py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col gap-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-600">
            <span>
              © {new Date().getFullYear()} S-BUD Firma Ogólnobudowlana. Wszelkie
              prawa zastrzeżone.
            </span>
            <Link
              href="/rodo"
              className="hover:text-gray-400 transition-colors whitespace-nowrap"
            >
              Polityka prywatności / RODO
            </Link>
          </div>
          <p className="text-xs text-gray-700 leading-relaxed max-w-3xl">
            Prezentacja zamieszczona na stronie ma charakter poglądowy i
            informacyjny oraz nie stanowi oferty handlowej w rozumieniu Art. 66
            par. 1 Kodeksu Cywilnego.
          </p>
        </div>
      </div>
    </footer>
  )
}
