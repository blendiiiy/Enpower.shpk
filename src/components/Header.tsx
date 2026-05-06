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
]

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 dark:border-brand-800/50 bg-white/95 dark:bg-brand-950/92 backdrop-blur-xl shadow-[0_1px_0_0_rgba(15,23,42,0.03)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <Link
            href="/"
            className={`inline-flex items-center ${LOGO_FRAME_CLASS}`}
          >
            <Image
              src={LOGO_SRC}
              alt="Enpower sh.p.k"
              width={260}
              height={78}
              priority
              className="h-10 sm:h-12 w-auto object-contain drop-shadow-sm"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-2 lg:gap-3">
            <div className="flex items-center gap-1 sm:gap-2 rounded-2xl border border-slate-100 dark:border-slate-700/70 bg-slate-50/50 dark:bg-slate-900/50 p-1 sm:p-1.5">
            {nav.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200',
                  pathname === href
                    ? 'bg-brand-700 text-white shadow-sm dark:bg-brand-600 dark:text-white'
                    : 'text-slate-600 dark:text-slate-300 hover:text-brand-800 dark:hover:text-blue-300 hover:bg-white dark:hover:bg-slate-800/70'
                )}
              >
                {label}
              </Link>
            ))}
            </div>
            <Link
              href="/contact"
              className="btn-primary"
            >
              Kontaktoni
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-xl border border-transparent p-2 text-slate-600 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-slate-800 hover:border-slate-100 dark:hover:border-slate-700 touch-manipulation"
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
          <nav className="md:hidden pb-4 pt-2 flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white/95 shadow-sm">
            {nav.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={cn(
                  'block rounded-xl px-4 py-3 min-h-[44px] flex items-center touch-manipulation',
                  pathname === href
                    ? 'bg-brand-700 text-white'
                    : 'text-slate-800 hover:bg-brand-50 hover:text-brand-800'
                )}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary w-full min-h-[44px] touch-manipulation"
            >
              Kontaktoni
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
