import { starterHint, starterPhases } from './constants'

export default function Preview() {
  return (
    <section className="lesson-card exercise-header-card">
      <div className="exercise-header-copy">
        <p className="eyebrow">Starter</p>
        <h2 className="exercise-title">Mini Shop Checkout</h2>
        <code className="exercise-file-path">exercises/day-4/shop-checkout/starter/entry.tsx</code>
      </div>

      <div className="exercise-task-block exercise-task-block-inline">
        <p className="eyebrow">Todo</p>
        <strong>Zustand + useMutation + Error Boundary</strong>
        {starterPhases.map((phase) => (
          <div key={phase.title}>
            <p className="eyebrow">{phase.title}</p>
            <div className="task-list">
              {phase.tasks.map((task) => (
                <p key={task}>{task}</p>
              ))}
            </div>
          </div>
        ))}
        <p className="product-meta">{starterHint}</p>
      </div>
    </section>
  )
}
