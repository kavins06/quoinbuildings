"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { usePathname } from "next/navigation"
import { AnimatedLogo } from "@/components/ui/animated-logo"

const navLinks = [
  { label: "Method", href: "/method" },
  { label: "Platform", href: "/platform" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isLandingPage = pathname === "/"
  const isTransparentLanding = isLandingPage && !scrolled
  const collapseBrand = isLandingPage && scrolled
  const navBackgroundOpacity = isTransparentLanding ? 0 : 0.5

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      style={{ backgroundColor: `hsl(var(--surface-base) / ${navBackgroundOpacity})` }}
      className={`fixed inset-x-0 top-0 z-50 ${
        scrolled
          ? "backdrop-blur-md border-b border-subtle"
          : "border-b border-transparent"
      } transition-[background-color,backdrop-filter,border-color] duration-200`}
    >
      <nav
        aria-label="Primary"
        className="w-full px-6 md:px-12 lg:px-20 flex items-center justify-between h-[45px] md:h-[54px]"
      >
        <Link
          href="/"
          aria-label="Quoin home"
          className={[
            "flex w-[6rem] items-center justify-center font-serif text-lg md:w-[6.5rem] md:text-xl transition-colors duration-200",
            isTransparentLanding ? "text-white" : "text-ink-primary",
          ].join(" ")}
        >
          <span
            aria-hidden="true"
            className={[
              "overflow-hidden whitespace-nowrap transition-[width,margin,opacity] duration-200 ease-out",
              collapseBrand
                ? "mr-0 w-0 opacity-0"
                : "mr-1.5 w-[3.35rem] opacity-100 md:w-[3.75rem]",
            ].join(" ")}
          >
            QUOIN
          </span>
          <AnimatedLogo
            alt=""
            size={32}
            float={false}
            priority
            className={[
              "shrink-0 transition-[filter] duration-200",
              isTransparentLanding ? "brightness-0 invert" : "",
            ].join(" ")}
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={[
                "text-[14px] hover:underline underline-offset-[6px] decoration-accent decoration-1 transition-colors duration-150",
                isTransparentLanding
                  ? "text-white hover:text-white/80"
                  : "text-ink-secondary hover:text-ink-primary",
              ].join(" ")}
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
          className={[
            "md:hidden transition-colors duration-200",
            isTransparentLanding ? "text-white" : "text-ink-primary",
          ].join(" ")}
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
