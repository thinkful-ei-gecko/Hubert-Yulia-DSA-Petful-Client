import React, { Component } from 'react';
import './Pets.css'

export default class Pets extends Component {

  render() {
    const { pets } = this.props;
    return (
      <div className="pets-page">
        <h2>Pets in the shelter</h2>
        {pets.map((pet, index) => {
        return <ul key={index} className="shelter-pet">
          <li key={index}><img src={pet.imageURL} alt={pet.imageDescription}/></li>
          <li>Name: {pet.name}</li>
          <li>Gender: {pet.sex}</li>
          <li>Age: {pet.age}</li>
          <li>Breed: {pet.breed}</li>
          <li>Story: {pet.story}</li>
        </ul>
        })}      
      </div>
    )
  }
}