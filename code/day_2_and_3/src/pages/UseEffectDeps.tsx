import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./UseEffectDeps.css";

const CHARACTERS = [
  { id: 1, label: "Luke" },
  { id: 2, label: "C-3PO" },
  { id: 3, label: "R2-D2" },
  { id: 4, label: "Vader" },
  { id: 5, label: "Leia" },
];

interface StarWarsCharacter {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

function UseEffectDeps() {
  const [selectedId, setSelectedId] = useState(1);
  const [character, setCharacter] = useState<StarWarsCharacter | null>(null);

  useEffect(() => {
    async function fetchCharacter() {
      const response = await fetch(
        `https://swapi.py4e.com/api/people/${selectedId}/`,
      );
      const data = await response.json();
      setCharacter(data);
    }

    fetchCharacter();
  }, [selectedId]); // ← re-runs every time selectedId changes

  return (
    <div className="deps-page">
      <nav className="breadcrumb">
        <Link to="/">← Back to Home</Link>
      </nav>

      <h1>useEffect: Dependency Array</h1>

      <div className="deps-buttons">
        {CHARACTERS.map((c) => (
          <button
            key={c.id}
            className={`deps-btn${selectedId === c.id ? " deps-btn--active" : ""}`}
            onClick={() => setSelectedId(c.id)}
          >
            #{c.id} {c.label}
          </button>
        ))}
      </div>

      {character && (
        <div className="deps-card">
          <h2>{character.name}</h2>
          <div className="deps-rows">
            <div className="deps-row">
              <span className="deps-row__label">Height</span>
              <span className="deps-row__value">{character.height} cm</span>
            </div>
            <div className="deps-row">
              <span className="deps-row__label">Mass</span>
              <span className="deps-row__value">{character.mass} kg</span>
            </div>
            <div className="deps-row">
              <span className="deps-row__label">Hair</span>
              <span className="deps-row__value">{character.hair_color}</span>
            </div>
            <div className="deps-row">
              <span className="deps-row__label">Eyes</span>
              <span className="deps-row__value">{character.eye_color}</span>
            </div>
            <div className="deps-row">
              <span className="deps-row__label">Born</span>
              <span className="deps-row__value">{character.birth_year}</span>
            </div>
            <div className="deps-row">
              <span className="deps-row__label">Gender</span>
              <span className="deps-row__value">{character.gender}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UseEffectDeps;
