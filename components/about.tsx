import { Search, Layers, ClipboardCheck } from "lucide-react"

const pillars = [
  {
    icon: Search,
    title: "Requirements & discovery",
    body: "Stakeholder interviews, current- and future-state process mapping, and BRDs and PRDs that engineering can actually build from.",
  },
  {
    icon: Layers,
    title: "Solution & proposal design",
    body: "Platform architecture, configuration-vs-core boundaries, and commercial proposals for lending and credit products.",
  },
  {
    icon: ClipboardCheck,
    title: "Structured delivery",
    body: "RFP and compliance response management, phased roadmaps, sprint tracking, and cross-functional coordination through to go-live.",
  },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            About
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl font-light leading-tight text-foreground md:text-4xl">
            I bring structure and clarity to fintech delivery.
          </h2>
        </div>
        <div className="space-y-5 text-pretty text-base leading-relaxed text-muted-foreground">
          <p>
            Over the past two years I&apos;ve worked across lending, payments,
            and financial-planning platforms — turning tangled business,
            regulatory, and technical context into requirements engineering
            teams can build from. I&apos;ve owned BRDs and PRDs, run sprints,
            and helped take products through regulatory review in more than one
            market.
          </p>
          <p>
            I&apos;m early in my career and moving fast. I care about shipping
            things people trust with their money, which means clear specs,
            honest status, and details that hold up under compliance scrutiny —
            not just features that demo well.
          </p>
        </div>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <pillar.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-serif text-lg text-foreground">
              {pillar.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {pillar.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
