import { meta } from './constants'
import Preview from './Preview'
import Counter from './Counter'

export { meta }

export default function ZustandCounterSolution() {
  return (
    <div className="lesson-surface">
      <Preview />

      <section className="lesson-card exercise-preview-card exercise-preview-card-large">
        <p className="eyebrow">Result area</p>
        <h3>Your Zustand counter</h3>
        <div className="exercise-preview-shell">
          <Counter />
        </div>
      </section>
    </div>
  )
}
