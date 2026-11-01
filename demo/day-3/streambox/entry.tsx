import type { CourseTargetMeta } from '../../../src/course'
import { Link } from 'react-router-dom'
import StandaloneApp from './StandaloneApp'

export { StandaloneApp }

export const meta: CourseTargetMeta = {
  id: 'day-3/demo/streambox',
  title: 'StreamBox: Finished App Tour',
  description: 'Browse, open a movie, visit Account and Help, and share a filtered catalogue URL.',
  dayOrder: 3,
  dayLabel: 'Day 3',
  kind: 'demo',
  variant: 'demo',
  order: 0,
  routing: 'browser',
}

export default function StreamBoxDemo() {
  return (
    <div className="streambox-lesson">
      <section className="streambox-guide">
        <p className="eyebrow">File to review</p>
        <code>demo/day-3/streambox/entry.tsx</code>
        <p>This tour uses the final exercise solution, plus an instructor-only year filter.</p>
        <ol>
          <li>Start at Home, then Browse movies. The app header stays visible.</li>
          <li>Open Space Station Seven, then its Cast tab. The movie title stays visible while Details and Cast switch.</li>
          <li>Visit Account and Help. The app header remains, without a movie title.</li>
          <li>Browse again. Select Sci-Fi, search for space, and sort by newest.</li>
          <li>Copy the URL, refresh, and use Back/Forward: controls and results follow the URL.</li>
          <li><Link to="/movies/years">Open the year checkbox demo</Link>. Select multiple years, then share or refresh the URL.</li>
        </ol>
        <p>Year filter code: <code>demo/day-3/streambox/YearFilterCatalog.tsx</code></p>
      </section>
      <StandaloneApp />
    </div>
  )
}
