import useCounterStore from "./useCounterStore";

export default function Counter() {
  // 2️⃣ Use the store - subscribe to state and actions
  const count = useCounterStore((state) => state.count);
  const add = useCounterStore((state) => state.add);
  const remove = useCounterStore((state) => state.remove);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        width: "400px",
        height: "400px",
        gap: "2px",
        backgroundColor: "#333",
        padding: "2px",
        margin: "20px auto",
      }}
    >
      {/* Top-left quarter: Add button */}
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

      {/* Top-right quarter: Counter display */}
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

      {/* Bottom-left quarter: Counter display */}
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

      {/* Bottom-right quarter: Remove button */}
      <div
        style={{
          backgroundColor: "#f44336",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "white",
          fontSize: "24px",
          fontWeight: "bold",
        }}
        onClick={remove}
      >
        Remove
      </div>
    </div>
  );
}
