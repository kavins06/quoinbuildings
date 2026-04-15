"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import { TextAnimate } from "@/components/ui/text-animate"

const entries = [
  {
    date: "Founder & CEO",
    title: "Kavin Sakthivel",
    tag: "Georgetown \u00B7 Real Estate & Competitive Intelligence",
  },
  {
    date: "Senior Advisor",
    title: "Jonathan Morris",
    tag: "$4.7B CRE Transactions \u00B7 Fmr. Dir. Acquisitions, Boston Properties",
  },
  {
    date: "Senior Advisor",
    title: "Dr. Cynthia Mendoza",
    tag: "Former Deputy CIO, US Department of Defense",
  },
  {
    date: "Consultant",
    title: "Ricky Fauntleroy",
    tag: "Manager IT Consulting Delivery, CGI Federal",
  },
]

function JournalEntry({ entry, index }: { entry: typeof entries[0]; index: number }) {
  return (
    <BlurFade inView delay={index * 0.1} direction="up">
      <a
        href="/leadership"
        className="group flex items-start md:items-center justify-between py-7 md:py-8 gap-6"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-10 flex-1">
          <span className="text-[11px] tracking-[0.15em] text-muted-foreground/50 shrink-0 w-24 tabular-nums">
            {entry.date}
          </span>
          <h3 className="text-base md:text-lg font-light tracking-tight text-foreground group-hover:text-muted-foreground transition-colors duration-300">
            {entry.title}
          </h3>
        </div>
        <div className="flex items-center gap-5 shrink-0">
          <span className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground/40 hidden md:block">
            {entry.tag}
          </span>
          <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/30 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
        </div>
      </a>
    </BlurFade>
  )
}

export function JournalSection() {
  return (
    <section id="leadership" className="px-6 py-28 md:px-12 lg:px-20 md:py-36">
      <BlurFade inView direction="up">
        <div className="mb-20 pb-6 border-b border-border">
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
            The Team
          </p>
          <TextAnimate
            as="h2"
            animation="blurIn"
            by="word"
            once
            startOnView
            className="text-3xl md:text-[2.75rem] font-extralight tracking-tight text-foreground"
          >
            Leadership
          </TextAnimate>
        </div>
      </BlurFade>

      <div className="divide-y divide-border">
        {entries.map((entry, index) => (
          <JournalEntry key={entry.title} entry={entry} index={index} />
        ))}
      </div>

      <BlurFade inView delay={0.4} direction="up">
        <div className="mt-12">
          <Link
            href="/leadership"
            className="inline-flex items-center gap-3 text-sm tracking-[0.05em] text-muted-foreground hover:text-foreground transition-colors duration-300 group"
          >
            <span className="border-b border-accent/30 pb-0.5 group-hover:border-accent transition-colors duration-300">
              Meet the Full Team
            </span>
            <span className="text-accent group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
          </Link>
        </div>
      </BlurFade>
    </section>
  )
}
