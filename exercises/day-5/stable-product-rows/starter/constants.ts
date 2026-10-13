import type { CourseTargetMeta } from '../../../../src/course.ts'

export const initialProducts = [
  { id: 1, name: 'Wireless Keyboard', price: 49 },
  { id: 2, name: 'USB-C Hub', price: 35 },
  { id: 3, name: 'Monitor Stand', price: 79 },
  { id: 4, name: 'Webcam HD', price: 59 },
]

export const meta: CourseTargetMeta = {
  id: 'day-4/exercises/stable-product-rows/starter',
  title: 'Stable Product Rows',
  description: 'Prevent unnecessary rerenders with React.memo and useCallback.',
  dayOrder: 4,
  dayLabel: 'Day 4',
  kind: 'exercise',
  variant: 'starter',
  order: 1,
}

export const starterTasks = [
  'ProductRow rerenders on every tick, even when its props are unchanged — can you stop that?',
  'The removeProduct handler gets a new reference each render. What could keep it stable?',
]

export const starterHint =
  'Open the console — every row logs on every tick. After fixing, rows only log when removed.'
