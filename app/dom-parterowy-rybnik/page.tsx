import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Accordion } from '@/components/RybnikAccordion'

export const metadata: Metadata = {
  title: 'Firma budowlana Rybnik — Domy parterowe od projektu po wykończenie | S-BUD',
  description:
    'Budujemy domy parterowe w Rybniku i okolicach — od projektu, przez fundamenty, po stan deweloperski i pełne wykończenie. Sprawdź ofertę firmy budowlanej S-BUD.',
  openGraph: {
    title: 'Firma budowlana Rybnik — Domy parterowe od projektu po wykończenie',
    description:
      'Budujemy domy parterowe w Rybniku i okolicach — od projektu po pełne wykończenie wnętrz.',
    images: [{ url: '/images/dom-parterowy-rybnik/header.jpg' }],
  },
}

const accordionItems = [
  {
    title: 'Komfort i dostępność',
    content:
      'Dom bez schodów to ogromna wygoda. Parterowa zabudowa sprawdza się świetnie w przypadku rodzin z dziećmi, seniorów i osób z ograniczeniami ruchowymi. Wszystkie pomieszczenia są w zasięgu ręki – bez barier architektonicznych.',
  },
  {
    title: 'Przemyślane rozplanowanie przestrzeni',
    content:
      'Domy parterowe w Rybniku charakteryzują się elastycznym i ergonomicznym układem. Otwarta kuchnia z jadalnią, przestronny salon, wygodne sypialnie, miejsce na garderobę czy gabinet – wszystko zaplanowane tak, by codzienne życie było po prostu wygodne.',
  },
  {
    title: 'Niższe koszty i szybsza realizacja',
    content:
      'Z uwagi na mniejszą ilość materiałów konstrukcyjnych oraz brak skomplikowanych stropów i schodów, budowa domu parterowego jest tańsza i przebiega znacznie sprawniej. To także niższe koszty ogrzewania i eksploatacji w przyszłości.',
  },
  {
    title: 'Zgrany zespół specjalistów',
    content:
      'Tworzymy zespół doświadczonych fachowców – murarzy, cieśli, elektryków, hydraulików i wykończeniowców. Każdy etap nadzorowany jest przez kierownika budowy.',
  },
  {
    title: 'Transparentne warunki współpracy',
    content:
      'Przed rozpoczęciem inwestycji otrzymujesz od nas kosztorys, harmonogram i szczegółowy zakres prac. Bez ukrytych kosztów, bez zaskoczeń.',
  },
  {
    title: 'Elastyczność i doradztwo',
    content:
      'Dostosowujemy się do Twoich potrzeb i budżetu. Służymy wsparciem i doradzamy najlepsze rozwiązania techniczne i architektoniczne.',
  },
]

