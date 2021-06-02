import './App.css';
import React from 'react';
import CatFact from './CatFact'
import CatPic from './CatPic'

class App extends React.Component {
  render() {
    return(
    <div className="App">
      <h1> Cat Fact App </h1>
      <CatFact />
      <CatPic />
    </div>
    )
  }
}

export default App;
