import { SiteNav } from "@/components/oceaneye/site-nav"
import { Hero } from "@/components/oceaneye/hero"
import { Challenge } from "@/components/oceaneye/challenge"
import { Solution } from "@/components/oceaneye/solution"
import { Specs } from "@/components/oceaneye/specs"
import { Documents } from "@/components/oceaneye/documents"
import { Sustainability } from "@/components/oceaneye/sustainability"
import { Team } from "@/components/oceaneye/team"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNav />
      <Hero />
      <Challenge />
      <Solution />
      <Specs />
      <Documents />
      <Sustainability />
      <Team />
    </main>
  )
}
