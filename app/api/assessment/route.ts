import { NextResponse } from "next/server"
import { createHash, randomUUID } from "node:crypto"
import { renderToBuffer } from "@react-pdf/renderer"
import { AssessmentPdfDocument } from "@/components/assessment/pdf-document"
import {
  scoreAssessment,
  scoreInterpretation,
  type AssessmentAnswers,
  type ScoringResult,
} from "@/lib/assessment-scoring"
import { getResendClient } from "@/lib/resend"

export const runtime = "nodejs"

interface AssessmentSubmitBody {
  answers?: AssessmentAnswers
  leadData?: {
    name?: string
    email?: string
    firm?: string
    role?: string
  }
  /** Honeypot. If filled, silently accept and discard. */
  _hp?: string
}

interface CacheEntry {
  assessmentId: string
  expiresAt: number
}

const IDEMPOTENCY_TTL_MS = 5 * 60 * 1000
// Module-level idempotency cache. Lives for the lifetime of the serverless
// instance, adequate for V1 (single instance per request usually).
const idempotencyCache = new Map<string, CacheEntry>()

function cleanupCache(now: number) {
  for (const [key, value] of idempotencyCache) {
    if (value.expiresAt <= now) idempotencyCache.delete(key)
  }
}

function buildIdempotencyKey(email: string, answers: AssessmentAnswers): string {
  const sortedKeys = Object.keys(answers).sort()
  const canonical = sortedKeys.map((k) => `${k}=${answers[k]}`).join("|")
  return createHash("sha256").update(`${email.toLowerCase()}::${canonical}`).digest("hex")
}

function dateStamp(date = new Date()): string {
  const yyyy = date.getFullYear()
  const mm = String(date.getMonth() + 1).padStart(2, "0")
  const dd = String(date.getDate()).padStart(2, "0")
  return `${yyyy}-${mm}-${dd}`
}

function safePdfFilename(firm: string): string {
  const slug = firm
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40) || "your-firm"
  return `quoin-ai-readiness-${slug}-${dateStamp()}.pdf`
}

function isValidEmail(email: string): boolean {
  // Pragmatic email check; not RFC 5322 perfect but rejects the obvious junk.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function describeAnswers(answers: AssessmentAnswers): string {
  return Object.entries(answers)
    .map(([qId, optId]) => `  - ${qId}: ${optId}`)
    .join("\n")
}

function buildInternalNotificationBody(args: {
  scoring: ScoringResult
  leadName: string
  leadEmail: string
  firm: string
  role: string
  answers: AssessmentAnswers
  reason: string
  assessmentId: string
}): string {
  const { scoring, leadName, leadEmail, firm, role, answers, reason, assessmentId } = args
  return [
    `Assessment submission · ${assessmentId}`,
    `Reason: ${reason}`,
    "",
    `Name:  ${leadName}`,
    `Email: ${leadEmail}`,
    `Firm:  ${firm}`,
    `Role:  ${role || "(not provided)"}`,
    "",
    `Score: ${scoring.score.toFixed(1)} / 5.0`,
    `Benchmark: ahead of ${scoring.benchmarkPercentile}% of owner/operator firms`,
    "",
    "Answers:",
    describeAnswers(answers),
    "",
    "Recommendations:",
    ...scoring.recommendations.map((r) => `  - [${r.effortLabel}] ${r.title}`),
  ].join("\n")
}

async function postToAppsScript(payload: Record<string, unknown>): Promise<{ ok: boolean; error?: unknown }> {
  const url = process.env.APPS_SCRIPT_CONTACT_URL
  if (!url) return { ok: false, error: "APPS_SCRIPT_CONTACT_URL not configured" }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 10_000)
  try {
    const upstream = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
      redirect: "follow",
    })
    if (!upstream.ok) {
      return { ok: false, error: `apps_script_status_${upstream.status}` }
    }
    return { ok: true }
  } catch (err) {
    return { ok: false, error: err }
  } finally {
    clearTimeout(timeout)
  }
}

