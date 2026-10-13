import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./StarWarsCharacters.css";

interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

function StarWarsCharacters() {
  const [search, setSearch] = useState("");
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCharacters() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://swapi.py4e.com/api/people/?search=${search}`,
        );
        const data = await response.json();
        // Get first 10 characters
        setCharacters(data.results.slice(0, 10));
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCharacters();
  }, [search]); // Re-fetch when search changes

  return (
    <div className="starwars-page">
      <nav className="breadcrumb">
        <Link to="/">← Back to Home</Link>
      </nav>

      <h1>Star Wars Characters</h1>
      <p className="subtitle">Exercise: Fetch and Render a List with Search</p>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search characters..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      {loading ? (
        <div className="loading">Loading characters...</div>
      ) : (
        <table className="characters-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {characters.length > 0 ? (
              characters.map((character, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{character.name}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2} className="no-results">
                  No characters found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StarWarsCharacters;
