import { useParams } from 'react-router-dom'
import { MOVIE_CAST } from '../../streambox-shared/movies'

export default function MovieCastPage() {
  const { movieId } = useParams()
  const cast = movieId ? MOVIE_CAST[movieId] : undefined

  return (
    <section className="sb-page">
      <h3>Cast</h3>
      <ul>{cast?.map((name) => <li key={name}>{name}</li>)}</ul>
    </section>
  )
}