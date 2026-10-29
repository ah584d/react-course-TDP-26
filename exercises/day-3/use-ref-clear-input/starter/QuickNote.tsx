// TODO: Make the Clear button empty the input and put the cursor back in it.
//   1. Import useRef from "react" and create inputRef = useRef<HTMLInputElement>(null)
//   2. Attach it to the input with ref={inputRef}
//   3. In handleClear, set inputRef.current.value = "" and call inputRef.current.focus()
export default function QuickNote() {
  function handleClear() {
    // TODO: clear and focus the input here
  }

  return (
    <div className="urf-app">
      <div className="urf-row">
        <input
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
