import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/appRoutes';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<AppRoutes/>, document.getElementById('main'));
});
