import type { CourseTargetMeta } from '../../../../src/course.ts'

export const meta: CourseTargetMeta = {
  id: 'day-1/exercises/pass-product-data-with-props/solution',
  title: 'Pass Product Data with Props',
  description: 'Completed product data props exercise.',
  dayOrder: 1,
  dayLabel: 'Day 1',
  kind: 'exercise',
  variant: 'solution',
  order: 2.5,
}

export const solutionTasks = [
  'Pass product.description to ProductDescription as a prop.',
  'Define ProductPriceProps with a price string and render the price.',
  'Pass product.price to ProductPrice as a prop.',
]
