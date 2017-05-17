import React, {Component} from 'react';
import '../App.css';
import '../css/Popups.css';

var innerPopup = {
  marginTop: '9%',
};

var popupImage = {
  width: '250px'
}


class Popup extends Component{
  constructor(props){
    super(props)
  }

  closePopup(){
    console.log('clicked')
    this.props.onCloseButton()
  }

  render(){
    if (this.props.isOpen) {

      return(

          <div className="popup">
            <div className="popup-inner" style={innerPopup}>
              <p className="close" onClick={this.closePopup.bind(this)}>X</p>
              <br />
              <h3>{this.props.popupData.title}</h3>
              <p>{this.props.popupData.description}</p>
              <a target="_blank" href={this.props.popupData.githubLink}>Github Code</a>
            </div>
          </div>

      )
    }
    else {
      return(
        null
      )
    }
  }
}

export default Popup;
