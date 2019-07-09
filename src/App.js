import React, { Component, Fragment } from 'react';
import './App.scss';

import SearchBar from './SearchBar';

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>The Movies</h1>
        <SearchBar/>
      </Fragment>
    );
  }
}

export default App;
