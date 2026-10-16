import CounterPreview from '../CounterPreview'
import '../Counter.css'

export { starterMeta as meta } from '../constants'

export default function CounterStarter() {
  return (
    <div className="lesson-surface">
      <CounterPreview variant="starter" />
      <section className="lesson-card exercise-preview-card">
        <p className="eyebrow">Result area</p>
        <div className="counter-exercise">
          <output aria-label="Count" aria-live="polite">0</output>
          <div className="counter-exercise-controls">
            <button type="button">Decrement</button>
            <button type="button">Increment</button>
          </div>
        </div>
      </section>
    </div>
  )
}