import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./UseEffectClock.css";

function UseEffectClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("⚠️ Creating new timer...");
    const timer = setInterval(() => {
      console.log("⏰ Updating time...");
      setTime(new Date());
    }, 1000);

    return () => {
      console.log("✅ Cleaning up timer...");
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="clock-example">
      <nav className="breadcrumb">
        <Link to="/">← Back to Home</Link>
      </nav>

      <h1>useEffect: Clock Example</h1>

      <div className="demo-container">
        <div className="clock-display">
          <h1 className="time">{time.toLocaleTimeString()}</h1>
          <p className="date">{time.toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default UseEffectClock;
