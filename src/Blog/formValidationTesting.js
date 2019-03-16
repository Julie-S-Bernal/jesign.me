import React, { Component } from 'react';
import '../Scss/App.scss';
import Blog from '../Utils/blog.js';
class codingStructure extends Component {

bodyText= (
    'yes'
)

  render() {
    return (
      //increase size of background image and make it a bit more for width
      //bootstrap issue?
      <div>
      <div className="row ">
      {/* <div className="col-6"> */}
      <Blog
      title=" testingForm Validation"
      intro= " I was recently asked to test some form validation"
      // body={
      //   return(
      // }
      //   <h2>Why is testing important?</h2>
      //   <p>As a small team we sometimes don't have the time to do torought testing as we are under constant preassure to release new features in a tigh timeframe.
      //      We decided to focus on testing the services, reducers and actions at a 100% coverage but we do not test the components. Testing should never be overlooked.
      //   </p>
      //   <p></p>
      // )}
      />
      {/* </div> */}
      </div>
      </div>
    );
  }
}

export default codingStructure;
