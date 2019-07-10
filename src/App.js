import React, { Component, Fragment } from 'react';
import './App.scss';

import MoviesList from './MoviesList';

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>The Movies</h1>
        <MoviesList/>
      </Fragment>
    );
  }
}

export default App;
