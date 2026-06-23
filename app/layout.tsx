import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
