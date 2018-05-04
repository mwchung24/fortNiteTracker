import React from 'react';
import { Route } from 'react-router-dom';
import pageNotFound from './components/pageNotFound';
import landingPage from './components/landingPage';

const Routes = (
  <div>
    <Route path="/" component={landingPage}></Route>
    <Route path="*" component={pageNotFound}></Route>
  </div>
);

export default Routes;
