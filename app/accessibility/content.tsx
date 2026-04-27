export function AccessibilityContent() {
  return (
    <main>
      <article className="container-shell py-24 lg:py-32">
        <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-accent mb-5">
          Accessibility
        </p>
        <h1 className="text-4xl md:text-5xl text-ink-primary tracking-[-0.01em] leading-[1.1]">
          Accessibility at Quoin
        </h1>
        <p className="text-lg text-ink-secondary leading-relaxed mt-6 measure">
          Our target is WCAG 2.2 AA. Here is the current state, the known gaps, and how to tell us about barriers you encounter.
        </p>

        <section className="mt-16 measure">
          <h2 className="text-2xl text-ink-primary">The standard we target</h2>
          <p className="text-base text-ink-secondary leading-relaxed mt-4">
            We build the Quoin website to conform with Web Content Accessibility Guidelines (WCAG) 2.2 at the AA level, the guidelines published by the W3C for making web content usable by people with visual, auditory, motor, and cognitive disabilities.
          </p>
        </section>

        <section className="mt-12 measure">
          <h2 className="text-2xl text-ink-primary">What is in place today</h2>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-base text-ink-secondary leading-relaxed">
            <li>Semantic HTML with a logical heading order (one H1 per page, nested H2 / H3).</li>
            <li>Real landmarks: <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code>.</li>
            <li>A skip-to-content link, available as the first focusable element on every page.</li>
            <li>Visible focus indicators on every interactive element (2 px accent outline, 2 px offset).</li>
            <li>Color contrast verified at WCAG AA or better for body text and UI.</li>
            <li><code>prefers-reduced-motion</code> is respected. Scroll-entry fade animations are disabled for visitors who request reduced motion.</li>
            <li>Responsive layouts from 320 px through 1440 px; zoom to 200&nbsp;% supported without loss of content.</li>
            <li>Meaningful images have descriptive <code>alt</code> text; decorative images are marked as such.</li>
            <li>Form fields have visible labels (not placeholder-only) and clear validation messages.</li>
            <li>Navigation works end-to-end with a keyboard; no mouse-only interactions.</li>
          </ul>
        </section>

        <section className="mt-12 measure">
          <h2 className="text-2xl text-ink-primary">Known gaps</h2>
          <p className="text-base text-ink-secondary leading-relaxed mt-4">As of April 2026:</p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-base text-ink-secondary leading-relaxed">
            <li>No automated accessibility regression tests in CI yet. We run manual audits with axe DevTools and VoiceOver/NVDA before each deploy.</li>
            <li>Some third-party content (e.g., embedded LinkedIn links) inherits the accessibility posture of the source site, which we do not control.</li>
          </ul>
          <p className="text-base text-ink-secondary leading-relaxed mt-4">
            We update this page when gaps are fixed or new ones are found.
          </p>
        </section>

        <section className="mt-12 measure">
          <h2 className="text-2xl text-ink-primary">If you hit a barrier</h2>
          <p className="text-base text-ink-secondary leading-relaxed mt-4">
            Email <a className="underline decoration-accent underline-offset-4" href="mailto:accessibility@quoinbuildings.com">accessibility@quoinbuildings.com</a>. Tell us what you were trying to do and what went wrong. A page URL and a short description are enough. We will acknowledge within two business days and tell you when we expect to have it fixed.
          </p>
          <p className="text-base text-ink-secondary leading-relaxed mt-4">
            If you need the content of this site in a different format (larger text, plain document, a phone call), ask at the same address.
          </p>
        </section>

        <section className="mt-12 measure">
          <h2 className="text-2xl text-ink-primary">How we review</h2>
          <p className="text-base text-ink-secondary leading-relaxed mt-4">
            We audit the site manually at least once per quarter and whenever we ship a significant change to a shared layout, component, or navigation pattern. Results are not published, but we will share audit findings on request.
          </p>
        </section>
      </article>
    </main>
  )
}
