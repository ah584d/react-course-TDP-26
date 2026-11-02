import { meta, tasks, checks } from './constants'
import StandaloneApp from './StandaloneApp'

export { meta, StandaloneApp }

export default function StreamboxMovieDetailsStarter() {
  return (
    <div className="streambox-lesson">
      <section className="streambox-guide">
        <p className="eyebrow">File to edit</p>
        <code>exercises/day-3/streambox-movie-details/starter/entry.tsx</code>
        <p>Work in: AppRoutes.tsx, MovieCatalogPage.tsx, MovieDetailsPage.tsx, and MoviesLayout.tsx. Each is in this same folder.</p>
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
        <pre><code>npm run course -- day-3/exercises/streambox-movie-details/starter --standalone --port 5174</code></pre>
        <p>Then open <a href="http://localhost:5174/" target="_blank" rel="noopener noreferrer">localhost:5174</a>. Test /movies/101, /movies/101/cast, /movies/999, and /unknown directly; refresh a detail URL and use Back/Forward. The runner supplies BrowserRouter; do not add another one.</p>
      </section>
    </div>
  )
}
