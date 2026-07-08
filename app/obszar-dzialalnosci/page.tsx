import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Obszar działalności — S-BUD Wodzisław Śląski',
  description:
    'Nasze domy parterowe możecie zobaczyć w następujących lokalizacjach: Rybnik, Żory, Wodzisław Śląski i okolice.',
}

export default function ObszarDzialalnosci() {
  return (
    <div className="bg-white min-h-screen">
      <div className="relative w-full h-64 md:h-96">
        <Image
          src="/images/obszar-dzialalnosci/header.jpg"
          alt="Obszar działalności S-BUD"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-medium text-white">
            Obszar działalności
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-gray-600 text-base leading-relaxed mb-10">
          Nasze domy parterowe możecie zobaczyć w następujących lokalizacjach:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/dom-parterowy-rybnik"
            className="group overflow-hidden rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-all duration-300"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/images/dom-parterowy-rybnik/header.jpg"
                alt="Firma budowlana Rybnik"
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-5">
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                Lokalizacja
              </p>
              <h2 className="text-base font-medium text-gray-900 mb-1">
                Firma budowlana Rybnik
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Domy parterowe w Rybniku i okolicach
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">Rybnik i okolice</span>
                <span className="text-gray-400 group-hover:text-gray-900 transition-colors">
                  →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
