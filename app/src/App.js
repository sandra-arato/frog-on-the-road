import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Road from './Road.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Frog On The Road</h2>
        </div>
        <div className="App-intro">
          <Road></Road>
        </div>
      </div>
    );
  }
}

export default App;
