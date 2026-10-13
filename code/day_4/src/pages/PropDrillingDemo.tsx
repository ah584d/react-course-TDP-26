import { useState } from "react";
import { Link } from "react-router-dom";
import "./ContextDemo.css";

type ThemeProps = {
  theme: string;
  toggleTheme: () => void;
};

// ─── Deeply nested components that RECEIVE props but DON'T USE them ───

function Header({ theme, toggleTheme }: ThemeProps) {
  return (
    <header className="prop-drill-header">
      <Navigation theme={theme} toggleTheme={toggleTheme} />
    </header>
  );
}

function Navigation({ theme, toggleTheme }: ThemeProps) {
  return (
    <nav className="prop-drill-nav">
      <NavActions theme={theme} toggleTheme={toggleTheme} />
    </nav>
  );
}

function NavActions({ theme, toggleTheme }: ThemeProps) {
  return (
    <div className="prop-drill-actions">
      <ThemeButton theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

function ThemeButton({ theme, toggleTheme }: ThemeProps) {
  return (
    <button onClick={toggleTheme} className="toggle-button">
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

// ─── Content branch — also receives theme just to render styling ───

function MainContent({ theme }: { theme: string }) {
  return (
    <div className="prop-drill-content">
      <ContentCard theme={theme} />
      <InfoPanel theme={theme} />
    </div>
  );
}

function ContentCard({ theme }: { theme: string }) {
  return (
    <div className="content-card">
      <PlaneSection theme={theme} />
    </div>
  );
}

function PlaneSection({ theme }: { theme: string }) {
  return (
    <div className="plane-section">
      <h2>Flying with Prop Drilling ✈️</h2>
      <p>
        This page passes <strong>theme</strong> and{" "}
        <strong>toggleTheme</strong> through{" "}
        <span style={{ color: "#ef4444", fontWeight: 700 }}>4 layers</span> of
        components that don't use them — just to reach the button.
      </p>
      <p>
        Open <strong>React DevTools → Profiler → Highlight updates</strong> and
        click the toggle button. Notice{" "}
        <span style={{ color: "#ef4444" }}>every component flashes</span>{" "}
        because they all re-render!
      </p>
      <p className="current-theme-label">
        Current theme: <strong>{theme}</strong>
      </p>
    </div>
  );
}

function InfoPanel({ theme }: { theme: string }) {
  void theme; // not really needed — just drilling
  return (
    <div className="info-section">
      <h3>Prop Drilling path:</h3>
      <ol>
        <li>
          <strong>PropDrillingDemo</strong> — owns state (theme, toggleTheme)
        </li>
        <li>
          <strong>Header</strong> — passes props down ❌ doesn't use them
        </li>
        <li>
          <strong>Navigation</strong> — passes props down ❌ doesn't use them
        </li>
        <li>
          <strong>NavActions</strong> — passes props down ❌ doesn't use them
        </li>
        <li>
          <strong>ThemeButton</strong> — finally uses toggleTheme ✅
        </li>
      </ol>
    </div>
  );
}

// ─── Root page component — state lives here ───

function PropDrillingDemo() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <div className={`context-demo ${theme}`}>
      <div className="container">
        <section className="back-menu">
          <nav>
            <Link to="/">← Back to Home</Link>
          </nav>
        </section>

        <h1>Prop Drilling Demo</h1>
        <p className="subtitle">
          Current theme: <strong>{theme}</strong>
        </p>

        {/* Props drilled through multiple layers */}
        <Header theme={theme} toggleTheme={toggleTheme} />
        <MainContent theme={theme} />
      </div>
    </div>
  );
}

export default PropDrillingDemo;
