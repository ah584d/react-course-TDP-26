# Day 4 Exercises

## Zustand

### Counter: 2×2 Grid

**Files to edit:**
[zustand-counter/starter/useCounterStore.ts](zustand-counter/starter/useCounterStore.ts) and
[zustand-counter/starter/Counter.tsx](zustand-counter/starter/Counter.tsx)

**Tasks:**

1. Add a `remove` action to the counter store that decreases `count` by 1.
2. Complete the 2×2 grid by adding a second row with `gridTemplateRows: "1fr 1fr"`.
3. Add another counter display in the bottom-left quarter (same styling as top-right).
4. Add a **Remove** button in the bottom-right quarter (red background `#f44336`).
5. Verify all 4 quarters display correctly and both counters show the same value.

**Solution:** [zustand-counter/solution](zustand-counter/solution)

### Mini Shop Checkout (Zustand + useMutation + Error Boundary)

**Files to edit:** everything in [shop-checkout/starter](shop-checkout/starter) marked with `TODO`.
`api.ts`, `ErrorBoundary.tsx` and `PromoBanner.tsx` in [shop-checkout](shop-checkout) are provided.

**Phase 1 - Zustand**

1. `useCartStore.ts`: implement `addToCart` (increase the quantity if the product is already there), `removeFromCart` and `clearCart`.
2. `ShopHeader.tsx`: read `totalArticles` and `totalPrice` from the store.
3. `ProductList.tsx`: call `addToCart(product)` when **Add** is clicked.
4. `CartPanel.tsx`: read `items` and `removeFromCart` from the store.

**Phase 2 - useMutation**

1. `CheckoutButton.tsx`: `useMutation` with `mutationFn: () => submitOrder({ items, simulateError })`.
2. Disable the button and show "Paying..." while `isPending`.
3. `onSuccess`: `clearCart()` and show the order id. On error show `mutation.error.message` (total above $150, or tick "Simulate server error").
4. Bonus: add a **Retry** button.

**Phase 3 - Error Boundary**

1. Apply the unknown promo code `HELLO`: `PromoBanner` crashes and the page goes white.
2. Wrap `<PromoBanner />` in the provided `ErrorBoundary` with a fallback (error message + **Try again** calling `reset`).
3. `onReset` clears `promoDraft` and `promoCode`.

**Solution:** [shop-checkout/solution](shop-checkout/solution)
