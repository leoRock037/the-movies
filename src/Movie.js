import React, { Component } from 'react';

import MovieDetail from './MovieDetail';

class Movie extends Component {
  render() {
    const {
      movie,
      onHeader
    } = this.props;

    return (
      <MovieDetail movie={movie}>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie"/>
        { onHeader && <span>See Details</span>}
        { !onHeader && <h3>{movie.title}</h3> }
      </MovieDetail>
    );
  }
}

export default Movie
