import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Case Study — Onboarding & Credit Decisioning | Zaha Asim",
  description:
    "A full walkthrough of the BRD, PRD, and interface design behind a consumer onboarding and credit-decisioning flow for a digital lending platform.",
}

const chips = [
  "Role: Project Manager",
  "Pakistan, South Asia",
  "National licensing circulars",
  "BRD · PRD · Mockups · Tickets",
]

const objectives = [
  "Launch a compliant onboarding funnel that minimizes drop-off between application start and identity verification.",
  "Automate the majority of credit decisions to cut underwriting turnaround from days to minutes.",
  "Give operations a single admin portal to manage merchants and adjust risk configuration without a code change.",
  "Support Shariah-structured financing communications correctly across the full transaction lifecycle.",
  "Produce requirements and compliance documentation mapped clearly to the regulator's licensing circulars.",
]

const stakeholders = [
  ["Product & business sponsor", "Launch timeline, conversion rate, product-market fit"],
  ["Compliance & legal", "Regulatory sign-off, accurate Shariah-compliant messaging"],
  ["Engineering", "Buildable, unambiguous specifications"],
  ["Risk & credit team", "Scorecard accuracy, configurable thresholds"],
  ["Operations / admin users", "Day-to-day merchant and risk management tooling"],
  ["End borrowers", "A fast, clear, trustworthy application experience"],
]

const inScope = [
  "Mobile onboarding & KYC flow",
  "Credit-decisioning engine integration",
  "Admin portal: merchants, risk scoring, tier/level configuration",
  "Lifecycle SMS & push notification templates",
  "Compliance documentation mapped to licensing circulars",
]

const outScope = [
  "Payment gateway integration",
  "Core ledger / accounting system",
  "Credit bureau integration specifics",
  "Multi-language expansion beyond Urdu & English",
]

const businessReqs = [
  ["BR-1", "Applicants must be able to complete identity verification without leaving the app or needing a branch visit."],
  ["BR-2", "Credit decisions must be returned automatically for the majority of applications, with manual review reserved for edge cases."],
  ["BR-3", "Operations must be able to onboard and manage merchants, and adjust risk scoring thresholds, without an engineering request."],
  ["BR-4", "All borrower communications must correctly reflect the Shariah-compliant structure of the financing product at every lifecycle stage."],
  ["BR-5", "Every onboarding and decisioning requirement must be traceable to a specific clause in the regulator's licensing circulars."],
  ["BR-6", "The application must support both Urdu (right-to-left) and English at every step of the borrower journey."],
]

const personas = [
  ["Borrower", "A fast, low-friction application with clear status updates"],
  ["Risk / operations admin", "Visibility into merchants and applications, control over scoring thresholds"],
  ["Compliance reviewer", "Confidence that every step maps to a regulatory requirement"],
]

const frGroups = [
  {
    title: "Onboarding & KYC",
    reqs: [
      ["FR-1", "Capture a national ID (front and back) and a live selfie, with in-app guidance for retakes on poor image quality."],
      ["FR-2", "Show a persistent progress indicator across all onboarding steps so applicants always know how much is left."],
      ["FR-3", "Auto-save partial applications so a dropped connection doesn't force the applicant to restart."],
    ],
  },
  {
    title: "Credit-decisioning engine",
    reqs: [
      ["FR-4", "Return a decision and an approved amount within seconds of KYC completion for the majority of applicants."],
      ["FR-5", "Weigh a small set of transparent factors — income stability, repayment history, transaction behavior, existing obligations, and a behavioral signal — into a single score operations can review."],
      ["FR-6", "Route borderline scores to a manual review queue rather than an automatic decline."],
    ],
  },
  {
    title: "Admin portal",
    reqs: [
      ["FR-7", "List all merchants with status, volume, and risk flag, with search and filter."],
      ["FR-8", "Let risk operators adjust scorecard factor weights and approval thresholds through a configuration screen, not a code deployment."],
      ["FR-9", "Support tiered borrower levels that unlock higher financing limits based on repayment history."],
    ],
  },
  {
    title: "Lifecycle notifications",
    reqs: [
      ["FR-10", "Send an SMS and push notification at each financing lifecycle stage: application received, approved, disbursed, payment due, and completed."],
      ["FR-11", "Keep every notification's language consistent with the product's Shariah-compliant structure — no interest-based terminology."],
    ],
  },
]

const successMetrics = [
  "Onboarding completion rate from application start to submitted KYC",
  "Share of applications resolved automatically versus sent to manual review",
  "Notification delivery and read rate across lifecycle stages",
]

const scoreFactors = [
  { name: "Income stability", value: 88 },
  { name: "Repayment history", value: 80 },
  { name: "Transaction behavior", value: 70 },
  { name: "Existing obligations", value: 60 },
]

