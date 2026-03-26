'use client'

import type { MediaItemType } from '@/lib/images'
import { cn } from '@/lib/utils'
import Image from 'next/image'

type MediaItemProps = {
  item: MediaItemType
  className?: string
  onClick?: () => void
  fill?: boolean
  sizes?: string
  fit?: 'cover' | 'contain'
}

export function MediaItem({ item, className, onClick, fill = true, sizes, fit = 'cover' }: MediaItemProps) {
  if (item.type === 'video') {
    return (
      <div className={cn('relative overflow-hidden', className)}>
        <video
          className="w-full h-full object-cover"
          onClick={onClick}
          playsInline
          muted
          loop
          preload="metadata"
          src={item.url}
        >
          <source src={item.url} type="video/mp4" />
        </video>
      </div>
    )
  }

  return (
    <Image
      src={item.url}
      alt={item.title}
      fill={fill}
      sizes={sizes ?? '(max-width: 768px) 100vw, 33vw'}
      className={cn(fit === 'contain' ? 'object-contain' : 'object-cover', 'cursor-pointer', className)}
      onClick={onClick}
      loading="lazy"
    />
  )
}
