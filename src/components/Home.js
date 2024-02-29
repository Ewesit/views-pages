import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to My React App!</h1>
      <p>This is the home page.</p>
      <Link to="/components/CharacterList">View Character List</Link>
    </div>
  );
};

export default Home;
