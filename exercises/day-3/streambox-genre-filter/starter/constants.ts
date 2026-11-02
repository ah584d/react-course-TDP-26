import type { CourseTargetMeta } from '../../../../src/course'

export const meta: CourseTargetMeta = {
  id: 'day-3/exercises/streambox-genre-filter/starter',
  title: '4. StreamBox: Genre in the URL',
  description: 'Extend movie browsing with a genre dropdown driven by a query parameter.',
  dayOrder: 3,
  dayLabel: 'Day 3',
  kind: 'exercise',
  variant: 'starter',
  order: 4,
  routing: 'browser',
}

export const tasks = [
  "Import useSearchParams and read genre from the URL. No genre parameter means all genres.",
  "Use the URL-derived genre for the supplied filter and the controlled dropdown.",
  "Complete the supplied changeGenre handler; the dropdown's onChange is already wired. Use setSearchParams and copy the previous parameters before changing genre.",
  "Delete genre for All genres; otherwise set it. Keep the supplied validation for unsupported values."
]

export const checks = [
  "At /movies, select Comedy: the address contains ?genre=comedy and exactly two comedy movies appear.",
  "Open /movies?genre=animation: the dropdown shows Animation and exactly two cards appear.",
  "All genres removes genre. Browser Back/Forward and refresh restore both the selection and results.",
  "Open /movies?genre=unknown for the recovery message."
]
