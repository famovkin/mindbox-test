import React from 'react';

import Input from '../Input/Input';

import './App.css';

function App() {
  return (
    <div className="app">
      <h1 className="app__title">todos</h1>
      <div className="app__container">
        <Input
          type="text"
          placeholder="What needs to be done?"
        />
      </div>
    </div>
  );
}

export default App;
