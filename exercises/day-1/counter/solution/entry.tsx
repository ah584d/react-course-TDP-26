import { useState } from 'react'
import CounterPreview from '../CounterPreview'
import '../Counter.css'

export { solutionMeta as meta } from '../constants'

export default function CounterSolution() {
  const [count, setCount] = useState(0)

  function handleIncrement() {
    setCount(previousCount => previousCount + 1)
  }

  function handleDecrement() {
    setCount(previousCount => previousCount - 1)
  }

  return (
    <div className="lesson-surface">
      <CounterPreview variant="solution" />
      <section className="lesson-card exercise-preview-card">
        <p className="eyebrow">Result area</p>
        <div className="counter-exercise">
          <output aria-label="Count" aria-live="polite">{count}</output>
          <div className="counter-exercise-controls">
            <button type="button" onClick={handleDecrement}>Decrement</button>
            <button type="button" onClick={handleIncrement}>Increment</button>
          </div>
        </div>
      </section>
    </div>
  )
}