export async function POST(request: Request) {
  const now = Date.now()
  cleanupCache(now)

  let body: AssessmentSubmitBody
  try {
    body = (await request.json()) as AssessmentSubmitBody
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 })
  }

  // Honeypot: silently 200 on bot traffic.
  if (body._hp && body._hp.trim().length > 0) {
    return NextResponse.json({ ok: true, assessmentId: randomUUID(), suppressed: true })
  }

  const lead = body.leadData ?? {}
  const name = (lead.name ?? "").trim()
  const email = (lead.email ?? "").trim()
  const firm = (lead.firm ?? "").trim()
  const role = (lead.role ?? "").trim()

  if (!name) {
    return NextResponse.json({ ok: false, error: "Missing required field: name" }, { status: 400 })
  }
  if (!email) {
    return NextResponse.json({ ok: false, error: "Missing required field: email" }, { status: 400 })
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email address." }, { status: 400 })
  }
  if (!firm) {
    return NextResponse.json({ ok: false, error: "Missing required field: firm" }, { status: 400 })
  }
  if (!body.answers || typeof body.answers !== "object" || Object.keys(body.answers).length === 0) {
    return NextResponse.json({ ok: false, error: "Missing assessment answers." }, { status: 400 })
  }

  // Idempotency: hash(email + answers) within a 5-minute window.
  const idempotencyKey = buildIdempotencyKey(email, body.answers)
  const cached = idempotencyCache.get(idempotencyKey)
  if (cached && cached.expiresAt > now) {
    return NextResponse.json({ ok: true, assessmentId: cached.assessmentId, duplicate: true })
  }

  let scoring: ScoringResult
  try {
    scoring = scoreAssessment(body.answers)
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Couldn't score answers.", detail: String((err as Error).message) },
      { status: 400 },
    )
  }

  const assessmentId = randomUUID()
  idempotencyCache.set(idempotencyKey, { assessmentId, expiresAt: now + IDEMPOTENCY_TTL_MS })

  // Always-show-score: backend errors must NEVER block the user. The score is
  // already on screen; this route is best-effort delivery.
  let pdfBuffer: Buffer | null = null
  try {
    pdfBuffer = await renderToBuffer(
      AssessmentPdfDocument({
        scoring,
        firmName: firm,
        recipientName: name,
        interpretation: scoreInterpretation(scoring.score),
      }),
    )
  } catch (err) {
    console.error("[/api/assessment] PDF render failed", err)
  }

  const pdfFilename = safePdfFilename(firm)

  // Email user (Resend).
  let resendError: unknown = null
  try {
    if (pdfBuffer) {
      const client = getResendClient()
      await client.sendAssessmentEmail({
        to: email,
        firmName: firm,
        recipientName: name,
        scoreLabel: `Your AI Readiness score: ${scoring.score.toFixed(1)} / 5.0`,
        pdfBuffer,
        pdfFilename,
      })
    } else {
      // PDF didn't generate; record this so we can still send a notification.
      resendError = "skipped: no pdf"
    }
  } catch (err) {
    resendError = err
    console.error("[/api/assessment] Resend send failed", err)
  }

  // CRM sync via Apps Script.
  const appsScriptResult = await postToAppsScript({
    source: "assessment",
    assessmentId,
    name,
    email,
    firm,
    role,
    score: scoring.score,
    scoreLabel: `${scoring.score.toFixed(1)} / 5.0`,
    benchmarkPercentile: scoring.benchmarkPercentile,
    scoringVersion: scoring.scoringVersion,
    recommendations: scoring.recommendations,
    answers: body.answers,
  })

  if (!appsScriptResult.ok) {
    console.error("[/api/assessment] Apps Script post failed", appsScriptResult.error)
    // Backup notification email so the team still hears about the lead.
    const backupTo = process.env.ASSESSMENT_NOTIFICATION_EMAIL
    if (backupTo) {
      try {
        await getResendClient().sendInternalNotification({
          to: backupTo,
          subject: `[Quoin Assessment] Apps Script down - ${firm} (${scoring.score.toFixed(1)}/5)`,
          body: buildInternalNotificationBody({
            scoring,
            leadName: name,
            leadEmail: email,
            firm,
            role,
            answers: body.answers,
            reason: "Apps Script CRM POST failed; this email is the backup record.",
            assessmentId,
          }),
          pdfBuffer: pdfBuffer ?? undefined,
          pdfFilename: pdfBuffer ? pdfFilename : undefined,
        })
      } catch (err) {
        console.error("[/api/assessment] Backup notification failed", err)
        // If both Resend and Apps Script are down, return a user-facing 500.
        if (resendError) {
          return NextResponse.json(
            {
              ok: false,
              error: "Couldn't save right now. Email us at hi@quoinbuildings.com.",
              assessmentId,
            },
            { status: 500 },
          )
        }
      }
    }
  }

  // If Resend failed but Apps Script succeeded, soft-success with a note.
  // The user already saw their score; UI will show appropriate copy.
  return NextResponse.json({
    ok: true,
    assessmentId,
    score: scoring.score,
    benchmarkPercentile: scoring.benchmarkPercentile,
    pdfDelivered: pdfBuffer !== null && resendError === null,
    crmSynced: appsScriptResult.ok,
  })
}

export function GET() {
  return NextResponse.json({ ok: false, error: "Method not allowed" }, { status: 405 })
}

/** Test-only helpers, not exported in production. */
export const __testInternals = {
  buildIdempotencyKey,
  resetIdempotencyCache: () => idempotencyCache.clear(),
  isValidEmail,
}
