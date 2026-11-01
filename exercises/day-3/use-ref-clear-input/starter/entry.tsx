import "../UseRefClearInput.css";
import { meta } from "./constants";
import Preview from "./Preview";
import QuickNote from "./QuickNote";

export { meta };

export default function UseRefClearInputStarter() {
  return (
    <div className="lesson-surface">
      <Preview />

      <section className="lesson-card exercise-preview-card exercise-preview-card-large">
        <p className="eyebrow">Result area</p>
        <h3>Quick note</h3>
        <div className="exercise-preview-shell">
          <QuickNote />
        </div>
      </section>
    </div>
  );
}
