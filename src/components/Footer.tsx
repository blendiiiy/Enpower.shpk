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
    <footer className="border-t border-slate-100 dark:border-brand-800/50 bg-white dark:bg-brand-950/92 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link
              href="/"
              className={`inline-flex items-center ${LOGO_FRAME_CLASS}`}
            >
              <Image
                src={LOGO_SRC}
                alt="Enpower sh.p.k"
                width={260}
                height={78}
                className="h-12 sm:h-14 w-auto object-contain drop-shadow-sm"
              />
            </Link>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Zgjidhje profesionale në energji elektrike në Kosovë. Tension i lartë, tension i mesëm, ndriçim elektrik dhe trafostacione.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-[0.16em]">Lidhje</h3>
            <ul className="mt-4 space-y-2">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-700 dark:hover:text-blue-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-[0.16em]">Kontakt</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li><span className="font-medium text-slate-700 dark:text-slate-300">Adresa:</span> Kline, Kosovë</li>
              <li>
                <span className="font-medium text-slate-700 dark:text-slate-300">Email:</span>{' '}
                <a href="mailto:enpower@gmail.com" className="hover:text-brand-700 dark:hover:text-blue-400 transition-colors">
                  enpower@gmail.com
                </a>
              </li>
              <li>
                <span className="font-medium text-slate-700 dark:text-slate-300">Telefon:</span>{' '}
                <a href="tel:+38344222836" className="hover:text-brand-700 dark:hover:text-blue-400 transition-colors">
                  +383 44 222 836
                </a>
              </li>
              <li>
                <span className="font-medium text-slate-700 dark:text-slate-300">Facebook:</span>{' '}
                <a
                  href="https://www.facebook.com/EnpowerShpk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-700 dark:hover:text-blue-400 transition-colors"
                >
                  Enpower sh.p.k
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-100 dark:border-brand-900/60 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Enpower sh.p.k. Të gjitha të drejtat e rezervuara.
          </p>
        </div>
      </div>
    </footer>
  )
}
