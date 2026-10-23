import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./UseEffectBug.css";

type TickerProps = {
  onTick: (time: string) => void;
};

function Ticker(props: TickerProps) {
  useEffect(() => {
    const timer = setInterval(() => {
      props.onTick(new Date().toLocaleTimeString());
    }, 1000);
    // uncomment the cleanup, then hide the timer again - the ticks stop
    // return () => {
    //   clearInterval(timer);
    // };
  }, []);

  return <p className="ticker-status">⏱ Ticker is mounted</p>;
}

function UseEffectBug() {
  const [showTimer, setShowTimer] = useState(true);
  const [lastTick, setLastTick] = useState("-");

  return (
    <div className="bug-example">
      <nav className="breadcrumb">
        <Link to="/">← Back to Home</Link>
      </nav>

      <h1>Memory Leak Bug Demo</h1>

      <div className="demo-container">
        <div className="clock-display">
          <button className="toggle-button" onClick={() => setShowTimer((prev) => !prev)}>
            {showTimer ? "Hide timer" : "Show timer"}
          </button>
          {showTimer && <Ticker onTick={setLastTick} />}
          <div className="counter-display">
            <p className="counter-label">Last tick:</p>
            <p className="counter-value">{lastTick}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseEffectBug;
