import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'S-BUD Parterowy — Domy parterowe Wodzisław Śląski',
  description:
    'Budujemy domy parterowe z garażem i bez garażu w Wodzisławiu Śląskim i okolicach. Sprawdź nasze projekty i ceny.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <PageTransition>
          <Navbar />
          {children}
        </PageTransition>
        <ContactSection />
        <Footer />
      </body>
    </html>
  )
}
