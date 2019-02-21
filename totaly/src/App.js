import React, { Component } from 'react';
import './App.css';
import  landingpage  from './components/landingpage';
// import NavBar from './components/NavBar';
import first from './components/first.js';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import fadcards from './components/fadcards';
import toys from './components/toys';
import billboardshit from './components/billboardshit.js'




class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path={"/"} exact component={landingpage} />
          <Route path={"/first"} component={first} />
          <Route path={"/fadcards"} component={fadcards} />
          <Route path={'/toys'} component={toys} />
          <Route path={'/Music'} component={billboardshit} />

         

        </div>
     </Router>
    );
  }
}

export default App;
