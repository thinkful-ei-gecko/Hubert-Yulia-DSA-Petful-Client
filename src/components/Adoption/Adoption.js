import React, { Component } from 'react';
import Cats from '../Cats/Cats';
import Dogs from '../Dogs/Dogs';

export default class Adoption extends Component {
  render() {
    return (
      <div>
        <h1>Pets for Adoption</h1>
        <Cats />
        <Dogs />
      </div>
    )
  }
}