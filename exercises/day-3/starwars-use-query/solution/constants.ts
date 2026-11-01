import type { CourseTargetMeta } from '../../../../src/course.ts'

export const meta: CourseTargetMeta = {
  id: 'day-3/exercises/starwars-use-query/solution',
  title: 'useQuery',
  description: 'Write a usePerson hook with useQuery so two components share one request.',
  dayOrder: 3,
  dayLabel: 'Day 3',
  kind: 'exercise',
  variant: 'solution',
  order: 2,
}

export const solutionTasks = [
  'usePerson.ts: imported useQuery and fetchPerson, and returned useQuery with queryKey ["person", personId] and queryFn: () => fetchPerson(personId).',
  'PersonHeader (name) and PersonDetails (full profile) both call usePerson(personId) with the same queryKey, so they share one cache entry.',
  'The "Network requests sent" counter goes up by 1 per character, not 2.',
  'Going back to a character already loaded is served from the cache - no new request.',
]
