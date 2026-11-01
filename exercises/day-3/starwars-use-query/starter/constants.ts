import type { CourseTargetMeta } from '../../../../src/course.ts'

export const meta: CourseTargetMeta = {
  id: 'day-3/exercises/starwars-use-query/starter',
  title: 'useQuery',
  description: 'Write a usePerson hook with useQuery so two components share one request.',
  dayOrder: 3,
  dayLabel: 'Day 3',
  kind: 'exercise',
  variant: 'starter',
  order: 2,
}

export const starterTasks = [
  'Open usePerson.ts - it is the only file you need to change. It currently returns a placeholder, so nothing is fetched.',
  'Import useQuery from "@tanstack/react-query" and fetchPerson from "./api".',
  'Call useQuery with queryKey: ["person", personId] and queryFn: () => fetchPerson(personId), and return its result.',
  'Check the result: PersonHeader (name) and PersonDetails (full profile) both call usePerson, yet "Network requests sent" goes up by 1 only.',
  'Click another character, then go back to the first one: the data appears instantly and the counter does not move.',
]
