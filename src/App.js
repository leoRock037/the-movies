import React, { Component, Fragment } from 'react';
import './App.scss';

import Header     from './Header';
import MoviesWrapper from './MoviesWrapper';

const apiKey = 'd181194012eeff3813b275e5fddc75d4';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header apiKey={apiKey}/>
        <MoviesWrapper apiKey={apiKey}/>
      </Fragment>
    );
  }
}

export default App;
