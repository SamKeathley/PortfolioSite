import React, {Component} from 'react';
import '../css/Footer.css';

class Footer extends Component {
  render(){
    return(
      <footer className="footer">
        <ul>
          <li><i className="fa fa-github-alt fa-3x" aria-hidden="true"></i></li>
          <li><i className="fa fa-medium fa-3x" aria-hidden="true"></i></li>
          <li><i className="fa fa-linkedin fa-3x" aria-hidden="true"></i></li>
          <li><i className="fa fa-instagram fa-3x" aria-hidden="true"></i></li>
        </ul>
      </footer>
    )
  }
}

export default Footer;
