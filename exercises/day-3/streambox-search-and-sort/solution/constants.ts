import type { CourseTargetMeta } from '../../../../src/course'

export const meta: CourseTargetMeta = {
  id: 'day-3/exercises/streambox-search-and-sort/solution',
  title: '5. StreamBox: Search and Sort Together',
  description: 'Extend the working genre filter with URL-driven search, sorting, and Clear filters.',
  dayOrder: 3,
  dayLabel: 'Day 3',
  kind: 'exercise',
  variant: 'solution',
  order: 5,
  routing: 'browser',
}

export const tasks = [
  "Genre, search text, and sorting all derive from the URL and preserve one another.",
  "Search typing replaces the current history entry; genre and sort changes create entries.",
  "Clear filters removes only genre, q, and sort. Empty or unsupported results show explicit messages."
]

export const checks = [
  "/movies?genre=sci-fi&q=space&sort=newest selects all three controls and shows Space Station Seven.",
  "Changing one control preserves the other parameters; a copied URL reproduces the same results.",
  "Searching SPACE matches the two space titles; searching zzz shows No movies match.",
  "Clear filters restores all ten movies. Changing genre or sort creates a useful Back-button stop; text typing does not add a stop per character."
]
