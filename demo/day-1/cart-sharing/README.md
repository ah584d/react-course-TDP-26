# Cart: sharing state

Run `npm run course` from the repository root and select **Cart: Sharing State**,
or open `/?target=day-1/demo/cart-sharing` on the existing server.
Teach this after [Cart: Calculating a Count](../cart-derived/README.md).

The plain preview contains a total, a Coffee Mug quantity and Add button, and
a Notebook quantity and Add button. After lifting state, an **Empty basket**
button resets both products. The **Parent** and **Product card** source
tabs show the actual [Store.tsx](./Store.tsx) and
[ProductCard.tsx](./ProductCard.tsx), including their full paths. Saves update
both the preview and the source; tabs support Left/Right arrows and Home/End.

## Stage 1: working but duplicated bookkeeping

The starting version works. Each ProductCard instance owns a number quantity.
Adding a product updates that local quantity, then calls `onAdded()`.
Store handles that callback by incrementing its separately stored `count`.

1. Reload, add two mugs and one notebook, and verify quantities 2 and 1, total 3.
2. Trace the two state updates in the source tabs.
3. Recall the derived-state lesson: why store a total we could calculate?
4. Explain the obstacle: Store cannot access quantities hidden inside its children.

Do not describe this as broken synchronization, a batching bug, or an inevitable
lost update. It is redundant bookkeeping that every future quantity-changing
operation would need to maintain.

## Stage 2: lift the quantities, derive the total

The slides show the intermediate refactor before adding Empty basket:

- Replace Store's count hook and `handleAdded` with a flat `Basket` object.
- Calculate `totalCount = basket.mugs + basket.notebooks`.
- Define `addMug` and `addNotebook` in Store using functional object updates.
- Remove ProductCard's useState import, local quantity hook, and `addProduct`.
- Replace its `onAdded` prop with `quantity` and `onAdd`.
- Destructure these values in ProductCard's parameter, as in the earlier props lesson.
- Supply each card's quantity and its corresponding parent callback.

The intermediate handlers simply copy the basket and increment one quantity.
Verify two mugs plus one notebook still gives total 3, without a total setter.
Both products are controlled by the closest common parent; neither directly
modifies the other.

Revisit the callback-prop pattern introduced in Events: values describe what the
card displays; `onAdd` lets it request an action whose meaning is defined by Store.
Trace click → supplied callback → Store's state update → new props. Store owns
the basket structure and rules; ProductCard presents a product and connects its
button to the supplied action. Passing a setter is valid, but a domain callback
keeps this child independent of that implementation detail.

Use the responsibility slide to name this useful separation, not to prescribe
a logic/presentation split for every component. Presentational components can
have display logic or unrelated local UI state, and Store still renders layout.

## Stage 3: empty both products from Store

Before lifting state, ask how Store could empty the basket. Calling `setCount(0)`
only resets the stored total; it does not reset the quantities owned by the cards.
This is a new requirement the starting design does not handle, not a bug in adding.

After lifting state, add this handler in Store:

```tsx
function emptyBasket() {
  setBasket({ mugs: 0, notebooks: 0 })
}
```

Connect a single `Empty basket` button in Store to `emptyBasket`. Both cards
receive zero quantities on the next render; the derived total becomes zero too.
No child reset handler or separately updated total is needed.

The current live-edited demo calls the object `counts`, with fields `mug` and
`notebook`, so its equivalent is `setCounts({mug: 0, notebook: 0})`. Preserve the
names already in use rather than renaming them during the demonstration.

Verify: add two mugs and one notebook, empty the basket, and check all three
numbers are zero. Empty it again, then add one notebook: quantities 0 and 1,
total 1. This is the concrete ownership benefit: Store can coordinate both cards.

## Complete final live-refactor code

Keep the two-file structure below. Stage both edits before saving together to
avoid temporary prop errors. These instructor reference implementations include
the shared quantities and Empty basket. The runnable files currently contain the
live-refactored quantities and Empty basket too. Use the reset
instructions below when preparing to teach from stage 1.

### Store.tsx

```tsx
import { useState } from 'react'
import ProductCard from './ProductCard'

type Basket = {
  mugs: number
  notebooks: number
}

export default function Store() {
  const [basket, setBasket] = useState<Basket>({
    mugs: 0,
    notebooks: 0,
  })
  const totalCount = basket.mugs + basket.notebooks

  function emptyBasket() {
    setBasket({ mugs: 0, notebooks: 0 })
  }

  function addMug() {
    setBasket(previousBasket => ({
      ...previousBasket,
      mugs: previousBasket.mugs + 1,
    }))
  }

  function addNotebook() {
    setBasket(previousBasket => ({
      ...previousBasket,
      notebooks: previousBasket.notebooks + 1,
    }))
  }

  return (
    <div className="cart-sharing-store">
      <p className="cart-sharing-total" aria-live="polite">
        Your basket: {totalCount} items
      </p>
      <ProductCard
        productName="Coffee Mug"
        quantity={basket.mugs}
        onAdd={addMug}
      />
      <ProductCard
        productName="Notebook"
        quantity={basket.notebooks}
        onAdd={addNotebook}
      />
      <button className="cart-sharing-empty" onClick={emptyBasket}>
        Empty basket
      </button>
    </div>
  )
}
```

### ProductCard.tsx

```tsx
type ProductCardProps = {
  productName: string
  quantity: number
  onAdd: () => void
}

export default function ProductCard({
  productName,
  quantity,
  onAdd,
}: ProductCardProps) {
  return (
    <section className="cart-sharing-product" aria-label={productName}>
      <h3>{productName}</h3>
      <p aria-live="polite">Quantity: {quantity}</p>
      <button onClick={onAdd}>
        Add
      </button>
    </section>
  )
}
```

## Verify and reset

1. Save both final files and reload. Both quantities and the total are 0.
2. Add two mugs and one notebook. Quantities are 2 and 1; total 3.
3. Click Empty basket. Both quantities and the total are 0.
4. Empty again, then add one notebook: quantities 0 and 1, total 1.
5. Before teaching again, restore the starting versions: ProductCard owns its
   local quantity and calls onAdded; Store owns the separate count and
   handleAdded. Remove Empty basket and its handler, the basket, and derived
   values, then reload.

Continue to the three-rule summary and code-based quizzes.
