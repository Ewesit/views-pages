import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to My React App!</h1>
      <p>This is the home page.</p>
      <Link to='./CharacterList'>View Character List</Link>
      <Link to='./Characters'>Characters</Link>
      <Link to='./CharacterDetails'>Character details</Link>
      <Link to='./NotFound'>Handle Error</Link>
      

    </div>
  );
};

export default Home;
