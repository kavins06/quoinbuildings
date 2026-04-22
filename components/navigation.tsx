"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { AnimatedLogo } from "@/components/ui/animated-logo"

const navLinks = [
  { label: "Who We Help", href: "/who-we-help" },
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/approach" },
  { label: "Team", href: "/team" },
  { label: "Perspectives", href: "/perspectives" },
  { label: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-surface-base ${
        scrolled ? "border-b border-subtle" : "border-b border-transparent"
      } transition-colors duration-150`}
    >
      <nav
        aria-label="Primary"
        className="w-full px-6 md:px-12 lg:px-20 flex items-center justify-between h-[45px] md:h-[54px]"
      >
        <Link
          href="/"
          className="flex items-center gap-1.5 font-serif text-lg md:text-xl text-ink-primary"
        >
          <AnimatedLogo size={32} float={false} className="shrink-0" />
          QUOIN
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[14px] text-ink-secondary hover:text-ink-primary hover:underline underline-offset-[6px] decoration-accent decoration-1 transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden text-ink-primary"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        id="mobile-nav"
        hidden={!isOpen}
        className="md:hidden bg-surface-base border-t border-subtle"
      >
        <div className="w-full px-6 md:px-12 lg:px-20 flex flex-col py-8 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl text-ink-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
