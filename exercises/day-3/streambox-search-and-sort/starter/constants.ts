import type { CourseTargetMeta } from '../../../../src/course'

export const meta: CourseTargetMeta = {
  id: 'day-3/exercises/streambox-search-and-sort/starter',
  title: '5. StreamBox: Search and Sort Together',
  description: 'Extend the working genre filter with URL-driven search, sorting, and Clear filters.',
  dayOrder: 3,
  dayLabel: 'Day 3',
  kind: 'exercise',
  variant: 'starter',
  order: 5,
  routing: 'browser',
}

export const tasks = [
  "Read q and sort using the existing searchParams. Defaults are an empty search and title sorting.",
  "Enable Search titles and Sort, and connect their onChange handlers to updateFilter. The genre dropdown is the example.",
  "For text typing, pass true as updateFilter's third argument: replace the current history entry instead of adding one per character.",
  "Enable Clear filters and delete only genre, q, and sort, preserving any unrelated query parameters.",
  "The supplied matching and sorting code uses these variables. Keep the empty-results and unsupported-filter messages."
]

export const checks = [
  "/movies?genre=sci-fi&q=space&sort=newest selects all three controls and shows Space Station Seven.",
  "Changing one control preserves the other parameters; a copied URL reproduces the same results.",
  "Searching SPACE matches the two space titles; searching zzz shows No movies match.",
  "Clear filters restores all ten movies. Changing genre or sort creates a useful Back-button stop; text typing does not add a stop per character."
]
