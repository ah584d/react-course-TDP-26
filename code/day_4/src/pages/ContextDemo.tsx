import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import "./ContextDemo.css";

function ContextDemo() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`context-demo ${theme}`}>
      <div className="container">
        <section className="back-menu">
          <nav>
            <Link to="/">← Back to Home</Link>
          </nav>
        </section>

        <h1>Theme Toggle with Context</h1>
        <p className="subtitle">
          Current theme: <strong>{theme}</strong>
        </p>

        <div className="content-card">
          <div className="plane-section">
            <h2>Flying with React Context</h2>
            <p>
              Context provides a way to pass data through the component tree
              without having to pass props down manually at every level.
            </p>
            <p>
              This theme preference is shared across all components that need
              it, without prop drilling!
            </p>
          </div>

          <button onClick={toggleTheme} className="toggle-button">
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </div>

        <div className="info-section">
          <h3>How it works:</h3>
          <ol>
            <li>
              <strong>Create Context:</strong> ThemeContext stores theme state
            </li>
            <li>
              <strong>Provider:</strong> Wraps the app to share the theme value
            </li>
            <li>
              <strong>useContext:</strong> Any component can access the theme
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default ContextDemo;
