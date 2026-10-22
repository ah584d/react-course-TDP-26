import { useState } from 'react'

type ProductCardProps = {
  productName: string
  onAdded: () => void
}

export default function ProductCard({ productName, onAdded }: ProductCardProps) {
  const [quantity, setQuantity] = useState<number>(0)

  function addProduct() {
    setQuantity(previousQuantity => previousQuantity + 1)
    onAdded()
  }

  return (
    <section className="cart-sharing-product" aria-label={productName}>
      <h3>{productName}</h3>
      <p aria-live="polite">Quantity: {quantity}</p>
      <button onClick={addProduct}>Add</button>
    </section>
  )
}
