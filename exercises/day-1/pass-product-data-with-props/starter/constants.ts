import type { CourseTargetMeta } from '../../../../src/course.ts'

export const meta: CourseTargetMeta = {
  id: 'day-1/exercises/pass-product-data-with-props/starter',
  title: 'Pass Product Data with Props',
  description: 'Practice passing product data from a parent to child components.',
  dayOrder: 1,
  dayLabel: 'Day 1',
  kind: 'exercise',
  variant: 'starter',
  order: 2.5,
}

export const starterTasks = [
  'In ProductCard.tsx, pass product.description to ProductDescription as a prop.',
  'In ProductPrice.tsx, define ProductPriceProps with a price string and render the price.',
  'Pass product.price to ProductPrice as a prop.',
]
