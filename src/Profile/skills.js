

import React, { Component } from 'react';
import '../Scss/App.scss';
import Menu from '../Utils/menu.js';
class Skills extends Component {


// Version control: 

//   <i class="fab fa-github"></i>
//   <i class="fab fa-bitbucket"></i>
//   <i class="fab fa-gitlab"></i>


//   current used tech:

//   <i class="fab fa-react"></i>
//   <i class="fab fa-html5"></i>
//   <i class="fab fa-css3"></i>
//   <i class="fab fa-sass"></i>
//   <i class="fab fa-node-js"></i>
//   <i class="devicon-javascript-plain"></i>
//   React Native
//   Redux
//   <i class="devicon-bootstrap-plain"></i>
//   firebase
//   ES6
//   jest
//   <i class="devicon-webpack-plain"></i>
//   <i class="devicon-amazonwebservices-original"></i>
//   <i class="devicon-slack-plain"></i>
//   <i class="devicon-confluence-plain"></i>
//   jira

//   to organize:
//   <i class="devicon-trello-plain"></i>
 

// Testing:
// <i class="devicon-mocha-plain"></i>
// chai,Enzyme, Istamnul

//   learning now:
//   <i class="fab fa-python"></i>
//   <i class="devicon-typescript-plain"></i>
//   graphQl


//   other tech I kpreviously learn:

//   <i class="fab fa-angular"></i>
//   <i class="devicon-babel-plain"></i>
//   <i class="devicon-babel-plain"></i>
//   <i class="devicon-mongodb-plain"></i>
//   <i class="devicon-jquery-plain"></i>
//   <i class="devicon-ruby-plain"></i>
//   <i class="devicon-rails-plain"></i>
//   <i class="devicon-postgresql-plain"></i>
//   <i class="devicon-heroku-plain"></i>

//   Adobe
//   <i class="fab fa-adobe"></i>
//   <i class="devicon-illustrator-plain"></i>
//   <i class="devicon-photoshop-plain"></i>
//    inDesign, Muse and premiere

// text Editor:
// <i className="devicon devicon-atom-original"></i>
// <i className="devicon devicon-visualstudio-plain"></i>
// <i className="devicon devicon-webstorm-plain"></i>

// system operator:

// <i class="fab fa-windows"></i>
// <i class="fab fa-linux"></i>
// <i class="fab fa-apple"></i>

// Languages:

// french english spanish

currentSkills = [
  {
    type: "fab fa-react",
  },
  {
    type: "fab fa-html5",
  },
  {
    type: "fab fa-css3",
  },
  {
    type: "fab fa-sass",
  },
  {
    type: "fab fa-node-js",
  },
  {
    type: "devicon-javascript-plain",
  },
  {
    type: "devicon-javascript-plain",
  },
]
// const currentSkills = [
//   <i class="fab fa-react"></i>
//   <i class="fab fa-html5"></i>
//   <i class="fab fa-css3"></i>
//   <i class="fab fa-sass"></i>
//   <i class="fab fa-node-js"></i>
//   <i class="devicon-javascript-plain"></i>
//   React Native
//   Redux
//   <i class="devicon-bootstrap-plain"></i>
//   firebase
//   ES6
//   jest
//   <i class="devicon-webpack-plain"></i>
//   <i class="devicon-amazonwebservices-original"></i>
//   <i class="devicon-slack-plain"></i>
//   <i class="devicon-confluence-plain"></i>
//   jira
// ]

//   renderIconList = () => (
// {/* <div>
//     {this.currentSkills.map((item, index) =>
//       <div className='col-2'>
//       <i className={item.type} key={index}
//       > {item}</i>
//       </div>

//   </div> */}
//     // <div>
//       <div className="col-4">
//       <i class="fab fa-react" />
//       </div>
//       {/* <div className="col-4">
//       <i class="fab fa-html5"></i>
//       </div>
//       <div className="col-4">
//       <i class="fab fa-css3"></i>
//       </div>
//       <div className="col-4">
//       <i class="fab fa-sass"></i>
//       </div>
//       <div className="col-4">
//       <i class="fab fa-node-js"></i>
//     </div> */}
//     // </div>
// )
// renderIconList = () => {

//   return (
//     <div className="iconColor">
//   <div className="col-2 ">
//   <i class="fab fa-react iconSize"></i>
//   </div>
//   <div className="col-2">
//   <i class="fab fa-html5 fa-6 iconSize"></i>
//   </div>
//   <div className="col-2">
//   <i class="fab fa-css3"></i>
//   </div>
//   <div className="col-2">
//   <i class="fab fa-sass"></i>
//   </div>
//   <div className="col-2">
//   <i class="fab fa-node-js"></i>
//   </div>
//   {/* <div className="col-2">
//   <i class="devicon-javascript-plain"></i>
//   </div>
//   <div className="col-2">
//   <i class="devicon-javascript-plain"></i>
//   </div> */}
//   </div>
//   )
//   }

renderJobSection = () => {

  return (
    <div className="container ">
     <h4>Work Experience</h4>
    <div className="row">
      <div className="col-2">
    <h4> React Front End Developer</h4>
    </div>
    <div className="col-10">
   <h2>Newcross Healthcare</h2>
   <hr />
   <h3> React | React Native | Node.js | Redux | Jira | Firebase | Confluence </h3>
    <p>
    In an agile environment, I have developed multiple applications in React, Redux, ES6 and Node.js. I 
implement new features on both websites and phone. I created forms, tables and data visualization
 to facilitate the user and company analysis of data. I implemented deep linking via Firebase to manage
users navigation flow. On Android and IOS I created from scratch a calendar that grants users access 
to their work shifts. The data is loaded dynamically to improve app performances. Using pagination, I 
created an infinite scroll functionality to allow the user to quick access their data through a horizontal 
scrollable bar chart. I also developed user functionalities such as profiles, timecards, and in real time 
chat with other members. I have created other applications with Ejs and HTML5 to auto-generate PDFs 
and emails. To help our team members, I have created reusable UI  components, refactored existing 
code to support new functionalities, and systematically added unit tests to increase test coverage.
</p>
</div>
</div>
<div className="row">
<div className="col-2"></div>
    <div className="col-10">
      <h2>Web development Immersive</h2>
      <hr />
      <p>
writte text here....
</p>
</div>
</div>
<div className="row">
<div className="col-2">
 <h4>UX Designer </h4>
</div>
<div className="col-10">
    <h2>Oak Foundation</h2>
   <hr />
   <h3> HTML5 | CSS3 | ADOBE ILLUSTRATOR | ADOBE PHOTOSHOP | ADOBE INDESIGN </h3>
    <p>
    UI/UX  role where I redesigned the intranet pages to make them user friendly and assited in the creation
    of the new website. I used my design/soft coding skills to create the website infographics and user interface
    components. I produced short stories for the website that introduced the work of the partners of Oak Foundation.
    I edited a video that advocates the rights of paperless individuals.
    </p>
    </div>
  </div>
  </div>
  )
}

renderEducationSection = () => {
  return (
  <div className=" row  container textContainer">
  <div className="col-sm-10">
 <h1>Education</h1>
 <h2>General Assembly</h2>
 <hr />
 <h3> Web Immersive Development </h3>
  <p>
  Web Immersive Development course that lasted 3 months.
Courses: Javascript( jQuery, Angular, EJS and React) Ruby, Ruby on Rails, MEAN and MERN stack application, Testing)
</p>
</div>
<div className="col-sm-10">
 <h2>Webster University</h2>
 <hr />
 <h3>MA in International Relations (first) </h3>
  <p>
  Courses:  Advanced Political Theory , Economics, Asian Studies, Negotiation, Advanced International Law and Humanitarian Law.
I did a comparative  thesis on the rapid growth of Japan and South Korea after World War Two and analysed what trends and governments policies lead to their spectacular development.
</p>
</div>
<div className="col-sm-10">
 <h2>Webster University</h2>
 <hr />
 <h3>BA in International Relations (first) </h3>
  <p>
  BA in International Relations (second)
Courses included: Diplomacy, History, Political Studies, International & Humanitarian Law, Psychology
</p>
</div>
<div className="col-sm-10">
 <h2>Digipen Art Institute of Technology, Seattle & Bilbao </h2>
 <hr />
 <h3>Bachelor of Fine and Digital Arts</h3>
  <p>
  Modules completed: Movie Making, Art History, Script Writing, Sociology, Business & Contract Law, Anatomy, Painting, 2D animation, Patent and Contract Law.
</p>
</div>
</div>
  )
}

