import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <NavBar />
        </div>

        <div className="content">
          {this.props.children}
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
