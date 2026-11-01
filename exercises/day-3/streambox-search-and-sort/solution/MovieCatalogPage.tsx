import { Link, useSearchParams } from 'react-router-dom'
import { GENRES, MOVIES } from '../../streambox-shared/movies'
import MovieCard from './MovieCard'

export default function MovieCatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const genre = searchParams.get('genre') ?? ''
  const query = searchParams.get('q') ?? ''
  const sort = searchParams.get('sort') ?? 'title'
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

  function clearFilters() {
    setSearchParams((previousParams) => {
      const nextParams = new URLSearchParams(previousParams)
      nextParams.delete('genre')
      nextParams.delete('q')
      nextParams.delete('sort')
      return nextParams
    })
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
          <input type="search" value={query} onChange={(event) => updateFilter('q', event.target.value, true)} placeholder="Try space" />
        </label>
        <label>
          Sort
          <select aria-label="Sort" value={sort} onChange={(event) => updateFilter('sort', event.target.value)}>
            <option value="title">Title A-Z</option>
            <option value="newest">Newest first</option>
          </select>
        </label>
        <button type="button" onClick={clearFilters}>Clear filters</button>
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
