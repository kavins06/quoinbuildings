import './style.css'

document.querySelector('#app').innerHTML = `
<div class="page-shell">
  <header class="site-header">
    <p class="brand">Quoin Buildings</p>
    <a class="header-link" href="https://vite.dev/" target="_blank" rel="noreferrer">Vite Docs</a>
  </header>

  <main class="hero-grid">
    <section class="hero-copy">
      <p class="eyebrow">Website starter</p>
      <h1>Build your next site from a folder that is already ready to ship.</h1>
      <p class="lede">
        This project uses Vite with plain HTML, CSS, and JavaScript so you can move fast
        without framework overhead.
      </p>

      <div class="hero-actions">
        <a class="button button-primary" href="https://developer.mozilla.org/en-US/docs/Learn_web_development" target="_blank" rel="noreferrer">
          Learn Web Basics
        </a>
        <a class="button button-secondary" href="https://vite.dev/guide/" target="_blank" rel="noreferrer">
          Explore the Build Setup
        </a>
      </div>

      <ul class="feature-list" aria-label="Starter features">
        <li>Instant reload while you work</li>
        <li>Production build with <code>npm run build</code></li>
        <li>Simple structure for quick edits</li>
      </ul>
    </section>

    <aside class="workspace-card" aria-label="Project structure">
      <p class="panel-label">Start here</p>
      <div class="file-row">
        <span>index.html</span>
        <span>Document shell</span>
      </div>
      <div class="file-row">
        <span>src/main.js</span>
        <span>Page content</span>
      </div>
      <div class="file-row">
        <span>src/style.css</span>
        <span>Visual design</span>
      </div>
      <div class="terminal-callout">
        <span class="terminal-label">Run locally</span>
        <code>npm run dev</code>
      </div>
    </aside>
  </main>

  <section class="info-grid">
    <article class="info-card">
      <p class="panel-label">Workflow</p>
      <h2>Edit, save, refresh.</h2>
      <p>
        Vite watches your files automatically, so the browser updates as you build.
      </p>
    </article>

    <article class="info-card">
      <p class="panel-label">Launch</p>
      <h2>Ready for production output.</h2>
      <p>
        When you are ready to deploy, run <code>npm run build</code> to generate the site in
        <code>dist/</code>.
      </p>
    </article>

    <article class="info-card">
      <p class="panel-label">Next step</p>
      <h2>Replace this starter with your real content.</h2>
      <p>
        Update the text, add images, and shape the layout into the website you want to launch.
      </p>
    </article>
  </section>
</div>
`
