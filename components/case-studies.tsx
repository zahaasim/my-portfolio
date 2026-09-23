import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    domain: "Loan Origination",
    title: "Onboarding & credit decisioning",
    summary:
      "A digital lending app preparing to launch under a national regulator's licensing circulars. I authored the BRD and PRD, designed the onboarding, KYC, and automated credit-decisioning flow, and specced the operations admin portal.",
    tags: ["Project Manager", "BRD · PRD · UI", "Fintech"],
    highlights: [
      "Compliant onboarding & KYC journey",
      "Rules-based decisioning scorecard",
      "Merchant & risk admin portal",
    ],
    href: "/case-study/onboarding",
  },
  {
    domain: "Loan Management",
    title: "Configuration-driven platform",
    summary:
      "One platform serving three different loan products across the markets it operates in — with the differences handled through configuration rather than forked code.",
    tags: ["Requirements", "Multi-product", "Multi-market"],
    highlights: [
      "Config-vs-core boundaries",
      "Three products, one core",
      "Multi-market rollout",
    ],
  },
  {
    domain: "Payments",
    title: "Payments & collections infrastructure",
    summary:
      "A payments platform expanding into collections and lending-adjacent products under active regulatory review, where the spec had to satisfy both product and compliance at once.",
    tags: ["Delivery", "Compliance", "Vendor coordination"],
    highlights: [
      "Collections workflow spec",
      "Regulatory review support",
      "Third-party vendor coordination",
    ],
  },
]

function CardBody({ project }: { project: (typeof projects)[number] }) {
  return (
    <>
      <div>
        <div className="flex items-center gap-3 text-xs uppercase tracking-wide text-muted-foreground">
          <span className="font-medium text-primary">{project.domain}</span>
        </div>
        <h3 className="mt-3 flex items-start gap-2 font-serif text-2xl font-light text-foreground">
          {project.title}
          {project.href && (
            <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
          )}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="self-center rounded-xl border border-border bg-card p-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          What I owned
        </p>
        <ul className="mt-3 space-y-2.5">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-2.5 text-sm text-foreground"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {highlight}
            </li>
          ))}
        </ul>
        {project.href && (
          <p className="mt-4 text-xs font-medium text-primary">
            Read the full BRD / PRD breakdown →
          </p>
        )}
      </div>
    </>
  )
}

export function CaseStudies() {
  return (
    <section id="work" className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Selected work
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-light leading-tight text-foreground md:text-4xl">
              Case studies.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Four platforms across four regulatory contexts. Open the first for
            the full requirements and design breakdown.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {projects.map((project) =>
            project.href ? (
              <Link
                key={project.title}
                href={project.href}
                className="group grid gap-6 rounded-2xl border border-border bg-background p-6 transition-colors hover:border-primary/40 md:grid-cols-[0.9fr_1.1fr] md:p-8"
              >
                <CardBody project={project} />
              </Link>
            ) : (
              <article
                key={project.title}
                className="grid gap-6 rounded-2xl border border-border bg-background p-6 md:grid-cols-[0.9fr_1.1fr] md:p-8"
              >
                <CardBody project={project} />
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
