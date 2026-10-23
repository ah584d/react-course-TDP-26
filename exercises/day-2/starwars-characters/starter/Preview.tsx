import { starterHint, starterPhases } from "./constants";

export default function Preview() {
  return (
    <section className="lesson-card exercise-header-card">
      <div className="exercise-header-copy">
        <p className="eyebrow">Starter</p>
        <h2 className="exercise-title">Fetch and Render a List</h2>
      </div>

      <div className="exercise-task-block exercise-task-block-inline">
        <p className="eyebrow">Expected Result</p>
        <div
          style={{
            maxWidth: "700px",
            margin: "20px auto",
            border: "2px solid #61dafb",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          {/* Search box preview */}
          <div
            style={{
              padding: "1rem",
              background: "rgba(97, 218, 251, 0.05)",
              borderBottom: "1px solid #ddd",
            }}
          >
            <input
              type="text"
              placeholder="Search characters..."
              disabled
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "2px solid #61dafb",
                borderRadius: "8px",
                fontSize: "1rem",
              }}
            />
          </div>
          {/* Table preview */}
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead style={{ background: "rgba(97, 218, 251, 0.2)" }}>
              <tr>
                <th
                  style={{
                    padding: "1rem",
                    textAlign: "center",
                    width: "80px",
                    color: "#ffd700",
                    borderBottom: "2px solid #61dafb",
                  }}
                >
                  #
                </th>
                <th
                  style={{
                    padding: "1rem",
                    textAlign: "left",
                    color: "#ffd700",
                    borderBottom: "2px solid #61dafb",
                  }}
                >
                  Name
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                "Luke Skywalker",
                "C-3PO",
                "R2-D2",
                "Darth Vader",
                "Leia Organa",
              ].map((name, i) => (
                <tr key={i}>
                  <td
                    style={{
                      padding: "1rem",
                      textAlign: "center",
                      color: "#61dafb",
                      fontWeight: 600,
                      borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    {i + 1}
                  </td>
                  <td
                    style={{
                      padding: "1rem",
                      borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    {name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="exercise-task-block exercise-task-block-inline">
        <p className="eyebrow">Todo</p>
        <strong>StarWarsCharacters.tsx</strong>
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
  );
}
