import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import type { ResendClient } from "@/lib/resend"
import { __setResendClientForTests } from "@/lib/resend"
import { QUESTIONS } from "@/lib/assessment-questions"

// Mock the PDF renderer so we don't actually rasterize a PDF in CI / Node:
// it requires fonts on the network and is slow. We just need the route to
// "succeed" at producing a buffer.
vi.mock("@react-pdf/renderer", () => ({
  renderToBuffer: vi.fn(async () => Buffer.from("FAKE-PDF-CONTENT")),
  Document: ({ children }: { children: unknown }) => children,
  Page: ({ children }: { children: unknown }) => children,
  Text: ({ children }: { children: unknown }) => children,
  View: ({ children }: { children: unknown }) => children,
  StyleSheet: { create: (s: unknown) => s },
  Font: { register: () => undefined },
}))

vi.mock("@/components/assessment/pdf-document", () => ({
  AssessmentPdfDocument: () => null,
  default: () => null,
}))

import { POST, __testInternals } from "@/app/api/assessment/route"

function answersAllWeight(weight: 1 | 2 | 3 | 4) {
  const answers: Record<string, string> = {}
  for (const q of QUESTIONS) {
    const opt = q.options.find((o) => o.weight === weight)!
    answers[q.id] = opt.id
  }
  return answers
}

