"use client"

import { COOKIE_CONSENT_OPEN_EVENT } from "@/lib/cookie-consent"

export function CookiePreferencesLink() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(COOKIE_CONSENT_OPEN_EVENT))}
      className="text-sm text-ink-secondary hover:text-ink-primary transition-colors duration-150 text-left"
    >
      Cookie Preferences
    </button>
  )
}
