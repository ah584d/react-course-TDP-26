import { usePerson } from './usePerson'

interface PersonHeaderProps {
  personId: number
}

export default function PersonHeader(props: PersonHeaderProps) {
  const { data: person, isPending, error } = usePerson(props.personId)

  return (
    <section className="swq-panel">
      <p className="swq-panel-label">Header · shows the name only</p>
      {isPending && <p className="swq-status">Loading...</p>}
      {error && <p className="swq-status swq-status-error">{error.message}</p>}
      {!isPending && !error && !person && <p className="swq-status">No data yet</p>}
      {person && <h2 className="swq-name">{person.name}</h2>}
    </section>
  )
}
