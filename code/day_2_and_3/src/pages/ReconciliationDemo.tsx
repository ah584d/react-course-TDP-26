import { useState } from "react";
import "./ReconciliationDemo.css";

export default function ReconciliationDemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="recon-page">
      <h2 className="recon-title">Virtual DOM Demo</h2>
      <p className="recon-desc">
        Click the button. React re-renders this whole component — but look at
        the <strong>Elements</strong> tab: only the counter number flashes.
        Every other row is completely untouched in the real DOM.
      </p>

      <div className="recon-card">
        {/* These rows NEVER change → React skips DOM writes for them */}
        <div className="recon-row recon-row--static">
          <span className="recon-row__label">Title</span>
          <span className="recon-row__value">My App</span>
        </div>
        <div className="recon-row recon-row--static">
          <span className="recon-row__label">Status</span>
          <span className="recon-row__value">Active</span>
        </div>
        <div className="recon-row recon-row--static">
          <span className="recon-row__label">User</span>
          <span className="recon-row__value">Avraham</span>
        </div>

        {/* This row CHANGES → React writes only this text node to the DOM */}
        <div className="recon-row recon-row--active">
          <span className="recon-row__label">Count</span>
          <span className="recon-row__value recon-row__value--highlight">
            {count}
          </span>
        </div>
      </div>

      <button className="recon-btn" onClick={() => setCount((c) => c + 1)}>
        + Increment
      </button>

      <div className="recon-hint">
        <span className="recon-hint__icon">🔍</span>
        <span>
          Open <strong>Elements</strong> tab → expand to{" "}
          <code>.recon-row__value--highlight</code>. Click the button —{" "}
          <strong>only that text node flashes</strong>. The rows above never
          flash, even though React re-ran this entire component.
        </span>
      </div>
    </div>
  );
}
