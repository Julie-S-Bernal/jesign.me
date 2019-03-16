import React, { Component } from 'react';
import '../Scss/App.scss';
import Menu from '../Utils/menu.js';
// import CodingStructure from './codingStructure.js';
import FormValidationTesting from './formValidationTesting.js';
class codingStructure extends Component {


  render() {
    return (
      //increase size of background image and make it a bit more for width
      //bootstrap issue?
      <div className="backgroundimage strech m-0 " >
         <div class=" stylie images"/>
      <Menu />
      <div class="">

      <div className="row ">
      {/* <div className="col-6"> */}
      {/* <CodingStructure /> */}
      <FormValidationTesting />
      {/* </div> */}
      </div>
      </div>
      </div>
    );
  }
}

export default codingStructure;
