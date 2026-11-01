export default function HelpPage() {
  return (
    <section className="sb-page">
      <h2>Help</h2>
      <p className="sb-muted">Welcome to our fictional streaming catalogue.</p>
      <details className="sb-faq">
        <summary>Can I watch these movies?</summary>
        <p>No. The titles are fictional and this app teaches navigation, not video playback.</p>
      </details>
      <details className="sb-faq">
        <summary>Where can I find my plan?</summary>
        <p>Open Account in the shared navigation to see the sample profile and plan.</p>
      </details>
      <details className="sb-faq">
        <summary>What will we add as the course progresses?</summary>
        <p>A movie-library layout, movie details, genre filtering, search, and sorting, one independent checkpoint at a time.</p>
      </details>
    </section>
  )
}
