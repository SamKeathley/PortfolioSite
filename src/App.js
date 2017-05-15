import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to here</h2>
        </div>
        <ul className="header">
          <li><IndexLink to="/" activeClassName="active" className="navlink">Welcome</IndexLink></li>
          <li><Link to="about" activeClassName="active" className="navlink">About</Link></li>
          <li><Link to="projects" activeClassName="active" className="navlink">Projects</Link></li>
          <li><Link to="art" activeClassName="active" className="navlink">Art</Link></li>
        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
