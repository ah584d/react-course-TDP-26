import { Link, useSearchParams } from 'react-router-dom'
import { GENRES, MOVIES } from '../../streambox-shared/movies'
import MovieCard from './MovieCard'

export default function MovieCatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const genre = searchParams.get('genre') ?? ''
  // TODO: Read q and sort from searchParams, with these defaults.
  const query = ''
  const sort: string = 'title'
  const knownGenre = genre === '' || GENRES.some((option) => option.id === genre)
  const knownSort = sort === 'title' || sort === 'newest'

  if (!knownGenre || !knownSort) {
    return (
      <section className="sb-page">
        <h2>Unsupported filter</h2>
        <p role="alert">The URL contains an unknown genre or sort order. Choose the supported filters by returning to the catalogue.</p>
        <p><Link to="/movies">Clear filters and browse</Link></p>
      </section>
    )
  }

  function updateFilter(name: 'genre' | 'q' | 'sort', filterValue: string, replace = false) {
    setSearchParams((previousParams) => {
      const nextParams = new URLSearchParams(previousParams)
      if (filterValue === '') {
        nextParams.delete(name)
      } else {
        nextParams.set(name, filterValue)
      }
      return nextParams
    }, { replace })
  }

  const filteredMovies = MOVIES.filter((movie) =>
    (genre === '' || movie.genre === genre) &&
    movie.title.toLowerCase().includes(query.trim().toLowerCase())
  ).sort((first, second) =>
    sort === 'newest' ? second.year - first.year || first.title.localeCompare(second.title) : first.title.localeCompare(second.title)
  )

  return (
    <section className="sb-page">
      <h2>Browse movies</h2>
      <p className="sb-muted">Fictional films. Real navigation. Find your next movie night.</p>
      <nav aria-label="Genre shortcuts">
        {GENRES.map((option) => <Link key={option.id} to={`/movies?genre=${option.id}`}>{option.label}</Link>)}
      </nav>
      <p className="sb-todo">Genre already works. TODO: Connect and enable search, sort, and Clear filters.</p>
      <div className="sb-filters">
        <label>
          Genre
          <select aria-label="Genre" value={genre} onChange={(event) => updateFilter('genre', event.target.value)}>
            <option value="">All genres</option>
            {GENRES.map((option) => <option key={option.id} value={option.id}>{option.label}</option>)}
          </select>
        </label>
        <label>
          Search titles
          <input type="search" value={query} disabled placeholder="Try space" />
        </label>
        <label>
          Sort
          <select aria-label="Sort" value={sort} disabled>
            <option value="title">Title A-Z</option>
            <option value="newest">Newest first</option>
          </select>
        </label>
        {/* TODO: Enable this button and delete genre, q, and sort with setSearchParams. */}
        <button type="button" disabled>Clear filters</button>
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
