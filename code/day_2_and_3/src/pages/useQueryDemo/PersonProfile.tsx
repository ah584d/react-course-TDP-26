import type { UsePerson } from "./usePerson";

interface PersonProfileProps {
  personId: number;
  usePerson: UsePerson;
}

export default function PersonProfile(props: PersonProfileProps) {
  const { person, isPending, error } = props.usePerson(
    props.personId,
    "PersonProfile",
  );

  return (
    <section className="uq-panel">
      <p className="uq-panel-label">PersonProfile · shows the full profile</p>
      {isPending && <p className="uq-status">Loading...</p>}
      {error && <p className="uq-status uq-error">{error.message}</p>}
      {person && (
        <dl className="uq-details">
          <dt>Height</dt>
          <dd>{person.height} cm</dd>
          <dt>Mass</dt>
          <dd>{person.mass} kg</dd>
          <dt>Birth year</dt>
          <dd>{person.birth_year}</dd>
          <dt>Gender</dt>
          <dd>{person.gender}</dd>
        </dl>
      )}
    </section>
  );
}
