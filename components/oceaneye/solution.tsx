import { ScanEye, Repeat, BrainCircuit, TrendingUp } from "lucide-react"
import { Reveal } from "./reveal"

const pillars = [
  {
    icon: ScanEye,
    title: "Alta Resolução",
    text: "Imagem multiespectral de classe métrica para distinguir blooms e detritos com precisão.",
  },
  {
    icon: Repeat,
    title: "Alta Frequência de Revisita",
    text: "Revisita frequente das mesmas zonas costeiras para acompanhar a evolução em tempo quase real.",
  },
  {
    icon: BrainCircuit,
    title: "Modelos Preditivos",
    text: "Dados prontos a integrar em modelos preditivos para antecipar a propagação e o risco.",
  },
]

export function Solution() {
  return (
    <section
      id="solucao"
      className="scroll-mt-16 border-y border-border bg-secondary/20 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-4">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            A Solução
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Dados costeiros como serviço
          </h2>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            O OceanEye entrega uma abordagem{" "}
            <span className="text-foreground">Data-as-a-Service</span>: imagens
            acionáveis das zonas certas, na altura certa, para quem protege o
            oceano.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={0.1 + i * 0.1}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <div className="inline-flex rounded-xl bg-primary/10 p-3">
                  <p.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-col items-start gap-4 rounded-3xl border border-primary/30 bg-card p-6 border-glow sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <TrendingUp className="h-8 w-8 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="text-2xl font-semibold tracking-tight">
                  ~1,5 M€{" "}
                  <span className="text-base font-normal text-muted-foreground">
                    custo inicial
                  </span>
                </p>
                <p className="text-sm text-muted-foreground">
                  para proteger ativos avaliados em mais de 100 M€/ano
                </p>
              </div>
            </div>
            <span className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
              ROI &gt; 60×
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
