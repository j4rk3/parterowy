import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'

const inter = Inter({ subsets: ['latin'] })

// TODO: potwierdzić docelową domenę produkcyjną (zakładam www.parterowy.com.pl)
const siteUrl = 'https://www.parterowy.com.pl'
const title = 'S-BUD Parterowy — Domy parterowe Wodzisław Śląski'
const description =
  'Budujemy domy parterowe z garażem i bez garażu w Wodzisławiu Śląskim i okolicach. Sprawdź nasze projekty i ceny.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: siteUrl,
    siteName: 'S-BUD Parterowy',
    title,
    description,
    images: [{ url: '/images/pageMain.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/pageMain.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <ContactSection />
        <Footer />
      </body>
    </html>
  )
}
