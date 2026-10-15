import ProductCard from './ProductCard'

export default function ProductCounterDemo() {
  return (
    <div className="lesson-surface">
      <section className="lesson-card exercise-header-card">
        <div className="exercise-header-copy">
          <p className="eyebrow">File to review</p>
          <code className="exercise-file-path">demo/day-1/product-counter/ProductCard.tsx</code>
        </div>
      </section>

      <section className="lesson-card exercise-preview-card exercise-preview-card-large">
        <p className="eyebrow">Day 1 demo</p>
        <h3>Product Counter</h3>
        <div className="exercise-preview-shell">
          <ProductCard />
        </div>
      </section>
    </div>
  )
}
