import React, {Component} from 'react';
import '../css/Footer.css';

class Footer extends Component {
  render(){
    return(
      <footer className="footer">
        <ul className="icons">
          <li><i className="fa fa-github-alt" aria-hidden="true"></i></li>
          <li><i className="fa fa-medium" aria-hidden="true"></i></li>
          <li><i className="fa fa-linkedin" aria-hidden="true"></i></li>
          <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
        </ul>
      </footer>
    )
  }
}

export default Footer;
