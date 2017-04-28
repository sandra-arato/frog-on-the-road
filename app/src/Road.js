import React, { Component } from 'react';
import './App.css';
import car from './car.svg';

class Road extends Component {
  render() {
    return (
      <div className="Road">
        <img src={car} className="Car" alt="car" />
        <img src={car} className="Car Car-back" alt="car" />
      </div>
    );
  }
}

export default Road;
