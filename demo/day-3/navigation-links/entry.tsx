import type { CourseTargetMeta } from '../../../src/course'
import StandaloneApp from './StandaloneApp'

export { StandaloneApp }

export const meta: CourseTargetMeta = {
  id: 'day-3/demo/navigation-links',
  title: 'Navigation with Links',
  description: 'Navigate between Home and About without reloading the document.',
  dayOrder: 3,
  dayLabel: 'Day 3',
  kind: 'demo',
  variant: 'demo',
  order: 1,
  routing: 'browser',
}

export default StandaloneApp