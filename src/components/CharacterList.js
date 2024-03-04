// CharacterList.js
import React, { useState, useEffect } from 'react';
import { Switch } from 'react-router-dom'; // import Switch from react-router-dom
import { Link } from 'react-router-dom';

const FetchCharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Fetch characters from the API
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.error('Error fetching characters:', error));
  }, []);

  return (
    <div>
      <h1>Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <Link to={`/character/${character.id}`}>{character.name}</Link>
            <Link to={`/character/${character.id}`}>{character.image}</Link>
            <Link to={`/character/${character.id}`}>{character.status}</Link>

            
          </li>
        ))}
      </ul>
    </div>
  );
  
};

export default FetchCharacterList;
