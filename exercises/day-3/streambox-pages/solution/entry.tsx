import { meta, tasks, checks } from './constants'
import StandaloneApp from './StandaloneApp'

export { meta, StandaloneApp }

export default function StreamboxPagesSolution() {
  return (
    <div className="streambox-lesson">
      <section className="streambox-guide">
        <p className="eyebrow">File to review</p>
        <code>exercises/day-3/streambox-pages/solution/entry.tsx</code>
        <p>Work in: AppRoutes.tsx and StandaloneApp.tsx. Each is in this same folder.</p>
        <details open>
          <summary>Completed</summary>
          <ol>{tasks.map((task) => <li key={task}>{task}</li>)}</ol>
        </details>
        <details>
          <summary>Check your work</summary>
          <ul>{checks.map((check) => <li key={check}>{check}</li>)}</ul>
        </details>
        <p>To review the finished app, stop the starter server on port 5174 and run:</p>
        <pre><code>npm run course -- day-3/exercises/streambox-pages/solution --standalone --port 5174</code></pre>
        <p>Then open <a href="http://localhost:5174/" target="_blank" rel="noopener noreferrer">localhost:5174</a>. The runner supplies BrowserRouter and serves clean paths at /.</p>
      </section>
    </div>
  )
}