const merchants = [
  ["Retailer A", "1,204 txns", "Low"],
  ["Retailer B", "612 txns", "Watch"],
  ["Retailer C", "89 txns", "Low"],
]

const notifications = [
  ["Application received", "We've received your application. We'll confirm your financing offer shortly."],
  ["Approved", "Good news — your financing has been approved. Open the app to view your offer."],
  ["Payment due", "Your next installment is due in 3 days. Pay early anytime from the app."],
  ["Completed", "Your financing is fully repaid. Thank you — your next offer may unlock a higher limit."],
]

const kanban = [
  { head: "Backlog", cards: [["LEND-138", "Add Urdu RTL support to onboarding steps", "FR-6"], ["LEND-145", "Configure tiered borrower levels", "FR-9"]] },
  { head: "In progress", cards: [["LEND-141", "Wire scorecard factors to result screen", "FR-5"]] },
  { head: "In review", cards: [["LEND-142", "Build merchant list view with risk flag column", "FR-7"]] },
  { head: "Done", cards: [["LEND-130", "ID + selfie upload flow", "FR-1"], ["LEND-133", "Progress indicator across steps", "FR-2"]] },
]

function SectionHeading({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      )}
      <h2 className="mt-3 font-serif text-3xl font-light leading-tight text-foreground md:text-4xl">
        {title}
      </h2>
    </div>
  )
}

function Subhead({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-primary first:mt-0">
      {children}
    </p>
  )
}

