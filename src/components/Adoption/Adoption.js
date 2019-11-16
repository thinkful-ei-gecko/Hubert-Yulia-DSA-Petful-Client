import React, { Component } from 'react';
import Pet from '../Pet/Pet';
import Person from '../Person/Person';
import Pets from '../Pets/Pets';
import Persons from '../Persons/Persons';
import config from '../../config';
import ErrorPage from '../ErrorPage/ErrorPage'
//import PetsApiService from '../../services/api-service';

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

  getPet = () => {
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
    .then(res => {
      res.json()
    })
    .then(persons => {
      console.log(persons)
      this.setState({ persons: persons })})
    .catch(e => console.error(e))
  }

  // validatePet = () => {
  //   let pets = this.state.pets;
    
  //   if(pets.length < 1) {
  //     return false;
  //   }
  // }

  // validatePerson = () => {
  //   let person = this.state.persons;
    
  //   if(person.length === 0) {
  //     return false;
  //   }
  // }

  goBack = () => {
    this.props.history.push('/')
  }

  onChangeHandle = (e) => {
		this.setState({
			name: e.target.value,
		})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { name } = this.state;

    fetch(`${config.API_ENDPOINT}/person`, {
      method: 'POST',
      headers: {'content-type':'application/json'},
      body: JSON.stringify({
        full_name: name
      })
    })
    .then(res => 
      (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json()
    )
    .catch(e => console.error(e))
  }

  componentDidMount() {
    this.getPet();
    this.getPerson();
    this.getAllPets();
    this.getAllPersons();
  }

  render() {
    // let petError = this.validatePet();
    // let personError = this.validatePerson();

    return (
    <div>
      <h1>Adopt a Pet</h1>
      <Pets 
        pets = {this.state.pets}
      />
      <Persons 
        persons={this.state.persons}/>
      <Person 
        person={this.state.person}
      />
      {/* <ErrorPage message={petError}/> */}
      <Pet 
        pet={this.state.pet}
      />
      <button
        onClick={this.adoptPet}
        // disabled={petError && personError}
      >
        Adopt Me!
      </button>
      <button
        onClick={this.dequeuePerson}
        // disabled={personError && petError}
      >
        Not Interested
      </button>
      <button onClick={this.goBack}>Go Back</button>
    </div>
   )
  }
}