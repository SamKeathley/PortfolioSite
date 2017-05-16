import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import '../css/NavBar.css';

class NavBar extends Component {
  render() {
    return (

      <div className="container navContainer">
        <div className="navbar-header navbar navbar-collapse">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <nav className="tabs navbar navbar-default navbar-fixed-top">
            <IndexLink to="/" activeClassName="active" className="navbar-brand">Fat Rat Studio</IndexLink>
            <ul>
            <li><Link to="about" activeClassName="active" className="navlink">About</Link></li>
            <li><Link to="projects" activeClassName="active" className="navlink">Projects</Link></li>
            <li><Link to="art" activeClassName="active" className="navlink">Art</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default NavBar;
