import useCounterStore from "./useCounterStore";

export default function Counter() {
  // 2️⃣ Use the store - subscribe to state and actions
  const count = useCounterStore((state) => state.count);
  const add = useCounterStore((state) => state.add);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr",
        width: "400px",
        height: "200px",
        gap: "2px",
        backgroundColor: "#333",
        padding: "2px",
        margin: "20px auto",
      }}
    >
      {/* Left quarter: Add button */}
      <div
        style={{
          backgroundColor: "#4CAF50",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "white",
          fontSize: "24px",
          fontWeight: "bold",
        }}
        onClick={add}
      >
        Add
      </div>

      {/* Right quarter: Counter display */}
      <div
        style={{
          backgroundColor: "#2196F3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "48px",
          fontWeight: "bold",
        }}
      >
        {count}
      </div>
    </div>
  );
}
