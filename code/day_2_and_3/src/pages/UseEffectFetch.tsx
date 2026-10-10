import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./UseEffectFetch.css";

interface StarWarsCharacter {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

function UseEffectFetch() {
  const [character, setCharacter] = useState<StarWarsCharacter | null>(null);
  const [characterId, setCharacterId] = useState(1);

  useEffect(() => {
    async function fetchCharacter() {
      const response = await fetch(
        `https://swapi.py4e.com/api/people/${characterId}/`,
      );
      const data = await response.json();
      setCharacter(data);
    }

    fetchCharacter();
  }, [characterId]);

  return (
    <div className="fetch-example">
      <nav className="breadcrumb">
        <Link to="/">← Back to Home</Link>
      </nav>

      <h1>useEffect: Fetch Example</h1>

      <div className="demo-container">
        <button
          onClick={() => setCharacterId(Math.floor(Math.random() * 83) + 1)}
          className="fetch-button"
        >
          🎲 Fetch Random Character
        </button>

        {character && (
          <div className="character-card">
            <h2>{character.name}</h2>
            <div className="character-details">
              <div className="detail-row">
                <span className="label">Height:</span>
                <span className="value">{character.height} cm</span>
              </div>
              <div className="detail-row">
                <span className="label">Mass:</span>
                <span className="value">{character.mass} kg</span>
              </div>
              <div className="detail-row">
                <span className="label">Hair Color:</span>
                <span className="value">{character.hair_color}</span>
              </div>
              <div className="detail-row">
                <span className="label">Eye Color:</span>
                <span className="value">{character.eye_color}</span>
              </div>
              <div className="detail-row">
                <span className="label">Birth Year:</span>
                <span className="value">{character.birth_year}</span>
              </div>
              <div className="detail-row">
                <span className="label">Gender:</span>
                <span className="value">{character.gender}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UseEffectFetch;
