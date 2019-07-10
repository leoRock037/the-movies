import React, { Component, Fragment } from 'react';

import Movie         from './Movie';
import ReactPaginate from 'react-paginate';

class MoviesList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      error: null,
      isLoaded: false,
      category: 'popular',
      movies: [],
      page: 1
    }
  }

  componentDidMount() {
    this.getMovies()
  }

  filterByCategory = (category) => {
    this.setState({
      category: category,
      page: 1
    }, () => {
      this.getMovies();
    });
  }

  handlePageClick = (page) => {
    this.setState({
      page: page.selected + 1
    }, () => {
      this.getMovies();
    });
  }

  getMovies() {
    fetch(`https://api.themoviedb.org/3/movie/${this.state.category}?api_key=d181194012eeff3813b275e5fddc75d4&page=${this.state.page}`)
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
            <div className='span-sm-12 span-lg-4'>
              <h2>MOVIES</h2>
              <p>Find the best movies</p>
            </div>
            <div className='elements span-sm-12 span-lg-8'>
              {/* RESULTS */ }
              { movies.results.map((movie, index) => (
                <Movie
                  key={index}
                  movie={movie}
                />
              ))}

              {/* PAGINATION */ }
              <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={movies.total_pages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
              />

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
