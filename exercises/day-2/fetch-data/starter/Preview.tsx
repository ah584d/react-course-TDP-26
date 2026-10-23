import { starterHint, starterTasks } from "./constants";

export default function Preview() {
  return (
    <section className="lesson-card exercise-header-card">
      <div className="exercise-header-copy">
        <p className="eyebrow">Starter</p>
        <h2 className="exercise-title">Fetch data</h2>
      </div>

      <div className="exercise-task-block exercise-task-block-inline">
        <p className="eyebrow">Todo</p>
        <strong>exercises/day-2/fetch-data/starter/entry.tsx</strong>
        <div className="task-list">
          {starterTasks.map((task) => (
            <p key={task}>{task}</p>
          ))}
        </div>
        <p className="product-meta">{starterHint}</p>
      </div>
    </section>
  );
}
