import React, { Component, Fragment } from 'react';
import './App.scss';

import Header     from './Header';
import MoviesWrapper from './MoviesWrapper';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <MoviesWrapper/>
      </Fragment>
    );
  }
}

export default App;
