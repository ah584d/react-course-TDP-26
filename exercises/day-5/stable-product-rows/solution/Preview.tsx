export default function Preview() {
  return (
    <section className="lesson-card exercise-header-card">
      <div className="exercise-header-copy">
        <p className="eyebrow">File to edit</p>
        <code className="exercise-file-path">exercises/day-4/stable-product-rows/solution/entry.tsx</code>
      </div>

      <div className="exercise-task-block exercise-task-block-inline">
        <p className="eyebrow">Completed</p>
        <strong>Rerenders stabilized with memo + useCallback</strong>
      </div>
    </section>
  )
}
