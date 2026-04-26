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
          initial={{ opacity: 0, y: 32, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.99 }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
            opacity: { duration: 0.4 },
          }}
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:bottom-6 md:max-w-md z-[60]"
        >
          <div className="bg-background/95 backdrop-blur-md text-foreground border border-border shadow-[0_20px_60px_-20px_rgba(0,0,0,0.18),0_8px_24px_-12px_rgba(0,0,0,0.10)] p-5 md:p-6 rounded-sm">
            <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground/60 mb-3">
              Cookies
            </p>
            <p className="text-[13px] leading-[1.7] text-foreground/80 mb-5">
              We use a small number of cookies to keep the site secure, remember
              your preferences, and understand which pages are useful. See our{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-2 decoration-accent hover:text-foreground"
              >
                Privacy Policy
              </Link>{" "}
              for details.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => decide("accepted")}
                className="text-[11px] tracking-[0.2em] uppercase px-5 py-2.5 bg-foreground text-background hover:bg-foreground/90 transition-colors duration-200 rounded-sm"
              >
                Accept all
              </button>
              <button
                onClick={() => decide("rejected")}
                className="text-[11px] tracking-[0.2em] uppercase px-5 py-2.5 border border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground transition-colors duration-200 rounded-sm"
              >
                Reject non-essential
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
