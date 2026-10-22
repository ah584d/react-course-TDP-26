import { useState } from 'react'
import ProductCard from './ProductCard'

export default function Store() {

  const [count, setCount] = useState<number>(0)


  function handleAdded() {
    setCount(previousCount => previousCount + 1)
  }
  function emptyBasket() {
    setCount(0)
  }
  return (
    <div className="cart-sharing-store">
      <p className="cart-sharing-total" aria-live="polite">
        Your basket: {count} items
      </p>
      <ProductCard productName="Coffee Mug" onAdded={handleAdded} />
      <ProductCard productName="Notebook" onAdded={handleAdded} />
      <button className="cart-sharing-empty" onClick={emptyBasket}>
        Empty basket
      </button>
    </div>
  )
}
