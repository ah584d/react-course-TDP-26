# Cart state: instructor demo

Run `npm run course` from the repository root. Open Day 2 and select
**Why Did the Cart Not Update?**, or use
`/?target=day-2/demo/cart-state` on the running server.

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
6. Continue with the Day 2 slides: updating objects and arrays, lifting state
   to a shared parent, avoiding redundant derived state, and a batching recap.

Each click adds one product unit, so the badge is `cart.length`. A cart with
quantities per line would instead derive its unit count by summing quantities.
Keep the displayed count derived rather than introducing a second state value.

The narrowly scoped ESLint exception for this file permits the intentionally
broken mutation. Do not apply this pattern to normal state updates.
Restore the two original handler statements before teaching the wrong-first
demonstration again.
