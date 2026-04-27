"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "motion/react"
import { cn } from "@/lib/utils"

const MotionImage = motion.create(Image)

interface AnimatedLogoProps {
  src?: string
  alt?: string
  size?: number
  className?: string
  float?: boolean
}

export function AnimatedLogo({
  src = "/logo.png",
  alt = "Quoin",
  size = 280,
  className,
  float = true,
}: AnimatedLogoProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return (
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className={cn("block select-none", className)}
        draggable={false}
      />
    )
  }

  return (
    <motion.div
      className={cn("relative inline-block select-none", className)}
      style={{ width: size, height: size }}
      initial={{ opacity: 0, scale: 0.88, filter: "blur(14px)", rotate: -4 }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)", rotate: 0 }}
      transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
    >
      <MotionImage
        src={src}
        alt={alt}
        width={size}
        height={size}
        draggable={false}
        className="block w-full h-full object-contain"
        animate={
          float
            ? { y: [0, -6, 0] }
            : undefined
        }
        transition={
          float
            ? {
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                delay: 0.95,
              }
            : undefined
        }
      />
    </motion.div>
  )
}
