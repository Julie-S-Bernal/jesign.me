import React, { Component } from 'react';
import '../Scss/App.scss';
import Menu from '../Utils/menu.js';
class Profile extends Component {

  state= { showBiography: true }

  handleShowNextpage = () => {
    this.setState({ showBiography: false });
  }

  handleShowPreviousPage = () => {
    this.setState({ showBiography: true });
  }

  renderText = () => {
    if(this.state.showBiography) {
      return (
          <div className="rowContainer textContainer background:#85b;">
          <h1 className="arrow"> About Me</h1>
          <p className="profileText">Hi, my name is Julie Bernal and I am a Web Developer.</p>
          <p className="profileText">I design sharp interfaces to create the best user experience.</p>
          <p className="profileText">I code with React, React Native, Redux and Node.js</p>
          <div className="col-12 chevronPosition">
          <i class="fas fa-chevron-right chevronStyle arrow"  onClick={this.handleShowNextpage}></i>
          <ul class="Menu-list" data-offset="10">
    <li class="Menu-list-item" data-offset="20" onclick>
      Next
      <span class="Mask"><span>Next</span></span>
      <span class="Mask"><span>Next</span></span>
    </li>
  </ul>
          </div>
          </div>
      )
    } return(
     <div className="rowContainer textContainer background:#e95;">
          <h1> About Me</h1>
          <p className="profileText">Heya</p>
          <p className="profileText">I design sharp interfaces to create the best user experience.</p>
          <p className="profileText">I code with React, React Native, Redux and Node.js</p>
      <div className="col-12 chevronPosition">
      <i class="fas fa-chevron-left chevronStyle arrow" onClick={this.handleShowPreviousPage}></i>
      </div>
      </div>
    )
  }


  render() {
    return (
      //increase size of background image and make it a bit more for width
      //bootstrap issue?
      <div className="backgroundimage strech m-0 " > 
         <div class=" stylie images"/>
      <Menu />

      <div className="row ">
      {/* <div className="col-6"> */}
      {this.renderText()}
      {/* </div> */}
     </div>
     </div>
    );
  }
}

export default Profile;
