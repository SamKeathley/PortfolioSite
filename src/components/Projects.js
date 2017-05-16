import React, {Component} from 'react';
import '../App.css';
import '../css/Projects.css';
import Popups from './Popups.js';
import GaCards from '../images/GACards.png'
import Placeholder from '../images/placeholder.png';
import Divvy from '../images/divvyProfile.png';
import HealthConnect from '../images/healthConnect.png';

var innerPopup = {
  marginTop: '10%',
};

class Projects extends Component{
  constructor(props){
    super(props)
    this.state = {
      popups : [
        {
          title: 'Cards Against GA',
          description: 'React lab done in class. Objective: to make a Cards Against Humanity style cards, stored in Firebase database',
          image: {GaCards},
          webLink: '',
          githubLink: ''
        },
        {
          title: 'Health Connect',
          description: 'Class project working with the User Experience Immersive class to create a healthcare app for schools and volunteer doctors, data stored in MongoDB',
          image: {HealthConnect},
          webLink: '',
          githubLink: ''
        },
        {
          title: 'Divvy',
          description: 'React lab done in class. Objective: to make a gamified savings app to get a younger audience interested in savings, stored if firebase',
          image: {Divvy},
          webLink: '',
          githubLink: ''
        },
        {
          title: 'COMING SOON',
          description: 'Super secret tabletop RPG app',
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
          <div className="container">

            <div className="image-link" onClick={() => {this.setState({currentPopupIndex:0})}}>
              <img src={GaCards} alt=""/>
            </div>
            <p>Cards Against GA</p>
            <div className="image-link" onClick={() => {this.setState({currentPopupIndex:1})}}>
              <img src={HealthConnect} alt=""/>
            </div>
            <p>Health Connect</p>
            <div className="image-link" onClick={() => {this.setState({currentPopupIndex:2})}}>
              <img src={Divvy} alt=""/>
            </div>
            <p>divvy</p>
          </div>
        </div>

        <div className="flex-row">
          <div className="container offset">
            <div className="image-link" onClick={() => {this.setState({currentPopupIndex:6})}}>
              <img src={Placeholder} alt=""/>
            </div>
            <p>Coming Soon!</p>
          </div>
        </div>

      </section>
    )
  }
}

export default Projects;
