import type { CourseTargetMeta } from '../../../../src/course.ts'

export const meta: CourseTargetMeta = {
  id: 'day-1/exercises/build-product-card-with-props-and-events/solution',
  title: 'Build a Product Card with Props and Events',
  description: 'Completed product card with props and a working button.',
  dayOrder: 1,
  dayLabel: 'Day 1',
  kind: 'exercise',
  variant: 'solution',
  order: 3,
}

export const solutionTasks = [
  'Pass product data as props from ProductCard to children components. You will need to create props types in each component.',
  'Add an onClick handler to the button that logs the product title.',
]
