import React, {Component} from 'react';
import '../css/About.css';
import Selfie from '../images/selfie.jpg'
import Resume from '../images/Resume.pdf'


class About extends Component {
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={Selfie} alt="me" className="headshot"/>
          </div>
          <div className="w-100"></div>
          <div className="col-md-8">
            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
            <br />
            <br />
            Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
            <br />
            <br />
            You can view my resume here! Please don't hesitate to reach out with any questions.
            <br />
            <br />
            <a href={Resume} className="resume"><i className="fa fa-file fa-lg" aria-hidden="true"></i></a> 
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
