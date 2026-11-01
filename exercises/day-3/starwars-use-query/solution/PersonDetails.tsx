import { usePerson } from './usePerson'

interface PersonDetailsProps {
  personId: number
}

export default function PersonDetails(props: PersonDetailsProps) {
  const { data: person, isPending, error } = usePerson(props.personId)

  return (
    <section className="swq-panel">
      <p className="swq-panel-label">Details · shows the full profile</p>
      {isPending && <p className="swq-status">Loading...</p>}
      {error && <p className="swq-status swq-status-error">{error.message}</p>}
      {!isPending && !error && !person && <p className="swq-status">No data yet</p>}
      {person && (
        <dl className="swq-details">
          <div>
            <dt>Height</dt>
            <dd>{person.height} cm</dd>
          </div>
          <div>
            <dt>Mass</dt>
            <dd>{person.mass} kg</dd>
          </div>
          <div>
            <dt>Birth year</dt>
            <dd>{person.birth_year}</dd>
          </div>
          <div>
            <dt>Gender</dt>
            <dd>{person.gender}</dd>
          </div>
          <div>
            <dt>Hair color</dt>
            <dd>{person.hair_color}</dd>
          </div>
          <div>
            <dt>Eye color</dt>
            <dd>{person.eye_color}</dd>
          </div>
        </dl>
      )}
    </section>
  )
}
