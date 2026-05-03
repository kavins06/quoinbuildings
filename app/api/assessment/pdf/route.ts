import { NextResponse } from "next/server"
import { renderToBuffer } from "@react-pdf/renderer"
import { AssessmentPdfDocument } from "@/components/assessment/pdf-document"
import { scoreAssessment, scoreInterpretation, type AssessmentAnswers } from "@/lib/assessment-scoring"

export const runtime = "nodejs"

interface PdfRequestBody {
  answers?: AssessmentAnswers
  leadData?: {
    name?: string
    firm?: string
  }
}

function dateStamp(date = new Date()): string {
  const yyyy = date.getFullYear()
  const mm = String(date.getMonth() + 1).padStart(2, "0")
  const dd = String(date.getDate()).padStart(2, "0")
  return `${yyyy}-${mm}-${dd}`
}

function safeFilename(firm: string | undefined): string {
  const slug = (firm ?? "your-firm")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40) || "your-firm"
  return `quoin-ai-readiness-${slug}-${dateStamp()}.pdf`
}

export async function POST(request: Request) {
  let body: PdfRequestBody
  try {
    body = (await request.json()) as PdfRequestBody
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 })
  }

  if (!body.answers || typeof body.answers !== "object" || Object.keys(body.answers).length === 0) {
    return NextResponse.json({ ok: false, error: "Missing answers." }, { status: 400 })
  }

  let scoring: ReturnType<typeof scoreAssessment>
  try {
    scoring = scoreAssessment(body.answers)
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Couldn't score answers.", detail: String((err as Error).message) },
      { status: 400 },
    )
  }

  const firm = body.leadData?.firm?.trim() || "Your Firm"
  const recipientName = body.leadData?.name?.trim()

  let pdfBuffer: Buffer
  try {
    pdfBuffer = await renderToBuffer(
      AssessmentPdfDocument({
        scoring,
        firmName: firm,
        recipientName,
        interpretation: scoreInterpretation(scoring.score),
      }),
    )
  } catch (err) {
    console.error("PDF render failed", err)
    return NextResponse.json(
      { ok: false, error: "Couldn't generate the PDF." },
      { status: 500 },
    )
  }

  const filename = safeFilename(firm)
  return new NextResponse(new Uint8Array(pdfBuffer), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "private, no-store",
    },
  })
}

export function GET() {
  return NextResponse.json({ ok: false, error: "Method not allowed" }, { status: 405 })
}
