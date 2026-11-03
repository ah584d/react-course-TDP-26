import { lazy, Suspense, useState } from "react";
import { Link } from "react-router-dom";
import BrokenWidget from "../components/BrokenWidget.tsx";
import ErrorBoundary from "../components/ErrorBoundary.tsx";
import "./ContextDemo.css";
import "./ErrorHandlingDemo.css";

// Artificial delay so the Suspense fallback is visible
const SlowSettings = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return import("../components/SlowSettings.tsx");
});

function ErrorHandlingDemo() {
  // 1. try / catch + error state
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function loadUser(url: string) {
    setLoading(true);
    setError(null);
    setMessage(null);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const user = await res.json();
      setMessage(`Hello ${user.name}!`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  // 2. Error Boundary
  const [explode, setExplode] = useState(false);
  const [boundaryKey, setBoundaryKey] = useState(0);

  // 3. Suspense
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="context-demo dark">
      <div className="container">
        <section className="back-menu">
          <nav>
            <Link to="/">← Back to Home</Link>
          </nav>
        </section>

        <h1>Error Handling Demo</h1>
        <p className="subtitle">try / catch · Error Boundary · Suspense</p>

        <div className="demo-section">
          <h2>1. try / catch + error state</h2>
          <div className="demo-buttons">
            <button
              onClick={() =>
                loadUser("https://jsonplaceholder.typicode.com/users/1")
              }
            >
              ✅ Load user
            </button>
            <button
              onClick={() =>
                loadUser("https://jsonplaceholder.typicode.com/users/9999")
              }
            >
              ❌ Load missing user (404)
            </button>
            <button onClick={() => loadUser("http://localhost:1/nope")}>
              ❌ Network failure
            </button>
          </div>
          {loading && <p className="demo-result info">Loading...</p>}
          {message && <p className="demo-result success">{message}</p>}
          {error && <p className="demo-result error">❌ {error}</p>}
        </div>

        <div className="demo-section">
          <h2>2. Error Boundary</h2>
          <div className="demo-buttons">
            <button onClick={() => setExplode(true)}>
              💥 Render a broken component
            </button>
            <button
              onClick={() => {
                setExplode(false);
                setBoundaryKey(boundaryKey + 1);
              }}
            >
              🔄 Reset
            </button>
          </div>
          <ErrorBoundary
            key={boundaryKey}
            fallback={
              <p className="demo-result error">
                Something went wrong 😢 (the rest of the page still works)
              </p>
            }
          >
            {explode ? (
              <BrokenWidget />
            ) : (
              <p className="demo-result success">All good 🙂</p>
            )}
          </ErrorBoundary>
        </div>

        <div className="demo-section">
          <h2>3. Suspense (+ Error Boundary around it)</h2>
          <div className="demo-buttons">
            <button onClick={() => setShowSettings(true)}>
              ⏳ Load Settings (2s)
            </button>
          </div>
          <ErrorBoundary
            fallback={<p className="demo-result error">Failed to load 😢</p>}
          >
            <Suspense fallback={<p className="demo-result info">Loading...</p>}>
              {showSettings && <SlowSettings />}
            </Suspense>
          </ErrorBoundary>
          <p className="subtitle">Reload the page to see the loading again</p>
        </div>
      </div>
    </div>
  );
}

export default ErrorHandlingDemo;
