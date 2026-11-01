import type { CourseTargetMeta } from '../../../../src/course'

export const meta: CourseTargetMeta = {
  id: 'day-3/exercises/streambox-movie-details/solution',
  title: '3. StreamBox: Movie Details and Cast',
  description: 'Build a movie-specific layout that switches between details and cast.',
  dayOrder: 3,
  dayLabel: 'Day 3',
  kind: 'exercise',
  variant: 'solution',
  order: 3,
  routing: 'browser',
}

export const tasks = [
  "The movies/:movieId parent renders MoviesLayout; its index renders Details and its cast child renders Cast through Outlet.",
  "Each card links to its own movie ID, which useParams reads as a string.",
  "An unknown movie ID and an unmatched page URL have distinct recovery messages."
]

export const checks = [
  "Open movies 101 and 109: Details and Cast show different content under the same movie header. The catalogue and Account do not show that header.",
  "/movies/999 and /movies/999/cast show Movie not found; /unknown shows Page not found.",
  "Refresh a detail URL or open it directly in a new tab. It stays in this exercise."
]
