import React, { Component, Fragment } from 'react';

import Movie from './Movie';

class MoviesList extends Component {

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
    this.getMovies()
  }

  filterByCategory = (category) => {
    this.setState({
      category: category
    }, () => {
      this.getMovies();
    });
  }

  getMovies() {
    console.log(this.state.category)
    fetch(`https://api.themoviedb.org/3/movie/${this.state.category}?api_key=d181194012eeff3813b275e5fddc75d4&page=1`)
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
      <section className='wrapper'>
        {/* LOADING */ }
        { !isLoaded &&
          <div>Loading...</div>
        }

        {/* ERROR */ }
        { error &&
          <div>Error: {error}</div>
        }

        <div>
        <button onClick={(e) => this.filterByCategory('popular')}>Popular</button>
        <button onClick={(e) => this.filterByCategory('top_rated')}>Top Rated</button>
        <button onClick={(e) => this.filterByCategory('upcoming')}>Upcoming</button>
        </div>

        { (movies.total_results >= 0) &&
          <div className='elements-wrapper grid-block'>
            {/* TITLE */ }
            <div className='span-sm-12 span-md-4'>
              <h2>MOVIES</h2>
              <p>Find the best movies</p>
            </div>
            {/* RESULTS */ }
            <div className='elements span-sm-12 span-md-8'>
              { movies.results.map((movie, index) => (
                <Movie
                  key={index}
                  movie={movie}
                />
              ))}
            </div>

          </div>
        }

        { (movies.total_results === 0) &&
          <h1>No Existen resultados</h1>
        }
      </section>
    );
  }
}

export default MoviesList
