'use client'

import Image from 'next/image'
import { useState } from 'react'
import { LOGO_FRAME_CLASS, LOGO_SRC } from '@/lib/logo'
import { cn } from '@/lib/utils'

type BrandLogoBlockProps = {
  className?: string
}

/** Logo + emër i madh nga fillimi; prek për ta zmadhuar edhe më shumë. */
export function BrandLogoBlock({ className }: BrandLogoBlockProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <button
      type="button"
      onClick={() => setExpanded((v) => !v)}
      className={cn(
        'group w-full text-left rounded-2xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60 focus-visible:ring-offset-2 cursor-pointer touch-manipulation',
        LOGO_FRAME_CLASS,
        'rounded-2xl',
        'flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 py-6 px-5 sm:px-8',
        expanded && 'ring-2 ring-amber-500/40 shadow-lg shadow-amber-500/10',
        className
      )}
      aria-pressed={expanded}
      aria-label={expanded ? 'Zvogëlo logon' : 'Zmadho logon'}
    >
      <Image
        src={LOGO_SRC}
        alt="Enpower sh.p.k"
        width={400}
        height={120}
        className={cn(
          'w-auto object-contain transition-all duration-300',
          expanded ? 'h-24 sm:h-28 md:h-32' : 'h-16 sm:h-20 md:h-24'
        )}
      />
      <span
        className={cn(
          'font-bold text-slate-800 dark:text-slate-100 transition-all duration-300',
          expanded ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl md:text-3xl'
        )}
      >
        Enpower sh.p.k
      </span>
    </button>
  )
}
