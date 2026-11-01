import type { CourseTargetMeta } from '../../../../src/course'

export const meta: CourseTargetMeta = {
  id: 'day-3/exercises/streambox-pages/solution',
  title: '1. StreamBox: Pages and Links',
  description: 'Connect Home, Browse, Account, and Help using sibling routes and links.',
  dayOrder: 3,
  dayLabel: 'Day 3',
  kind: 'exercise',
  variant: 'solution',
  order: 1,
  routing: 'browser',
}

export const tasks = [
  "AppRoutes.tsx maps Home, the catalogue, Account, and Help to sibling routes.",
  "StandaloneApp.tsx uses Link for navigation and keeps the shared header above Routes."
]

export const checks = [
  "Home (/), Browse (/movies), Account, and Help each show a different page and update the address bar.",
  "Browser Back/Forward and a refresh on /account keep the correct page."
]
