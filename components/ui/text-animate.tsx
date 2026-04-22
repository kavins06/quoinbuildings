"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "motion/react"
import { cn } from "@/lib/utils"

interface TextAnimateProps {
  children: string
  delay?: number
  className?: string
}

export function TextAnimate({ children, delay = 0, className }: TextAnimateProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return (
      <p ref={ref} className={className}>
        {children}
      </p>
    )
  }

  const words = children.split(" ")

  return (
    <p ref={ref} className={cn(className)} aria-label={children}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} aria-hidden="true">
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 8, filter: "blur(10px)" }}
            animate={
              isInView
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : { opacity: 0, y: 8, filter: "blur(10px)" }
            }
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: delay + i * 0.05,
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  )
}
