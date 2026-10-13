import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./UseEffectBug.css";

function UseEffectBug() {
  const [updateCount, setUpdateCount] = useState(0);

  useEffect(() => {
    console.log("⚠️ Creating new timer...");
    const timer = setInterval(() => {
      setUpdateCount((prev) => prev + 1);
    }, 1000);

    // return () => {
    //   console.log("✅ Cleaning up timer...");
    //   clearInterval(timer);
    // };
  }, []);

  return (
    <div className="bug-example">
      <nav className="breadcrumb">
        <Link to="/">← Back to Home</Link>
      </nav>

      <h1>Memory Leak Bug Demo</h1>

      <div className="demo-container">
        <div className="clock-display">
          <div className="counter-display">
            <p className="counter-label">Updates:</p>
            <p className="counter-value">{updateCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseEffectBug;
