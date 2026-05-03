/**
 * Quoin AI Readiness Assessment: PDF artifact.
 *
 * Designed as a paper artifact, not a screen.
 * - US Letter (8.5x11), 0.75" margins
 * - Paper background #F8F4ED, ink #1A1A1A
 * - Instrument Serif (registered from Google Fonts) for headlines
 * - DM Sans for body
 * - Page footer: page number + "QUOIN BUILDINGS, LLC" caption
 */

import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer"
import type { ScoringResult } from "@/lib/assessment-scoring"

let fontsRegistered = false

function registerFontsOnce() {
  if (fontsRegistered) return
  fontsRegistered = true

  // Instrument Serif (display), Google Fonts CDN
  Font.register({
    family: "Instrument Serif",
    fonts: [
      {
        src: "https://fonts.gstatic.com/s/instrumentserif/v5/jizBRFtNs2ka5fXjeivQ4LroWlx-2zI.ttf",
        fontWeight: 400,
        fontStyle: "normal",
      },
      {
        src: "https://fonts.gstatic.com/s/instrumentserif/v5/jizHRFtNs2ka5fXjeivQ4LroWlx-6zATiw.ttf",
        fontWeight: 400,
        fontStyle: "italic",
      },
    ],
  })

  // DM Sans (body), Google Fonts CDN
  Font.register({
    family: "DM Sans",
    fonts: [
      {
        src: "https://fonts.gstatic.com/s/dmsans/v17/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhTg.ttf",
        fontWeight: 400,
      },
      {
        src: "https://fonts.gstatic.com/s/dmsans/v17/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAkJxhTg.ttf",
        fontWeight: 500,
      },
    ],
  })
}

const PAPER = "#F8F4ED"
const INK_PRIMARY = "#1A1A1A"
const INK_SECONDARY = "#4A4A4A"
const INK_MUTED = "#7A7A7A"
const ACCENT = "#C8323C"
const HAIRLINE = "rgba(26,26,26,0.15)"

const styles = StyleSheet.create({
  page: {
    backgroundColor: PAPER,
    color: INK_PRIMARY,
    paddingTop: 54,
    paddingBottom: 54,
    paddingHorizontal: 54,
    fontFamily: "DM Sans",
    fontSize: 10,
  },
  masthead: {
    fontFamily: "DM Sans",
    fontSize: 10,
    letterSpacing: 2.5,
    textTransform: "uppercase",
    color: INK_PRIMARY,
  },
  mastheadDivider: {
    borderBottomWidth: 0.5,
    borderBottomColor: INK_PRIMARY,
    marginTop: 6,
    marginBottom: 28,
  },
  eyebrow: {
    fontFamily: "DM Sans",
    fontSize: 9,
    fontWeight: 500,
    color: ACCENT,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 12,
  },
  eyebrowMuted: {
    fontFamily: "DM Sans",
    fontSize: 9,
    fontWeight: 500,
    color: INK_MUTED,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 8,
  },
  h1: {
    fontFamily: "Instrument Serif",
    fontSize: 36,
    lineHeight: 1.1,
    marginBottom: 16,
  },
  h2: {
    fontFamily: "Instrument Serif",
    fontSize: 24,
    lineHeight: 1.15,
    marginBottom: 10,
  },
  h3: {
    fontFamily: "Instrument Serif",
    fontSize: 16,
    lineHeight: 1.2,
    marginBottom: 6,
  },
  body: {
    fontFamily: "DM Sans",
    fontSize: 10.5,
    lineHeight: 1.6,
    color: INK_SECONDARY,
    marginBottom: 10,
  },
  bodyPrimary: {
    fontFamily: "DM Sans",
    fontSize: 10.5,
    lineHeight: 1.6,
    color: INK_PRIMARY,
    marginBottom: 10,
  },
  scoreNumeral: {
    fontFamily: "Instrument Serif",
    fontSize: 110,
    lineHeight: 1,
    marginBottom: 8,
  },
  scoreFooter: {
    fontFamily: "DM Sans",
    fontSize: 11,
    color: INK_SECONDARY,
    marginTop: 4,
  },
  hairline: {
    borderBottomWidth: 0.5,
    borderBottomColor: HAIRLINE,
    marginVertical: 18,
  },
  hairlineStrong: {
    borderBottomWidth: 0.5,
    borderBottomColor: INK_PRIMARY,
    marginVertical: 18,
  },
  recommendation: {
    paddingVertical: 14,
    borderTopWidth: 0.5,
    borderTopColor: HAIRLINE,
  },
  effortLabel: {
    fontFamily: "DM Sans",
    fontSize: 8,
    fontWeight: 500,
    color: INK_MUTED,
    letterSpacing: 1.6,
    textTransform: "uppercase",
    marginBottom: 6,
  },
  pageFooter: {
    position: "absolute",
    bottom: 30,
    left: 54,
    right: 54,
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: "DM Sans",
    fontSize: 8,
    letterSpacing: 1.6,
    textTransform: "uppercase",
    color: INK_MUTED,
  },
  ctaBlock: {
    marginTop: 24,
    paddingVertical: 18,
    borderTopWidth: 0.5,
    borderTopColor: INK_PRIMARY,
    borderBottomWidth: 0.5,
    borderBottomColor: INK_PRIMARY,
  },
})

export interface PdfDocumentProps {
  scoring: ScoringResult
  firmName?: string
  recipientName?: string
  generatedAt?: Date
  interpretation?: string
}

