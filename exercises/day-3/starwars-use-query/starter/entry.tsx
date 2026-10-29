import '../StarWarsUseQuery.css'
import { meta } from './constants'
import Preview from './Preview'
import StarWarsPerson from './StarWarsPerson'

export { meta }

export default function StarWarsUseQueryStarter() {
  return (
    <div className="lesson-surface">
      <Preview />

      <section className="lesson-card exercise-preview-card exercise-preview-card-large">
        <p className="eyebrow">Result area</p>
        <h3>Star Wars person viewer</h3>
        <div className="exercise-preview-shell">
          <StarWarsPerson />
        </div>
      </section>
    </div>
  )
}
