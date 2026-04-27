import type { Metadata } from "next"
import { AnimatedLogo } from "@/components/ui/animated-logo"

export const metadata: Metadata = {
  title: "Logo preview | Quoin",
  robots: { index: false, follow: false },
}

export default function LogoPreviewPage() {
  return (
    <main className="min-h-[calc(100vh-72px)] flex flex-col items-center justify-center gap-12 px-6 py-16">
      <p className="text-[11px] tracking-[0.3em] uppercase text-ink-muted">
        Logo animation preview
      </p>

      <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
        <div className="flex flex-col items-center gap-4">
          <AnimatedLogo size={320} />
          <span className="text-[11px] tracking-[0.15em] uppercase text-ink-muted">320 px · float on</span>
        </div>

        <div className="flex flex-col items-center gap-4">
          <AnimatedLogo size={180} float={false} />
          <span className="text-[11px] tracking-[0.15em] uppercase text-ink-muted">180 px · float off</span>
        </div>

        <div className="flex flex-col items-center gap-4">
          <AnimatedLogo size={80} />
          <span className="text-[11px] tracking-[0.15em] uppercase text-ink-muted">80 px · float on</span>
        </div>
      </div>
    </main>
  )
}
