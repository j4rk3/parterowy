export type Project = {
  slug: string
  name: string
  price: number
  hasGarage: boolean
  available: boolean
  description: string
  zones: string
  general: {
    buildingArea: string
    usableArea: string
    volume: string
    roofAngle: string
    rooms: number | string
    type: string
  }
  plotDimensions: { width: string; length: string }
  rooms: { name: string; area: string }[]
  // Opcjonalny podział listy pomieszczeń na sekcje (np. dwa niezależne lokale).
  // startIndex to indeks (0-based) w tablicy `rooms`, od którego zaczyna się dana sekcja.
  roomGroups?: { label: string; startIndex: number }[]
  construction: { name: string; value: string }[]
  images: string[]
  floorPlan: string
  sitePlan: string
  kulaUrl?: string
  // Opcjonalnie wiele spacerów wirtualnych (np. osobno dla każdego lokalu).
  kulaUrls?: { label: string; url: string }[]
}

export const projects: Project[] = [
  {
    slug: 'parterowy-1',
    name: 'Parterowy 1',
    price: 535000,
    hasGarage: true,
    available: true,
    description:
      'Nowoczesny dom parterowy, zaprojektowany w nowoczesnej technologii. Prosta bryła domu dzięki ciekawie dobranej elewacji prezentuje się bardzo efektownie. Jest to dom idealny dla 4-5 osobowej rodziny. W domu znajduje się otwarta, przestronna kuchnia z jadalnią oraz salon z wyjściem na taras. Zaprojektowano trzy sypialnie oraz 2 łazienki, pomieszczenie gospodarcze/kotłownia oraz garaż.',
    zones:
      'Reprezentacyjna oraz nocna są wyraźnie wydzielone, co zapewnia domownikom wygodę i komfort użytkowania. Pomieszczenia zaprojektowane zostały z myślą o maksymalnej funkcjonalności - wnętrza będą ustawne, przestronne i jasne.',
    general: {
      buildingArea: '161.17 m²',
      usableArea: '127.40 m²',
      volume: '552.81 m³',
      roofAngle: '2°',
      rooms: 3,
      type: 'murowany',
    },
    plotDimensions: { width: '22.61 m', length: '27.78 m' },
    rooms: [
      { name: 'Pokój dzienny', area: '31.45 m²' },
      { name: 'Kuchnia', area: '10.85 m²' },
      { name: 'Sypialnia I', area: '10.85 m²' },
      { name: 'Sypialnia II', area: '12.70 m²' },
      { name: 'Sypialnia III', area: '9.15 m²' },
      { name: 'Łazienka', area: '4.70 m²' },
      { name: 'WC', area: '2.15 m²' },
      { name: 'Przedsionek/pom. techniczne', area: '3.00 m²' },
      { name: 'Komunikacja', area: '10.50 m²' },
      { name: 'Kotłownia', area: '5.40 m²' },
      { name: 'Garaż', area: '26.65 m²' },
    ],
    construction: [
      { name: 'Fundamenty', value: 'płyta fundamentowa' },
      { name: 'Ściany', value: 'pustak ceramiczny' },
      { name: 'Strop', value: 'drewniany' },
      {
        name: 'Dach',
        value:
          'izolacja pozioma polistyren ekstrudowany EPS oraz membrana dachowa',
      },
      { name: 'Okna', value: 'PCV trzyszybowe' },
      {
        name: 'Stolarka drzwiowa',
        value: 'drzwi zewnętrzne i stalowe do pom. gosp. + brama garażowa',
      },
      { name: 'Tynki', value: 'gipsowe' },
      { name: 'Posadzki', value: 'betonowe' },
      {
        name: 'Instalacje',
        value: 'ogrzewanie podłogowe, instalacje elektryczne i wod.-kan.',
      },
      { name: 'Elewacja', value: 'styropian i tynk silikonowy' },
    ],
    images: [
      '/images/parterowy1/1.jpg',
      '/images/parterowy1/2.jpg',
      '/images/parterowy1/3.jpg',
      '/images/parterowy1/4.jpg',
    ],
    floorPlan: '/images/parterowy1/rzut.jpg',
    sitePlan: '/images/parterowy1/sytuacja.jpg',
    kulaUrl:
      'https://kuula.co/share/hxTqd/collection/7DJJr?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1',
  },
  {
    slug: 'parterowy-4',
    name: 'Parterowy 4',
    price: 559000,
    hasGarage: true,
    available: true,
    description:
      'Nowoczesny dom parterowy zaprojektowany z myślą o inwestorach poszukujących nieszablonowych rozwiązań. Zwarta bryła domu mieści w sobie dwie wyraźnie oddzielone od siebie strefy. Jest to dom idealny dla 4-5 osobowej rodziny. W domu znajduje się otwarta, przestronna kuchnia z jadalnią oraz salon z wyjściem na taras. Zaprojektowano trzy sypialnie, wc dla gości, łazienkę oraz garaż. Uwagę zwraca ciekawie zaaranżowana elewacja frontowa i ogrodowa, a pergola tworzy zadaszenie tarasu. Dzięki temu dom prezentuje się bardzo okazale i stanowi wygodne lokum dla rodziny.',
    zones:
      'Reprezentacyjna oraz nocna są wyraźnie wydzielone, co zapewnia domownikom wygodę i komfort użytkowania. Pomieszczenia zaprojektowane zostały z myślą o maksymalnej funkcjonalności - wnętrza będą ustawne, przestronne i jasne.',
    general: {
      buildingArea: '173.50 m²',
      usableArea: '141.10 m²',
      volume: '676.65 m³',
      roofAngle: '2°',
      rooms: 3,
      type: 'murowany',
    },
    plotDimensions: { width: '23.25 m', length: '21.90 m' },
    rooms: [
      { name: 'Salon z aneksem jadalnym', area: '36.75 m²' },
      { name: 'Kuchnia', area: '13.70 m²' },
      { name: 'Sypialnia I', area: '13.20 m²' },
      { name: 'Sypialnia II', area: '11.70 m²' },
      { name: 'Sypialnia III', area: '11.70 m²' },
      { name: 'Łazienka', area: '5.40 m²' },
      { name: 'WC', area: '2.90 m²' },
      { name: 'Przedsionek', area: '5.00 m²' },
      { name: 'Komunikacja', area: '14.85 m²' },
      { name: 'Garaż', area: '25.90 m²' },
    ],
    construction: [
      { name: 'Fundamenty', value: 'płyta fundamentowa' },
      { name: 'Ściany', value: 'pustak ceramiczny' },
      { name: 'Strop', value: 'drewniany' },
      {
        name: 'Dach',
        value:
          'izolacja pozioma polistyren ekstrudowany EPS oraz membrana dachowa',
      },
      { name: 'Okna', value: 'PCV trzyszybowe' },
      {
        name: 'Stolarka drzwiowa',
        value: 'drzwi zewnętrzne i brama garażowa',
      },
      { name: 'Tynki', value: 'gipsowe' },
      { name: 'Posadzki', value: 'betonowe' },
      {
        name: 'Instalacje',
        value: 'ogrzewanie podłogowe, instalacje elektryczne i wod.-kan.',
      },
      { name: 'Elewacja', value: 'styropian i tynk silikonowy' },
    ],
    images: [
      '/images/parterowy4/1.jpg',
      '/images/parterowy4/2.jpg',
      '/images/parterowy4/3.jpg',
      '/images/parterowy4/4.jpg',
    ],
    floorPlan: '/images/parterowy4/rzut.jpg',
    sitePlan: '/images/parterowy4/sytuacja.jpg',
    kulaUrl:
      'https://kuula.co/share/hxTs2/collection/7DJcV?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1',
  },
  {
    slug: 'parterowy-7',
    name: 'Parterowy 7',
    price: 529000,
    hasGarage: true,
    available: true,
    description:
      'Nowoczesny dom parterowy, zaprojektowany w nowoczesnej technologii. Prosta bryła domu dzięki ciekawie dobranej elewacji prezentuje się bardzo efektownie. Jest to dom idealny dla 4-5 osobowej rodziny. Część reprezentacyjną tworzy salon z wyjściem na taras, kuchnia ze schowaną spiżarnią z oknem oraz jadalnia, w której zmieścimy stół dla całej rodziny. Zaprojektowano trzy sypialnie, 2 łazienki oraz garaż.',
    zones:
      'Reprezentacyjna oraz nocna są wyraźnie wydzielone, co zapewnia domownikom wygodę i komfort użytkowania. Pomieszczenia zaprojektowane zostały z myślą o maksymalnej funkcjonalności - wnętrza będą ustawne, przestronne i jasne.',
    general: {
      buildingArea: '135.00 m²',
      usableArea: '104.75 m²',
      volume: '450.00 m³',
      roofAngle: '2°',
      rooms: 3,
      type: 'murowany',
    },
    plotDimensions: { width: '21.03 m', length: '21.20 m' },
    rooms: [
      { name: 'Wiatrołap', area: '4.50 m²' },
      { name: 'Komunikacja', area: '12.55 m²' },
      { name: 'Salon z aneksem kuchennym', area: '29.05 m²' },
      { name: 'Spiżarnia', area: '1.90 m²' },
      { name: 'WC', area: '1.60 m²' },
      { name: 'Sypialnia I', area: '10.05 m²' },
      { name: 'Sypialnia II', area: '10.65 m²' },
      { name: 'Sypialnia III', area: '11.60 m²' },
      { name: 'Łazienka', area: '5.35 m²' },
      { name: 'Garaż', area: '17.50 m²' },
    ],
    construction: [
      { name: 'Fundamenty', value: 'płyta fundamentowa' },
      { name: 'Ściany', value: 'pustak ceramiczny' },
      { name: 'Strop', value: 'drewniany' },
      {
        name: 'Dach',
        value:
          'izolacja pozioma polistyren ekstrudowany EPS oraz membrana dachowa',
      },
      { name: 'Okna', value: 'PCV trzyszybowe' },
      {
        name: 'Stolarka drzwiowa',
        value: 'drzwi zewnętrzne i brama garażowa',
      },
      { name: 'Tynki', value: 'gipsowe' },
      { name: 'Posadzki', value: 'betonowe' },
      {
        name: 'Instalacje',
        value: 'ogrzewanie podłogowe, instalacje elektryczne i wod.-kan.',
      },
      { name: 'Elewacja', value: 'styropian i tynk silikonowy' },
    ],
    images: [
      '/images/parterowy7/1.jpg',
      '/images/parterowy7/2.jpg',
      '/images/parterowy7/3.jpg',
      '/images/parterowy7/4.jpg',
    ],
    floorPlan: '/images/parterowy7/rzut.jpg',
    sitePlan: '/images/parterowy7/sytuacja.jpg',
    kulaUrl:
      'https://kuula.co/share/hxdt1/collection/7DJDk?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1',
  },
  {
    slug: 'parterowy-2',
    name: 'Parterowy 2',
    price: 529000,
    hasGarage: false,
    available: true,
    description:
      'Parterowy, nowoczesny dom idealny dla 4-5-osobowej rodziny. To projekt domu zaprojektowany w nowoczesnej technologii z płaskim dachem. Część reprezentacyjną tworzy przestronny salon z wyjściem na taras, kuchnia oraz jadalnia, w której zmieścimy stół dla całej rodziny. Trzy sypialnie pomieszczą nie tylko duże łóżka, ale także w dwóch z nich może stanąć zabudowana garderoba. W ogólnodostępnej łazience z oknem zmieścimy wannę lub kabinę prysznicową oraz inne urządzenia sanitarne. W domu dodatkowo znajduje się miejsce na WC dla gości oraz pomieszczenie techniczne.',
    zones:
      'Reprezentacyjna oraz nocna są wyraźnie wydzielone, co zapewnia domownikom wygodę i komfort użytkowania. Pomieszczenia zaprojektowane zostały z myślą o maksymalnej funkcjonalności - wnętrza będą ustawne, przestronne i jasne.',
    general: {
      buildingArea: '120.90 m²',
      usableArea: '96.70 m²',
      volume: '423.15 m³',
      roofAngle: '2°',
      rooms: 3,
      type: 'murowany',
    },
    plotDimensions: { width: '21.05 m', length: '21.80 m' },
    rooms: [
      { name: 'Pokój dzienny', area: '31.45 m²' },
      { name: 'Kuchnia', area: '10.85 m²' },
      { name: 'Sypialnia I', area: '10.85 m²' },
      { name: 'Sypialnia II', area: '12.70 m²' },
      { name: 'Sypialnia III', area: '9.15 m²' },
      { name: 'Łazienka', area: '4.70 m²' },
      { name: 'WC', area: '2.15 m²' },
      { name: 'Przedsionek/pom. techniczne', area: '6.49 m²' },
      { name: 'Komunikacja', area: '10.50 m²' },
    ],
    construction: [
      { name: 'Fundamenty', value: 'płyta fundamentowa' },
      { name: 'Ściany', value: 'pustak ceramiczny' },
      { name: 'Strop', value: 'drewniany' },
      {
        name: 'Dach',
        value:
          'izolacja pozioma polistyren ekstrudowany EPS oraz membrana dachowa',
      },
      { name: 'Okna', value: 'PCV trzyszybowe' },
      { name: 'Stolarka drzwiowa', value: 'drzwi zewnętrzne' },
      { name: 'Tynki', value: 'gipsowe' },
      { name: 'Posadzki', value: 'betonowe' },
      {
        name: 'Instalacje',
        value: 'ogrzewanie podłogowe, instalacje elektryczne i wod.-kan.',
      },
      { name: 'Elewacja', value: 'styropian i tynk silikonowy' },
    ],
    images: [
      '/images/parterowy2/1.jpg',
      '/images/parterowy2/2.jpg',
      '/images/parterowy2/3.jpg',
      '/images/parterowy2/4.jpg',
    ],
    floorPlan: '/images/parterowy2/rzut.jpg',
    sitePlan: '/images/parterowy2/sytuacja.jpg',
    kulaUrl:
      'https://kuula.co/share/hxTT1/collection/7DJXn?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1',
  },
  {
    slug: 'parterowy-3',
    name: 'Parterowy 3',
    price: 475000,
    hasGarage: false,
    available: true,
    description:
      'Nowoczesny dom zaprojektowany w nowoczesnym stylu z dwiema sypialniami i dużą kuchnią. Prosta bryła domu dzięki ciekawie dobranej elewacji prezentuje się bardzo efektownie. Jest to dom idealny dla 3-4 osobowej rodziny. W domu znajduje się otwarta, przestronna kuchnia z jadalnią oraz salon z wyjściem na taras. Zaprojektowano dwie sypialnie, łazienkę oraz pomieszczenie gospodarcze.',
    zones:
      'Reprezentacyjna oraz nocna są wyraźnie wydzielone, co zapewnia domownikom wygodę i komfort użytkowania. Pomieszczenia zaprojektowane zostały z myślą o maksymalnej funkcjonalności - wnętrza będą ustawne, przestronne i jasne.',
    general: {
      buildingArea: '107.80 m²',
      usableArea: '85.50 m²',
      volume: '377.30 m³',
      roofAngle: '2°',
      rooms: 2,
      type: 'murowany',
    },
    plotDimensions: { width: '19.34 m', length: '20.70 m' },
    rooms: [
      { name: 'Przedsionek/pom. techniczne', area: '3.25 m²' },
      { name: 'Sypialnia I', area: '11.95 m²' },
      { name: 'Łazienka', area: '6.80 m²' },
      { name: 'Sypialnia II', area: '15.45 m²' },
      { name: 'Pokój dzienny', area: '28.75 m²' },
      { name: 'Kuchnia', area: '9.50 m²' },
      { name: 'Kotłownia', area: '4.00 m²' },
      { name: 'Komunikacja', area: '5.80 m²' },
    ],
    construction: [
      { name: 'Fundamenty', value: 'płyta fundamentowa' },
      { name: 'Ściany', value: 'pustak ceramiczny' },
      { name: 'Strop', value: 'drewniany' },
      {
        name: 'Dach',
        value:
          'izolacja pozioma polistyren ekstrudowany EPS oraz membrana dachowa',
      },
      { name: 'Okna', value: 'PCV trzyszybowe' },
      { name: 'Stolarka drzwiowa', value: 'drzwi zewnętrzne' },
      { name: 'Tynki', value: 'gipsowe' },
      { name: 'Posadzki', value: 'betonowe' },
      {
        name: 'Instalacje',
        value: 'ogrzewanie podłogowe, instalacje elektryczne i wod.-kan.',
      },
      { name: 'Elewacja', value: 'styropian i tynk silikonowy' },
    ],
    images: [
      '/images/parterowy3/1.jpg',
      '/images/parterowy3/2.jpg',
      '/images/parterowy3/3.jpg',
      '/images/parterowy3/4.jpg',
    ],
    floorPlan: '/images/parterowy3/rzut.jpg',
    sitePlan: '/images/parterowy3/sytuacja.jpg',
    kulaUrl:
      'https://kuula.co/share/hxTCV/collection/7DJcJ?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1',
  },
  {
    slug: 'parterowy-5',
    name: 'Parterowy 5',
    price: 599000,
    hasGarage: false,
    available: true,
    description:
      'Dwurodzinny dom parterowy zaprojektowany w najnowszej technologii z płaskim dachem. Dom podzielony na dwa niezależne lokale. Większy lokal dedykowany jest dla 4-5 osobowej rodziny. Natomiast druga część to mieszkanie dla 1-2 osób. W domu znajdują się 2 otwarte, przestronne kuchnie z jadalnią oraz salony z wyjściem na taras. W większym mieszkaniu zaprojektowano trzy sypialnie, łazienkę oraz pomieszczenie gospodarcze. W drugiej części natomiast jedną sypialnię i łazienkę.',
    zones:
      'Strefy: reprezentacyjna oraz nocna są wyraźnie wydzielone, co zapewnia domownikom wygodę i komfort użytkowania. Pomieszczenia zaprojektowane zostały z myślą o maksymalnej funkcjonalności z zachowaniem prywatności dla oby dwóch rodzin.',
    general: {
      buildingArea: '214.60 m²',
      usableArea: '139.00 m²',
      volume: '657.40 m³',
      roofAngle: '2°',
      rooms: '3+1',
      type: 'murowany',
    },
    plotDimensions: { width: '22.61 m', length: '27.78 m' },
    rooms: [
      { name: 'Pokój dzienny', area: '31.45 m²' },
      { name: 'Kuchnia', area: '10.85 m²' },
      { name: 'Sypialnia I', area: '10.85 m²' },
      { name: 'Sypialnia II', area: '12.70 m²' },
      { name: 'Sypialnia III', area: '9.15 m²' },
      { name: 'Łazienka', area: '4.70 m²' },
      { name: 'Pom. gospodarcze', area: '2.15 m²' },
      { name: 'Wiatrołap', area: '3.85 m²' },
      { name: 'Komunikacja', area: '8.40 m²' },
      { name: 'Sypialnia', area: '8.00 m²' },
      { name: 'Wiatrołap', area: '2.61 m²' },
      { name: 'Łazienka', area: '4.00 m²' },
      { name: 'Salon z aneksem kuchennym', area: '29.00 m²' },
    ],
    roomGroups: [
      { label: 'Powierzchnia użytkowa lokalu 1', startIndex: 0 },
      { label: 'Powierzchnia użytkowa lokalu 2', startIndex: 9 },
    ],
    construction: [
      { name: 'Fundamenty', value: 'płyta fundamentowa' },
      { name: 'Ściany', value: 'pustak ceramiczny' },
      { name: 'Strop', value: 'drewniany' },
      {
        name: 'Dach',
        value:
          'izolacja pozioma polistyren ekstrudowany EPS oraz membrana dachowa',
      },
      { name: 'Okna', value: 'PCV trzyszybowe' },
      { name: 'Stolarka drzwiowa', value: 'drzwi zewnętrzne' },
      { name: 'Tynki', value: 'gipsowe' },
      { name: 'Posadzki', value: 'betonowe' },
      {
        name: 'Instalacje',
        value: 'ogrzewanie podłogowe, instalacje elektryczne i wod.-kan.',
      },
      { name: 'Elewacja', value: 'styropian i tynk silikonowy' },
    ],
    images: [
      '/images/parterowy5/1.jpg',
      '/images/parterowy5/2.jpg',
      '/images/parterowy5/3.jpg',
      '/images/parterowy5/4.jpg',
    ],
    floorPlan: '/images/parterowy5/rzut.jpg',
    sitePlan: '/images/parterowy5/sytuacja.jpg',
    kulaUrls: [
      {
        label: 'Lokal 1',
        url: 'https://kuula.co/share/hxnpq/collection/7DJKF?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1',
      },
      {
        label: 'Mieszkanie dla singla (lokal 2)',
        url: 'https://kuula.co/share/hW289/collection/7H0xh?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1&enablejs=1&fid=1f8',
      },
    ],
  },
  {
    slug: 'parterowy-6',
    name: 'Parterowy 6',
    price: 515000,
    hasGarage: false,
    available: true,
    description:
      'Dom parterowy, nowoczesny, idealny dla 4-5-osobowej rodziny. To projekt domu zaprojektowany w najnowszej technologii z płaskim dachem. Część reprezentacyjną tworzy salon z przestronnymi oknami i wyjściem na taras, kuchnia ze schowaną spiżarnią z oknem oraz jadalnia, w której zmieścimy stół dla całej rodziny. Trzy sypialnie pomieszczą nie tylko duże łóżka, ale także w dwóch z nich może stanąć zabudowana garderoba. W ogólnodostępnej łazience z oknem zmieścimy wannę lub kabinę prysznicową oraz inne urządzenia sanitarne. W domu dodatkowo znajduje się pomieszczenie gospodarcze.',
    zones:
      'Strefy: reprezentacyjna oraz nocna są wyraźnie wydzielone, co zapewnia domownikom wygodę i komfort użytkowania. Pomieszczenia zaprojektowane zostały z myślą o maksymalnej funkcjonalności - wnętrza będą ustawne, przestronne i jasne.',
    general: {
      buildingArea: '131.15 m²',
      usableArea: '105.75 m²',
      volume: '459.00 m³',
      roofAngle: '2°',
      rooms: 3,
      type: 'murowany',
    },
    plotDimensions: { width: '22.61 m', length: '27.78 m' },
    rooms: [
      { name: 'Wiatrołap', area: '2.30 m²' },
      { name: 'Komunikacja', area: '11.05 m²' },
      { name: 'Sypialnia I', area: '8.50 m²' },
      { name: 'Sypialnia II', area: '11.95 m²' },
      { name: 'Łazienka', area: '6.80 m²' },
      { name: 'Sypialnia III', area: '15.45 m²' },
      { name: 'Salon', area: '28.60 m²' },
      { name: 'Kuchnia', area: '14.95 m²' },
      { name: 'Spiżarnia', area: '2.15 m²' },
      { name: 'Pom. gospodarcze / pralnia', area: '4.00 m²' },
    ],
    construction: [
      { name: 'Fundamenty', value: 'płyta fundamentowa' },
      { name: 'Ściany', value: 'pustak ceramiczny' },
      { name: 'Strop', value: 'drewniany' },
      {
        name: 'Dach',
        value:
          'izolacja pozioma polistyren ekstrudowany EPS oraz membrana dachowa',
      },
      { name: 'Okna', value: 'PCV trzyszybowe' },
      { name: 'Stolarka drzwiowa', value: 'drzwi zewnętrzne' },
      { name: 'Tynki', value: 'gipsowe' },
      { name: 'Posadzki', value: 'betonowe' },
      {
        name: 'Instalacje',
        value: 'ogrzewanie podłogowe, instalacje elektryczne i wod.-kan.',
      },
      { name: 'Elewacja', value: 'styropian i tynk silikonowy' },
    ],
    images: [
      '/images/parterowy6/1.jpg',
      '/images/parterowy6/2.jpg',
      '/images/parterowy6/3.jpg',
      '/images/parterowy6/4.jpg',
    ],
    floorPlan: '/images/parterowy6/rzut.jpg',
    sitePlan: '/images/parterowy6/sytuacja.jpg',
    kulaUrl:
      'https://kuula.co/share/hxTQj/collection/7DJZD?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1',
  },
]

export const withGarage = projects.filter((p) => p.hasGarage)
export const withoutGarage = projects.filter((p) => !p.hasGarage)
