const steps = [
  {
    step: "01",
    title: "Discover & document",
    body: "Interview stakeholders, map current and future-state process, and turn business, regulatory, and technical context into a clear BRD and PRD.",
  },
  {
    step: "02",
    title: "Shape the solution",
    body: "Define platform architecture, draw the configuration-vs-core boundary, and structure commercial proposals and RFP responses.",
  },
  {
    step: "03",
    title: "Deliver in sprints",
    body: "Write and assign tickets in Jira, review UI handoffs in Figma, and coordinate the third-party KYC, SMS, and payment vendors the flow depends on.",
  },
  {
    step: "04",
    title: "Launch & measure",
    body: "Track onboarding and decisioning metrics in Metabase, query the database directly to validate edge cases, and feed learnings into the next cycle.",
  },
]

const skillGroups = [
  {
    title: "Domain knowledge",
    items: [
      "Loan origination systems",
      "Loan management systems",
      "Payments & collections",
      "Financial planning platforms",
      "Credit scoring & underwriting",
      "Digital wallets",
      "EWA & BNPL",
      "Multi-jurisdiction compliance",
    ],
  },
  {
    title: "Working method",
    items: [
      "BRD / PRD authoring",
      "Process mapping",
      "Stakeholder & RACI mapping",
      "RFP response structuring",
      "Commercial proposals",
      "Delivery roadmapping",
      "Sprint & ticket assignment",
      "Vendor coordination",
    ],
  },
  {
    title: "Tools & platforms",
    items: [
      "Jira",
      "Trello",
      "Figma",
      "Metabase",
      "SQL & relational databases",
      "Excel / Sheets",
    ],
  },
]

export function Approach() {
  return (
    <section id="approach" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Approach
        </p>
        <h2 className="mt-4 text-balance font-serif text-3xl font-light leading-tight text-foreground md:text-4xl">
          From tangled context to a spec engineers can build.
        </h2>
      </div>

      <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
        {steps.map((step) => (
          <li key={step.step} className="bg-card p-6">
            <span className="font-serif text-3xl font-light text-primary">
              {step.step}
            </span>
            <h3 className="mt-3 font-medium text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {step.body}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-16 grid gap-10 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {group.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
