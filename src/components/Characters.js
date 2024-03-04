import React from 'react';
import { Link } from 'react-router-dom';

const Characters = () => {
  return (
    <div>
      <h1>Characters!</h1>
      <p>View Characters.</p>
      <Link to='/'>Home Page</Link>
      <Link to='./CharacterList'>View Character List</Link>
      <Link to='./NotFound'>Characters</Link>
    </div>
  );
};

export default Characters;
