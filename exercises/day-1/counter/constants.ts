import type { CourseTargetMeta } from '../../../src/course'

export const counterMeta: Omit<CourseTargetMeta, 'id' | 'variant'> = {
  title: 'Increment and Decrement Counter',
  description: 'Practice primitive state, functional setters, and click handlers.',
  dayOrder: 1,
  dayLabel: 'Day 1',
  kind: 'exercise',
  order: 3.5,
}

export const starterMeta: CourseTargetMeta = {
  ...counterMeta,
  id: 'day-1/exercises/counter/starter',
  variant: 'starter',
}

export const solutionMeta: CourseTargetMeta = {
  ...counterMeta,
  id: 'day-1/exercises/counter/solution',
  variant: 'solution',
}

export const counterTasks = [
  'Import useState and create count state with an initial value of 0.',
  'Display count in the output element.',
  'Wire Increment and Decrement to update count using functional setters.',
  'Check that each click changes the count by one, including below zero.',
]