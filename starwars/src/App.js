import React from 'react';
import './App.css';
import Jedi from '../src/components/Jedi'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
let new1 = `The New Edition `;

  return (
    <div className="App">
      <h1 className="Header">{new1}React Wars</h1>
      <h2>Starwars Elites</h2>
      <Jedi />
    </div>
  );
}

export default App;
