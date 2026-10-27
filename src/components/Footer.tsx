import Link from 'next/link'
import { BrandLogo } from '@/components/BrandLogo'
import { SITE, whatsappHref } from '@/lib/site'

const links = [
  { href: '/', label: 'Kryefaqja' },
  { href: '/about', label: 'Rreth nesh' },
  { href: '/services', label: 'Shërbimet' },
  { href: '/projects', label: 'Projektet' },
  { href: '/contact', label: 'Kontakti' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-brand-950 text-slate-300">
      <div className="layout-container py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="inline-flex items-center">
              <BrandLogo variant="dark" imgClassName="h-12 sm:h-14 w-auto object-contain" />
            </Link>
            <p className="mt-5 text-sm text-slate-400 max-w-sm leading-relaxed">
              Zgjidhje profesionale në energji elektrike në Kosovë: TL/TM, trafostacione, ndriçim dhe mirëmbajtje.
            </p>
          </div>
          <div>
            <h3 className="text-[11px] font-semibold text-white uppercase tracking-[0.2em]">Lidhje</h3>
            <ul className="mt-4 space-y-2.5">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[11px] font-semibold text-white uppercase tracking-[0.2em]">Kontakt</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>{SITE.address}</li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phoneE164}`} className="hover:text-white transition-colors">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp {SITE.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={SITE.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {SITE.facebookLabel}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Enpower sh.p.k. Të gjitha të drejtat e rezervuara.
          </p>
        </div>
      </div>
    </footer>
  )
}
