"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "motion/react"
import { cn } from "@/lib/utils"

interface HighlighterProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
}

export function Highlighter({
  children,
  className,
  delay = 0,
  duration = 0.9,
}: HighlighterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })
  const shouldReduceMotion = useReducedMotion()

  return (
    <span ref={ref} className={cn("relative inline-block whitespace-nowrap", className)}>
      <motion.span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-[0.1em] -z-0 h-[0.55em] origin-left rounded-[2px] bg-accent/30"
        initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
        animate={isInView || shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration, ease: [0.22, 1, 0.36, 1], delay }}
      />
      <span className="relative z-10">{children}</span>
    </span>
  )
}
