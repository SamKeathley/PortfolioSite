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
            <p>My name is Sam Keathley. I am a full-stack web developer with a background in medical coding and customer service. I am an insatiable learner and can be a perfectionist [almost to a fault]. I work best in a team of like-minded individuals, and I look forward to building innovative new applications with a great team.
            <br />
            <br />
            I am also an artist. You can find some of my work on Instagram (linked in footer) and on here (COMING SOON). Right now I do not provide commisions, but I might in the future so stay tuned! Until then, you can buy some of my pieces on <a target="_blank" href="https://www.redbubble.com/people/SamsWeirdArt/shop?asc=u" className="redbubble">Redbubble</a>. You will find my resume linked below if you want to contact me.
            <br />
            <br />
            <a target="_blank" href={Resume} className="resume"><i className="fa fa-file fa-lg" aria-hidden="true"></i></a>
            <br />
            (Resume)
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
