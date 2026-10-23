export default function Preview() {
  return (
    <section className="lesson-card exercise-header-card">
      <div className="exercise-header-copy">
        <p className="eyebrow">Solution</p>
        <h2 className="exercise-title">Fetch data</h2>
      </div>

      <div className="exercise-task-block exercise-task-block-inline">
        <p className="eyebrow">Completed</p>
        <strong>exercises/day-2/fetch-data/solution/entry.tsx</strong>
        <p className="product-meta">
          ✅ Declared an async function inside useEffect
          <br />
          ✅ Used await with fetch and response.json()
          <br />
          ✅ Stored data.results in state
          <br />✅ Ran the effect once with an empty dependency array
        </p>
      </div>
    </section>
  );
}
