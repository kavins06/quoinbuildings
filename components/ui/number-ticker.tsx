"use client"

import { useEffect, useRef } from "react"
import { useInView, useMotionValue, useSpring, useReducedMotion } from "motion/react"
import { cn } from "@/lib/utils"

interface NumberTickerProps {
  value: number
  decimalPlaces?: number
  delay?: number
  className?: string
}

export function NumberTicker({
  value,
  decimalPlaces = 0,
  delay = 0,
  className,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { damping: 40, stiffness: 90 })
  const inView = useInView(ref, { once: true, margin: "-40px" })

  useEffect(() => {
    if (!inView) return
    if (shouldReduceMotion) {
      if (ref.current) {
        ref.current.textContent = formatNumber(value, decimalPlaces)
      }
      return
    }
    const id = setTimeout(() => motionValue.set(value), delay * 1000)
    return () => clearTimeout(id)
  }, [inView, value, delay, motionValue, shouldReduceMotion, decimalPlaces])

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = formatNumber(latest, decimalPlaces)
      }
    })
  }, [spring, decimalPlaces])

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {formatNumber(0, decimalPlaces)}
    </span>
  )
}

function formatNumber(n: number, decimalPlaces: number) {
  return Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(Number(n.toFixed(decimalPlaces)))
}
