import Image from "next/image"
import { Reveal } from "./reveal"

const members = [
  "Francisco Silveira",
  "Carolina Araújo",
  "Duarte Guerreiro",
  "André Rodrigues",
  "Matilde Massa",
  "Joaquim Menezes",
  "João Santos",
  "Tomás Teixeira",
  "Francisco Falcão",
]

export function Team() {
  return (
    <footer
      id="equipa"
      className="scroll-mt-16 bg-grid py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-4 text-center">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Desenvolvido pelo Grupo 10
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Projeto Integrador de Curso, Engenharia Aeroespacial — Instituto
            Superior Técnico
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3">
            {members.map((m) => (
              <li
                key={m}
                className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium"
              >
                {m}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-center gap-3 border-t border-border pt-8">
            <Image
              src="/oceaneye-logo.png"
              alt="OceanEye"
              width={841}
              height={165}
              className="h-8 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              Missão CubeSat para uma observação da Terra sustentável · Junho de
              2026
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
