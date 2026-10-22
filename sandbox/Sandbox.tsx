import Playground from './Playground'
import playgroundSource from './Playground.tsx?raw'
import './Sandbox.css'

export default function Sandbox() {
  return (
    <main className="live-sandbox">
      <header className="live-sandbox-header">
        <h1>Live Coding Sandbox</h1>
        <p>Edit <code>sandbox/Playground.tsx</code> in VS Code and save.
          The preview and source update together.</p>
        <a href="/?target=launcher">Back to course</a>
      </header>
      <div className="live-sandbox-panels">
        <section className="live-sandbox-panel" aria-labelledby="sandbox-preview-title">
          <h2 id="sandbox-preview-title">Preview</h2>
          <div className="live-sandbox-preview">
            <Playground />
          </div>
        </section>
        <aside className="live-sandbox-panel" aria-labelledby="sandbox-source-title">
          <h2 id="sandbox-source-title">Source</h2>
          <p><code>sandbox/Playground.tsx</code></p>
          <pre className="live-sandbox-source" tabIndex={0} aria-label="Playground component source">
            <code>{playgroundSource}</code>
          </pre>
        </aside>
      </div>
    </main>
  )
}
