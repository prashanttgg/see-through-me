import { Compass } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { eventLinks, linkOrFallback } from '@/lib/event'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <Compass className="size-5 text-primary" aria-hidden="true" />
          See Through Me
        </a>
        <nav aria-label="Main" className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a href="#what" className="hover:text-foreground">What happens</a>
          <a href="#who" className="hover:text-foreground">Who it&apos;s for</a>
          <a href="#when" className="hover:text-foreground">When &amp; where</a>
          <a href="#join" className="hover:text-foreground">Join</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={linkOrFallback(eventLinks.login)}
            className={cn(buttonVariants({ variant: 'ghost', size: 'lg' }), 'px-3')}
          >
            Log in
          </a>
          <a
            href={linkOrFallback(eventLinks.googleForm)}
            target={eventLinks.googleForm ? '_blank' : undefined}
            rel={eventLinks.googleForm ? 'noopener noreferrer' : undefined}
            className={cn(buttonVariants({ size: 'lg' }), 'px-3')}
          >
            Sign up
          </a>
        </div>
      </div>
    </header>
  )
}
