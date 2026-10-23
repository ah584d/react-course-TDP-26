# Cart: calculating a count

Run `npm run course` from the repository root. Select **Cart: Calculating a Count**
in the existing launcher, or open `/?target=day-1/demo/cart-derived`.
The source panel displays the actual [CartSummary.tsx](./CartSummary.tsx).

## Teaching sequence

1. The cart starts with **Mug** and **Notebook** in a product list.
   **Total items: 2** reads separately stored state.
2. Ask which products and total will remain after **Empty cart**.
3. Click. The product list empties, but **Total items** remains 2.
4. Explain that changing the cart does not change a different state variable.
   Keeping both would require every cart operation to synchronize them.
5. Replace this declaration:

   ```tsx
   const [cartCount] = useState<number>(2)
   ```

   with:

   ```tsx
   const cartCount = cart.length
   ```

6. Leave the product-list JSX and **Total items** label unchanged.
7. Save and reload. The list shows both products and total 2. Click **Empty cart**
   and verify an empty list and total 0. The count is calculated from the current
   cart each render, not stored separately.

No ternary, fallback operator, product-removal callback, extra setter, or
synchronization logic is needed. The supplied `map` displays one list item per
product; explain it briefly as display code, leaving the full lists/keys lesson
for Day 2. The two fixed product names are unique and serve as keys.
This example counts array entries.

Before teaching again, restore the separate `useState<number>(2)` declaration,
then reload. No JSX or label changes are needed.

Continue to [Cart: Sharing State](../cart-sharing/README.md). Recall this
derived-state rule when asking why Store separately stores a total for the
Mug and Notebook quantities.
