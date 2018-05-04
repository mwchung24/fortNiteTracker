import React from 'react';
// import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageNotFound from './pageNotFound';
import LandingPage from './landingPage';
// import Routes from '../routes';

export default class AppRoutes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage}></Route>
            <Route path="*" component={PageNotFound}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
