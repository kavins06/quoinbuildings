"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { AnimatedLogo } from "@/components/ui/animated-logo"

const navLinks = [
  { label: "Who We Help", href: "/who-we-help" },
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/approach" },
  { label: "Governance", href: "/governance" },
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
      className={`sticky top-0 z-50 ${
        scrolled
          ? "bg-surface-base/70 backdrop-blur-md border-b border-subtle"
          : "bg-surface-base border-b border-transparent"
      } transition-[background-color,backdrop-filter,border-color] duration-200`}
    >
      <nav
        aria-label="Primary"
        className="w-full px-6 md:px-12 lg:px-20 flex items-center justify-between h-[45px] md:h-[54px]"
      >
        <Link
          href="/"
          className="flex items-center gap-1.5 font-serif text-lg md:text-xl text-ink-primary"
        >
          QUOIN
          <AnimatedLogo size={32} float={false} className="shrink-0" />
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden absolute top-full inset-x-0 bg-surface-base/85 backdrop-blur-md border-t border-subtle shadow-lg overflow-hidden"
          >
            <motion.div
              className="w-full px-6 flex flex-col py-8 gap-6"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
                closed: { transition: { staggerChildren: 0.02, staggerDirection: -1 } },
              }}
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.label}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: -6 },
                  }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl text-ink-primary"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
