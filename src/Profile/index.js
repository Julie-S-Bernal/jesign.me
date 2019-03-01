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
        // <div>
        <div className="col-6">
          <h1>About Me</h1>
          <div className=" border rowContainer textContainer">
          <p className="profileText">Hi There, my name is Julie Bernal and I am a web developer</p>
          {/* //REVIEW THAT TEXT */}
          <p className="profileText">I design sharp and precise interface to create the best user experience</p>
          <p className="profileText">I code with React, React Native, Redux and Node.js</p>
          </div>
          <div className="col-4">
          <i class="fas fa-chevron-right"  onClick={this.handleShowNextpage}></i>
          </div>
          </div>
          // </div>
      )
    } return(
      <div className="col-6 border textContainer">
      <div className=" border rowContainer  textContainer">
      <h1>Bio</h1>
      <p>I was raised...</p>
      <div className="col-4">
      <i class="fas fa-chevron-left" onClick={this.handleShowPreviousPage}></i>
      </div>
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
      <div class="">

      <div className="row ">
      <div className="col-12 ">
       <div className="col-6  col-left">
       HI
      </div>
      {/* <div className="col-6"> */}
      {this.renderText()}
      {/* </div> */}
      <div className="col-6">
      </div>
      col-right
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Profile;
