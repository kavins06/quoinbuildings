"use client"

import { motion, useAnimationControls, useMotionValue } from "motion/react"
import { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface DraggableMarqueeProps {
  children: React.ReactNode
  duration?: number
  reverse?: boolean
  className?: string
}

export function DraggableMarquee({
  children,
  duration = 40,
  reverse = false,
  className,
}: DraggableMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const controls = useAnimationControls()
  const [copyWidth, setCopyWidth] = useState(0)

  // Measure width of one copy (track has two)
  useEffect(() => {
    const measure = () => {
      if (trackRef.current) setCopyWidth(trackRef.current.scrollWidth / 2)
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (trackRef.current) ro.observe(trackRef.current)
    return () => ro.disconnect()
  }, [children])

  const runLoop = useCallback(async () => {
    if (!copyWidth) return
    // Normalize current x into [-copyWidth, 0]
    let current = x.get()
    while (current <= -copyWidth) current += copyWidth
    while (current > 0) current -= copyWidth
    x.set(current)

    const target = reverse ? 0 : -copyWidth
    const distance = Math.abs(current - target)
    const partialDuration = (distance / copyWidth) * duration || duration

    // Animate from current to target, then loop
    await controls.start({
      x: target,
      transition: { duration: partialDuration, ease: "linear" },
    })
    // Jump to opposite edge for seamless loop
    x.set(reverse ? -copyWidth : 0)
    controls.start({
      x: reverse ? 0 : -copyWidth,
      transition: { duration, ease: "linear", repeat: Infinity, repeatType: "loop" },
    })
  }, [copyWidth, controls, duration, reverse, x])

  // Kick off animation when measured / resumed
  useEffect(() => {
    runLoop()
    return () => controls.stop()
  }, [runLoop, controls])

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        ref={trackRef}
        className="flex w-max touch-pan-y"
        style={{ x }}
        animate={controls}
        drag="x"
        dragMomentum={true}
        dragElastic={0.1}
        onDragStart={() => controls.stop()}
        onDragEnd={() => runLoop()}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}
