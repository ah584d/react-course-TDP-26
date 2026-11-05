import { Link } from "react-router-dom";
import DrillDownCard from "../components/DrillDownCard.tsx";
import "./ContextDemo.css";
import "./ChildrenDemo.css";

function ChildrenDemo() {
  return (
    <div className="context-demo light children-demo">
      <div className="container">
        <section className="back-menu">
          <nav>
            <Link to="/">← Back to Home</Link>
          </nav>
        </section>

        <h1>Children Demo</h1>
        <p className="subtitle">
          Same wrapper, different content - thanks to <code>children</code>
        </p>

        <h2>DrillDownCard - click to reveal</h2>
        <DrillDownCard title="Plain text">
          <p>Just a paragraph inside the card.</p>
        </DrillDownCard>
        <DrillDownCard title="A list">
          <ul>
            <li>Any element</li>
            <li>Any component</li>
            <li>Even another DrillDownCard</li>
          </ul>
        </DrillDownCard>
        <DrillDownCard title="Nested card">
          <DrillDownCard title="Go deeper">
            <p>🎉 Cards inside cards, all via children.</p>
          </DrillDownCard>
        </DrillDownCard>
      </div>
    </div>
  );
}

export default ChildrenDemo;
