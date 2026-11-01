import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="sb-page">
      <h2>Page not found</h2>
      <p>This address does not match a StreamBox page.</p>
      <p><Link to="/movies">Browse movies</Link></p>
    </section>
  )
}
