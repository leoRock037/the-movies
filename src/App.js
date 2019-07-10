import React, { Component, Fragment } from 'react';
import './App.scss';

import Header     from './Header';
import MoviesList from './MoviesList';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <MoviesList/>
      </Fragment>
    );
  }
}

export default App;
