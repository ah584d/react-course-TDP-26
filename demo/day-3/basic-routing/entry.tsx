import type { CourseTargetMeta } from '../../../src/course'
import StandaloneApp from './StandaloneApp'

export { StandaloneApp }

export const meta: CourseTargetMeta = {
  id: 'day-3/demo/basic-routing',
  title: 'Basic Routes',
  description: 'Pages connected to the browser URL.',
  dayOrder: 3,
  dayLabel: 'Day 3',
  kind: 'demo',
  variant: 'demo',
  order: 0,
  routing: 'browser',
}

export default StandaloneApp