function PageFooter({ pageNumber, total }: { pageNumber: number; total: number }) {
  return (
    <View style={styles.pageFooter} fixed>
      <Text>QUOIN BUILDINGS, LLC</Text>
      <Text>
        {pageNumber} / {total}
      </Text>
    </View>
  )
}

export function AssessmentPdfDocument(props: PdfDocumentProps) {
  registerFontsOnce()
  const {
    scoring,
    firmName = "Your Firm",
    recipientName,
    generatedAt = new Date(),
    interpretation,
  } = props

  const dateLabel = generatedAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <Document title={`Quoin AI Readiness Assessment - ${firmName}`}>
      {/* Cover */}
      <Page size="LETTER" style={styles.page}>
        <Text style={styles.masthead}>Quoin · AI Readiness Assessment</Text>
        <View style={styles.mastheadDivider} />

        <Text style={styles.eyebrowMuted}>Prepared for</Text>
        <Text style={styles.h2}>{firmName}</Text>
        {recipientName ? (
          <Text style={[styles.body, { marginBottom: 0 }]}>{recipientName}</Text>
        ) : null}
        <Text style={[styles.body, { color: INK_MUTED, marginTop: 4 }]}>{dateLabel}</Text>

        <View style={styles.hairlineStrong} />

        <Text style={styles.eyebrow}>Your readiness score</Text>
        <Text style={styles.scoreNumeral}>{scoring.score.toFixed(1)}</Text>
        <Text style={styles.scoreFooter}>out of 5.0</Text>
        <Text style={[styles.body, { marginTop: 12 }]}>
          You're ahead of {scoring.benchmarkPercentile}% of owner/operator firms we've benchmarked.
        </Text>

        {interpretation ? (
          <Text style={[styles.bodyPrimary, { fontSize: 12, lineHeight: 1.55, marginTop: 16, fontStyle: "italic", fontFamily: "Instrument Serif" }]}>
            {interpretation}
          </Text>
        ) : null}

        <PageFooter pageNumber={1} total={3} />
      </Page>

      {/* Methodology */}
      <Page size="LETTER" style={styles.page}>
        <Text style={styles.masthead}>Quoin · AI Readiness Assessment</Text>
        <View style={styles.mastheadDivider} />

        <Text style={styles.eyebrow}>How this score is calculated</Text>
        <Text style={styles.h2}>Methodology</Text>

        <Text style={styles.body}>
          The AI Readiness Assessment scores firms across the dimensions that matter for owner/operators:
          the state of your AI initiative, the maturity of your data foundation, your internal AI capacity,
          how clearly use cases are tied to IRR, board and LP signal, where you want operating leverage,
          and how aware you are of peer deployments.
        </Text>

        <Text style={styles.body}>
          Each answer carries a 1-4 weight. Scores are a linear mapping of your average weight to a 1.0-5.0
          scale, rounded to one decimal. Benchmarking compares your score to the cohort of vertically-integrated
          REITs and large private owner/operators we track.
        </Text>

        <View style={styles.hairline} />

        <Text style={styles.eyebrowMuted}>What we look for</Text>
        <Text style={styles.body}>
          The highest-leverage move depends on which dimensions are weakest. A firm with a sharp roadmap
          but no data foundation should not deploy AI yet. It should fix the foundation. A firm with
          strong data and no roadmap should not hire engineers. It should rank use cases against IRR.
          The recommendations on the next page reflect that logic, applied to your specific answers.
        </Text>

        <Text style={[styles.body, { color: INK_MUTED, marginTop: 24, fontSize: 9 }]}>
          Scoring version {scoring.scoringVersion}.
        </Text>

        <PageFooter pageNumber={2} total={3} />
      </Page>

      {/* Recommendations + CTA */}
      <Page size="LETTER" style={styles.page}>
        <Text style={styles.masthead}>Quoin · AI Readiness Assessment</Text>
        <View style={styles.mastheadDivider} />

        <Text style={styles.eyebrow}>Recommended next moves</Text>
        <Text style={styles.h1}>Three deployments that fit your firm.</Text>

        <Text style={styles.body}>
          Each recommendation maps to a specific weakness or opportunity in your responses. They are
          ordered by priority. We can run any of these as a focused engagement, or fold them into a
          90-day operating-partner build.
        </Text>

        {scoring.recommendations.map((rec, idx) => (
          <View
            key={rec.id}
            style={[styles.recommendation, idx === scoring.recommendations.length - 1 ? { borderBottomWidth: 0.5, borderBottomColor: HAIRLINE } : {}]}
          >
            <Text style={styles.effortLabel}>{rec.effortLabel}</Text>
            <Text style={styles.h3}>{rec.title}</Text>
            <Text style={[styles.body, { marginBottom: 0 }]}>{rec.rationale}</Text>
          </View>
        ))}

        <View style={styles.ctaBlock}>
          <Text style={styles.eyebrow}>What happens next</Text>
          <Text style={[styles.bodyPrimary, { marginBottom: 6 }]}>
            Book a 30-minute readiness conversation. We'll walk through your score, the three recommendations,
            and what 90 days of work would look like for {firmName}.
          </Text>
          <Text style={[styles.body, { marginBottom: 0 }]}>
            quoinbuildings.com/contact
          </Text>
        </View>

        <PageFooter pageNumber={3} total={3} />
      </Page>
    </Document>
  )
}

export default AssessmentPdfDocument
