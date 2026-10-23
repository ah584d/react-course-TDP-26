export default function Preview() {
  return (
    <section className="lesson-card exercise-header-card">
      <div className="exercise-header-copy">
        <p className="eyebrow">Solution</p>
        <h2 className="exercise-title">Task List</h2>
      </div>

      <div className="exercise-task-block exercise-task-block-inline">
        <p className="eyebrow">Completed</p>
        <strong>TaskList.tsx</strong>
        <p className="product-meta">
          Created array of tasks with id, title
          <br />
          Used .map() to render list items
          <br />
          Added key prop for each item
        </p>
      </div>
    </section>
  );
}
