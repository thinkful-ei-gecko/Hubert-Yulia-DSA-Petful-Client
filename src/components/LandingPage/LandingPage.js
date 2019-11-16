import React, { Component } from 'react';
//import { Link, Route } from 'react-router-dom'
import config from '../../config'

export default class LandingPage extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
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
    .then(res => 
      (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json()
    )
    .catch(e => console.error(e))
    this.props.history.push('/adopt');
    console.log('post')
  }

	onChangeHandle = (e) => {
		this.setState({
			name: e.target.value,
		})
  }
  
  render() {
    console.log(this.state.name);
    return(
      <div className="landing-page">
        <h1>Welcome to Petful!</h1>
        <img src="https://bit.ly/33TNE23" alt="cat and dog"/>
        <p>
        Here at petful, you are able to adopt either a cat or a dog. The adoption process is strictly on a first come first serve basis, so get your place in line to adopt the pet of your dreams.
        </p>
        <form onSubmit={this.handleSubmit}>
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
          {/* <Link to="/adopt" className="adopt-btn"> */}
            <button type="submit">Adopt Now</button>
          {/* </Link> */}
        </form>
    </div>
    )
  }
}