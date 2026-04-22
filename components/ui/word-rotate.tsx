"use client"

import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface WordRotateProps {
  words: string[]
  duration?: number
  className?: string
}

export function WordRotate({ words, duration = 2000, className }: WordRotateProps) {
  const [index, setIndex] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, duration)
    return () => clearInterval(id)
  }, [words.length, duration])

  return (
    <span className="inline-block overflow-hidden align-top">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: "60%" }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: "-60%" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className={cn("inline-block", className)}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
