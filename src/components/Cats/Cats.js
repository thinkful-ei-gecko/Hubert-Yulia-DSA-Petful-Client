import React, { Component } from 'react';
import './Cats.css'

export default class Cats extends Component {
  render() {
    return (
      <div className="adopt-cat">
        <h2>Cats</h2>
        <img></img>
        <ul>
          <li>Name: </li>
          <li>Gender: </li>
          <li>Age: </li>
          <li>Breed: </li>
          <li>Story: </li>
        </ul>
      </div>
    )
  }
}