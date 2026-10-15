import { meta } from './constants'
import ProductCard from './ProductCard'
import Preview from './Preview'

export { meta }

export default function BuildProductCardWithPropSolution() {

  return (
    <div className="lesson-surface">
      <Preview />

      <section className="lesson-card exercise-preview-card exercise-preview-card-large">
        <p className="eyebrow">Result area</p>
        <h3>Your product card</h3>
        <div className="exercise-preview-shell">
          <ProductCard />
        </div>
      </section>
    </div>
  )
}
