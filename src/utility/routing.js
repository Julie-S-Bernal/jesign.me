import React from 'react';

import { Route, Switch } from 'react-router-dom';
import profileIndex from '../profile/index';
// import ProjectsShow  from  '../projects/ProjectsShow';
// import ProtectedRoute from './ProtectedRoute';

const Routes = () => {
  return (

    <Switch>
      <Route exact path="/" component={profileIndex} />
      {/* <Route path="/skill" component={skill} />
      <Route path="/Project" component={project} />
      <Route path="/Blog" component={blog} /> */}
    </Switch>

  );
};

export default Routes;
