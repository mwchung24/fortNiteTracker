import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/appRoutes';

document.addEventListener('DOMContentLoaded', () => {
// window.onload = () => {
  console.log("inside appclient.jsx");
  ReactDOM.render(<AppRoutes/>, document.getElementById('main'));
// };
});
