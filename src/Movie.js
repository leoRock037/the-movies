import React, { Component } from 'react';

import MovieDetail from './MovieDetail';

class Movie extends Component {
  render() {
    const {
      movie,
    } = this.props;

    return (
      <li>
        <h1>{movie.title}</h1>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie"/>
        <MovieDetail movie={movie} />
      </li>
    );
  }
}

export default Movie
