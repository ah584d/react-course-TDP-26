import { meta, tasks, checks } from './constants'
import StandaloneApp from './StandaloneApp'

export { meta, StandaloneApp }

export default function StreamboxLayoutSolution() {
  return (
    <div className="streambox-lesson">
      <section className="streambox-guide">
        <p className="eyebrow">File to review</p>
        <code>exercises/day-3/streambox-layout/solution/entry.tsx</code>
        <p>Work in: AppRoutes.tsx, StreamingLayout.tsx, and StandaloneApp.tsx. Each is in this same folder.</p>
        <details open>
          <summary>Completed</summary>
          <ol>{tasks.map((task) => <li key={task}>{task}</li>)}</ol>
        </details>
        <details>
          <summary>Check your work</summary>
          <ul>{checks.map((check) => <li key={check}>{check}</li>)}</ul>
        </details>
        <p>Start fresh here: prerequisite work is supplied. The runner supplies BrowserRouter. This embedded view uses a /play/... base prefix; keep it when typing URLs here. Optional --standalone mode uses clean paths at /. Your routes use / for Home, /movies for the catalogue, and /account and /help relative to that base.</p>
      </section>
      <StandaloneApp />
    </div>
  )
}
