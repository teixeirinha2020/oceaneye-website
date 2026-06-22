import { Leaf, RefreshCcw, FlaskConical, Recycle } from "lucide-react"
import { Reveal } from "./reveal"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
  {
    icon: RefreshCcw,
    title: "Design for Demise",
    content:
      "Reentrada controlada e ativa num prazo de 5 anos, eliminando a contribuição da missão para o lixo orbital e cumprindo as melhores práticas de mitigação de detritos.",
  },
  {
    icon: FlaskConical,
    title: "Consciência do Impacto Químico",
    content:
      "Quantificámos a libertação de cerca de 7,11 kg de alumina (Al₂O₃) durante a reentrada, integrando esta análise na avaliação de impacto da missão.",
  },
  {
    icon: Recycle,
    title: "Alumínio de Baixo Carbono",
    content:
      "Utilização de alumínio de baixo carbono na estrutura, reduzindo a pegada de fabrico e reforçando a abordagem de eco-design ao longo do ciclo de vida.",
  },
]

export function Sustainability() {
  return (
    <section
      id="sustentabilidade"
      className="scroll-mt-16 border-y border-border bg-secondary/20 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-3xl px-4">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Leaf className="h-3.5 w-3.5" aria-hidden="true" />
            Eco-Design &amp; LCA
          </div>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Sustentabilidade espacial
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            A responsabilidade ambiental é um diferenciador central do OceanEye —
            desde o fabrico até ao fim de vida em órbita.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion className="mt-8 w-full">
            {items.map((item) => (
              <AccordionItem
                key={item.title}
                value={item.title}
                className="rounded-2xl border border-border bg-card px-4 mb-3"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="flex items-center gap-3">
                    <item.icon
                      className="h-5 w-5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span className="font-semibold">{item.title}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
