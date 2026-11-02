import { meta, tasks, checks } from './constants'
import StandaloneApp from './StandaloneApp'

export { meta, StandaloneApp }

export default function StreamboxGenreFilterStarter() {
  return (
    <div className="streambox-lesson">
      <section className="streambox-guide">
        <p className="eyebrow">File to edit</p>
        <code>exercises/day-3/streambox-genre-filter/starter/entry.tsx</code>
        <p>Work in: MovieCatalogPage.tsx. Each is in this same folder.</p>
        <details open>
          <summary>Todo</summary>
          <ol>{tasks.map((task) => <li key={task}>{task}</li>)}</ol>
        </details>
        <details>
          <summary>Check your work</summary>
          <ul>{checks.map((check) => <li key={check}>{check}</li>)}</ul>
        </details>
        <p>Start fresh here: prerequisite work is supplied.</p>
        <p>Run your app in another terminal. Stop any previous server on port 5174 first:</p>
        <pre><code>npm run course -- day-3/exercises/streambox-genre-filter/starter --standalone --port 5174</code></pre>
        <p>Then open <a href="http://localhost:5174/" target="_blank" rel="noopener noreferrer">localhost:5174</a>. Test /movies?genre=animation directly, select Comedy, then choose All genres. Refresh and use Back/Forward to check that the URL and results stay in sync. The runner supplies BrowserRouter; do not add another one.</p>
      </section>
    </div>
  )
}
