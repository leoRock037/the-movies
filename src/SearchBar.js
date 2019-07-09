import React, { Component, Fragment } from 'react';

import Movie from './Movie';

class SearchBar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      error: null,
      isLoaded: false,
      category: 'popular',
      movies: []
    }
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/${this.state.category}?api_key=d181194012eeff3813b275e5fddc75d4`)
      .then(res => res.json())
      .then(
        (response) => {
          this.setState({
            isLoaded: true,
            movies: response
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const {
      error,
      movies,
      isLoaded,
    } = this.state;

    return (
      <Fragment>
        { !isLoaded &&
          <div>Loading...</div>
        }
        { error &&
          <div>Error: {error.message}</div>
        }
        
        { (movies.total_results >= 0) &&
          <ul>
            {movies.results.map(movie => (
              <Movie
                key={movie.id}
                movie={movie}
              />
            ))}
          </ul>
        }

        { (movies.total_results === 0) &&
          <h1>No Existen resultados</h1>
        }
      </Fragment>
    );
  }
}

export default SearchBar
