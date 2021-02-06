import React, { Component } from 'react';
import CardList from './components/cardlist/card-list.component.jsx';
import Wrapper from './components/wrapper/wrapper.jsx';
import './App.css';


class App extends Component() {
  constructor() {
    super();

    this.state ={
      members: []
    }
  }
  
  render() {
  return (
    <div>
      <Wrapper>
        <CardList> </CardList>
      </Wrapper>

    </div>
  );
 }
}

export default App;
