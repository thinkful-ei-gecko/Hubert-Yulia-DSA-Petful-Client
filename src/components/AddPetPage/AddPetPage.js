import React, { Component } from 'react';

export default class AddPetPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pet: 'cat',
    }
  }

  handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
			touched: { [e.target.name]: true }
		})
  }
  
  render() {
    return (
      <div className="add-pet">
        <header>
          <h1>Add Your Pet</h1>
        </header>
        <form>
          <label htmlFor="pet-type">
            Pet Type:
            <select value={this.state.pet}>
              <option value="cat">Cat</option>
              <option value="dog">Dog</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}