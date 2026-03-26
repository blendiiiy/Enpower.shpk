import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { StructuredData } from '@/components/StructuredData'
import { BackToTop } from '@/components/BackToTop'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

const siteUrl = 'https://enpower-ks.com'
const defaultTitle = 'Enpower sh.p.k — Zgjidhje Profesionale në Energji Elektrike | Kosovë'
const defaultDescription =
  'Kompani energjetike në Kosovë për rrjete elektrike TL/TM, trafostacione, ndriçim dhe mirëmbajtje. Projekte të sigurta dhe efikase për sektorin publik dhe privat.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: defaultTitle, template: '%s | Enpower sh.p.k' },
  description: defaultDescription,
  keywords: [
    'kompani energjetike Kosovë',
    'tension i mesëm Kosovë',
    'tension i lartë Kosovë',
    'trafostacione Kosovë',
    'trafo private Kosovë',
    'ndriçim elektrik Kosovë',
    'instalime elektrike industriale',
    'rrjete elektrike Kosovë',
  ],
  authors: [{ name: 'Enpower sh.p.k', url: siteUrl }],
  creator: 'Enpower sh.p.k',
  publisher: 'Enpower sh.p.k',
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    locale: 'sq_AL',
    url: siteUrl,
    siteName: 'Enpower sh.p.k',
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: defaultTitle,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sq" className={plusJakarta.variable}>
      <body className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans antialiased subpixel-antialiased">
        <StructuredData />
        <a
          href="#main"
          className="fixed left-4 top-4 z-[100] -translate-y-16 rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg transition focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
        >
          Kalo te përmbajtja
        </a>
        <Header />
        <main id="main" className="flex-1 scroll-mt-20">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
