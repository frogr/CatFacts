import './App.css';
import React from 'react';
import CatFact from './CatFact'

class App extends React.Component {
  render() {
    return(
    <div className="App">
      <h1> Cat Fact App </h1>
      <CatFact />
    </div>
    )
  }
}

export default App;
