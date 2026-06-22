"use client"

import { motion } from "motion/react"
import { ArrowDown, Globe2 } from "lucide-react"
import { Model3D } from "./model-3d"

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-grid pb-16 pt-24 sm:pt-28"
    >
      {/* glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
      />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
        >
          <Globe2 className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          CubeSat 16U · Observação da Terra
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 text-balance text-5xl font-semibold tracking-tight text-glow sm:text-7xl"
        >
          OceanEye
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-4 text-balance text-lg font-medium text-foreground sm:text-2xl"
        >
          Monitorização Cirúrgica de Alta Frequência das Zonas Costeiras
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground"
        >
          Um satélite dedicado à deteção de blooms de algas nocivas e poluição
          por plásticos, ao serviço da proteção dos ecossistemas marinhos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-8"
        >
          <a
            href="#desafio"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Explorar a Missão
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative mt-10 w-full max-w-4xl"
        >
          {/* radial glow behind the floating CAD model */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-8 top-1/2 -z-10 h-48 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl"
          />
          <Model3D
            src="/oceaneye.glb"
            alt="Modelo 3D interativo do satélite OceanEye com painéis solares desdobrados"
            fallbackSrc="/oceaneye-cad.png"
            fallbackAlt="Modelo CAD do satélite OceanEye com painéis solares desdobrados"
            className="drop-shadow-[0_24px_48px_rgba(0,0,0,0.55)]"
          />
        </motion.div>
      </div>
    </section>
  )
}
