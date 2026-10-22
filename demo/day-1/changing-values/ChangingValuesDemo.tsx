import Counter from './Counter'
import counterSource from './Counter.tsx?raw'
import './ChangingValuesDemo.css'

export default function ChangingValuesDemo() {
  return (
    <div className="changing-values-demo">
      <section className="demo-preview" aria-label="Counter preview">
        <p>Each click should increase the number on the page.</p>
        <Counter />
        <p>Open the browser console to compare the logged and displayed counts.</p>
      </section>
      <aside className="source-panel" aria-labelledby="source-title">
        <h2 id="source-title">Counter code</h2>
        <p><code>demo/day-1/changing-values/Counter.tsx</code></p>
        <p>Edit in VS Code and save. This view updates automatically.</p>
        <pre tabIndex={0} aria-label="Counter component source">
          <code>{counterSource}</code>
        </pre>
      </aside>
    </div>
  )
}
