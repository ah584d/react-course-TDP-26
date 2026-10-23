# Cart state: instructor demo

Run `npm run course` from the repository root. Open Day 1 and select
**Cart: Updating an Array**, or use
`/?target=day-1/demo/cart-state` on the running server.

This is an instructor demonstration, not a student exercise. The preview
intentionally starts with a state mutation. The source panel imports the
actual [Cart.tsx](./Cart.tsx) file and updates when you save it in VS Code.

## Teaching sequence

1. Ask students to predict the cart badge after clicking **Add to Cart**.
2. Click once. The badge stays at zero, although the handler pushes a product
   into the array and calls the setter.
3. Explain that the setter receives the same array reference. React compares
   the next and previous state using `Object.is` and can skip the update.
   Mutation also changes the objects that existing snapshots refer to.
4. Replace both handler statements with:

   ```tsx
   setCart(previousCart => [...previousCart, product])
   ```

5. Save, then reload the demo to start from an empty cart: the broken version
   already mutated the array, and Fast Refresh may preserve that data.
   Confirm that each click now increases the badge.
6. Continue to the [calculated-count demonstration](../cart-derived/README.md),
   then the [sharing-state demonstration](../cart-sharing/README.md).
   The calculated count starts broken; the sharing example starts with working
   but redundant bookkeeping, then moves to one parent-owned basket.

Each click adds one product unit, so the badge is `cart.length`. A cart with
quantities per line would instead derive its unit count by summing quantities.
Keep the displayed count derived rather than introducing a second state value.

The narrowly scoped ESLint exception for this file permits the intentionally
broken mutation. Do not apply this pattern to normal state updates.
Restore the two original handler statements before teaching the wrong-first
demonstration again.

The live demo stays focused on adding a product. The following two slides
explain array spread using that addition, then object spread using a small
Basket with mug and notebook quantities. The Basket is a separate slide example,
not a hidden feature of this demo. Removing products and updating matching array entries
are deferred to later worked examples. A third slide shows nested quantities
and explains why both the basket and quantities objects must be copied.
