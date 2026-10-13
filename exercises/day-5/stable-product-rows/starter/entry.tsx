import { useState, useEffect } from 'react'
import { initialProducts, meta } from './constants'
import Preview from './Preview'
import ProductRow from './ProductRow'
import './styles.css'

export { meta }

export default function StableProductRowsStarter() {
  const [products, setProducts] = useState(initialProducts)
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 80)
    return () => clearInterval(id)
  }, [])

  const removeProduct = (productId: number) => {
    setProducts(products.filter((p) => p.id !== productId))
  }

  return (
    <div className="lesson-surface">
      <Preview />

      <section className="lesson-card exercise-preview-card exercise-preview-card-large">
        <p className="eyebrow">Result area</p>
        <h3>Product List</h3>
        <p className="tick-label">Tick: {tick} (forces parent rerender every 80ms)</p>
        <div className="product-list-container">
          {products.map((product) => (
            <ProductRow
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              onRemove={removeProduct}
            />
          ))}
          {products.length === 0 && <p className="empty-message">All products removed!</p>}
        </div>
      </section>
    </div>
  )
}
