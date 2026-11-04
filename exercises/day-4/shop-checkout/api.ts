import type { CartItem } from './products'

export const MAX_ORDER_TOTAL = 150

interface SubmitOrderInput {
  items: CartItem[]
  simulateError: boolean
}

interface SubmitOrderResult {
  orderId: string
  total: number
}

// Fake "server": no network needed. It takes ~1 second and can fail.
export async function submitOrder(input: SubmitOrderInput): Promise<SubmitOrderResult> {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const total = input.items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (input.simulateError) {
    throw new Error('Server error: please try again later')
  }

  if (total > MAX_ORDER_TOTAL) {
    throw new Error(`Payment declined: orders over $${MAX_ORDER_TOTAL} are not allowed`)
  }

  return { orderId: `#${Math.floor(1000 + Math.random() * 9000)}`, total }
}
