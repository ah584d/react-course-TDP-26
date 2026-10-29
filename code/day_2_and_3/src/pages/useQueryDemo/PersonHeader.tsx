import type { UsePerson } from "./usePerson";

interface PersonHeaderProps {
  personId: number;
  usePerson: UsePerson;
}

export default function PersonHeader(props: PersonHeaderProps) {
  const { person, isPending, error } = props.usePerson(
    props.personId,
    "PersonHeader",
  );

  return (
    <section className="uq-panel">
      <p className="uq-panel-label">PersonHeader · shows the name</p>
      {isPending && <p className="uq-status">Loading...</p>}
      {error && <p className="uq-status uq-error">{error.message}</p>}
      {person && <h2 className="uq-name">{person.name}</h2>}
    </section>
  );
}
