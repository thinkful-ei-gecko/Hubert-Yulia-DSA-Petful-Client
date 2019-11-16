import React, { Component } from 'react';
import './Pet.css'

export default class Pets extends Component {
  render() {
    const { pet } = this.props;
    return (
      <section className="pet-section">
        <h2>Available Pets</h2>       
          <ul className="pet-page">
            <img src={pet.imageURL} alt={pet.imageDescription}/>
            <li>Name: {pet.name}</li>
            <li>Gender: {pet.sex}</li>
            <li>Age: {pet.age}</li>
            <li>Breed: {pet.breed}</li>
            <li>Story: {pet.story}</li>
          </ul>
      </section>
    )
  }
}