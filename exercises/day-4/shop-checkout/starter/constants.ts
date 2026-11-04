import type { CourseTargetMeta } from '../../../../src/course.ts'

export const meta: CourseTargetMeta = {
  id: 'day-4/exercises/shop-checkout/starter',
  title: 'Mini Shop Checkout',
  description: 'Build a shop with Zustand, pay with useMutation and protect the page with an Error Boundary.',
  dayOrder: 4,
  dayLabel: 'Day 4',
  kind: 'exercise',
  variant: 'starter',
  order: 2,
}

export const starterPhases = [
  {
    title: 'Phase 1 — Zustand: share the cart',
    tasks: [
      'useCartStore.ts: implement addToCart (increase quantity if the product is already there), removeFromCart and clearCart.',
      'ShopHeader.tsx: read totalArticles and totalPrice from the store with selectors.',
      'ProductList.tsx: call addToCart(product) when "Add" is clicked.',
      'CartPanel.tsx: read items and removeFromCart from the store and make the ✕ button work.',
      'Check: add products and watch the header, the product list and the basket update together - no props needed.',
    ],
  },
  {
    title: 'Phase 2 — useMutation: pay for the order',
    tasks: [
      'CheckoutButton.tsx: call useMutation with mutationFn: () => submitOrder({ items, simulateError: props.simulateError }).',
      'Call mutation.mutate() when the button is clicked, disable it and show "Paying..." while mutation.isPending.',
      'onSuccess: empty the cart with clearCart() and show the order id from mutation.data.',
      'On error show mutation.error.message. Test it: total above $150, or tick "Simulate server error".',
      'BONUS: add a "Retry" button next to the error message.',
    ],
  },
  {
    title: 'Phase 3 — Error Boundary: protect the page',
    tasks: [
      'ShopCheckout.tsx: type an unknown promo code (HELLO) and click Apply - PromoBanner crashes and the whole page goes white. Reload the page.',
      'Wrap <PromoBanner /> in the provided <ErrorBoundary> (../ErrorBoundary).',
      'fallback={({ error, reset }) => ...}: show the error message and a "Try again" button that calls reset.',
      'onReset: clear promoDraft and promoCode so the banner can render again.',
      'Check: the banner fails, but the header, the basket and the checkout keep working.',
    ],
  },
]

export const starterHint =
  'Valid promo codes: SAVE10 and FREESHIP. ErrorBoundary, the fake API (api.ts) and PromoBanner are provided - you do not need to edit them.'
