import React, { Component } from 'react';
import Pets from '../Pets/Pets';
import Person from '../Person/Person'
import config from '../../config'
//import PetsApiService from '../../services/api-service';

export default class Adoption extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pets: [],
      person: [],
    }
  }

  getPerson() {
    fetch(`${config.API_ENDPOINT}/person`)
    .then(res => {
      if (!res.ok) {
        throw new Error('Error')
      }
      return res;
    })
    .then(res => res.json())
    .then(person => this.setState({ person }))
    .catch(e => console.error(e))
  }

  dequeuePerson() {
    fetch(`${config.API_ENDPOINT}/person`, {
      method: 'DELETE',
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Error')
      }
    })
    .then(person => this.setState({ person }))
    .catch(e => console.error(e))
  }

  getPet() {
    fetch(`${config.API_ENDPOINT}/pet`)
    .then(res => {
      if (!res.ok) {
        throw new Error('Error')
      }
      return res;
    })
    .then(res => res.json())
    .then(pet => this.setState({ pets: pet }))
    .catch(e => console.error(e))
  }

  adoptPet() {
    fetch(`${config.API_ENDPOINT}/pet`, {
      method: 'DELETE',
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Error')
      }
    })
    .then(pet => this.setState({ pets: pet }))
    .catch(e => console.error(e))
  }


  componentDidMount() {
    //setInterval(() => this.adoptPet(), 3000)
    this.getPet();

    this.getPerson();
  }

  render() {
    console.log(this.state.pets)
    return (
      <div>
        <h1>Adopt a Pet</h1>
        <Person 
          person={this.state.person}
        />
        <Pets 
          pets={this.state.pets}
        />
        <button onClick={this.adoptPet}>Adopt Me!</button>
        <button onClick={this.dequeuePerson}>Not Interested</button>
      </div>
    )
  }
}