export default function DomParterowryRybnik() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="relative w-full h-64 md:h-[500px]">
        <Image
          src="/images/dom-parterowy-rybnik/header.jpg"
          alt="Nowoczesny dom parterowy z ogrodem zlokalizowany w Rybniku"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-xs uppercase tracking-widest text-white/60 mb-3">
            S-BUD · Rybnik
          </p>
          <h1 className="text-2xl md:text-4xl font-medium text-white max-w-3xl leading-tight">
            Firma budowlana Rybnik – Domy parterowe od projektu po wykończenie
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Intro */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          Budowa domu to jedna z najważniejszych życiowych decyzji. Własny dom
          oznacza nie tylko przestrzeń, ale też bezpieczeństwo, niezależność i
          poczucie stabilizacji. W naszej ofercie jako firma budowlana Rybnik –
          domy parterowe stanowią jeden z kluczowych obszarów działalności.
          Specjalizujemy się w kompleksowej realizacji inwestycji budowlanych,
          zapewniając pełne wsparcie na każdym etapie – od wyboru projektu po
          oddanie gotowego domu do użytku.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mb-16">
          Jako lokalna firma remontowo-budowlana z Rybnika działamy z pasją i
          zaangażowaniem. Współpracujemy z klientami indywidualnymi i oferujemy
          usługi budowlane najwyższej jakości. Tworzymy domy, które łączą
          nowoczesną architekturę z praktycznymi rozwiązaniami.
        </p>

        {/* Dlaczego dom parterowy */}
        <h2 className="text-2xl font-medium text-gray-900 mb-8">
          Dlaczego warto postawić na dom parterowy?
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-8">
          Domy parterowe Rybnik to obecnie jedno z najczęściej wybieranych
          rozwiązań architektonicznych na Śląsku. Wygodne, funkcjonalne,
          ekonomiczne i szybkie w budowie – idealnie wpisują się w oczekiwania
          nowoczesnych rodzin.
        </p>

        {/* Akordeony — 3 pierwsze */}
        <div className="mb-16">
          {accordionItems.slice(0, 3).map((item) => (
            <Accordion
              key={item.title}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>

        {/* Zdjęcie środkowe */}
        <div className="relative rounded-2xl overflow-hidden h-64 md:h-96 mb-16">
          <Image
            src="/images/dom-parterowy-rybnik/nowoczesny.png"
            alt="Pracownicy wykonujący usługi budowlane w Rybniku"
            fill
            sizes="(max-width: 895px) 100vw, 896px"
            loading="lazy"
            className="object-cover"
          />
        </div>

        {/* Proces budowlany */}
        <h2 className="text-2xl font-medium text-gray-900 mb-8">
          Jak wygląda proces budowlany w naszej firmie?
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-8">
          Wybierając naszą firmę budowlaną z Rybnika, masz pewność, że cały
          proces budowy przebiegnie sprawnie, bez niepotrzebnych opóźnień i
          stresu. Każdy klient otrzymuje wsparcie zespołu specjalistów na każdym
          etapie inwestycji.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {[
            {
              title: 'Wybór projektu i konsultacje',
              text: 'Rozpoczynamy od rozmowy. Pomagamy dobrać gotowy projekt domu lub wspólnie z architektem tworzymy nowy – w pełni dopasowany do działki i potrzeb klienta. Uwzględniamy funkcjonalność, budżet i styl życia inwestora.',
            },
            {
              title: 'Dokumentacja i pozwolenia',
              text: 'Nasza firma remontowo-budowlana zajmuje się formalnościami. Przygotowujemy dokumentację techniczną, pomagamy uzyskać pozwolenie na budowę, koordynujemy uzgodnienia z gestorami mediów oraz urzędami.',
            },
            {
              title: 'Roboty ziemne i fundamenty',
              text: 'Po wytyczeniu budynku przystępujemy do robót ziemnych. Fundamenty są kluczowe – wykonujemy je z pełną precyzją i zgodnie z wymogami geotechnicznymi. To podstawa trwałości całej konstrukcji.',
            },
            {
              title: 'Prace wykończeniowe – dom pod klucz',
              text: 'W ramach realizacji inwestycji oferujemy kompleksowe prace wykończeniowe, dzięki którym Twój dom parterowy będzie gotowy do zamieszkania bez potrzeby angażowania dodatkowych ekip.',
            },
          ].map((item) => (
            <div key={item.title} className="border-t-2 border-gray-900 pt-4">
              <h3 className="text-sm font-medium text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Zdjęcie container-left */}
        <div className="relative rounded-2xl overflow-hidden h-64 md:h-80 mb-16">
          <Image
            src="/images/dom-parterowy-rybnik/container-left.png"
            alt="Firma budowlana Rybnik"
            fill
            sizes="(max-width: 895px) 100vw, 896px"
            loading="lazy"
            className="object-cover"
          />
        </div>

        {/* Dlaczego my */}
        <h2 className="text-2xl font-medium text-gray-900 mb-4">
          Firma budowlana Rybnik – Domy parterowe dla wymagających
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-8">
          Jesteśmy doświadczoną firmą budowlaną z Rybnika, która od lat
          realizuje inwestycje mieszkaniowe dla klientów indywidualnych.
          Specjalizujemy się w budowie domów jednorodzinnych – przede wszystkim
          parterowych. Nasze realizacje znajdziesz w Rybniku, Żorach,
          Wodzisławiu Śląskim i okolicznych miejscowościach. Działamy jako firma
          remontowo-budowlana, zapewniając kompleksową obsługę – od prac
          ziemnych, przez konstrukcję, aż po pełne wykończenia wnętrz.
        </p>

        {/* Akordeony — 3 kolejne */}
        <div className="mb-16">
          {accordionItems.slice(3).map((item) => (
            <Accordion
              key={item.title}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>

        {/* Zdjęcie container */}
        <div className="relative rounded-2xl overflow-hidden h-64 md:h-96 mb-16">
          <Image
            src="/images/dom-parterowy-rybnik/container.jpg"
            alt="Elegancki dom parterowy w Rybniku"
            fill
            sizes="(max-width: 895px) 100vw, 896px"
            loading="lazy"
            className="object-cover"
          />
        </div>

        {/* Gwarancja jakości */}
        <h2 className="text-2xl font-medium text-gray-900 mb-4">
          Firma budowlana Rybnik – Domy parterowe z gwarancją jakości
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-16">
          Nasze domy parterowe to gwarancja jakości, funkcjonalności i
          trwałości. Dla nas nie ma dwóch takich samych inwestycji – do każdej
          podchodzimy indywidualnie, a zadowolenie klienta jest dla nas
          największym sukcesem.
        </p>

        {/* CTA */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-medium text-gray-900 mb-3">
            Skontaktuj się z nami
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Zrealizuj swój dom parterowy w Rybniku z firmą S-BUD
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:577282100"
              className="bg-gray-900 text-white text-sm px-8 py-3.5 rounded-xl hover:bg-gray-700 transition-colors"
            >
              Zadzwoń: 577-282-100
            </a>
            <a
              href="mailto:s_bud@onet.pl"
              className="border border-gray-200 text-gray-900 text-sm px-8 py-3.5 rounded-xl hover:bg-gray-100 transition-colors"
            >
              Napisz: s_bud@onet.pl
            </a>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/obszar-dzialalnosci"
            className="text-sm text-gray-400 hover:text-gray-900 transition-colors"
          >
            ← Powrót do obszaru działalności
          </Link>
        </div>
      </div>
    </div>
  )
}
