import '../ShopCheckout.css'
import { meta } from './constants'
import Preview from './Preview'
import ShopCheckout from './ShopCheckout'

export { meta }

export default function ShopCheckoutSolution() {
  return (
    <div className="lesson-surface">
      <Preview />

      <section className="lesson-card exercise-preview-card exercise-preview-card-large">
        <p className="eyebrow">Result area</p>
        <h3>Mini shop checkout</h3>
        <div className="exercise-preview-shell">
          <ShopCheckout />
        </div>
      </section>
    </div>
  )
}
