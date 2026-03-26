'use client'

import Image from 'next/image'
import { useState } from 'react'

type ImageWithFallbackProps = {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  sizes?: string
  className?: string
  priority?: boolean
}

export function ImageWithFallback({
  src,
  alt,
  fill,
  width,
  height,
  sizes,
  className = '',
  priority,
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 ${className}`}
        aria-hidden
      >
        <span className="text-sm uppercase tracking-wider">Foto</span>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      sizes={sizes}
      className={className}
      priority={priority}
      onError={() => setError(true)}
    />
  )
}
