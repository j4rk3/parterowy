import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Polityka prywatności / RODO — S-BUD Wodzisław Śląski',
  description:
    'Klauzula informacyjna o przetwarzaniu danych osobowych zgodnie z RODO — S-BUD Krzysztof Skibiński Firma Ogólnobudowlana.',
  robots: {
    index: false,
    follow: true,
  },
}

const sections: { title: string; content: React.ReactNode }[] = [
  {
    title: 'I. Administrator danych',
    content: (
      <p>
        Administratorem Państwa danych osobowych jest Krzysztof Skibiński,
        prowadzący działalność gospodarczą pod firmą S-BUD Krzysztof Skibiński
        Firma Ogólnobudowlana, ul. Kościuszki 36b, 44-351 Turza Śląska, NIP:
        647-179-65-27.
      </p>
    ),
  },
  {
    title: 'II. Cele i podstawy przetwarzania',
    content: (
      <p>
        Państwa dane osobowe przetwarzane będą na podstawie art. 6 ust. 1
        RODO w celu zawarcia z Firmą S-BUD Krzysztof Skibiński Firma
        Ogólnobudowlana umowy na oferowane usługi, a także wykonania
        ciążących na Firmie obowiązków prawnych, wykrywania nadużyć i
        zapobiegania im, ustalenia, obrony oraz dochodzenia roszczeń,
        marketingu bezpośredniego, tworzenia zestawień, analiz i statystyk,
        weryfikacji wiarygodności płatniczej, obsługi reklamacji i zgłoszeń,
        wsparcia technicznego, rozliczeń finansowych, w tym wystawienia
        dokumentów księgowych.
      </p>
    ),
  },
  {
    title: 'III. Kategorie przetwarzanych danych',
    content: <p>Dane zwykłe.</p>,
  },
  {
    title: 'IV. Odbiorcy danych',
    content: (
      <p>
        Firma S-BUD Krzysztof Skibiński Firma Ogólnobudowlana jest uprawniona
        do przekazywania Państwa danych osobowych podmiotom trzecim w celu i
        w zakresie koniecznym do prawidłowego i należytego wykonania zawartej
        z Państwem umowy.
      </p>
    ),
  },
  {
    title: 'V. Przekazywanie danych do państw trzecich',
    content: (
      <p>
        Nie przekazujemy Państwa danych poza teren Polski / UE / Europejskiego
        Obszaru Gospodarczego.
      </p>
    ),
  },
  {
    title: 'VI. Okres przechowywania danych',
    content: (
      <p>
        Państwa dane osobowe będą przechowywane przez okres trwania zawartej z
        Firmą S-BUD Krzysztof Skibiński Firma Ogólnobudowlana umowy, w związku
        z którą są przetwarzane, a po tym okresie do dnia upływu terminu
        przedawnienia roszczeń z tytułu zawartej umowy. Dane osobowe utrwalone
        w dokumentacji księgowej będą przechowywane przez okres wskazany w
        obowiązujących przepisach prawa, w tym przepisach podatkowych.
      </p>
    ),
  },
  {
    title: 'VII. Prawa jednostki',
    content: (
      <>
        <p className="mb-3">Przysługuje Państwu prawo do:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>dostępu do swoich danych oraz otrzymania ich kopii,</li>
          <li>sprostowania (poprawiania) swoich danych,</li>
          <li>usunięcia danych,</li>
          <li>ograniczenia przetwarzania danych,</li>
          <li>wniesienia sprzeciwu wobec przetwarzania danych,</li>
          <li>przenoszenia danych,</li>
          <li>wniesienia skargi do organu nadzorczego,</li>
          <li>cofnięcia zgody na przetwarzanie danych osobowych.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'VIII. Dobrowolność podania danych',
    content: <p>Podanie przez Państwa danych jest dobrowolne.</p>,
  },
  {
    title: 'IX. Źródło danych',
    content: <p>Państwa dane uzyskaliśmy bezpośrednio od Państwa.</p>,
  },
  {
    title: 'X. Profilowanie i zautomatyzowane przetwarzanie',
    content: (
      <p>
        Państwa dane nie będą przetwarzane w sposób zautomatyzowany i nie
        będą profilowane.
      </p>
    ),
  },
]

export default function RodoPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 pt-32 pb-20">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
          Ochrona danych osobowych
        </p>
        <h1 className="text-3xl font-medium text-gray-900 mb-8">
          Klauzula informacyjna RODO
        </h1>
        <p className="text-gray-600 text-sm leading-relaxed mb-12">
          Zgodnie z art. 13 ust. 1 Rozporządzenia Parlamentu Europejskiego i
          Rady (UE) 2016/679 z dnia 27 kwietnia 2016 roku w sprawie ochrony
          osób fizycznych w związku z przetwarzaniem danych osobowych i w
          sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy
          95/46/WE (dalej: „RODO”), informujemy, że:
        </p>

        <div className="flex flex-col gap-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-base font-medium text-gray-900 mb-3">
                {section.title}
              </h2>
              <div className="text-gray-600 text-sm leading-relaxed">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
