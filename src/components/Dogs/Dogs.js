import React, { Component } from 'react';

export default class Dogs extends Component {
  render() {
    return (
      <div className="dogs-page">
        <h2>Dogs</h2>
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