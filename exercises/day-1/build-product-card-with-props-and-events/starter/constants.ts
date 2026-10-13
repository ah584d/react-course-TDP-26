import type { CourseTargetMeta } from '../../../../src/course.ts'

export const meta: CourseTargetMeta = {
  id: 'day-1/exercises/build-product-card-with-props-and-events/starter',
  title: 'Build a Product Card with Props and Events',
  description: 'Pass product data with props and handle a button click.',
  dayOrder: 1,
  dayLabel: 'Day 1',
  kind: 'exercise',
  variant: 'starter',
  order: 3,
}

export const starterTasks = [
  'Pass product data as props from ProductCard to children components.',
  'Add an onClick handler to the button that logs the product title.',
]
