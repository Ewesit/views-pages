import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';
import NotFound from './components/NotFound';
import Characters from './components/Characters';
import CharacterDetail from './components/CharacterDetail';

function App() {
  function App() {
    return (
      <div>
        <Home />

    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
        <Route exact path="/" component={Characters} />
        {/* Add more routes for individual character details */}
        <Route path="/character/:id" component={CharacterDetail} />
      </Switch>
    </Router>
        
      </div>
    );
  }
  

}

export default App;
