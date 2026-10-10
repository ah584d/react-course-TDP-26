import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./UseRefCounter.css";

function UseRefCounter() {
  const [stateCount, setStateCount] = useState(0);
  const [displayRefCount, setDisplayRefCount] = useState(0);
  const refCount = useRef(0);
  const renderCount = useRef(0);

  // Track renders using ref (we update display separately)
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  const handleStateClick = () => {
    setStateCount(stateCount + 1); // ✅ Triggers re-render
  };

  const handleRefClick = () => {
    refCount.current++; // ❌ No re-render
    console.log("Ref count:", refCount.current);
    alert(
      `Ref count is now ${refCount.current}, but screen won't update until you force re-render!`,
    );
  };

  const showRefValue = () => {
    // Force a re-render to see the current ref value
    setDisplayRefCount(refCount.current);
  };

  return (
    <div className="useref-counter-page">
      <nav className="breadcrumb">
        <Link to="/">← Back to Home</Link>
      </nav>

      <h1>useRef: Constant Reference Demo</h1>
      <p className="subtitle">See the difference between useState and useRef</p>

      <div className="counter-container">
        <div className="info-card renders">
          <div className="label">State-Triggered Renders</div>
          <div className="value">{stateCount + 1}</div>
          <div className="description">Initial render + state updates</div>
        </div>

        <div className="counters-grid">
          <div className="counter-card state-counter">
            <h3>useState Counter</h3>
            <div className="counter-value">{stateCount}</div>
            <button
              className="counter-btn state-btn"
              onClick={handleStateClick}
            >
              ✅ Increment State (+1)
            </button>
            <div className="counter-info">Triggers re-render immediately</div>
          </div>

          <div className="counter-card ref-counter">
            <h3>useRef Counter (Hidden)</h3>
            <div className="counter-value">{displayRefCount}</div>
            <button className="counter-btn ref-btn" onClick={handleRefClick}>
              ❌ Increment Ref (+1)
            </button>
            <div className="counter-info">No re-render - check console!</div>
          </div>
        </div>

        <div className="action-buttons">
          <button className="action-btn" onClick={showRefValue}>
            🔄 Force Re-render to See Ref Value
          </button>
        </div>

        <div className="explanation-card">
          <h3>💡 Key Takeaways</h3>
          <ul>
            <li>
              <strong>useState:</strong> Updates cause immediate re-renders and
              UI updates
            </li>
            <li>
              <strong>useRef:</strong> Values persist across renders but don't
              trigger re-renders
            </li>
            <li>
              <strong>Use Case:</strong> Perfect for tracking values without
              affecting UI (timers, previous values, counters)
            </li>
            <li>
              <strong>Render Count:</strong> useRef is great for tracking how
              many times a component rendered
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UseRefCounter;
