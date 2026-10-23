import { meta } from "./constants";
import ConditionalRendering from "./ConditionalRendering";
import "./ConditionalRendering.css";
import Preview from "./Preview";

export { meta };

export default function ConditionalRenderingStarter() {
  return (
    <div className="lesson-surface">
      <Preview />

      <section className="lesson-card exercise-preview-card exercise-preview-card-large">
        <p className="eyebrow">Result area</p>
        <h3>Your user profile</h3>
        <div className="exercise-preview-shell">
          <ConditionalRendering />
        </div>
      </section>
    </div>
  );
}
