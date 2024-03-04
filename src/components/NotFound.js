import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Error!</h1>
      <p>Manage Errors.</p>
      <Link to='/'>Home Page</Link>
      <Link to='./CharacterList'>View Character List</Link>
      <Link to='./Characters'>Characters</Link>
    </div>
  );
};

export default NotFound;