function buildRequest(body: unknown): Request {
  return new Request("http://localhost/api/assessment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
}

interface MockResendClient {
  sendAssessmentEmail: ReturnType<typeof vi.fn>
  sendInternalNotification: ReturnType<typeof vi.fn>
}

function makeResendMock(opts?: { failAssessment?: boolean; failInternal?: boolean }): MockResendClient {
  const sendAssessmentEmail = vi.fn(async () => {
    if (opts?.failAssessment) throw new Error("resend down")
  })
  const sendInternalNotification = vi.fn(async () => {
    if (opts?.failInternal) throw new Error("resend internal down")
  })
  return { sendAssessmentEmail, sendInternalNotification }
}

function asResendClient(mock: MockResendClient): ResendClient {
  return mock as unknown as ResendClient
}

const ORIGINAL_FETCH = global.fetch
const ORIGINAL_ENV = { ...process.env }

beforeEach(() => {
  __testInternals.resetIdempotencyCache()
  process.env.APPS_SCRIPT_CONTACT_URL = "https://example.test/apps-script"
  process.env.ASSESSMENT_NOTIFICATION_EMAIL = "ops@quoinbuildings.test"
  process.env.RESEND_FROM_EMAIL = "noreply@quoinbuildings.test"
  process.env.RESEND_API_KEY = "test_key"
})

afterEach(() => {
  __setResendClientForTests(null)
  global.fetch = ORIGINAL_FETCH
  process.env = { ...ORIGINAL_ENV }
  vi.restoreAllMocks()
})

describe("POST /api/assessment", () => {
  it("returns 200 with assessmentId for a valid payload", async () => {
    const resend = makeResendMock()
    __setResendClientForTests(asResendClient(resend))
    global.fetch = vi.fn(async () => new Response("ok", { status: 200 })) as typeof fetch

    const res = await POST(
      buildRequest({
        answers: answersAllWeight(3),
        leadData: { name: "Jane Owner", email: "jane@example.com", firm: "Acme REIT", role: "COO" },
      }),
    )
    expect(res.status).toBe(200)
    const json = await res.json()
    expect(json.ok).toBe(true)
    expect(typeof json.assessmentId).toBe("string")
    expect(resend.sendAssessmentEmail).toHaveBeenCalledTimes(1)
    expect(global.fetch).toHaveBeenCalledTimes(1)
  })

  it("returns 400 when email is missing", async () => {
    __setResendClientForTests(asResendClient(makeResendMock()))
    global.fetch = vi.fn(async () => new Response("ok", { status: 200 })) as typeof fetch
    const res = await POST(
      buildRequest({
        answers: answersAllWeight(3),
        leadData: { name: "Jane", email: "", firm: "Acme" },
      }),
    )
    expect(res.status).toBe(400)
    const json = await res.json()
    expect(json.ok).toBe(false)
    expect(json.error).toMatch(/email/i)
  })

  it("returns 400 when answers object is empty", async () => {
    __setResendClientForTests(asResendClient(makeResendMock()))
    global.fetch = vi.fn(async () => new Response("ok", { status: 200 })) as typeof fetch
    const res = await POST(
      buildRequest({
        answers: {},
        leadData: { name: "Jane", email: "jane@example.com", firm: "Acme" },
      }),
    )
    expect(res.status).toBe(400)
  })

  it("honeypot returns 200 silently and does not call Resend or Apps Script", async () => {
    const resend = makeResendMock()
    __setResendClientForTests(asResendClient(resend))
    const fetchSpy = vi.fn(async () => new Response("ok", { status: 200 }))
    global.fetch = fetchSpy as typeof fetch
    const res = await POST(
      buildRequest({
        answers: answersAllWeight(3),
        leadData: { name: "Jane", email: "jane@example.com", firm: "Acme" },
        _hp: "i am a bot",
      }),
    )
    expect(res.status).toBe(200)
    const json = await res.json()
    expect(json.ok).toBe(true)
    expect(json.suppressed).toBe(true)
    expect(resend.sendAssessmentEmail).not.toHaveBeenCalled()
    expect(fetchSpy).not.toHaveBeenCalled()
  })

  it("Resend down -> still 200, Apps Script saved (graceful degrade)", async () => {
    const resend = makeResendMock({ failAssessment: true })
    __setResendClientForTests(asResendClient(resend))
    const fetchSpy = vi.fn(async () => new Response("ok", { status: 200 }))
    global.fetch = fetchSpy as typeof fetch
    const res = await POST(
      buildRequest({
        answers: answersAllWeight(3),
        leadData: { name: "Jane", email: "jane@example.com", firm: "Acme" },
      }),
    )
    expect(res.status).toBe(200)
    const json = await res.json()
    expect(json.ok).toBe(true)
    expect(json.pdfDelivered).toBe(false)
    expect(json.crmSynced).toBe(true)
    expect(fetchSpy).toHaveBeenCalledTimes(1)
  })

  it("Apps Script down -> still 200, backup notification sent via Resend", async () => {
    const resend = makeResendMock()
    __setResendClientForTests(asResendClient(resend))
    global.fetch = vi.fn(async () => new Response("oops", { status: 502 })) as typeof fetch
    const res = await POST(
      buildRequest({
        answers: answersAllWeight(3),
        leadData: { name: "Jane", email: "jane@example.com", firm: "Acme" },
      }),
    )
    expect(res.status).toBe(200)
    const json = await res.json()
    expect(json.ok).toBe(true)
    expect(json.crmSynced).toBe(false)
    expect(resend.sendAssessmentEmail).toHaveBeenCalledTimes(1)
    expect(resend.sendInternalNotification).toHaveBeenCalledTimes(1)
  })

  it("Apps Script and Resend internal both fail (after Resend user email also fails) -> 500 user-facing", async () => {
    const resend = makeResendMock({ failAssessment: true, failInternal: true })
    __setResendClientForTests(asResendClient(resend))
    global.fetch = vi.fn(async () => new Response("oops", { status: 502 })) as typeof fetch
    const res = await POST(
      buildRequest({
        answers: answersAllWeight(3),
        leadData: { name: "Jane", email: "jane@example.com", firm: "Acme" },
      }),
    )
    expect(res.status).toBe(500)
    const json = await res.json()
    expect(json.ok).toBe(false)
    expect(json.error).toMatch(/email us/i)
  })

  it("duplicate within 5 minutes returns the existing assessmentId", async () => {
    const resend = makeResendMock()
    __setResendClientForTests(asResendClient(resend))
    global.fetch = vi.fn(async () => new Response("ok", { status: 200 })) as typeof fetch

    const payload = {
      answers: answersAllWeight(3),
      leadData: { name: "Jane", email: "jane@example.com", firm: "Acme" },
    }
    const res1 = await POST(buildRequest(payload))
    const json1 = await res1.json()
    const res2 = await POST(buildRequest(payload))
    const json2 = await res2.json()

    expect(res2.status).toBe(200)
    expect(json2.duplicate).toBe(true)
    expect(json2.assessmentId).toBe(json1.assessmentId)
    // Resend / Apps Script only fired once.
    expect(resend.sendAssessmentEmail).toHaveBeenCalledTimes(1)
    expect((global.fetch as ReturnType<typeof vi.fn>).mock.calls.length).toBe(1)
  })

  it("rejects bad email format with 400", async () => {
    __setResendClientForTests(asResendClient(makeResendMock()))
    global.fetch = vi.fn(async () => new Response("ok", { status: 200 })) as typeof fetch
    const res = await POST(
      buildRequest({
        answers: answersAllWeight(3),
        leadData: { name: "Jane", email: "notanemail", firm: "Acme" },
      }),
    )
    expect(res.status).toBe(400)
  })
})
