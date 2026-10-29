import { useRef } from "react";

export default function QuickNote() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClear() {
    if (!inputRef.current) return;
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  return (
    <div className="urf-app">
      <div className="urf-row">
        <input
          ref={inputRef}
          className="urf-input"
          type="text"
          placeholder="Write a quick note..."
        />
        <button type="button" className="urf-button" onClick={handleClear}>
          Clear
        </button>
      </div>
      <p className="urf-hint">
        Type something, click Clear, then keep typing without clicking the
        input.
      </p>
    </div>
  );
}
