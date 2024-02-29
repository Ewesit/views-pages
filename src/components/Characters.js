import React from 'react';
import { Link } from 'react-router-dom';

const Characters = () => {
  return (
    <div>
      <h1>Characters!</h1>
      <p>View Characters.</p>
      <Link to="/Home">Home Page</Link>
      <Link to="/components/CharacterList">View Character List</Link>
      <Link to="/components/NotFound">Characters</Link>
    </div>
  );
};

export default Characters;