renderHeader = () => {
  return(
    <div className="col-12">
    <div class="pulse1"></div>
    <div class="pulse2"></div>
    <div class="icon"></div>
    <h1>Julie Bernal</h1>
    <h2>Fron-end Web Developer at Newcross Healthcare</h2>
    </div>
  )
}

renderSkills = () => {
  return (
  <div className=" row  container textContainer">
  <div className="col-sm-10">
 <h1>Education</h1>
 <h2>General Assembly</h2>
 <hr />
 <h3> Web Immersive Development </h3>
  <p>
  Web Immersive Development course that lasted 3 months.
Courses: Javascript( jQuery, Angular, EJS and React) Ruby, Ruby on Rails, MEAN and MERN stack application, Testing)
</p>
</div>
</div>
  )
}
  render() {

    return (
      <div className="m-0 " >
         <div class=""/>
      <Menu />
      <div className="row">
      {this.renderHeader()}
      </div>
      <div className="row colorGreen">
      {/* { this.renderIconList()} */}
      {this.renderJobSection()}
      {this.renderEducationSection()}
      {this.renderSkills()}
      </div>
      </div>
    );
  }
}

export default Skills;



































// <section id="skills">
//               <h1 className="about">SKILLS</h1>

//               <i className="devicon devicon-apple-original"></i>
//               <i className="devicon devicon-babel-plain"></i>
//               <i className="devicon devicon-bootstrap-plain"></i>
//               <i className="devicon devicon-sass-original"></i>
//               <i className="devicon devicon-css3-plain"></i>
//               <i className="devicon devicon-express-original"></i>
//               <i className="devicon devicon-git-plain"></i>
//               <i className="devicon devicon-github-plain-wordmark"></i>
//               <i className="devicon devicon-gulp-plain"></i>
//               <i className="devicon devicon-heroku-line-wordmark"></i>
//               <i className="devicon devicon-html5-plain"></i>
//               <i className="devicon devicon-jquery-plain-wordmark"></i>
//               <i className="devicon devicon-javascript-plain"></i>
//               <i className="devicon devicon-mocha-plain"></i>
//               <i className="devicon devicon-mongodb-plain-wordmark"></i>
//               <i className="devicon devicon-nodejs-plain"></i>
//               <i className="devicon devicon-postgresql-plain"></i>
//               <i className="devicon devicon-python-plain"></i>
//               <i className="devicon devicon-react-original"></i>
//               <i className="devicon devicon-rails-plain"></i>
//               <i className="devicon devicon-ruby-plain"></i>
//               <i className="devicon devicon-webpack-plain"></i>
//               <i className="devicon devicon-illustrator-plain"></i>
//               <i className="devicon devicon-photoshop-plain"></i>
//               <i className="devicon devicon-slack-plain"></i>
//               <i className="devicon devicon-trello-plain"></i>
//             </section> 
