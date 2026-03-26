'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { galleryItems, type MediaItemType } from '@/lib/images'
import { MediaItem } from './MediaItem'
import { GalleryModal } from './GalleryModal'

const highlights = [
  'Linja të tensionit të mesëm dhe të lartë',
  'Trafostacione private dhe industriale',
  'Ndriçim publik dhe objekte funksionale',
  'Mirëmbajtje dhe modernizim i infrastrukturës',
]

export function ProjectsGallery() {
  const [selectedItem, setSelectedItem] = useState<MediaItemType | null>(null)

  return (
    <>
      <ul className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-12 sm:mb-14">
        {highlights.map((item, i) => (
          <li key={i} className="surface-card px-4 py-3 flex items-center gap-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            <span className="flex h-2.5 w-2.5 rounded-full bg-amber-500 shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      <AnimatePresence mode="wait">
        {selectedItem ? (
          <GalleryModal
            selectedItem={selectedItem}
            isOpen
            onClose={() => setSelectedItem(null)}
            setSelectedItem={setSelectedItem}
            mediaItems={galleryItems}
          />
        ) : (
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 auto-rows-[320px] sm:auto-rows-[380px]"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.06 },
              },
            }}
          >
            {galleryItems.map((item) => (
              <motion.div
                key={item.id}
                layoutId={`project-${item.id}`}
                className="relative overflow-hidden rounded-xl cursor-pointer ring-1 ring-slate-200/50 dark:ring-slate-700/50 bg-slate-100 dark:bg-slate-800/40 p-2"
                onClick={() => setSelectedItem(item)}
                variants={{
                  hidden: { y: 24, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { type: 'spring', stiffness: 300, damping: 24 },
                  },
                }}
                whileHover={{ scale: 1.02 }}
              >
                <MediaItem
                  item={item}
                  className="absolute inset-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)] rounded-lg"
                  onClick={() => setSelectedItem(item)}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  fit="contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 opacity-0 hover:opacity-100 transition-opacity">
                  <h3 className="text-white text-sm sm:text-base font-semibold line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-white/90 text-xs sm:text-sm mt-0.5 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
