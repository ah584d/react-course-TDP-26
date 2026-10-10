import { useState, useEffect, useCallback } from 'react'
import { meta } from './constants'
import Preview from './Preview'
import ProductRow from './ProductRow'

export { meta }

const initialProducts = [
  { id: 1, name: 'Wireless Keyboard', price: 49 },
  { id: 2, name: 'USB-C Hub', price: 35 },
  { id: 3, name: 'Monitor Stand', price: 79 },
  { id: 4, name: 'Webcam HD', price: 59 },
]

export default function StableProductRowsSolution() {
  const [products, setProducts] = useState(initialProducts)
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 80)
    return () => clearInterval(id)
  }, [])

  const removeProduct = useCallback((productId: number) => {
    setProducts((current) => current.filter((p) => p.id !== productId))
  }, [])

  return (
    <div className="lesson-surface">
      <Preview />

      <section className="lesson-card exercise-preview-card exercise-preview-card-large">
        <p className="eyebrow">Result area</p>
        <h3>Product List</h3>
        <p style={{ fontSize: '12px', opacity: 0.6 }}>Tick: {tick} (forces parent rerender every 80ms)</p>
        <div style={{ width: '100%', maxWidth: '400px' }}>
          {products.map((product) => (
            <ProductRow
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              onRemove={removeProduct}
            />
          ))}
          {products.length === 0 && <p style={{ textAlign: 'center', opacity: 0.5 }}>All products removed!</p>}
        </div>
      </section>
    </div>
  )
}
