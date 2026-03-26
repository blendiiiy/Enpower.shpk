'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { LOGO_FRAME_CLASS, LOGO_SRC } from '@/lib/logo'
import { cn } from '@/lib/utils'

const nav = [
  { href: '/', label: 'Kryefaqja' },
  { href: '/about', label: 'Rreth nesh' },
  { href: '/services', label: 'Shërbimet' },
  { href: '/projects', label: 'Projektet' },
  { href: '/contact', label: 'Kontakti' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <Link
            href="/"
            className={`inline-flex items-center px-2.5 py-1.5 ${LOGO_FRAME_CLASS}`}
          >
            <Image
              src={LOGO_SRC}
              alt="Enpower sh.p.k"
              width={260}
              height={78}
              priority
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-2 lg:gap-3 rounded-2xl border border-slate-200/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-900/60 p-1.5">
            {nav.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'rounded-xl px-3 py-2 text-sm font-medium transition-colors',
                  pathname === href
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                    : 'text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400'
                )}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-2.5 text-sm font-semibold text-slate-900 hover:from-amber-400 hover:to-amber-500 shadow-md shadow-amber-500/30 transition-all duration-200"
            >
              Kontaktoni
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-lg p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 touch-manipulation"
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
          <nav className="md:hidden pb-4 flex flex-col gap-2">
            {nav.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 min-h-[44px] flex items-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 touch-manipulation"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block rounded-lg bg-slate-900 dark:bg-white px-4 py-3 min-h-[44px] flex items-center justify-center text-sm font-semibold text-white dark:text-slate-900 text-center touch-manipulation"
            >
              Kontaktoni
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
