import type { CourseTargetMeta } from '../../../src/course'
import StandaloneApp from './StandaloneApp'

export { StandaloneApp }

export const meta: CourseTargetMeta = {
  id: 'day-3/demo/query-params',
  title: 'Updating Query Parameters: Live Demo',
  description: 'Watch a genre filter update the URL and results beside its source code.',
  dayOrder: 3,
  dayLabel: 'Day 3',
  kind: 'demo',
  variant: 'demo',
  order: 2,
  routing: 'browser',
}

export default function QueryParamsDemo() {
  return (
    <div className="streambox-lesson">
      <section className="streambox-guide">
        <p className="eyebrow">Live query-parameter example</p>
        <p>Choose a genre to update the URL and filter the movie list. The component source is shown beside the live example.</p>
        <p>Try Action, Comedy, and All genres. Refresh or use Back/Forward to restore a previous selection.</p>
      </section>
      <StandaloneApp />
    </div>
  )
}