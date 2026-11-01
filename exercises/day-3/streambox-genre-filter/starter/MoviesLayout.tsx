import { Link, Outlet, useParams } from 'react-router-dom'
import { MOVIES } from '../../streambox-shared/movies'

export default function MoviesLayout() {
  const { movieId } = useParams()
  const movie = MOVIES.find((candidate) => candidate.id === movieId)

  if (!movie) {
    return <section className="sb-page"><h2>Movie not found</h2><Link to="/movies">Back to catalogue</Link></section>
  }

  return (
    <section aria-label={movie.title}>
      <header className="sb-library-header">
        <h2>{movie.title}</h2>
        <nav aria-label="Movie navigation">
          <Link to="/movies">All movies</Link>
          <Link to={`/movies/${movie.id}`}>Details</Link>
          <Link to={`/movies/${movie.id}/cast`}>Cast</Link>
        </nav>
      </header>
      <Outlet />
    </section>
  )
}
