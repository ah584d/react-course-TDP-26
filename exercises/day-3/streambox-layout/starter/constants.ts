import type { CourseTargetMeta } from '../../../../src/course'

export const meta: CourseTargetMeta = {
  id: 'day-3/exercises/streambox-layout/starter',
  title: '2. StreamBox: Shared Layout and Index',
  description: 'Move shared navigation into an app-wide layout and make Home its index route.',
  dayOrder: 3,
  dayLabel: 'Day 3',
  kind: 'exercise',
  variant: 'starter',
  order: 2,
  routing: 'browser',
}

export const tasks = [
  "AppRoutes.tsx: import StreamingLayout. Make it the parent route at / and nest the existing pages inside it.",
  "Make HomePage the index child. Movies, Account, and Help stay children of StreamingLayout.",
  "StreamingLayout.tsx: import Outlet and replace its TODO message so the selected child renders.",
  "StandaloneApp.tsx: remove its header, because the parent layout now owns that same header. Keep AppRoutes."
]

export const checks = [
  "The same four URLs still work, with the shared header on every page.",
  "At /, the app index renders Home without changing the URL. At /movies, the Outlet renders the catalogue.",
  "Temporarily remove the StreamingLayout Outlet: the header remains but the selected page disappears. Restore it."
]
