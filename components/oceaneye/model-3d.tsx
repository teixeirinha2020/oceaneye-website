"use client"

import Script from "next/script"
import Image from "next/image"
import { useState, useEffect, createElement } from "react"
import { RotateCw } from "lucide-react"

export type Hotspot = {
  /** Nome do node/slot no glTF, ex: "hotspot-isim90" */
  slot: string
  /** Posição "x y z" no espaço do modelo (ver instruções de anotação) */
  position: string
  /** Direção normal opcional "x y z" */
  normal?: string
  label: string
}

type Model3DProps = {
  /** Caminho para o .glb em /public, ex: "/oceaneye.glb" */
  src: string
  alt: string
  /** Imagem de fallback enquanto o .glb não existe ou falha a carregar */
  fallbackSrc: string
  fallbackAlt?: string
  /** largura/altura da imagem de fallback, para manter o aspect ratio */
  fallbackWidth?: number
  fallbackHeight?: number
  /** ex: "1016/694" — usado em ecrãs sm: e acima */
  aspectRatio?: string
  /** aspect ratio usado abaixo do breakpoint sm:, por defeito mais alto/quadrado para o modelo ocupar mais espaço em mobile */
  aspectRatioMobile?: string
  hotspots?: Hotspot[]
  /** ângulo + distância inicial da câmara em ecrãs sm: e acima, ex: "10deg 75deg 105%" */
  cameraOrbit?: string
  /** ângulo + distância inicial da câmara em mobile; um radius (3º valor) menor aproxima a câmara e faz o modelo parecer maior, ex: "10deg 75deg 70%" */
  cameraOrbitMobile?: string
  autoRotate?: boolean
  className?: string
  hint?: string
}

export function Model3D({
  src,
  alt,
  fallbackSrc,
  fallbackAlt,
  fallbackWidth = 1016,
  fallbackHeight = 694,
  aspectRatio = "1016/694",
  aspectRatioMobile = "1/1",
  hotspots = [],
  cameraOrbit,
  cameraOrbitMobile,
  autoRotate = true,
  className = "",
  hint = "Arrasta para rodar",
}: Model3DProps) {
  const [modelMissing, setModelMissing] = useState(false)
  const [isMobile, setIsMobile] = useState<boolean | null>(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  if (modelMissing) {
    return (
      <Image
        src={fallbackSrc}
        alt={fallbackAlt ?? alt}
        width={fallbackWidth}
        height={fallbackHeight}
        className={`h-auto w-full ${className}`}
      />
    )
  }

  const effectiveCameraOrbit =
    isMobile && cameraOrbitMobile ? cameraOrbitMobile : cameraOrbit

  return (
    <>
      <Script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"
        strategy="afterInteractive"
      />
      <style>{`
        .model-3d-frame { aspect-ratio: ${aspectRatioMobile}; }
        @media (min-width: 640px) {
          .model-3d-frame { aspect-ratio: ${aspectRatio}; }
        }
      `}</style>
      <div className={`model-3d-frame relative w-full ${className}`}>
        {isMobile !== null &&
          createElement(
            "model-viewer",
            {
              key: effectiveCameraOrbit,
              src,
              alt,
              "camera-controls": true,
              "auto-rotate": autoRotate || undefined,
              "auto-rotate-delay": "300",
              "rotation-per-second": "18deg",
              "interaction-prompt": "none",
              "shadow-intensity": "0.8",
              exposure: "1.1",
              "environment-image": "neutral",
              "camera-orbit": effectiveCameraOrbit,
              style: { width: "100%", height: "100%", backgroundColor: "transparent" },
              onError: () => setModelMissing(true),
            },
            hotspots.map((h) =>
              createElement(
                "button",
                {
                  key: h.slot,
                  slot: h.slot,
                  "data-position": h.position,
                  "data-normal": h.normal,
                  className: "hotspot",
                  type: "button",
                },
                createElement("span", { className: "hotspot-dot" }),
                createElement("span", { className: "hotspot-label" }, h.label)
              )
            )
          )}
        <div className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-secondary/70 px-2.5 py-1 text-[11px] text-muted-foreground backdrop-blur">
          <RotateCw className="h-3 w-3" aria-hidden="true" />
          {hint}
        </div>
      </div>
    </>
  )
}
