import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { WhatHappens, WhoAndWhen } from '@/components/event-sections'
import { JoinSection } from '@/components/join-section'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <WhatHappens />
        <WhoAndWhen />
        <JoinSection />
      </main>
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground sm:px-6">
          See Through Me — for travel enthusiasts and explorers seeking adventure.
        </div>
      </footer>
    </>
  )
}
