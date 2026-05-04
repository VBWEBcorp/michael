import { House } from 'lucide-react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/seo'

type LogoProps = {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={siteConfig.fullName}
      className={cn(
        'group inline-flex items-center gap-2.5 font-display tracking-tight text-foreground transition-opacity hover:opacity-90',
        className
      )}
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-transform duration-300 group-hover:scale-[1.03]">
        <House className="size-[18px]" aria-hidden />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-[15px] font-semibold sm:text-base">{siteConfig.name}</span>
        <span className="hidden text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground sm:block">
          {siteConfig.tagline}
        </span>
      </span>
    </Link>
  )
}
