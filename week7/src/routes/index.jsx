import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from '../containers/PrivateRoute/PrivateRoute';

import LoginRoute from './LoginRoute';
import AuthorizeRoute from './AuthorizeRoute';
import DashboardRoute from './DashboardRoute';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LoginRoute} />

      <Route exact path="/authorize" component={AuthorizeRoute} />

      <PrivateRoute path="/dashboard" component={DashboardRoute} />

    </Switch>

  );
};
export default Routes;