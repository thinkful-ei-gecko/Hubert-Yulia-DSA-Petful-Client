import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
//import AddPetPage from './components/AddPetPage/AddPetPage'
import AdoptionPage from './components/Adoption/Adoption'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="app-main">
          <Route exact path={'/'} component={LandingPage} />
          {/* <Route path={'/add-pet'} component={AddPetPage} /> */}
          <Route exact path={'/adopt'} component={AdoptionPage}/>
        </main>
      </div>
    );
  }
}

export default App;
