import { Link, useSearchParams } from 'react-router-dom'
import { MOVIES } from '../../../exercises/day-3/streambox-shared/movies'
import MovieCard from '../../../exercises/day-3/streambox-search-and-sort/solution/MovieCard'

const years = [...new Set(MOVIES.map((movie) => movie.year))].sort((first, second) => second - first)

export default function YearFilterCatalog() {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedYears = new Set((searchParams.get('years') ?? '').split(',').filter(Boolean))
  const visibleMovies = MOVIES.filter((movie) => selectedYears.size === 0 || selectedYears.has(String(movie.year)))

  function toggleYear(year: number) {
    const nextYears = new Set(selectedYears)
    if (nextYears.has(String(year))) nextYears.delete(String(year))
    else nextYears.add(String(year))

    setSearchParams((previousParams) => {
      const nextParams = new URLSearchParams(previousParams)
      const selected = years.filter((option) => nextYears.has(String(option)))
      if (selected.length) nextParams.set('years', selected.join(','))
      else nextParams.delete('years')
      return nextParams
    })
  }

  return (
    <section className="sb-page">
      <h2>Browse by release year</h2>
      <p><Link to="/movies">All movies</Link></p>
      <div className="sb-filters sb-year-filter" role="group" aria-label="Release years">
        {years.map((year) => (
          <label key={year}>
            <input type="checkbox" checked={selectedYears.has(String(year))} onChange={() => toggleYear(year)} />
            {year}
          </label>
        ))}
      </div>
      <p role="status">{visibleMovies.length} {visibleMovies.length === 1 ? 'movie' : 'movies'}</p>
      <div className="sb-grid">
        {visibleMovies.map((movie) => (
          <Link key={movie.id} to={`/movies/${movie.id}`} className="sb-movie-link">
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
    </section>
  )
}