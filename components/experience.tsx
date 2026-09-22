const roles = [
  {
    period: "2024 — Present",
    role: "Project Manager — Fintech & Lending",
    company: "Lending, payments & wealth platforms",
    body: "Author BRDs and PRDs, design onboarding and decisioning flows, run sprints, and coordinate vendors and compliance across South Asia, the GCC, and Southeast Asia.",
  },
  {
    period: "Education",
    role: "BS, Business Analytics",
    company: "NUCES (FAST) · Dean's List",
    body: "A foundation in analytics, SQL, and product thinking that carries directly into the requirements and data validation work I do today.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Background
            </p>
            <h2 className="mt-4 text-balance font-serif text-3xl font-light leading-tight text-foreground md:text-4xl">
              Building a track record, fast.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Company and regulator names are withheld under NDA — the work
              itself is real, and I&apos;m happy to walk through it in detail.
            </p>
          </div>

          <ol className="relative border-l border-border">
            {roles.map((role) => (
              <li key={role.period} className="relative pb-10 pl-8 last:pb-0">
                <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-background bg-primary" />
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  {role.period}
                </p>
                <h3 className="mt-1 font-serif text-xl font-light text-foreground">
                  {role.role}
                </h3>
                <p className="text-sm font-medium text-primary">
                  {role.company}
                </p>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
                  {role.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
