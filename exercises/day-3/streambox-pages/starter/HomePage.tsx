import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <section className="sb-page">
      <h2>Welcome to StreamBox</h2>
      <p>Discover a new story for your next movie night, from space adventures to weekend comedies.</p>
      <p className="sb-muted">Our films are fictional. Explore the catalogue to find your favourite genre.</p>
      <p><Link to="/movies">Explore the movie library</Link></p>
    </section>
  )
}
