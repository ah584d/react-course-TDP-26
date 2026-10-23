import { useState } from 'react'

export default function CartSummary() {
  const [cart, setCart] = useState<string[]>(['Mug', 'Notebook'])
  const [cartCount, setCartCount] = useState<number>(2)

  function emptyCart() {
    setCart([])
  }

  return (
    <>
      <h3>Products in your cart</h3>
        {cart.join(', ')}
      <p aria-live="polite">Total items: {cartCount}</p>
      <button onClick={emptyCart}>Empty cart</button>
    </>
  )
}
