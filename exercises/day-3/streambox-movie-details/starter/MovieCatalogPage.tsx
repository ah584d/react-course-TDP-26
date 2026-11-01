import { MOVIES } from '../../streambox-shared/movies'
import MovieCard from './MovieCard'

export default function MovieCatalogPage() {

  return (
    <section className="sb-page">
      <h2>Browse movies</h2>
      <p className="sb-muted">Fictional films. Real navigation. Find your next movie night.</p>
      <div className="sb-grid">
        {MOVIES.map((movie) => (
          // TODO: Wrap MovieCard in a Link to this movie and move key onto Link.
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  )
}
