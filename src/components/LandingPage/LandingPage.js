import React, { Component } from 'react';
import config from '../../config';
import Pets from '../Pets/Pets';

export default class LandingPage extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      pets:[]
    }
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
    .then(res => {
      if (!res.ok) {
        throw new Error('Error')
      }
      return res;
    })
    .then(res => res.json())
    .catch(e => console.error(e))
    this.props.history.push('/adopt');
  }

	onChangeHandle = (e) => {
		this.setState({
			name: e.target.value,
		})
  }
  componentDidMount() {
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
  
  
  render() {
    return(
      <div className="landing-page">
        <h1>Welcome to Petful!</h1>
        <img src="https://bit.ly/33TNE23" alt="cat and dog" className="landing-image"/>
        <p className="landing-desc">
        Here at petful, you are able to adopt either a cat or a dog. The adoption process is strictly on a first come first serve basis, so get your place in line to adopt the pet of your dreams.
        </p>
        <Pets pets={this.state.pets}/>
        <form onSubmit={this.handleSubmit} className="get-in-line">
          <legend>Adopt a Pet!</legend>
          <label htmlFor="name">What is your name?</label>
          <input
            type="text"
            id="name"
            onChange={this.onChangeHandle}
            name="name"
            required
          >
          </input>
            <button type="submit">Adopt Now</button>
        </form>
    </div>
    )
  }
}