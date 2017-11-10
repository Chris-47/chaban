import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './pages/Home.js';
import Detail from './pages/Detail.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="">
          <Route exact path="/" component={Home} />
          <Route exact path="/:id" component={Detail} />
        </div>
      </Router>
    );
  }
}

export default App;
