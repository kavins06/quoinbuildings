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
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed bottom-0 inset-x-0 z-[60]"
        >
          <div className="bg-background/95 backdrop-blur-md text-foreground border-t border-border shadow-[0_-12px_40px_-20px_rgba(0,0,0,0.18)]">
            <div className="container-shell py-5 md:py-6 flex flex-col md:flex-row md:items-center gap-5 md:gap-10">
              <div className="flex-1 min-w-0">
                <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground/60 mb-2">
                  Cookies
                </p>
                <p className="text-[13px] leading-[1.6] text-foreground/80 max-w-3xl">
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
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  onClick={() => decide("rejected")}
                  className="text-[11px] tracking-[0.2em] uppercase px-5 py-2.5 border border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground transition-colors duration-200 rounded-sm"
                >
                  Reject non-essential
                </button>
                <button
                  onClick={() => decide("accepted")}
                  className="text-[11px] tracking-[0.2em] uppercase px-5 py-2.5 bg-foreground text-background hover:bg-foreground/90 transition-colors duration-200 rounded-sm"
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
