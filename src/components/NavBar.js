import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import '../css/NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="nav-header">
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapsed-bar" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="collapsed-bar">
              <IndexLink to="/" activeClassName="active" className="navbar-brand">Sam Keathley</IndexLink>
              <ul>
                <li><Link to="about" activeClassName="active" className="navlink">About</Link></li>
                <li><Link to="projects" activeClassName="active" className="navlink">Projects</Link></li>
                <li><Link to="art" activeClassName="active" className="navlink">Art</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
