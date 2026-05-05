import { NextResponse } from "next/server"

export const runtime = "nodejs"

type ContactPayload = {
  firstName?: string
  lastName?: string
  company?: string
  email?: string
  role?: string
  propertyType?: string
  currentAiActivity?: string
  portfolioUnits?: string
  portfolioSqFt?: string
  message?: string
  _hp?: string
}

const REQUIRED_FIELDS: Array<keyof ContactPayload> = [
  "firstName",
  "lastName",
  "company",
  "email",
  "message",
]

export async function POST(request: Request) {
  let body: ContactPayload
  try {
    body = (await request.json()) as ContactPayload
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 },
    )
  }

  if (body._hp && body._hp.trim().length > 0) {
    return NextResponse.json({ ok: true })
  }

  for (const field of REQUIRED_FIELDS) {
    const value = body[field]
    if (typeof value !== "string" || value.trim().length === 0) {
      return NextResponse.json(
        { ok: false, error: `Missing required field: ${field}` },
        { status: 400 },
      )
    }
  }

  const url = process.env.APPS_SCRIPT_CONTACT_URL
  if (!url) {
    return NextResponse.json(
      { ok: false, error: "Server not configured." },
      { status: 500 },
    )
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 10_000)

  try {
    const upstream = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: body.firstName,
        lastName: body.lastName,
        company: body.company,
        email: body.email,
        role: body.role ?? "",
        propertyType: body.propertyType ?? "",
        currentAiActivity: body.currentAiActivity ?? "",
        portfolioUnits: body.portfolioUnits ?? "",
        portfolioSqFt: body.portfolioSqFt ?? "",
        message: body.message,
      }),
      signal: controller.signal,
      redirect: "follow",
    })

    if (!upstream.ok) {
      return NextResponse.json(
        { ok: false, error: "Submission failed. Please email kavins@quoinbuildings.com." },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { ok: false, error: "Submission failed. Please email kavins@quoinbuildings.com." },
      { status: 502 },
    )
  } finally {
    clearTimeout(timeout)
  }
}

export function GET() {
  return NextResponse.json({ ok: false, error: "Method not allowed" }, { status: 405 })
}
