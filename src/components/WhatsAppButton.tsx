'use client'

import { motion } from 'framer-motion'

function waLink(phoneE164: string, text: string) {
  const digits = phoneE164.replace(/[^\d+]/g, '')
  const phone = digits.startsWith('+') ? digits.slice(1) : digits
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
}

export function WhatsAppButton() {
  const href = waLink('+38344222836', 'Përshëndetje, jam i interesuar për një ofertë.')

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.96, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed bottom-5 right-5 z-50 flex h-9 sm:h-10 items-center gap-1.5 rounded-full bg-[#25D366] px-2.5 sm:px-3 text-white shadow-md hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
      aria-label="Na shkruaj në WhatsApp"
      title="WhatsApp"
    >
      <span className="flex h-7 w-7 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-white/15">
        <svg viewBox="0 0 32 32" width="14" height="14" fill="currentColor" aria-hidden>
          <path d="M19.11 17.34c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.16-.43-2.2-1.37-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.14.18 1.91 2.92 4.62 4.1.64.28 1.14.45 1.53.57.64.2 1.22.17 1.68.1.51-.08 1.6-.65 1.82-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16.02 3C9.39 3 4 8.39 4 15.02c0 2.35.68 4.54 1.86 6.39L4 29l7.78-1.8a11.96 11.96 0 0 0 4.24.78c6.63 0 12.02-5.39 12.02-12.02C28.04 8.39 22.65 3 16.02 3zm0 21.86c-1.42 0-2.76-.28-3.99-.83l-.29-.13-4.62 1.07 1.06-4.5-.15-.3a9.87 9.87 0 0 1-1.23-4.86c0-5.44 4.43-9.87 9.87-9.87 5.44 0 9.87 4.43 9.87 9.87 0 5.44-4.43 9.87-9.87 9.87z"/>
        </svg>
      </span>
      <span className="hidden sm:inline text-xs font-semibold">WhatsApp</span>
    </motion.a>
  )
}

