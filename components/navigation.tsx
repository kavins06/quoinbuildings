"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Who We Help", href: "/who-we-help" },
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/approach" },
  { label: "Team", href: "/team" },
  { label: "Perspectives", href: "/perspectives" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()
  const isHome = pathname === "/"

  // Always use dark text on white background
  const useLightText = false

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 60)
      setHidden(currentY > lastScrollY && currentY > 400)
      setLastScrollY(currentY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        hidden && !isOpen ? "-translate-y-full" : "translate-y-0"
      } bg-background/95 backdrop-blur-md border-b border-border`}
    >
      <nav className="flex items-center justify-between px-4 py-2 md:px-12 md:py-3 lg:px-20">
        <Link
          href="/"
          className={`flex items-center gap-2 text-lg md:text-xl font-medium tracking-[0.3em] uppercase transition-colors duration-500 ${
            useLightText ? "text-white" : "text-foreground"
          }`}
        >
          <span className="relative h-[34px] w-[34px] md:h-[50px] md:w-[50px] shrink-0">
            <img src="/quoin-logo-dark.svg" alt="" className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${useLightText ? "opacity-100" : "opacity-0"}`} />
            <img src="/quoin-logo-lite.svg" alt="" className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${useLightText ? "opacity-0" : "opacity-100"}`} />
          </span>
          <span className="font-[family-name:'Times_New_Roman',_Times,_serif]">QUOIN</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-[11px] tracking-[0.15em] uppercase transition-colors duration-500 hover:opacity-100 ${
                useLightText
                  ? "text-white/60 hover:text-white"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/contact"
            className={`text-[11px] tracking-[0.15em] uppercase px-5 py-2.5 border transition-all duration-500 ${
              useLightText
                ? "border-white/20 text-white hover:bg-white hover:text-black"
                : "border-foreground/20 text-foreground hover:bg-foreground hover:text-background"
            }`}
          >
            Explore Partnership
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden transition-colors duration-500 ${
            !useLightText || isOpen ? "text-foreground" : "text-white"
          }`}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        } bg-background`}
      >
        <div className="flex flex-col px-6 py-10 gap-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-light tracking-tight text-foreground hover:text-muted-foreground transition-colors duration-300"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="text-sm tracking-[0.15em] uppercase text-foreground border border-foreground/20 px-6 py-3 mt-4 text-center hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Explore Partnership
          </a>
        </div>
      </div>
    </header>
  )
}
