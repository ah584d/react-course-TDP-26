import type { CourseTargetMeta } from '../../../src/course'
import CartStateDemo from './CartStateDemo'

export const meta: CourseTargetMeta = {
  id: 'day-2/demo/cart-state',
  title: 'Why Did the Cart Not Update?',
  description: 'An intentionally broken array-state update. Predict the result, then fix the mutation live. Includes the actual source code.',
  dayOrder: 2,
  dayLabel: 'Day 2',
  kind: 'demo',
  variant: 'demo',
  order: 1,
}

export default CartStateDemo
