import React, { Component } from 'react';
import './Pets.css'

export default class Pets extends Component {
  render() {
    const { pets } = this.props;
    return (
      <React.Fragment>
      <div className="pet-page">
        <h2>Available Pets</h2>             
          <ul>
            <img src={pets.imageURL} alt={pets.imageDescription}/>
            <li>Name: {pets.name}</li>
            <li>Gender: {pets.sex}</li>
            <li>Age: {pets.age}</li>
            <li>Breed: {pets.breed}</li>
            <li>Story: {pets.story}</li>
          </ul>          
      </div>
      </React.Fragment>
    )
  }
}