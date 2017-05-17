import React, {Component} from 'react';
import '../css/Footer.css';

class Footer extends Component {
  render(){
    return(
      <footer className="footer">
        <ul>
          <li><a href="https://github.com/SamKeathley"><i className="fa fa-github-alt fa-3x" aria-hidden="true"></i></a></li>
          <li><a href="https://medium.com/@MouseRat"><i className="fa fa-medium fa-3x" aria-hidden="true"></i></a></li>
          <li><a href="https://www.linkedin.com/in/sam-keathley/"><i className="fa fa-linkedin fa-3x" aria-hidden="true"></i></a></li>
          <li><a href="https://www.instagram.com/mouseratgimli/"><i className="fa fa-instagram fa-3x" aria-hidden="true"></i></a></li>
        </ul>
      </footer>
    )
  }
}

export default Footer;
