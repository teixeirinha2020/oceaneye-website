import Image from "next/image"
import { Waves, Trash2, MapPin } from "lucide-react"
import { Reveal } from "./reveal"

const points = [
  {
    icon: Waves,
    title: "Blooms de Algas Nocivas",
    text: "Os HABs (Harmful Algal Blooms) libertam toxinas que contaminam a aquacultura e fecham zonas de pesca durante semanas.",
  },
  {
    icon: Trash2,
    title: "Poluição por Plásticos",
    text: "Acumulações de detritos plásticos degradam habitats costeiros e escapam à resolução das constelações atuais.",
  },
  {
    icon: MapPin,
    title: "Zonas de Foco",
    text: "Portugal e Chile — duas economias azuis fortemente dependentes da aquacultura, da pesca e do turismo costeiro.",
  },
]

export function Challenge() {
  return (
    <section id="desafio" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            O Desafio
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Uma lacuna crítica de dados nas águas costeiras
          </h2>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            As constelações de satélites existentes não combinam a resolução
            espacial e a frequência de revisita necessárias para vigiar
            fenómenos costeiros rápidos — provocando perdas financeiras
            significativas à aquacultura e ao turismo.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 overflow-hidden rounded-3xl border border-border">
            <Image
              src="/ocean-bloom.png"
              alt="Vista de satélite de um bloom de algas verde junto à costa com detritos plásticos"
              width={1024}
              height={576}
              className="h-56 w-full object-cover sm:h-72"
            />
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={0.15 + i * 0.1}>
              <div className="h-full rounded-2xl border border-border bg-card p-5">
                <p.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
