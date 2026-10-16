import { useState } from 'react'

interface EpisodeCardProps {
  title: string
  host: string
}

export default function EpisodeCard(props: EpisodeCardProps) {
  const [likeCount, setLikeCount] = useState(0)
  const [note, setNote] = useState('')

  function handleLike() {
    setLikeCount(previousCount => previousCount + 1)
  }

  function handleNoteChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNote(event.target.value)
  }

  return (
    <article className="episode-card">
      <h2>{props.title}</h2>
      <p className="episode-host">Hosted by: {props.host}</p>

      <button className="episode-like-btn" onClick={handleLike}>
        Like
      </button>
      <p className="episode-likes">Likes: {likeCount}</p>

      <input
        type="text"
        placeholder="Add a personal note..."
        className="episode-note-input"
        onChange={handleNoteChange}
        value={note}
      />
      <p className="episode-note">Note: {note}</p>
    </article>
  )
}
