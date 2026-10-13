import type { CourseTargetMeta } from '../../../../src/course.ts'

export const meta: CourseTargetMeta = {
  id: 'day-1/exercises/build-product-card-with-props/starter',
  title: 'Build a Product Card with Props',
  description: 'Pass product data from a parent to child components using props.',
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
