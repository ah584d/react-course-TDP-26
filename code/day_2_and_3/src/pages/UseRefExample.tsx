import { useRef } from "react";
import { Link } from "react-router-dom";
import "./UseRefExample.css";

function UseRefExample() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();

    // Add visual flash effect
    // inputRef.current?.classList.add("flash-focus");
    // setTimeout(() => {
    //   inputRef.current?.classList.remove("flash-focus");
    // }, 500);
  };

  return (
    <div className="useref-example">
      <nav className="breadcrumb">
        <Link to="/">← Back to Home</Link>
      </nav>

      <h1>useRef: Focus Input Example</h1>

      <div className="info-box">
        <h3>🎯 Example: Focus Input with useRef</h3>
        <p>
          This example demonstrates <strong>useRef</strong> to access and
          manipulate a DOM element directly.
        </p>
        <p>
          <strong>Key Concept:</strong> useRef accesses DOM elements without
          triggering re-renders.
        </p>
      </div>

      <div className="demo-container">
        <div className="focus-container">
          <input
            ref={inputRef}
            type="text"
            placeholder="Click the button below to focus me!"
            className="focus-input"
          />
          <button onClick={handleFocus} className="focus-button">
            🎯 Focus Input
          </button>
        </div>

        <div className="explanation-box">
          <p>
            <strong>Try this:</strong> Click the "Focus Input" button and watch
            the special flash effect!
          </p>
          <p>
            Notice how the button programmatically focuses the input with a
            visual animation - this is different from just clicking into the
            input field.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UseRefExample;
