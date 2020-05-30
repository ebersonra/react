import React from 'react';
import './App.css';

import Interval from './components/Interval';
import Medium from './components/Medium';
import Sum from './components/Sum'
import Sortition from './components/Sortition';

function App() {
  return (
    <div className="App">
      <h1>Exercises React-Redux (Simple)</h1>
      <div className="row">
        <Interval></Interval>
      </div>

      <div className="row">
        <Medium></Medium>
        <Sum></Sum>
        <Sortition></Sortition>
      </div>
    </div>
  );
}

export default App;