export default function OnboardingCaseStudy() {
  return (
    <main className="min-h-dvh bg-background">
      <SiteHeader />

      <article className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>

        <header className="mt-10">
          <p className="text-sm font-semibold text-primary">
            Case Study — Requirements, Product Spec & UI Design
          </p>
          <h1 className="mt-4 text-balance font-serif text-4xl font-light leading-[1.05] tracking-tight text-foreground md:text-5xl">
            Onboarding & credit decisioning for a digital lending app
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            A full walkthrough of the BRD, PRD, and interface design behind a
            consumer onboarding and credit-decisioning flow, built for a
            Pakistani fintech lending platform ahead of its public launch.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs text-muted-foreground"
              >
                {chip}
              </li>
            ))}
          </ul>
        </header>

        <section className="mt-16">
          <SectionHeading title="Context" />
          <p className="text-pretty leading-relaxed text-muted-foreground">
            The platform was preparing to launch a Shariah-structured consumer
            financing product and needed three things at once: a compliant
            onboarding journey that wouldn&apos;t lose applicants halfway
            through, an automated credit-decisioning engine to replace manual
            underwriting, and an internal admin portal so operations could
            manage merchants and risk settings without engineering support. My
            job was to turn that mix of business, regulatory, and technical
            context into requirements the engineering team could build against —
            and into an interface people would actually trust with their
            financial information.
          </p>
        </section>

        {/* BRD */}
        <section id="brd" className="mt-16">
          <SectionHeading eyebrow="01 — Business Requirements" title="Business Requirements Document" />

          <Subhead>Purpose & background</Subhead>
          <p className="leading-relaxed text-muted-foreground">
            This BRD defines the business case and requirements for the
            onboarding, credit-decisioning, and administrative capabilities
            needed to bring the lending product to market, and to give the
            compliance team documentation it could take directly into regulatory
            review.
          </p>

          <Subhead>Business objectives</Subhead>
          <ul className="space-y-2">
            {objectives.map((o) => (
              <li key={o} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {o}
              </li>
            ))}
          </ul>

          <Subhead>Stakeholders</Subhead>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-card text-xs uppercase tracking-wide text-muted-foreground">
                  <th className="px-4 py-3 font-medium">Stakeholder</th>
                  <th className="px-4 py-3 font-medium">Interest</th>
                </tr>
              </thead>
              <tbody>
                {stakeholders.map(([who, interest]) => (
                  <tr key={who} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 font-medium text-foreground">{who}</td>
                    <td className="px-4 py-3 text-muted-foreground">{interest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Subhead>Scope</Subhead>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-5">
              <p className="mb-3 text-sm font-semibold text-foreground">In scope</p>
              <ul className="space-y-2">
                {inScope.map((s) => (
                  <li key={s} className="flex gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <p className="mb-3 text-sm font-semibold text-foreground">Out of scope</p>
              <ul className="space-y-2">
                {outScope.map((s) => (
                  <li key={s} className="flex gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/40" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Subhead>Business requirements</Subhead>
          <div className="space-y-3">
            {businessReqs.map(([id, text]) => (
              <div key={id} className="border-l-2 border-primary/40 pl-4">
                <span className="text-xs font-bold text-primary">{id}</span>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>

          <Subhead>Regulatory considerations</Subhead>
          <p className="leading-relaxed text-muted-foreground">
            The national regulator&apos;s licensing circulars for digital
            lending platforms set explicit expectations for identity
            verification, data handling, and financing-product disclosures. Each
            business requirement above was mapped clause-by-clause against those
            circulars, and the resulting traceability matrix was handed to
            compliance ahead of the regulatory submission.
          </p>
        </section>

        {/* PRD */}
        <section id="prd" className="mt-16">
          <SectionHeading eyebrow="02 — Product Spec" title="Product Requirements Document" />

          <Subhead>Product overview</Subhead>
          <p className="leading-relaxed text-muted-foreground">
            A mobile-first onboarding and credit-decisioning experience for a
            Shariah-structured lending product, paired with a web-based admin
            portal for the operations and risk teams who run it day to day.
          </p>

          <Subhead>Personas</Subhead>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-card text-xs uppercase tracking-wide text-muted-foreground">
                  <th className="px-4 py-3 font-medium">Persona</th>
                  <th className="px-4 py-3 font-medium">Needs</th>
                </tr>
              </thead>
              <tbody>
                {personas.map(([who, needs]) => (
                  <tr key={who} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 font-medium text-foreground">{who}</td>
                    <td className="px-4 py-3 text-muted-foreground">{needs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {frGroups.map((group) => (
            <div key={group.title}>
              <Subhead>Functional requirements — {group.title}</Subhead>
              <div className="space-y-3">
                {group.reqs.map(([id, text]) => (
                  <div key={id} className="border-l-2 border-primary/40 pl-4">
                    <span className="text-xs font-bold text-primary">{id}</span>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <Subhead>Success metrics</Subhead>
          <ul className="space-y-2">
            {successMetrics.map((m) => (
              <li key={m} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {m}
              </li>
            ))}
          </ul>
        </section>

        {/* MOCKUPS */}
        <section id="mockups" className="mt-16">
          <SectionHeading eyebrow="03 — Interface" title="Design mockups" />
          <p className="mb-8 leading-relaxed text-muted-foreground">
            High-fidelity interface concepts translating the requirements above
            into the product experience — an onboarding upload step, a
            transparent decisioning result, an operations console, and the
            lifecycle notification set.
          </p>

          {/* Phone mockups */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Step 2 of 3</p>
              <p className="mt-1 font-serif text-lg text-foreground">Verify your identity</p>
              <div className="mt-4 space-y-2.5">
                <div className="rounded-lg border border-dashed border-border bg-background px-4 py-3">
                  <p className="text-sm font-medium text-foreground">Front of ID card</p>
                  <p className="text-xs text-muted-foreground">JPG or PNG, under 10MB</p>
                </div>
                <div className="rounded-lg border border-dashed border-border bg-background px-4 py-3">
                  <p className="text-sm font-medium text-foreground">Take a selfie</p>
                  <p className="text-xs text-muted-foreground">Good lighting, no glasses</p>
                </div>
              </div>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-2/3 rounded-full bg-primary" />
              </div>
              <p className="mt-2 text-xs text-muted-foreground">2 of 3 steps complete</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Application result</p>
              <p className="mt-1 font-serif text-lg text-foreground">You&apos;re approved</p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-serif text-4xl font-light text-primary">84</span>
                <span className="text-sm text-muted-foreground">of 100</span>
              </div>
              <div className="mt-4 space-y-3">
                {scoreFactors.map((f) => (
                  <div key={f.name}>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{f.name}</span>
                    </div>
                    <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-muted">
                      <div className="h-full rounded-full bg-primary" style={{ width: `${f.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Onboarding & decisioning, mobile.</span>{" "}
            The upload step gives explicit format guidance to reduce retries, and
            the result screen exposes the scorecard&apos;s factors instead of a
            single opaque number — so an operator resolving a support query can
            see exactly what drove the outcome.
          </p>

          {/* Admin portal */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-border">
            <div className="flex items-center gap-2 border-b border-border bg-muted px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
              <span className="ml-3 text-xs text-muted-foreground">admin.lendingapp.internal / risk-configuration</span>
            </div>
            <div className="bg-card p-6">
              <h4 className="font-serif text-lg text-foreground">Merchant management</h4>
              <p className="text-xs text-muted-foreground">42 active merchants · 3 flagged for review</p>
              <div className="mt-4 overflow-hidden rounded-lg border border-border">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-border text-xs uppercase tracking-wide text-muted-foreground">
                      <th className="px-4 py-2.5 font-medium">Merchant</th>
                      <th className="px-4 py-2.5 font-medium">Volume (30d)</th>
                      <th className="px-4 py-2.5 font-medium">Risk flag</th>
                    </tr>
                  </thead>
                  <tbody>
                    {merchants.map(([name, vol, flag]) => (
                      <tr key={name} className="border-b border-border last:border-0">
                        <td className="px-4 py-2.5 text-foreground">{name}</td>
                        <td className="px-4 py-2.5 text-muted-foreground">{vol}</td>
                        <td className="px-4 py-2.5">
                          <span
                            className={
                              flag === "Watch"
                                ? "rounded-full bg-accent px-2.5 py-0.5 text-xs text-accent-foreground"
                                : "rounded-full bg-primary/10 px-2.5 py-0.5 text-xs text-primary"
                            }
                          >
                            {flag}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <h4 className="mt-6 font-serif text-base text-foreground">Scorecard weighting</h4>
              <div className="mt-3 space-y-3">
                {[["Income stability", 30], ["Repayment history", 25]].map(([label, val]) => (
                  <div key={label as string}>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{label}</span>
                      <span>{val}%</span>
                    </div>
                    <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-muted">
                      <div className="h-full rounded-full bg-primary" style={{ width: `${val}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Admin portal, desktop.</span>{" "}
            Merchant management and scorecard weighting live in the same console,
            so operations can flag a merchant and adjust a risk threshold in one
            place — the requirement behind FR-7 and FR-8.
          </p>

          {/* Notifications */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {notifications.map(([stage, body]) => (
              <div key={stage} className="rounded-xl border border-border bg-card p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">{stage}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Lifecycle notifications.</span>{" "}
            Wording was checked at every stage to stay consistent with the
            product&apos;s Shariah-compliant structure — deliberately avoiding
            interest-based phrasing (FR-11).
          </p>
        </section>

        {/* DELIVERY */}
        <section id="delivery" className="mt-16">
          <SectionHeading eyebrow="04 — Delivery" title="Delivery & ticket management" />
          <p className="mb-8 leading-relaxed text-muted-foreground">
            Requirements were only half the job — I also ran delivery day to
            day: writing and assigning engineering tickets in Jira, tracking
            cross-team tasks in Trello, reviewing UI handoffs in Figma, checking
            onboarding and decisioning metrics in Metabase, querying the
            application database directly to validate edge cases, and
            coordinating with the third-party KYC and SMS gateway vendors the
            flow depended on.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {kanban.map((col) => (
              <div key={col.head}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {col.head}
                </p>
                <div className="space-y-3">
                  {col.cards.map(([id, title, fr]) => (
                    <div key={id} className="rounded-lg border border-border bg-card p-3">
                      <p className="text-xs font-semibold text-primary">{id}</p>
                      <p className="mt-1 text-sm leading-snug text-foreground">{title}</p>
                      <p className="mt-2 text-xs text-muted-foreground">{fr}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-primary">LEND-142</span>
              <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs text-accent-foreground">
                In review
              </span>
            </div>
            <h4 className="mt-3 font-serif text-lg text-foreground">
              Build merchant list view with risk flag column
            </h4>
            <dl className="mt-4 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
              {[
                ["Type", "Story"],
                ["Epic", "Admin portal"],
                ["Assignee", "Zaha Asim — Project Manager"],
                ["Reporter", "Risk lead"],
                ["Priority", "High"],
                ["Sprint", "Sprint 14"],
                ["Linked requirement", "FR-7"],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-2 border-b border-border/60 py-1.5">
                  <dt className="w-36 shrink-0 text-xs uppercase tracking-wide text-muted-foreground">{k}</dt>
                  <dd className="text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 rounded-lg bg-background p-3 text-sm leading-relaxed text-muted-foreground">
              Add a merchants table to the admin portal showing name, 30-day
              transaction volume, risk flag, and status — matching the
              requirement defined in the PRD. Assigned to engineering after the
              admin-portal wireframes were reviewed and signed off in Figma.
            </p>
          </div>
        </section>

        {/* OUTCOME */}
        <section className="mt-16">
          <SectionHeading title="Outcome" />
          <p className="leading-relaxed text-muted-foreground">
            The finished onboarding and decisioning flow gave the platform a
            compliant, launch-ready borrower journey, backed by requirements
            documentation the compliance team could take directly into
            regulatory review — and an admin portal that let operations run
            merchant and risk management independently of engineering.
          </p>
        </section>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground">
          <p>Company and regulator names are withheld under NDA; the work itself is real.</p>
          <Link href="/#work" className="font-medium text-primary">
            ← Back to portfolio
          </Link>
        </div>
      </article>
    </main>
  )
}
