

// Import necessary dependencies
import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter as Router
import Home from "./components/Home";
import CharacterList from "./components/CharacterList";



// Render the App component within the Router component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CharacterList />
    
)


