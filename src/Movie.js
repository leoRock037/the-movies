import React, { Component } from 'react';

import MovieDetail from './MovieDetail';

class Movie extends Component {
  render() {
    const {
      movie,
    } = this.props;

    return (
      <MovieDetail movie={movie}>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie"/>
        <h3>{movie.title}</h3>
      </MovieDetail>
    );
  }
}

export default Movie
