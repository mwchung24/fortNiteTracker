import React from 'react';
import { Route, IndexRoute } from 'react-router';
import pageNotFound from './components/pageNotFound';

const routes = (
  // <Route>
    <Route path="*" component={pageNotFound}></Route>
  // </Route>
);

export default routes;
