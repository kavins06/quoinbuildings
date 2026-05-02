"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"

const STORAGE_KEY = "quoin-cookie-consent"

type Choice = "accepted" | "rejected"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const existing = localStorage.getItem(STORAGE_KEY)
      if (!existing) {
        const t = setTimeout(() => setVisible(true), 600)
        return () => clearTimeout(t)
      }
    } catch {
      setVisible(true)
    }
  }, [])

  // Allow other parts of the site to re-open the banner
  useEffect(() => {
    const open = () => {
      try {
        localStorage.removeItem(STORAGE_KEY)
      } catch {
        // ignore
      }
      setVisible(true)
    }
    window.addEventListener("quoin:open-cookie-banner", open)
    return () => window.removeEventListener("quoin:open-cookie-banner", open)
  }, [])

  const decide = (choice: Choice) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ choice, ts: Date.now() }),
      )
    } catch {
      // ignore
    }
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed z-[60] bottom-4 left-4 right-4 md:bottom-6 md:right-6 md:left-auto md:max-w-[480px]"
        >
          <div className="bg-background/95 backdrop-blur-md text-foreground border border-border rounded-sm shadow-[0_18px_48px_-16px_rgba(0,0,0,0.22)]">
            <div className="p-4 md:p-5 flex flex-col gap-3 md:gap-4">
              <div>
                <p className="hidden md:block text-[11px] tracking-[0.25em] uppercase text-muted-foreground/60 mb-2">
                  Cookies
                </p>
                <p className="text-[12px] md:text-[13px] leading-[1.5] md:leading-[1.6] text-foreground/80">
                  <span className="md:hidden">
                    We use cookies for security, preferences, and analytics.{" "}
                  </span>
                  <span className="hidden md:inline">
                    We use a small number of cookies to keep the site secure, remember
                    your preferences, and understand which pages are useful.{" "}
                  </span>
                  See our{" "}
                  <Link
                    href="/privacy"
                    className="underline underline-offset-2 decoration-accent hover:text-foreground"
                  >
                    Privacy Policy
                  </Link>
                  <span className="hidden md:inline"> for details</span>
                  .
                </p>
              </div>
              <div className="flex items-center gap-2.5 md:gap-3">
                <button
                  onClick={() => decide("rejected")}
                  className="flex-1 md:flex-none inline-flex items-center justify-center text-[11px] tracking-[0.2em] uppercase px-4 md:px-5 py-3 border border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground transition-colors duration-200 rounded-sm min-h-[44px]"
                >
                  <span className="md:hidden">Reject</span>
                  <span className="hidden md:inline">Reject non-essential</span>
                </button>
                <button
                  onClick={() => decide("accepted")}
                  className="flex-1 md:flex-none inline-flex items-center justify-center text-[11px] tracking-[0.2em] uppercase px-4 md:px-5 py-3 bg-foreground text-background hover:bg-foreground/90 transition-colors duration-200 rounded-sm min-h-[44px]"
                >
                  Accept all
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
