import { GENRES } from '../../streambox-shared/movies'
import type { Movie } from '../../streambox-shared/movies'

interface MovieCardProps {
  movie: Movie
}

export default function MovieCard(props: MovieCardProps) {
  return (
    <article className="sb-movie" data-genre={props.movie.genre}>
      <h3>{props.movie.title}</h3>
      <p className="sb-muted">{GENRES.find((genre) => genre.id === props.movie.genre)?.label}</p>
      <p>{props.movie.year} / {props.movie.duration} min</p>
    </article>
  )
}
