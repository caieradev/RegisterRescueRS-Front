import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300',
  {
    variants: {
      variant: {
        default: 'bg-zinc-50 text-celeste hover:bg-zinc-50/90',
        outline:
          'border border-zinc-50 bg-transparent text-zinc-50 hover:bg-zinc-100 hover:text-celeste',
        link: 'relative text-zinc-50 underline-offset-4 after:absolute after:-bottom-3 after:left-0 after:h-[3px] after:w-0 after:bg-white after:duration-300 after:hover:w-full',
        linkSecondary: 'text-celeste underline underline-offset-4',
      },
      size: {
        default: 'h-14 rounded-full px-16 py-4',
        sm: 'h-10 rounded-md px-14',
        lg: 'h-16 rounded-md px-20',
        icon: 'size-8',
        link: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }