import React from 'react';
import { Link } from 'react-router-dom';

export default class PageNotFound extends React.Component {
  render() {
    return (
      <div className="page-not-found">
        <h1>404</h1>
        <h2>Page not found!</h2>
        <p>
          <Link to="/">Go back to the main page</Link>
        </p>
      </div>
    );
  }
}
