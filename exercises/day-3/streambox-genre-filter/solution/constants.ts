import type { CourseTargetMeta } from '../../../../src/course'

export const meta: CourseTargetMeta = {
  id: 'day-3/exercises/streambox-genre-filter/solution',
  title: '4. StreamBox: Genre in the URL',
  description: 'Extend movie browsing with a genre dropdown driven by a query parameter.',
  dayOrder: 3,
  dayLabel: 'Day 3',
  kind: 'exercise',
  variant: 'solution',
  order: 4,
  routing: 'browser',
}

export const tasks = [
  "The genre dropdown and filtered movies both derive from useSearchParams.",
  "Changing genre copies the existing parameters; All genres deletes only genre.",
  "Refresh and Back/Forward restore the selection and results without duplicate React state."
]

export const checks = [
  "At /movies, select Comedy: the address contains ?genre=comedy and exactly two comedy movies appear.",
  "Open /movies?genre=animation: the dropdown shows Animation and exactly two cards appear.",
  "All genres removes genre. Browser Back/Forward and refresh restore both the selection and results.",
  "Open /movies?genre=unknown for the recovery message. The supplied movie-section shortcuts start a new catalogue view with their genre."
]
