import { Mail, Phone, ArrowUpRight } from "lucide-react"

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

export function Contact() {
  return (
    <footer id="contact" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="rounded-3xl border border-border bg-card p-8 md:p-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-light leading-tight text-foreground md:text-5xl">
              Have a fintech product that needs shaping?
            </h2>
            <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
              I&apos;m happy to talk through requirements, delivery challenges,
              or full-time and project roles in lending, payments, and financial
              planning. Let&apos;s find the clearest path to shipping.
            </p>
            <a
              href="mailto:zaha.asim@gmail.com"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              zaha.asim@gmail.com
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="space-y-3">
            <a
              href="mailto:zaha.asim@gmail.com"
              className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3 text-sm transition-colors hover:border-primary/40"
            >
              <span className="flex items-center gap-3 text-foreground">
                <Mail className="h-4 w-4 text-muted-foreground" />
                Email
              </span>
              <span className="text-muted-foreground">zaha.asim@gmail.com</span>
            </a>
            <a
              href="tel:+923304279888"
              className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3 text-sm transition-colors hover:border-primary/40"
            >
              <span className="flex items-center gap-3 text-foreground">
                <Phone className="h-4 w-4 text-muted-foreground" />
                Phone
              </span>
              <span className="text-muted-foreground">+92 330 4279888</span>
            </a>
            <a
              href="https://www.linkedin.com/in/zaha-asim/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3 text-sm transition-colors hover:border-primary/40"
            >
              <span className="flex items-center gap-3 text-foreground">
                <LinkedinIcon className="h-4 w-4 text-muted-foreground" />
                LinkedIn
              </span>
              <span className="text-muted-foreground">in/zaha-asim</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Zaha Asim. All rights reserved.</p>
        <p>Project Manager · Fintech & Lending Systems</p>
      </div>
    </footer>
  )
}
