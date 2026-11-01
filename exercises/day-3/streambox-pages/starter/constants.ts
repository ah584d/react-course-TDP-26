import type { CourseTargetMeta } from '../../../../src/course'

export const meta: CourseTargetMeta = {
  id: 'day-3/exercises/streambox-pages/starter',
  title: '1. StreamBox: Pages and Links',
  description: 'Connect Home, Browse, Account, and Help using sibling routes and links.',
  dayOrder: 3,
  dayLabel: 'Day 3',
  kind: 'exercise',
  variant: 'starter',
  order: 1,
  routing: 'browser',
}

export const tasks = [
  "AppRoutes.tsx: import AccountPage and HelpPage and add routes for /account and /help.",
  "StandaloneApp.tsx: replace the Account and Help placeholders with Link components. Browse movies is the example.",
  "Keep the shared header above Routes for now. The BrowserRouter is already supplied by the course runner."
]

export const checks = [
  "Home (/), Browse (/movies), Account, and Help each show a different page and update the address bar.",
  "Browser Back/Forward and a refresh on /account keep the correct page."
]
