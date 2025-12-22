'use client'

import clsx from 'clsx'

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="NotTaxAdvice.ai"
      className={clsx(
        'h-14 w-auto',
        className
      )}
    />
  )
}