import { Link } from 'react-router-dom'

export default function MoviesLayout() {
  return (
    <section aria-label="Movie library">
      <header className="sb-library-header">
        <h2>Movie library</h2>
        <p className="sb-muted">Explore stories for every movie night.</p>
        <nav aria-label="Movie navigation">
          <Link to="/movies">All movies</Link>
        </nav>
      </header>
      {/* TODO: Replace this message with Outlet to render the movies index child. */}
      <p className="sb-todo">The movie library needs its own Outlet here.</p>
    </section>
  )
}
