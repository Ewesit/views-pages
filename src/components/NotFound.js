import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Error!</h1>
      <p>Manage Errors.</p>
      <Link to="/Home">Home Page</Link>
      <Link to="/components/CharacterList">View Character List</Link>
      <Link to="/components/Characters">Characters</Link>
    </div>
  );
};

export default NotFound;
