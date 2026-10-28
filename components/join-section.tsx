import { CalendarDays, LogIn } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { eventLinks, linkOrFallback } from '@/lib/event'
import { cn } from '@/lib/utils'

export function JoinSection() {
  return (
    <section id="join" className="border-t bg-secondary/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 md:py-20">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">How to sign up</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Two ways to join</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-5 rounded-2xl border bg-background p-6">
            <CalendarDays className="size-6 text-primary" aria-hidden="true" />
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold">Start Planning Now</h3>

            </div>
            <a
              href={linkOrFallback(eventLinks.googleForm)}
              target={eventLinks.googleForm ? '_blank' : undefined}
              rel={eventLinks.googleForm ? 'noopener noreferrer' : undefined}
              className={cn(buttonVariants({ size: 'lg' }), 'h-11 self-start px-5 text-base')}
            >
              Open Google Form
            </a>
          </div>
          <div className="flex flex-col gap-5 rounded-2xl border bg-background p-6">
            <LogIn className="size-6 text-primary" aria-hidden="true" />
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold">Log in</h3>

            </div>
            <a
              href={linkOrFallback(eventLinks.login)}
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-11 self-start px-5 text-base')}
            >
              Log in
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
