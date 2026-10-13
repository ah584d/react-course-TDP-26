import { starterHint, starterTasks } from "./constants";

export default function Preview() {
  return (
    <section className="lesson-card exercise-header-card">
      <div className="exercise-header-copy">
        <p className="eyebrow">Starter</p>
        <h2 className="exercise-title">Zustand Counter: 2×2 Grid</h2>
      </div>

      <div className="exercise-task-block exercise-task-block-inline">
        <p className="eyebrow">Expected Layout</p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            width: "300px",
            height: "300px",
            gap: "2px",
            backgroundColor: "#333",
            padding: "2px",
            margin: "20px auto",
          }}
        >
          <div
            style={{
              backgroundColor: "#4CAF50",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Add
          </div>
          <div
            style={{
              backgroundColor: "#2196F3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "36px",
              fontWeight: "bold",
            }}
          >
            0
          </div>
          <div
            style={{
              backgroundColor: "#ddd",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#999",
              fontSize: "36px",
              fontWeight: "bold",
            }}
          >
            0
          </div>
          <div
            style={{
              backgroundColor: "#ddd",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#999",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Remove
          </div>
        </div>
      </div>

      <div className="exercise-task-block exercise-task-block-inline">
        <p className="eyebrow">Todo</p>
        <strong>useCounterStore.ts & Counter.tsx</strong>
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
