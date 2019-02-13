import React, { Component } from 'react';
import './App.css';
import Landingpage from './landingpage';
import NavBar from './NavBar/NavBar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
       <Landingpage />
      
      </div>
    );
  }
}

export default App;
