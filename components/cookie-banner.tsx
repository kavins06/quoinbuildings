"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"

const STORAGE_KEY = "quoin-cookie-consent"

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

  const acknowledge = () => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ choice: "accepted", ts: Date.now() }),
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
            duration: 0.32,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed inset-x-0 bottom-3 z-[60] flex justify-center px-4 md:bottom-8"
        >
          <div className="flex w-full max-w-[528px] items-start gap-4 border border-black/10 bg-white/95 px-4 py-3 text-ink-primary md:items-center md:gap-8 md:px-6 md:py-5">
            <p className="flex-1 text-[13px] font-medium leading-[1.35] text-ink-secondary md:text-[18px] md:leading-[1.25]">
              We use cookies to keep the site secure, remember preferences, and
              analyze traffic.
            </p>
            <button
              type="button"
              onClick={acknowledge}
              className="shrink-0 bg-[#ecebe8] px-3 py-2 text-[13px] font-medium leading-none text-ink-primary transition-colors duration-200 hover:bg-[#deddd9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:px-4 md:py-3 md:text-[15px]"
            >
              Okay
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
