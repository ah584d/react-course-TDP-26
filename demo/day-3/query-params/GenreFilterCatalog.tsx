import { useSearchParams } from 'react-router-dom'
import { GENRES, MOVIES } from '../../../exercises/day-3/streambox-shared/movies'

export default function GenreFilterCatalog() {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedGenre = searchParams.get('genre') ?? ''
  const visibleMovies = MOVIES.filter((movie) => !selectedGenre || movie.genre === selectedGenre)

  function chooseGenre(nextGenre: string) {
    setSearchParams((previousParams) => {
      const nextParams = new URLSearchParams(previousParams)
      if (nextGenre) nextParams.set('genre', nextGenre)
      else nextParams.delete('genre')
      return nextParams
    })
  }

  return (
    <section className="sb-page sb-genre-demo">
      <h2>Filter movies by genre</h2>
      <div className="sb-filters sb-genre-buttons" role="group" aria-label="Filter by genre">
        <button type="button" aria-pressed={!selectedGenre} onClick={() => chooseGenre('')}>All genres</button>
        {GENRES.map((genre) => (
          <button
            key={genre.id}
            type="button"
            aria-pressed={selectedGenre === genre.id}
            onClick={() => chooseGenre(genre.id)}
          >
            {genre.label}
          </button>
        ))}
      </div>
      <p className="sb-muted" role="status">
        Showing {visibleMovies.length} {visibleMovies.length === 1 ? 'movie' : 'movies'}
        {selectedGenre ? ` in ${GENRES.find((genre) => genre.id === selectedGenre)?.label ?? selectedGenre}` : ''}
      </p>
      <ul className="sb-genre-results">
        {visibleMovies.map((movie) => (
          <li key={movie.id}>
            <span>{movie.title}</span>
            <span>{GENRES.find((genre) => genre.id === movie.genre)?.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}