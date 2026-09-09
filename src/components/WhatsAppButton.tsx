'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { SITE, whatsappHref } from '@/lib/site'

/** FAB WhatsApp — gradient zyrtar, hije e butë, tooltip në desktop. */
export function WhatsAppButton() {
  const href = whatsappHref()
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      className="group fixed z-[70] bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] flex flex-row-reverse items-center gap-2.5 md:gap-3"
      initial={reducedMotion ? false : { opacity: 0, scale: 0.88, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={reducedMotion ? { duration: 0 } : { type: 'spring', damping: 20, stiffness: 280 }}
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none hidden md:flex md:flex-col md:items-end
          rounded-xl border border-slate-200/90 bg-white/95 px-3.5 py-2.5
          shadow-[0_12px_40px_-8px_rgba(15,23,42,0.18)] backdrop-blur-md
          translate-x-3 opacity-0 transition-all duration-300 ease-out
          group-hover:translate-x-0 group-hover:opacity-100
          dark:border-slate-600 dark:bg-slate-950/95 dark:shadow-black/50
        "
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#075E54] dark:text-[#25D366]">
          Mesazh direkt
        </span>
        <span className="text-sm font-bold text-slate-900 dark:text-white">WhatsApp</span>
        <span className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">Përgjigje e shpejtë</span>
      </div>

      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center">
        {!reducedMotion &&
          [0, 0.9].map((delay) => (
            <motion.span
              key={delay}
              className="absolute inset-[-2px] rounded-full bg-[#25D366]"
              aria-hidden
              initial={false}
              animate={{ opacity: [0.22, 0], scale: [1, 1.65] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                repeatDelay: 0.4,
                delay,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          ))}

        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={reducedMotion ? undefined : { scale: 1.06, y: -1 }}
          whileTap={reducedMotion ? undefined : { scale: 0.94 }}
          transition={{ type: 'spring', stiffness: 420, damping: 22 }}
          className="
            relative flex h-12 w-12 items-center justify-center rounded-full
            bg-gradient-to-br from-[#075E54] via-[#128C7E] to-[#25D366]
            text-white
            shadow-[0_4px_14px_-2px_rgba(7,94,84,0.45),0_8px_28px_-6px_rgba(37,211,102,0.35)]
            ring-[1.5px] ring-white/80 dark:ring-emerald-950/40
            ring-offset-[3px] ring-offset-white dark:ring-offset-brand-950
            hover:shadow-[0_6px_20px_-2px_rgba(7,94,84,0.5),0_12px_36px_-8px_rgba(37,211,102,0.4)]
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-[3px]
          "
          aria-label={`WhatsApp — na shkruaj (${SITE.name})`}
          title="WhatsApp"
        >
          <span
            aria-hidden
            className="absolute inset-[1px] rounded-full bg-gradient-to-b from-white/12 to-transparent opacity-60 pointer-events-none"
          />
          <svg
            viewBox="0 0 32 32"
            width="21"
            height="21"
            fill="currentColor"
            aria-hidden
            className="relative z-[1] drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]"
          >
            <path d="M19.11 17.34c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.16-.43-2.2-1.37-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.14.18 1.91 2.92 4.62 4.1.64.28 1.14.45 1.53.57.64.2 1.22.17 1.68.1.51-.08 1.6-.65 1.82-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16.02 3C9.39 3 4 8.39 4 15.02c0 2.35.68 4.54 1.86 6.39L4 29l7.78-1.8a11.96 11.96 0 0 0 4.24.78c6.63 0 12.02-5.39 12.02-12.02C28.04 8.39 22.65 3 16.02 3zm0 21.86c-1.42 0-2.76-.28-3.99-.83l-.29-.13-4.62 1.07 1.06-4.5-.15-.3a9.87 9.87 0 0 1-1.23-4.86c0-5.44 4.43-9.87 9.87-9.87 5.44 0 9.87 4.43 9.87 9.87 0 5.44-4.43 9.87-9.87 9.87z"/>
          </svg>
        </motion.a>
      </div>
    </motion.div>
  )
}
