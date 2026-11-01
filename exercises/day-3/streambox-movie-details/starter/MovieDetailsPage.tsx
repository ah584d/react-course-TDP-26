import { Link } from 'react-router-dom'
import { GENRES, MOVIES } from '../../streambox-shared/movies'

export default function MovieDetailsPage() {
  // TODO: Read movieId from useParams instead of always showing movie 101.
  const movieId = '101'
  const movie = MOVIES.find((movie) => movie.id === movieId)

  if (!movie) {
    return (
      <section className="sb-page">
        <h2>Movie not found</h2>
        <p>There is no movie with ID {movieId}.</p>
        <p><Link to="/movies">Back to catalogue</Link></p>
      </section>
    )
  }

  return (
    <section className="sb-page">
      <Link to="/movies">Back to catalogue</Link>
      <article className="sb-details">
        <h3>Details</h3>
        <p className="sb-muted">{GENRES.find((genre) => genre.id === movie.genre)?.label} / {movie.year} / {movie.duration} min</p>
        <p>{movie.description}</p>
      </article>
    </section>
  )
}
