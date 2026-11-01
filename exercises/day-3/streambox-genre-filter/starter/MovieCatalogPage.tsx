import { Link } from 'react-router-dom'
import { GENRES, MOVIES } from '../../streambox-shared/movies'
import MovieCard from './MovieCard'

export default function MovieCatalogPage() {
  // TODO: Read genre from useSearchParams; use the URL as the source of truth.
  const genre: string = ''
  const knownGenre = genre === '' || GENRES.some((option) => option.id === genre)

  if (!knownGenre) {
    return (
      <section className="sb-page">
        <h2>Unsupported filter</h2>
        <p role="alert">The URL contains an unknown genre. Choose the supported filters by returning to the catalogue.</p>
        <p><Link to="/movies">Clear filters and browse</Link></p>
      </section>
    )
  }

  const filteredMovies = MOVIES.filter((movie) =>
    (genre === '' || movie.genre === genre)
  )

  return (
    <section className="sb-page">
      <h2>Browse movies</h2>
      <p className="sb-muted">Fictional films. Real navigation. Find your next movie night.</p>
      <nav aria-label="Genre shortcuts">
        {GENRES.map((option) => <Link key={option.id} to={`/movies?genre=${option.id}`}>{option.label}</Link>)}
      </nav>
      <p className="sb-todo">TODO: Connect genre to the URL, then enable the dropdown.</p>
      <div className="sb-filters">
        <label>
          Genre
          <select aria-label="Genre" value={genre} disabled>
            <option value="">All genres</option>
            {GENRES.map((option) => <option key={option.id} value={option.id}>{option.label}</option>)}
          </select>
        </label>
      </div>
      <p role="status">{filteredMovies.length} {filteredMovies.length === 1 ? 'movie' : 'movies'}</p>
      {filteredMovies.length === 0 && <p className="sb-error">No movies match. Try another search or clear your filters.</p>}
      <div className="sb-grid">
        {filteredMovies.map((movie) => (
          <Link key={movie.id} to={`/movies/${movie.id}`} className="sb-movie-link">
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
    </section>
  )
}
