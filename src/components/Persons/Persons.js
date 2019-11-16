import React, { Component } from 'react';

export default class Pets extends Component {

  render() {
    const { persons } = this.props;
    return (
      <div className="persons-page">
        <h2>People in line</h2>
        {persons.map((person, index) =>
        <p key={index}>{person}</p>)}      
      </div>
    )
  }
}