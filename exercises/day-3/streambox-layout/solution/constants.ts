import type { CourseTargetMeta } from '../../../../src/course'

export const meta: CourseTargetMeta = {
  id: 'day-3/exercises/streambox-layout/solution',
  title: '2. StreamBox: Shared Layout and Index',
  description: 'Move shared navigation into an app-wide layout and make Home its index route.',
  dayOrder: 3,
  dayLabel: 'Day 3',
  kind: 'exercise',
  variant: 'solution',
  order: 2,
  routing: 'browser',
}

export const tasks = [
  "StreamingLayout owns the shared navigation and renders the selected child through Outlet.",
  "Home is the app index at /. The catalogue, Account, and Help are child pages; their URLs are unchanged."
]

export const checks = [
  "The same four URLs still work, with the shared header on every page.",
  "At /, the app index renders Home without changing the URL. At /movies, the Outlet renders the catalogue.",
  "Temporarily remove the StreamingLayout Outlet: the header remains but the selected page disappears. Restore it."
]
