import React, { Component } from 'react';
import './Pets.css'

export default class Pets extends Component {

  render() {
    const { pets } = this.props;
    return (
      <section className="pets-section">
        <h2>Pets in the shelter</h2>
        <div className="pets-page">
          
          {pets.map((pet, index) => {
          return <ul key={index} className="shelter-pets">
            <li><img src={pet.imageURL} alt={pet.imageDescription} className="shelter-pets-img"/></li>
            <li>Name: {pet.name}</li>
            <li>Gender: {pet.sex}</li>
            <li>Age: {pet.age}</li>
            <li>Breed: {pet.breed}</li>
            <li>Story: {pet.story}</li>
          </ul>
          })}      
        </div>
      </section>
    )
  }
}