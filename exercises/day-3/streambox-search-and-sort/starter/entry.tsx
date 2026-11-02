import { meta, tasks, checks } from './constants'
import StandaloneApp from './StandaloneApp'

export { meta, StandaloneApp }

export default function StreamboxSearchAndSortStarter() {
  return (
    <div className="streambox-lesson">
      <section className="streambox-guide">
        <p className="eyebrow">File to edit</p>
        <code>exercises/day-3/streambox-search-and-sort/starter/entry.tsx</code>
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
        <pre><code>npm run course -- day-3/exercises/streambox-search-and-sort/starter --standalone --port 5174</code></pre>
        <p>Then open <a href="http://localhost:5174/" target="_blank" rel="noopener noreferrer">localhost:5174</a>. Test /movies?genre=sci-fi&amp;q=space&amp;sort=newest, change each filter, search for zzz, and clear filters. Refresh and use Back/Forward to check URL state. The runner supplies BrowserRouter; do not add another one.</p>
      </section>
    </div>
  )
}
