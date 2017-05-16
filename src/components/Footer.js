import React, {Component} from 'react';
import '../css/Footer.css';

class Footer extends Component {
  render(){
    return(
      <div className="fa-footer">
        <footer className="footer">
          <div className="content-wrapper pull-right fixed-bottom">
            <ul className="icons">
            <li><i className="fa fa-github-alt" aria-hidden="true"></i>
  </li>
              <li><i className="fa fa-medium" aria-hidden="true"></i></li>
              <li><i className="fa fa-linkedin" aria-hidden="true"></i>
  </li>
              <li><i className="fa fa-instagram" aria-hidden="true"></i>
  </li>
            </ul>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer;
