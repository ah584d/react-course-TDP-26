import type { CourseTargetMeta } from '../../../src/course'
import CartSharingDemo from './CartSharingDemo'

export const meta: CourseTargetMeta = {
  id: 'day-1/demo/cart-sharing',
  title: 'Cart: Sharing State',
  description: 'Lift Mug and Notebook quantities into Store, derive the total, and empty both products with one action.',
  dayOrder: 1,
  dayLabel: 'Day 1',
  kind: 'demo',
  variant: 'demo',
  order: 4,
}

export default CartSharingDemo
