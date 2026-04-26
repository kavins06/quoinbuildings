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
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:bottom-6 md:max-w-md z-[60]"
        >
          <div className="bg-foreground text-background border border-background/10 shadow-2xl p-5 md:p-6 rounded-sm">
            <p className="text-[11px] tracking-[0.25em] uppercase text-background/50 mb-3">
              Cookies
            </p>
            <p className="text-[13px] leading-[1.7] text-background/80 mb-5">
              We use a small number of cookies to keep the site secure, remember
              your preferences, and understand which pages are useful. See our{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-2 hover:text-background"
              >
                Privacy Policy
              </Link>{" "}
              for details.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => decide("accepted")}
                className="text-[11px] tracking-[0.2em] uppercase px-5 py-2.5 bg-accent text-background hover:bg-accent/90 transition-colors duration-200 rounded-sm"
              >
                Accept all
              </button>
              <button
                onClick={() => decide("rejected")}
                className="text-[11px] tracking-[0.2em] uppercase px-5 py-2.5 border border-background/20 text-background/80 hover:border-background/50 hover:text-background transition-colors duration-200 rounded-sm"
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
