import { starterHint, starterTasks } from "./constants";

export default function Preview() {
  return (
    <section className="lesson-card exercise-header-card">
      <div className="exercise-header-copy">
        <p className="eyebrow">File to edit</p>
        <code className="exercise-file-path">
          exercises/day-2/conditional-rendering/starter/entry.tsx
        </code>
        <p className="product-meta">
          Write your code in <strong>ConditionalRendering.tsx</strong>, next to
          entry.tsx.
        </p>
      </div>

      <div className="exercise-task-block exercise-task-block-inline">
        <p className="eyebrow">Expected Result</p>
        <p className="product-meta">
          Every user has a button. Premium users (Avraham, Yoav) show a ⭐ on
          the button, and when selected they also show a 🌟 Premium badge next
          to their name. The selected button is highlighted.
        </p>
      </div>

      <div className="exercise-task-block exercise-task-block-inline">
        <p className="eyebrow">Todo</p>
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
