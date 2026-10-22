import { useState } from 'react'

type Product = {
  id: number
  name: string
  price: number
}

const product: Product = { id: 1, name: 'Coffee Mug', price: 12 }

export default function Cart() {
  const [cart, setCart] = useState<Product[]>([])

  function addToCart() {
    cart.push(product)
    setCart(cart)
  }

  return (
    <>
      <p className="cart-state-badge" aria-live="polite">
        Cart items: {cart.length}
      </p>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </>
  )
}
