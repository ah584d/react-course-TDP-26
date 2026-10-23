export default function Preview() {
  return (
    <section className="lesson-card exercise-header-card">
      <div className="exercise-header-copy">
        <p className="eyebrow">File to review</p>
        <code className="exercise-file-path">
          exercises/day-2/conditional-rendering/solution/entry.tsx
        </code>
        <p className="product-meta">
          The solution code lives in <strong>ConditionalRendering.tsx</strong>,
          next to entry.tsx.
        </p>
      </div>

      <div className="exercise-task-block exercise-task-block-inline">
        <p className="eyebrow">Completed</p>
        <p className="product-meta">
          Rendered a button for each user inside .map() with a unique key
          <br />
          Used a ternary to add the "active" class to the selected user
          <br />
          Used a ternary to show ⭐ only next to premium users
          <br />
          Used && to render the 🌟 Premium badge only when isPremium is true
        </p>
      </div>
    </section>
  );
}
