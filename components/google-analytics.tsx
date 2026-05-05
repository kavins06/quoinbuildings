"use client"

import { useEffect, useState } from "react"
import Script from "next/script"
import {
  COOKIE_CONSENT_ACCEPTED_EVENT,
  COOKIE_CONSENT_STORAGE_KEY,
} from "@/lib/cookie-consent"

function hasAnalyticsConsent() {
  try {
    const existing = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY)

    if (!existing) {
      return false
    }

    try {
      const parsed = JSON.parse(existing) as { choice?: string }
      return parsed.choice === "accepted"
    } catch {
      return true
    }
  } catch {
    return false
  }
}

export function GoogleAnalytics({
  measurementId,
}: {
  measurementId?: string
}) {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (!measurementId) {
      return
    }

    setEnabled(hasAnalyticsConsent())

    const enableAnalytics = () => setEnabled(true)
    window.addEventListener(COOKIE_CONSENT_ACCEPTED_EVENT, enableAnalytics)

    return () => {
      window.removeEventListener(COOKIE_CONSENT_ACCEPTED_EVENT, enableAnalytics)
    }
  }, [measurementId])

  if (!measurementId || !enabled) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`}
        strategy="afterInteractive"
      />
      <Script id="quoin-ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${JSON.stringify(measurementId)});
        `}
      </Script>
    </>
  )
}
