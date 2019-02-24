import React, { Component } from 'react';
import '../Scss/App.css';
import Menu from '../Utils/menu.js';
import leaves from '../Images/leaves.svg';

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
        <div>
        <div>
          <h1>About Me</h1>
          <div className=" border rounded textContainer">
          <p className="profileText">Hi There, my name is Julie Bernal and I am a web developer</p>
          {/* //REVIEW THAT TEXT */}
          <p className="profileText">I design sharp and precise interface to create the best user experience</p>
          <p className="profileText">I code with React, React Native, Redux and Node.js</p>
          </div>
          <div className="col-4">
          <i class="fas fa-chevron-right"  onClick={this.handleShowNextpage}></i>
          </div>
          </div>
          </div>
      )
    } return(
      <div>
      <h1>Bio</h1>
      <p>I was raised...</p>
      <div className="col-4">
      <i class="fas fa-chevron-left" onClick={this.handleShowPreviousPage}></i>
      </div>
      </div>
    )
  }

  render() {
    return (
      <div className="row">
      <div className="col-12">
      <div className="col-6 col-left text-center">
      {this.renderText()}
      </div>
      <div className="col-6 col-right text-center menu">
      <Menu />
      {/* <img className="profileImage" src={leaves} alt="" /> */}
      </div>
      </div>
      </div>
    );
  }
}

export default Profile;
