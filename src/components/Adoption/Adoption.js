import React, { Component } from 'react';
import Pet from '../Pet/Pet';
import Person from '../Person/Person';
import Pets from '../Pets/Pets';
import Persons from '../Persons/Persons';
import config from '../../config';
import ErrorPage from '../ErrorPage/ErrorPage'

export default class Adoption extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pet: '',
      pets: [],
      person: '',
      persons: [],
      name:'',
    }
  }

  getPerson = () => {
    fetch(`${config.API_ENDPOINT}/person`)
    .then(res => {
      if (!res.ok) {
        throw new Error('Error')
      }
      return res;
    })
    .then(res => res.json())
    .then(person => this.setState({person: person}))
    .catch(e => console.error(e))
  }

  getPet= () => {
    fetch(`${config.API_ENDPOINT}/pet`)
    .then(res => {
      if (!res.ok) {
        throw new Error('Error')
      }
      return res;
    })
    .then(res => res.json())
    .then(pet => this.setState({pet: pet}))
    .catch(e => console.error(e))
  }

  adoptPet = () => {
    this.dequeuePet();
    this.dequeuePerson();
  }

  dequeuePet = () => {
    fetch(`${config.API_ENDPOINT}/pet`, {
      method: 'DELETE',
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Error')
      }
    })
    .then(() => {
      this.getPet();
      let updatedState = this.state.pets.filter(pet => pet !== this.state.pets[0])
      this.setState({pets: updatedState})
    })
    .catch(e => console.error(e))
  }

  dequeuePerson = () => {
    fetch(`${config.API_ENDPOINT}/person`, {
      method: 'DELETE',
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Error')
      }
    })
    .then(() => {
    this.getPerson();
    let updatedState = this.state.persons.filter(person => person !== this.state.persons[0])
    this.setState({persons: updatedState})
    })
    .catch(e => console.error(e))
  }

  getAllPets = () => {
    fetch(`${config.API_ENDPOINT}/pet/list`)
    .then(res => {
      if (!res.ok) {
        throw new Error('Error')
      }
      return res;
    })
    .then(res => res.json())
    .then(pets => this.setState({ pets: pets }))
    .catch(e => console.error(e))
  }

  getAllPersons = () => {
    fetch(`${config.API_ENDPOINT}/person/list`)
    .then(res => {
      if (!res.ok) {
        throw new Error('Error')
      }
      return res;
    })
    .then(res => res.json())
    .then(persons => this.setState({ persons: persons }))
    .catch(e => console.error(e))
  }

  validatePet() {
    let pets = this.state.pets;
    
    if(pets.length < 1) {
      return 'No more available pets to be adopted';
    }
  }

  validatePerson() {
    let person = this.state.person;
    
    if(person.length === 0) {
      return 'Queue is empty. Please get back in line';
    }
  }

  goBack = () => {
    this.props.history.push('/')
  }

  componentDidMount() {
    this.getPet();
    this.getPerson();
    this.getAllPets();
    this.getAllPersons();
  }

  componentWillMount() {
    this.getAllPersons();
    this.getPerson();
  }

  render() {
    let petError = this.validatePet();
    let personError = this.validatePerson();
    console.log(this.state.persons)
    if (this.state.pets !== null) {
      return (
      <div>
        <h1>Adopt a Pet</h1>
        <Pets 
          pets = {this.state.pets}
        />
        <Persons persons={this.state.persons} />
        <Person 
          person={this.state.person}
        />
        <ErrorPage message={personError || petError}/>
        <Pet 
          pet={this.state.pet}
        />
        <button
          onClick={this.adoptPet}
          disabled={personError || petError}
        >
          Adopt Me!
        </button>
        <button
          onClick={this.dequeuePerson}
          disabled={personError}
        >
          Not Interested
        </button>
        <button onClick={this.goBack}>Go Back</button>
      </div>
    )
    }
    
  }
}