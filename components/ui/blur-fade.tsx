"use client"

import { motion, useInView } from "motion/react"
import { useRef, type ReactNode } from "react"

interface BlurFadeProps {
  children: ReactNode
  className?: string
  // Preserved for API compatibility with existing call sites. All ignored.
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  offset?: number
  inView?: boolean
  duration?: number
}

export function BlurFade({ children, className }: BlurFadeProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
