import Image from 'next/image'
import { LOGO_FRAME_CLASS, LOGO_SRC, LOGO_SRC_ON_DARK } from '@/lib/logo'
import { cn } from '@/lib/utils'

type BrandLogoProps = {
  /** `dark` = logo e bardhë mbi navy; `auto` = dy versione me CSS dark: */
  variant?: 'auto' | 'light' | 'dark'
  className?: string
  imgClassName?: string
  priority?: boolean
}

/** Logo që duket qartë në light dhe dark. */
export function BrandLogo({
  variant = 'auto',
  className,
  imgClassName = 'h-10 sm:h-11 w-auto object-contain',
  priority,
}: BrandLogoProps) {
  if (variant === 'light') {
    return (
      <span className={cn('inline-flex items-center', LOGO_FRAME_CLASS, className)}>
        <Image src={LOGO_SRC} alt="Enpower sh.p.k" width={260} height={78} priority={priority} className={imgClassName} />
      </span>
    )
  }

  if (variant === 'dark') {
    return (
      <span className={cn('inline-flex items-center', LOGO_FRAME_CLASS, className)}>
        <Image
          src={LOGO_SRC_ON_DARK}
          alt="Enpower sh.p.k"
          width={260}
          height={78}
          priority={priority}
          className={imgClassName}
        />
      </span>
    )
  }

  return (
    <span className={cn('inline-flex items-center', LOGO_FRAME_CLASS, className)}>
      <Image
        src={LOGO_SRC}
        alt="Enpower sh.p.k"
        width={260}
        height={78}
        priority={priority}
        className={cn(imgClassName, 'dark:hidden')}
      />
      <Image
        src={LOGO_SRC_ON_DARK}
        alt="Enpower sh.p.k"
        width={260}
        height={78}
        priority={priority}
        className={cn(imgClassName, 'hidden dark:block')}
      />
    </span>
  )
}
