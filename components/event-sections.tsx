import { Backpack, CalendarDays, Compass, Map, MapPin, MessageCircleQuestion, Mountain, Package } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const offerings: { icon: LucideIcon; title: string }[] = [
  { icon: Map, title: 'Itineraries' },
  { icon: MapPin, title: 'Locations' },
  { icon: MessageCircleQuestion, title: 'Travel queries' },
  { icon: Package, title: 'Travel packages' },
  { icon: Backpack, title: 'Links for travel gear & equipment' },
]

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium uppercase tracking-widest text-primary">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  )
}

export function WhatHappens() {
  return (
    <section id="what" className="border-t bg-secondary/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 md:py-20">
        <SectionHeading eyebrow="What happens" title="Ask for anything travel" />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {offerings.map(({ icon: Icon, title }) => (
            <li key={title} className="flex flex-col gap-4 rounded-xl border bg-background p-5">
              <span className="flex size-10 items-center justify-center rounded-lg bg-accent text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <p className="font-medium leading-snug">{title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function WhoAndWhen() {
  return (
    <section className="border-t">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20">
        <div id="who" className="flex flex-col gap-6">
          <SectionHeading eyebrow="Who it's for" title="Made for people who wander" />
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-3 rounded-xl border p-4">
              <Compass className="size-5 text-primary" aria-hidden="true" />
              <span className="font-medium">Travel enthusiasts</span>
            </li>
            <li className="flex items-center gap-3 rounded-xl border p-4">
              <Mountain className="size-5 text-primary" aria-hidden="true" />
              <span className="font-medium">Explorers seeking adventure</span>
            </li>
          </ul>
        </div>
        <div id="when" className="flex flex-col gap-6">
          <SectionHeading eyebrow="When & where" title="Your time, your place" />
          <div className="flex items-start gap-3 rounded-xl border bg-primary p-5 text-primary-foreground">
            <CalendarDays className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            <p className="leading-relaxed">
              When and where depends on you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
