import Image from "next/image"
import { Box, Orbit, Camera, Radio, Rocket, Zap } from "lucide-react"
import { Reveal } from "./reveal"
import { Model3D } from "./model-3d"

const specs = [
  {
    icon: Box,
    label: "Plataforma",
    value: "16U CubeSat",
    detail: "Estrutura EnduroSat · 15,1 kg",
  },
  {
    icon: Orbit,
    label: "Órbita",
    value: "SSO a 550 km",
    detail: "LTAN 10:30 · 15 órbitas/dia",
  },
  {
    icon: Camera,
    label: "Payload",
    value: "Sensor ótico iSIM-90",
    detail: "Resolução processada 1,65 m · 500 GB",
  },
  {
    icon: Radio,
    label: "Telecom",
    value: "X-Band a 140 Mbps",
    detail: "Ground Station de Svalbard",
  },
  {
    icon: Rocket,
    label: "Lançamento",
    value: "Falcon 9 Rideshare",
    detail: "Integração via Exolaunch",
  },
  {
    icon: Zap,
    label: "Propulsão",
    value: "ThrustMe NPT30-I2",
    detail: "Iodo sólido · 198 m/s Δv",
  },
]

export function Specs() {
  return (
    <section id="specs" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Especificações Técnicas
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Engenharia de missão validada
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {specs.map((s, i) => (
            <Reveal key={s.label} delay={0.05 + i * 0.07}>
              <div className="h-full rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50">
                <div className="flex items-center gap-3">
                  <div className="inline-flex rounded-lg bg-primary/10 p-2.5">
                    <s.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </span>
                </div>
                <p className="mt-4 text-lg font-semibold">{s.value}</p>
                <p className="mt-1 font-mono text-sm text-muted-foreground">
                  {s.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-8 overflow-hidden rounded-3xl">
            <Image
              src="/simulacao-orbita.png"
              alt="Simulação da órbita heliossíncrona do OceanEye com cobertura de Portugal, Chile e ligação à Ground Station de Svalbard"
              width={1920}
              height={949}
              className="h-56 w-full object-cover sm:h-72"
            />
          </div>
        </Reveal>

        {/* Layout estrutural 16U */}
        <Reveal delay={0.25}>
          <div className="mt-16">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Estrutura &amp; Layout
            </p>
            <h3 className="mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              Tudo o que cabe num 16U
            </h3>
            <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              O volume interno do CubeSat é organizado para equilibrar centro
              de massa, encaminhamento de cablagem e acesso térmico. O
              payload ótico ocupa o núcleo central, ladeado pela propulsão e
              pelas rodas de reação; as faces exteriores ficam livres para
              radiadores dedicados. Roda o modelo para explorar cada
              subsistema.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-6 overflow-hidden rounded-3xl bg-card">
            <Model3D
              src="/oceaneye-interior.glb"
              alt="Modelo 3D interativo do layout interno do CubeSat 16U do OceanEye, com payload, propulsão, rodas de reação e bateria coloridos por subsistema"
              fallbackSrc="/structure-layout.png"
              fallbackAlt="Layout interno do CubeSat 16U do OceanEye e configuração externa desdobrada com painéis solares"
              fallbackWidth={1456}
              fallbackHeight={1075}
              aspectRatio="1456/1075"
              aspectRatioMobile="1/1.1"
              cameraOrbit="25deg 75deg 105%"
              hint="Arrasta para explorar o interior"
            />
          </div>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 px-1 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: "#DA0302" }} /> Payload / Sensor
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: "#0702FB" }} /> Rodas de Reação
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: "#F97E08" }} /> Propulsão
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: "#B13AA6" }} /> Bateria
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: "#F8EF08" }} /> OBC
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: "#773A00" }} /> TT&amp;C
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: "#7B1DBF" }} /> Comunicações
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: "#099059" }} /> Magnetorquers
            </span>
          </div>
        </Reveal>

        {/* Arquitetura de comunicações */}
        <Reveal delay={0.25}>
          <div className="mt-16">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Arquitetura de Comunicações
            </p>
            <h3 className="mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              Dois caminhos, duas frequências
            </h3>
            <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              O comando e telemetria (TT&amp;C) viajam em S-Band através do
              transceiver ligado ao OBC, enquanto o payload iSIM-90 despeja
              as imagens captadas diretamente para o transmissor X-Band via
              Spacewire — um caminho de dados dedicado e de alto débito que
              não passa pelo barramento principal do satélite.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-6 overflow-hidden rounded-3xl bg-card">
            <Image
              src="/comms-architecture.png"
              alt="Diagrama da arquitetura de comunicações do OceanEye: ligações S-Band para TT&C e X-Band para downlink de dados do payload"
              width={800}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        {/* Arquitetura elétrica completa */}
        <Reveal delay={0.25}>
          <div className="mt-16">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Arquitetura Elétrica
            </p>
            <h3 className="mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              Da luz solar ao bit transmitido
            </h3>
            <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              O EPS GomSpace P60 distribui quatro níveis de tensão (28,8 V,
              12 V, 5 V e 3,3 V) a partir dos painéis solares e da bateria
              BPX de 100 Wh, alimentando em paralelo a propulsão, o ADCS, as
              comunicações e o payload. O OBC centraliza o controlo através
              de barramentos CAN, I2C e Spacewire dedicados.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-6 overflow-hidden rounded-3xl bg-card">
            <Image
              src="/electrical-architecture.png"
              alt="Diagrama completo da arquitetura elétrica do OceanEye, incluindo EPS, distribuição de potência, ADCS, propulsão e comunicações"
              width={1115}
              height={747}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        {/* Validação estrutural FEM */}
        <Reveal delay={0.25}>
          <div className="mt-16">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Validação Estrutural
            </p>
            <h3 className="mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              A estrutura aguenta o lançamento?
            </h3>
            <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              Para confirmar que a estrutura sobrevive às cargas estáticas de
              lançamento, simulámos por elementos finitos a resposta do
              chassis 16U a uma carga estática no eixo X. As tensões de von
              Mises mantêm-se bem abaixo do limite de cedência do alumínio,
              concentrando-se nas ligações entre painéis e nervuras.
            </p>
          </div>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Reveal delay={0.3}>
            <div className="overflow-hidden rounded-3xl bg-card">
              <Image
                src="/fem-stress.png"
                alt="Contour plot de tensões de von Mises na estrutura do OceanEye sob carga estática no eixo X"
                width={1896}
                height={1246}
                className="aspect-[4/3] w-full object-cover"
              />
              <p className="px-5 py-3 text-center text-xs font-mono text-muted-foreground">
                Tensão de von Mises · máx. 101,7 MPa
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="overflow-hidden rounded-3xl bg-card">
              <Image
                src="/fem-displacement.png"
                alt="Contour plot de deslocamento na estrutura do OceanEye sob carga estática no eixo X"
                width={1856}
                height={1235}
                className="aspect-[4/3] w-full object-cover"
              />
              <p className="px-5 py-3 text-center text-xs font-mono text-muted-foreground">
                Deslocamento máx. · 1,28 mm
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
