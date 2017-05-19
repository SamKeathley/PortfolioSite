import React, {Component} from 'react';
import '../App.css';
import '../css/Projects.css';
import Popups from './Popups.js';
import GaCards from '../images/GACards.png'
import Placeholder from '../images/placeholder.png';
import Divvy from '../images/divvyProfile.png';
import HealthConnect from '../images/healthConnect.png';

// var innerPopup = {
//   marginTop: '10%',
// };

class Projects extends Component{
  constructor(props){
    super(props)
    this.state = {
      popups : [
        {
          title: 'Cards Against GA',
          description: 'Solo React lab done in class. Objective: to make a Cards Against Humanity style cards, stored in Firebase database.',
          image: {GaCards},
          webLink: '',
          githubLink: 'https://github.com/SamKeathley/ga-cards-react'
        },
        {
          title: 'Health Connect',
          description: 'Class project working with the User Experience Immersive class to create a healthcare app for schools and volunteer doctors, data stored in MongoDB. My role in this project was on the user design as well as assisted with pulling info from the database.',
          image: {HealthConnect},
          webLink: '',
          githubLink: 'https://github.com/SamKeathley/healthconnect'
        },
        {
          title: 'Divvy',
          description: 'React lab done in class. Objective: to make a gamified savings app to get a younger audience interested in savings, stored in firebase. My role in this project was on the pixel avatars, component setup, and database management/info pulling.',
          image: {Divvy},
          webLink: '',
          githubLink: 'https://github.com/SamKeathley/DivvyApp'
        },
        {
          title: 'COMING SOON',
          description: 'Super secret tabletop RPG app, coming soon to a site near... uh, well me.',
          image: {Placeholder},
          webLink: '',
          githubLink: ''
        }
      ],
      currentPopupIndex: null
    }
  }

  render(){
    return(

      <section className="projects">
        <Popups
          popupData={this.state.popups[this.state.currentPopupIndex]}
          isOpen={this.state.currentPopupIndex !== null}
          onCloseButton={() => {this.setState({currentPopupIndex: null})}}
          />

        <div className="flex-row">
          <div className="container superCool">

            <div className="image-link" onClick={() => {this.setState({currentPopupIndex:0})}}>
              <img src={GaCards} alt="ga-cards"/>
              <p>Cards Against Assembly</p>
            </div>
            <div className="image-link" onClick={() => {this.setState({currentPopupIndex:1})}}>
              <img src={HealthConnect} alt="Health Connect landing"/>
              <p>Health Connect</p>
            </div>
            <div className="image-link" onClick={() => {this.setState({currentPopupIndex:2})}}>
              <img src={Divvy} alt="divvy profile"/>
              <p>divvy</p>
            </div>
            <div className="image-link" onClick={() => {this.setState({currentPopupIndex:3})}}>
              <img src={Placeholder} alt=""/>
              <p>Coming Soon!</p>
            </div>
          </div>
        </div>

      </section>
    )
  }
}

export default Projects;
