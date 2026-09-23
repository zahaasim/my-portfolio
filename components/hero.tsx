import { ArrowUpRight } from "lucide-react"

const stats = [
  { value: "3", label: "Platforms delivered" },
  { value: "3", label: "Regulatory markets" },
  { value: "2 yrs", label: "In fintech delivery" },
  { value: "6+", label: "BRDs & PRDs authored" },
]

const markets = ["South Asia", "GCC", "Southeast Asia"]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-16 md:grid-cols-[1.1fr_0.9fr] md:pt-24 md:pb-24">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Open to project & product roles
          </p>
          <h1 className="text-balance font-serif text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Turning fintech requirements into{" "}
            <span className="text-primary">products people trust.</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            I&apos;m Zaha Asim, a project manager focused on lending, payments,
            and financial-planning platforms. In two fast years I&apos;ve
            written the specs, run the sprints, and helped clear regulatory
            sign-off across South Asia, the GCC, and Southeast Asia.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View case studies
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto flex aspect-[4/5] w-full max-w-sm flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-7">
            <div className="flex items-start justify-between">
                <img
                  src="/profile.jpg"
                  alt="Zaha Asim"
                  className="h-40 w-40 rounded-full object-cover border border-border"
                />
                  <span className="rounded-full border border-border bg-background px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Fintech
                  </span>
            </div>
            <div>
              <p className="font-serif text-2xl font-light text-foreground">
                Zaha Asim
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Project Manager · Lending & Payments
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {markets.map((market) => (
                  <li
                    key={market}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                  >
                    {market}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 hidden rounded-xl border border-border bg-card px-4 py-3 shadow-sm sm:block">
            <p className="font-serif text-sm text-foreground">
              BS, Business Analytics
            </p>
            <p className="text-xs text-muted-foreground">NUCES · Dean&apos;s List</p>
          </div>
        </div>
      </div>

      <div className="border-y border-border bg-card/50">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-border px-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="px-4 py-6 text-center md:py-8">
              <dt className="font-serif text-3xl font-light text-foreground md:text-4xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
