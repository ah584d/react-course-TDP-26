import { solutionTasks } from "./constants";

export default function Preview() {
  return (
    <section className="lesson-card exercise-header-card">
      <div className="exercise-header-copy">
        <p className="eyebrow">File to review</p>
        <code className="exercise-file-path">
          exercises/day-3/use-ref-clear-input/solution/entry.tsx
        </code>
      </div>

      <div className="exercise-task-block exercise-task-block-inline">
        <p className="eyebrow">Completed</p>
        <strong>QuickNote.tsx - clear and focus an input with useRef</strong>
        <div className="task-list">
          {solutionTasks.map((task) => (
            <p key={task}>{task}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
