import React, { Component } from 'react';

import { render } from '@testing-library/react';

import './App.css';


import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      members: []
    };
  }


componentDidMount() {
  fetch('https://randomuser.me/api/?seed=foobar')
  .then(response=> response.json())
  .then(users => this.setState({members: users}));

}


render() {
  return (
    <div className= "App"> 
    <p> {this.state.members} </p>
    </div>
  )
}
}

export default App;
