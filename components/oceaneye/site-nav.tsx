"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const links = [
  { href: "#desafio", label: "Desafio" },
  { href: "#solucao", label: "Solução" },
  { href: "#specs", label: "Specs" },
  { href: "#documentos", label: "Docs" },
  { href: "#sustentabilidade", label: "Eco" },
  { href: "#equipa", label: "Equipa" },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <a href="#top" className="flex items-center" aria-label="OceanEye">
          <Image
            src="/oceaneye-logo.png"
            alt="OceanEye"
            width={841}
            height={165}
            priority
            className="h-6 w-auto"
          />
        </a>
        <ul className="hidden items-center gap-1 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#equipa"
          className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/60 sm:hidden"
        >
          Grupo 10
        </a>
      </nav>
    </header>
  )
}
