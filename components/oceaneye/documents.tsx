import { FileText, Presentation, ArrowUpRight } from "lucide-react"
import { Reveal } from "./reveal"

const docs = [
  {
    icon: FileText,
    label: "Relatório Técnico",
    title: "Mid-Term Report · Grupo 10",
    description:
      "117 páginas com a derivação completa da missão: requisitos, trade-offs de arquitetura, seleção de subsistemas, orçamento de potência e propelente, e validação estrutural, térmica e orbital.",
    href: "/oceaneye-relatorio.pdf",
    cta: "Abrir PDF",
    external: false,
  },
  {
    icon: Presentation,
    label: "Apresentação",
    title: "Apresentação da Missão OceanEye",
    description:
      "Resumo visual da missão: o problema, a arquitetura proposta e os principais resultados de validação, em formato de apresentação.",
    href: "https://canva.link/pic-oceaneye",
    cta: "Ver Apresentação",
    external: true,
  },
]

export function Documents() {
  return (
    <section id="documentos" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Documentação
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            O trabalho completo, sem filtros
          </h2>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Tudo o que está resumido nesta página tem origem no relatório
            técnico do projeto e na apresentação da missão. Consulta os
            documentos originais para o detalhe completo.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {docs.map((d, i) => (
            <Reveal key={d.label} delay={0.1 + i * 0.1}>
              <a
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <div className="flex items-start justify-between">
                  <div className="inline-flex rounded-lg bg-primary/10 p-2.5">
                    <d.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                </div>
                <span className="mt-5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {d.label}
                </span>
                <p className="mt-1 text-lg font-semibold">{d.title}</p>
                <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {d.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  {d.cta}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
