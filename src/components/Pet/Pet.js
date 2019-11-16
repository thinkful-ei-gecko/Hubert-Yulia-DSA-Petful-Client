import React, { Component } from 'react';
import './Pets.css'

export default class Pets extends Component {
  render() {
    const { pet } = this.props;
    return (
      <React.Fragment>
      <div className="pet-page">
        <h2>Available Pets</h2>             
          <ul>
            <img src={pet.imageURL} alt={pet.imageDescription}/>
            <li>Name: {pet.name}</li>
            <li>Gender: {pet.sex}</li>
            <li>Age: {pet.age}</li>
            <li>Breed: {pet.breed}</li>
            <li>Story: {pet.story}</li>
          </ul>
      </div>
      </React.Fragment>
    )
  }
}