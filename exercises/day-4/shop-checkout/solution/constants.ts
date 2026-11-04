import type { CourseTargetMeta } from '../../../../src/course.ts'

export const meta: CourseTargetMeta = {
  id: 'day-4/exercises/shop-checkout/solution',
  title: 'Mini Shop Checkout',
  description: 'Solution: a shop with Zustand, useMutation checkout and an Error Boundary.',
  dayOrder: 4,
  dayLabel: 'Day 4',
  kind: 'exercise',
  variant: 'solution',
  order: 2,
}

export const solutionPhases = [
  {
    title: 'Phase 1 — Zustand',
    tasks: [
      'useCartStore.ts: addToCart increases the quantity of an existing item or adds it with quantity 1; removeFromCart filters by id; clearCart resets items.',
      'ShopHeader, ProductList and CartPanel each read only what they need from the store with selectors - no props.',
    ],
  },
  {
    title: 'Phase 2 — useMutation',
    tasks: [
      'CheckoutButton.tsx: useMutation({ mutationFn: () => submitOrder(...), onSuccess: () => clearCart() }).',
      'The button calls mutation.mutate(), is disabled while mutation.isPending and shows "Paying...".',
      'mutation.isSuccess shows the order id, mutation.isError shows mutation.error.message with a Retry button.',
    ],
  },
  {
    title: 'Phase 3 — Error Boundary',
    tasks: [
      'ShopCheckout.tsx: <ErrorBoundary> wraps <PromoBanner /> with a fallback showing error.message and a "Try again" button.',
      'onReset clears promoDraft and promoCode, so the banner renders again. The rest of the shop never stops working.',
    ],
  },
]
