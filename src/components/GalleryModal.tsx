'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import type { MediaItemType } from '@/lib/images'
import { MediaItem } from './MediaItem'
import { cn } from '@/lib/utils'

type GalleryModalProps = {
  selectedItem: MediaItemType
  isOpen: boolean
  onClose: () => void
  setSelectedItem: (item: MediaItemType | null) => void
  mediaItems: MediaItemType[]
}

export function GalleryModal({
  selectedItem,
  isOpen,
  onClose,
  setSelectedItem,
  mediaItems,
}: GalleryModalProps) {
  const [dockPosition, setDockPosition] = useState({ x: 0, y: 0 })

  if (!isOpen) return null

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-40 bg-slate-900/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <motion.div
        initial={{ scale: 0.98 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        className="fixed inset-4 sm:inset-6 md:inset-8 z-50 rounded-xl overflow-hidden bg-white dark:bg-slate-900 shadow-2xl flex flex-col"
      >
        <div className="flex-1 p-4 flex items-center justify-center bg-slate-50 dark:bg-slate-900/50 min-h-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedItem.id}
              className="relative w-full h-full max-w-6xl max-h-[78vh] rounded-lg overflow-hidden shadow-lg"
              initial={{ y: 20, opacity: 0.9 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <MediaItem
                item={selectedItem}
                className="w-full h-full"
                onClick={onClose}
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                fit="contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-white text-lg font-semibold">{selectedItem.title}</h3>
                <p className="text-white/90 text-sm mt-1">{selectedItem.desc}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.button
          type="button"
          className="absolute top-3 right-3 min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-full bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 shadow-lg touch-manipulation"
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Mbyll"
        >
          <X className="w-5 h-5" />
        </motion.button>
      </motion.div>

      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0.1}
        initial={false}
        animate={{ x: dockPosition.x, y: dockPosition.y }}
        onDragEnd={(_, info) => {
          setDockPosition((prev) => ({
            x: prev.x + info.offset.x,
            y: prev.y + info.offset.y,
          }))
        }}
        className="fixed z-[60] left-1/2 bottom-6 -translate-x-1/2 touch-none"
      >
        <div className="flex items-center gap-1 rounded-xl bg-slate-800/90 dark:bg-slate-900/95 backdrop-blur border border-slate-600/50 dark:border-slate-700 px-2 py-2 shadow-xl cursor-grab active:cursor-grabbing">
          {mediaItems.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedItem(item)
              }}
              className={cn(
                'relative min-w-[44px] min-h-[44px] w-11 h-11 sm:w-10 sm:h-10 flex-shrink-0 rounded-lg overflow-hidden touch-manipulation',
                selectedItem.id === item.id
                  ? 'ring-2 ring-amber-400 ring-offset-2 ring-offset-slate-900'
                  : 'opacity-80 hover:opacity-100'
              )}
              initial={{ scale: 0.9 }}
              animate={{
                scale: selectedItem.id === item.id ? 1.1 : 1,
              }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <MediaItem
                item={item}
                className="w-full h-full"
                onClick={() => setSelectedItem(item)}
                fill
                sizes="80px"
              />
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  )
}
