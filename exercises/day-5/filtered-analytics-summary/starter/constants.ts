import type { CourseTargetMeta } from '../../../../src/course.ts'

export const meta: CourseTargetMeta = {
  id: 'day-4/exercises/filtered-analytics-summary/starter',
  title: 'Filtered Analytics Summary',
  description: 'Memoize an expensive computation with useMemo.',
  dayOrder: 4,
  dayLabel: 'Day 4',
  kind: 'exercise',
  variant: 'starter',
  order: 2,
}

export const starterTasks = [
  'computeSummary runs on every tick, even when the filtered events are unchanged — can you avoid the extra work?',
  'How could you recalculate the summary only when the filter actually changes?',
]

export const starterHint =
  'Open the console — "Computing summary..." logs every tick. After fixing, it only logs when you change the filter.'

export type AnalyticsEvent = {
  id: number
  category: 'click' | 'scroll' | 'purchase' | 'signup'
  value: number
  timestamp: string
}

export const sampleEvents: AnalyticsEvent[] = [
  { id: 1, category: 'click', value: 1, timestamp: '2026-06-01' },
  { id: 2, category: 'scroll', value: 3, timestamp: '2026-06-01' },
  { id: 3, category: 'purchase', value: 120, timestamp: '2026-06-02' },
  { id: 4, category: 'click', value: 1, timestamp: '2026-06-02' },
  { id: 5, category: 'signup', value: 50, timestamp: '2026-06-03' },
  { id: 6, category: 'scroll', value: 2, timestamp: '2026-06-03' },
  { id: 7, category: 'purchase', value: 85, timestamp: '2026-06-04' },
  { id: 8, category: 'click', value: 1, timestamp: '2026-06-04' },
  { id: 9, category: 'signup', value: 50, timestamp: '2026-06-05' },
  { id: 10, category: 'purchase', value: 200, timestamp: '2026-06-05' },
  { id: 11, category: 'scroll', value: 5, timestamp: '2026-06-06' },
  { id: 12, category: 'click', value: 1, timestamp: '2026-06-06' },
]

export const categories = ['all', 'click', 'scroll', 'purchase', 'signup'] as const
