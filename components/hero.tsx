"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { BlurFade } from "@/components/ui/blur-fade"

const HERO_VIDEO_PLAYBACK_RATE = 1.5

const proofRows = [
  {
    label: "01",
    value: "Map the workflow",
    detail: "Systems, roles, exceptions, approvals, source trust, and value.",
  },
  {
    label: "02",
    value: "Build the intelligence layer",
    detail: "Workflow objects, source inventory, decision rights, governance, readiness, and evidence.",
  },
  {
    label: "03",
    value: "Build the agent",
    detail: "Agents, automations, connectors, review queues, evals, audit trails, and interfaces.",
  },
  {
    label: "04",
    value: "Deploy with controls",
    detail: "Permitted actions, prohibited actions, human review, access boundaries, escalation, and logging.",
  },
  {
    label: "05",
    value: "Manage continuously",
    detail: "Quality, drift, overrides, incidents, adoption, access reviews, workflow changes, and expansion.",
  },
]

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.playbackRate = HERO_VIDEO_PLAYBACK_RATE
    const handleLoadedData = () => {
      video.playbackRate = HERO_VIDEO_PLAYBACK_RATE
    }
    video.addEventListener("loadeddata", handleLoadedData)
    return () => video.removeEventListener("loadeddata", handleLoadedData)
  }, [])

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[92dvh] flex-col overflow-hidden bg-surface-base pt-[calc(45px+1.75rem)] pb-24 md:pt-[calc(54px+2.75rem)] md:pb-16 lg:pt-[calc(54px+4rem)] lg:pb-16"
    >
      <video
        ref={videoRef}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        src="/hero-bg.webm"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      <div className="container-shell relative z-10 flex flex-1 flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch flex-1">
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex flex-1 flex-col justify-center">
              <BlurFade inView delay={0.05} direction="up">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white mb-4">
                  Organizational intelligence and governed AI agents
                </p>
              </BlurFade>

              <BlurFade inView delay={0.1} direction="up">
                <h1
                  id="hero-heading"
                  className="font-serif text-balance text-white font-normal leading-[1.02] tracking-normal text-[clamp(1.8rem,4vw,3.5rem)]"
                >
                  The AI operating partner for vertically integrated real
                  estate companies.
                </h1>
              </BlurFade>

              <BlurFade inView delay={0.2} direction="up">
                <p className="mt-6 measure text-white text-[16px] leading-[1.55] sm:hidden">
                  Quoin maps how your company actually works, builds the
                  intelligence layer required for safe AI, then builds,
                  deploys, governs, and manages agents inside your operating
                  workflows.
                </p>
                <p className="mt-8 hidden measure text-white text-[16px] leading-[1.55] sm:block md:text-[18px]">
                  Quoin maps how your company actually works, builds the
                  intelligence layer required for safe AI, then builds,
                  deploys, governs, and manages agents inside your operating
                  workflows.
                </p>
              </BlurFade>

              <BlurFade inView delay={0.3} direction="up">
                <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
                  <Link
                    href="/contact"
                    className="cta-primary text-[15px] font-medium tracking-[0.01em] inline-flex items-center gap-2 self-start !text-white !border-b-white hover:!text-white/80 hover:!border-b-white/80"
                  >
                    <span>Discuss AI operating value</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                  <Link
                    href="/method"
                    className="cta-secondary text-[15px] font-medium tracking-[0.01em] inline-flex items-center gap-2 self-start !text-white !border-b-white hover:!text-white/80 hover:!border-b-white/80"
                  >
                    <span>See the method</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </BlurFade>
            </div>
          </div>

          <aside
            aria-label="Proof summary"
            className="hidden lg:block lg:col-span-5 lg:pt-1"
          >
            <BlurFade inView delay={0.35} direction="up">
              <div className="relative overflow-hidden border border-strong bg-black/30 min-h-[430px]">
                <div className="relative z-10 flex min-h-[430px] flex-col justify-start p-5 md:p-6">
                  <p className="mb-5 max-w-[26ch] font-serif text-[24px] leading-[1.13] tracking-normal text-white md:text-[29px]">
                    Map. Build. Deploy. Manage. Built for firms where ownership
                    and operations share the same P&amp;L.
                  </p>
                  <div className="border-y border-white/25 bg-black/25">
                    {proofRows.map((row) => (
                      <div
                        key={row.label}
                        className="grid grid-cols-[2.25rem_1fr] gap-4 border-b border-white/20 px-3 py-2.5 last:border-b-0"
                      >
                        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/60">
                          {row.label}
                        </p>
                        <div>
                          <p className="font-sans text-[16px] font-medium leading-[1.2] text-white">
                            {row.value}
                          </p>
                          <p className="mt-1 text-[12px] leading-[1.35] text-white/75">
                            {row.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </BlurFade>
          </aside>
        </div>
      </div>
    </section>
  )
}
