import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { CaseStudies } from "@/components/case-studies"
import { Approach } from "@/components/approach"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <main className="min-h-dvh bg-background">
      <SiteHeader />
      <Hero />
      <About />
      <CaseStudies />
      <Approach />
      <Experience />
      <Contact />
    </main>
  )
}
