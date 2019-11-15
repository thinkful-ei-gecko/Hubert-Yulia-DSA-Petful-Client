import React, { Component } from 'react'
import './Person.css'

export default class Person extends Component {
  render() {
    const { person } = this.props
    return (
      <div className='people'>
        <h3>
          Hopeful pet owners
        </h3>
        <ul>Next up: {(person) ? person : 'Empty'}</ul>
        <p className='position'>
          {/* {position===0 ? "It's your turn to pick a pet!" : (position!==null ? `Your position in the Queue is ${position+1}` : '')} */}
        </p>
      </div>
    )
  }
}