import Link from 'next/link'
import Image from 'next/image'
import { LOGO_FRAME_CLASS, LOGO_SRC } from '@/lib/logo'

const links = [
  { href: '/', label: 'Kryefaqja' },
  { href: '/about', label: 'Rreth nesh' },
  { href: '/services', label: 'Shërbimet' },
  { href: '/projects', label: 'Projektet' },
  { href: '/contact', label: 'Kontakti' },
]

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link
              href="/"
              className={`inline-flex items-center px-3 py-2 ${LOGO_FRAME_CLASS}`}
            >
              <Image
                src={LOGO_SRC}
                alt="Enpower sh.p.k"
                width={260}
                height={78}
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </Link>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Zgjidhje profesionale në energji elektrike në Kosovë. Tension i lartë, tension i mesëm, ndriçim elektrik dhe trafostacione.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-700 dark:text-amber-300">
              Ekip i fokusuar në cilësi dhe siguri
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">Lidhje</h3>
            <ul className="mt-4 space-y-2">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">Kontakt</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li><span className="font-medium text-slate-700 dark:text-slate-300">Adresa:</span> Kline, Kosovë</li>
              <li>
                <span className="font-medium text-slate-700 dark:text-slate-300">Email:</span>{' '}
                <a href="mailto:enpower@gmail.com" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  enpower@gmail.com
                </a>
              </li>
              <li>
                <span className="font-medium text-slate-700 dark:text-slate-300">Telefon:</span>{' '}
                <a href="tel:+38344222836" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                  +383 44 222 836
                </a>
              </li>
              <li>
                <span className="font-medium text-slate-700 dark:text-slate-300">Facebook:</span>{' '}
                <a
                  href="https://www.facebook.com/EnpowerShpk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  Enpower sh.p.k
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Enpower sh.p.k. Të gjitha të drejtat e rezervuara.
          </p>
        </div>
      </div>
    </footer>
  )
}
