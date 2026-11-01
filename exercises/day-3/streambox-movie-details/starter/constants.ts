import type { CourseTargetMeta } from '../../../../src/course'

export const meta: CourseTargetMeta = {
  id: 'day-3/exercises/streambox-movie-details/starter',
  title: '3. StreamBox: Movie Details and Cast',
  description: 'Build a movie-specific layout that switches between details and cast.',
  dayOrder: 3,
  dayLabel: 'Day 3',
  kind: 'exercise',
  variant: 'starter',
  order: 3,
  routing: 'browser',
}

export const tasks = [
  'AppRoutes.tsx: add a movies/:movieId parent using MoviesLayout. Details is its index child; Cast is its cast child.',
  "MovieCatalogPage.tsx: import Link and wrap each MovieCard in a Link to /movies/ plus its ID. Move the key onto Link.",
  "MovieDetailsPage.tsx: replace the hardcoded movieId with the value from useParams.",
  "MoviesLayout.tsx: replace its TODO with Outlet. Keep the supplied unknown-movie message. Movie IDs are strings."
]

export const checks = [
  "Open movies 101 and 109: Details and Cast show different content under the same movie header. The catalogue and Account do not show that header.",
  "/movies/999 and /movies/999/cast show Movie not found; /unknown shows Page not found.",
  "Refresh a detail URL or open it directly in a new tab. It stays in this exercise."
]
