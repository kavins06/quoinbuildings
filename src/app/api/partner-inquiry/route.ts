import { NextResponse } from "next/server";

import { createClient } from "@supabase/supabase-js";

type PartnerInquiryPayload = {
  name?: string;
  organization?: string;
  email?: string;
  role?: string;
  units?: string;
  ai_maturity?: string;
  why?: string;
};

const tableName = process.env.SUPABASE_PARTNER_INQUIRIES_TABLE ?? "partner_inquiries";

function getEnv(name: "SUPABASE_URL" | "SUPABASE_PUBLISHABLE_KEY") {
  const value = process.env[name];

  if (!value) {
    throw new Error(`${name} is not configured.`);
  }

  return value;
}

function normalize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as PartnerInquiryPayload;

    const name = normalize(body.name);
    const organization = normalize(body.organization);
    const email = normalize(body.email);
    const role = normalize(body.role);
    const units = normalize(body.units);
    const ai_maturity = normalize(body.ai_maturity);
    const why = normalize(body.why);

    if (!name || !organization || !email || !role || !units || !ai_maturity || !why) {
      return NextResponse.json(
        { error: "Please complete all form fields." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const supabase = createClient(
      getEnv("SUPABASE_URL"),
      getEnv("SUPABASE_PUBLISHABLE_KEY"),
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      },
    );
    const record = {
      name,
      organization,
      email,
      role,
      units,
      ai_maturity,
      why,
    };
    const { error } = await supabase.from(tableName).insert(record as never);

    if (error) {
      console.error("Supabase insert failed", error);

      return NextResponse.json(
        { error: "Unable to save your inquiry right now." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Partner inquiry submission failed", error);

    return NextResponse.json(
      {
        error:
          "Submission is not configured yet. Add the Supabase environment variables.",
      },
      { status: 500 },
    );
  }
}
