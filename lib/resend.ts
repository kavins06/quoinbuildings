/**
 * Thin wrapper around the Resend SDK so route handlers don't talk to Resend
 * directly. Centralizes config (from-address, error handling) and makes the
 * client easy to mock in unit tests.
 */
import { Resend } from "resend"

export interface AssessmentEmailInput {
  to: string
  firmName: string
  recipientName: string
  scoreLabel: string
  pdfBuffer: Buffer
  pdfFilename: string
}

export interface InternalNotificationInput {
  to: string
  subject: string
  body: string
  pdfBuffer?: Buffer
  pdfFilename?: string
}

export interface ResendClient {
  sendAssessmentEmail: (input: AssessmentEmailInput) => Promise<void>
  sendInternalNotification: (input: InternalNotificationInput) => Promise<void>
}

let cachedClient: ResendClient | null = null

function buildAssessmentBody(input: AssessmentEmailInput): { html: string; text: string } {
  const { recipientName, firmName, scoreLabel } = input
  const greetingName = recipientName?.trim().length ? recipientName : "there"

  const text = [
    `Hi ${greetingName},`,
    "",
    `Your AI Readiness Assessment for ${firmName} is attached as a PDF.`,
    "",
    `Headline: ${scoreLabel}`,
    "",
    "It includes the score, three deployment recommendations specific to your answers, and what 90 days of work would look like.",
    "",
    "If you'd like to talk through any of it, reply to this email or book a time at https://quoinbuildings.com/contact.",
    "",
    "Quoin",
    "QUOIN BUILDINGS, LLC",
  ].join("\n")

  const html = `
<!DOCTYPE html>
<html>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#1A1A1A;background:#F8F4ED;padding:32px;">
  <p>Hi ${greetingName},</p>
  <p>Your AI Readiness Assessment for <strong>${firmName}</strong> is attached as a PDF.</p>
  <p style="margin:24px 0;padding:16px 0;border-top:1px solid rgba(26,26,26,0.15);border-bottom:1px solid rgba(26,26,26,0.15);">
    <strong>${scoreLabel}</strong>
  </p>
  <p>It includes the score, three deployment recommendations specific to your answers, and what 90 days of work would look like.</p>
  <p>If you'd like to talk through any of it, reply to this email or <a href="https://quoinbuildings.com/contact" style="color:#C8323C;">book a time</a>.</p>
  <p>Quoin<br/><span style="font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:#7A7A7A;">QUOIN BUILDINGS, LLC</span></p>
</body>
</html>`.trim()

  return { html, text }
}

function buildResendClient(): ResendClient {
  const apiKey = process.env.RESEND_API_KEY
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "noreply@quoinbuildings.com"

  if (!apiKey) {
    return {
      async sendAssessmentEmail() {
        throw new Error("RESEND_API_KEY not configured")
      },
      async sendInternalNotification() {
        throw new Error("RESEND_API_KEY not configured")
      },
    }
  }

  const resend = new Resend(apiKey)

  return {
    async sendAssessmentEmail(input: AssessmentEmailInput) {
      const { to, pdfBuffer, pdfFilename } = input
      const body = buildAssessmentBody(input)
      const result = await resend.emails.send({
        from: fromEmail,
        to,
        subject: "Your Quoin AI Readiness Assessment",
        html: body.html,
        text: body.text,
        attachments: [
          {
            filename: pdfFilename,
            content: pdfBuffer,
          },
        ],
      })
      if ("error" in result && result.error) {
        throw new Error(`Resend send failed: ${result.error.message ?? "unknown"}`)
      }
    },
    async sendInternalNotification(input: InternalNotificationInput) {
      const attachments = input.pdfBuffer && input.pdfFilename
        ? [{ filename: input.pdfFilename, content: input.pdfBuffer }]
        : undefined
      const result = await resend.emails.send({
        from: fromEmail,
        to: input.to,
        subject: input.subject,
        text: input.body,
        attachments,
      })
      if ("error" in result && result.error) {
        throw new Error(`Resend internal send failed: ${result.error.message ?? "unknown"}`)
      }
    },
  }
}

/**
 * Get a singleton Resend client. Lazily constructed so unit tests can mock
 * out env vars without import-time side effects.
 */
export function getResendClient(): ResendClient {
  if (!cachedClient) {
    cachedClient = buildResendClient()
  }
  return cachedClient
}

/** Test-only override. */
export function __setResendClientForTests(client: ResendClient | null): void {
  cachedClient = client
}
