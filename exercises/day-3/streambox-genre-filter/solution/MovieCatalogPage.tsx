import { Link, useSearchParams } from 'react-router-dom'
import { GENRES, MOVIES } from '../../streambox-shared/movies'
import MovieCard from './MovieCard'

export default function MovieCatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const genre = searchParams.get('genre') ?? ''
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

  function changeGenre(nextGenre: string) {
    setSearchParams((previousParams) => {
      const nextParams = new URLSearchParams(previousParams)
      if (nextGenre === '') {
        nextParams.delete('genre')
      } else {
        nextParams.set('genre', nextGenre)
      }
      return nextParams
    })
  }

  const filteredMovies = MOVIES.filter((movie) =>
    (genre === '' || movie.genre === genre)
  )

  return (
    <section className="sb-page">
      <h2>Browse movies</h2>
      <p className="sb-muted">Fictional films. Real navigation. Find your next movie night.</p>
      <div className="sb-filters">
        <label>
          Genre
          <select aria-label="Genre" value={genre} onChange={(event) => changeGenre(event.target.value)}>
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
