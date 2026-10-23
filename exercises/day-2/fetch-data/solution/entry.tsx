import { useEffect, useState } from "react";
import { meta } from "./constants";
import Preview from "./Preview";

export { meta };

export default function FetchDataSolution() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchCharacters() {
      const response = await fetch("https://swapi.py4e.com/api/people/");
      const data = await response.json();
      setCharacters(data.results);
    }

    fetchCharacters();
  }, []);

  return (
    <div className="lesson-surface">
      <Preview />

      <section className="lesson-card exercise-preview-card exercise-preview-card-large">
        <p className="eyebrow">Result area</p>
        <h3>Star Wars characters</h3>
        <div className="exercise-preview-shell">
          <pre>{JSON.stringify(characters, null, 2)}</pre>
        </div>
      </section>
    </div>
  );
}
