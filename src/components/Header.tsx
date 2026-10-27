'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { BrandLogo } from '@/components/BrandLogo'
import { cn } from '@/lib/utils'

const nav = [
  { href: '/', label: 'Kryefaqja' },
  { href: '/about', label: 'Rreth nesh' },
  { href: '/services', label: 'Shërbimet' },
  { href: '/projects', label: 'Projektet' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 dark:border-white/10 bg-white/95 dark:bg-brand-950/95 backdrop-blur-xl">
      <div className="layout-container">
        <div className="flex h-[4.25rem] sm:h-[4.75rem] items-center justify-between gap-4">
          <Link href="/" className="inline-flex items-center">
            <BrandLogo priority imgClassName="h-11 sm:h-12 w-auto object-contain" />
          </Link>

          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {nav.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors duration-200',
                  pathname === href
                    ? 'text-brand-700 dark:text-white'
                    : 'text-slate-800 dark:text-slate-100 hover:text-brand-700 dark:hover:text-white'
                )}
              >
                {label}
                {pathname === href && (
                  <span className="mt-1 block h-px w-full bg-brand-500" aria-hidden />
                )}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary ml-3">
              Kontaktoni
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-xl p-2 text-slate-700 dark:text-slate-200 hover:bg-white/70 dark:hover:bg-white/5 touch-manipulation"
            aria-label="Hap menunë"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <nav className="md:hidden mb-4 flex flex-col gap-1 rounded-2xl border border-slate-200/80 bg-white p-2 shadow-lift dark:border-white/10 dark:bg-brand-900">
            {nav.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={cn(
                  'block rounded-xl px-4 py-3 min-h-[44px] flex items-center touch-manipulation font-medium',
                  pathname === href
                    ? 'bg-brand-600 text-white'
                    : 'text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-white/5'
                )}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary w-full min-h-[44px] touch-manipulation mt-1"
            >
              Kontaktoni
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
