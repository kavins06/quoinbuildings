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
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          transition={{
            duration: 0.32,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed inset-x-0 bottom-4 z-[60] flex justify-center px-4 sm:inset-x-auto sm:left-6 sm:justify-start sm:px-0 md:bottom-6"
        >
          <div className="flex w-full max-w-[526px] items-center gap-4 rounded-[20px] border border-black/10 bg-white/95 px-5 py-4 text-ink-primary shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-sm sm:w-[min(526px,calc(100vw-3rem))] sm:gap-6 sm:px-6 sm:py-5">
            <p className="flex-1 text-[15px] font-medium leading-[1.35] text-ink-secondary sm:text-[18px] sm:leading-[1.25]">
              We use cookies to keep the site secure, remember preferences, and
              analyze traffic.
            </p>
            <button
              type="button"
              onClick={acknowledge}
              className="shrink-0 rounded-[10px] bg-[#ecebe8] px-4 py-3 text-[14px] font-semibold leading-none text-ink-primary transition-colors duration-200 hover:bg-[#deddd9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-[15px]"
            >
              Okay
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
