// CharacterList.js
import React, { useState, useEffect } from 'react';
import { Switch } from 'react-router-dom'; // import Switch from react-router-dom

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
      <h1>Rick and Morty Characters</h1>
      <ul>
        {characters.map(character => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchCharacterList;
