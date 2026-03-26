import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm hover:bg-slate-800 dark:hover:bg-slate-100',
        destructive:
          'bg-red-600 text-white shadow-sm hover:bg-red-700 focus-visible:ring-red-500/50',
        outline:
          'border border-slate-200 dark:border-slate-700 bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800/50',
        secondary:
          'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700',
        ghost: 'hover:bg-slate-100 dark:hover:bg-slate-800/50',
        link: 'text-amber-600 dark:text-amber-400 underline-offset-4 hover:underline',
        amber:
          'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 shadow-md shadow-amber-500/30 hover:from-amber-400 hover:to-amber-500 hover:shadow-glow focus-visible:ring-amber-500/50',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 rounded-md px-3 gap-1.5',
        lg: 'h-11 rounded-xl px-6 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
