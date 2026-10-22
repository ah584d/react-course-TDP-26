import type { CourseTargetMeta } from '../../../src/course'
import CartDerivedDemo from './CartDerivedDemo'

export const meta: CourseTargetMeta = {
  id: 'day-1/demo/cart-derived',
  title: 'Cart: Calculating a Count',
  description: 'Empty a product list and see its stored total go stale. Derive the count from the cart instead.',
  dayOrder: 1,
  dayLabel: 'Day 1',
  kind: 'demo',
  variant: 'demo',
  order: 3,
}

export default CartDerivedDemo
