import React from 'react';
// import { Router, browserHistory } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import pageNotFound from './pageNotFound';
import landingPage from './landingPage';
import Routes from '../routes';

export default class AppRoutes extends React.Component {
  render() {
    console.log("inside approutes");
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}
