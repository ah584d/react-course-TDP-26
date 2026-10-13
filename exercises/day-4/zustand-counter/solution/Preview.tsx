export default function Preview() {
  return (
    <section className="lesson-card exercise-header-card">
      <div className="exercise-header-copy">
        <p className="eyebrow">Solution</p>
        <h2 className="exercise-title">Zustand Counter: 2×2 Grid</h2>
      </div>

      <div className="exercise-task-block exercise-task-block-inline">
        <p className="eyebrow">Completed</p>
        <strong>useCounterStore.ts & Counter.tsx</strong>
        <p className="product-meta">
          ✅ Created 2×2 grid layout (4 quarters)
          <br />
          ✅ Added "Add" button in top-left quarter
          <br />
          ✅ Added "Remove" button in bottom-right quarter
          <br />✅ Both counter displays show synchronized value
        </p>
      </div>
    </section>
  );
}
