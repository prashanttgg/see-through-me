import Image from 'next/image'
import { CalendarDays } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { eventLinks, linkOrFallback } from '@/lib/event'
import { cn } from '@/lib/utils'

export function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2">
      <div className="flex flex-col gap-6">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          For travel enthusiasts &amp; explorers
        </p>
        <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
          See Through Me
        </h1>
        <p className="-mt-3 text-base font-medium text-primary">Now on GitHub</p>
        <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
          Ask for itineraries, locations, travel queries, travel packages, and links for travel gear &amp; equipment.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={linkOrFallback(eventLinks.googleForm)}
            target={eventLinks.googleForm ? '_blank' : undefined}
            rel={eventLinks.googleForm ? 'noopener noreferrer' : undefined}
            className={cn(buttonVariants({ size: 'lg' }), 'h-11 px-5 text-base')}
          >
            <CalendarDays data-icon="inline-start" aria-hidden="true" />
            Start Planning Now
          </a>
          <a
            href={linkOrFallback(eventLinks.login)}
            className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-11 px-5 text-base')}
          >
            Log in
          </a>
        </div>
      </div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
        <Image
          src="/images/hero.png"
          alt="A traveler with a backpack looking out over a teal lagoon and mountains"
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  )
}
