import React, { Component } from 'react';

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
      page: 1,
      filterText: ''
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

  handleChangeFilterText = (event) => {
    this.setState({filterText: event.target.value});
  }

  activeCategory = (category) => {
    return (category === this.state.category) ? 'filter-category active' : 'filter-category'
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

    let results = movies.results || []
    let searched_movies = results.filter((movie) => (movie.title.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !== -1));

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

        { (movies.total_results >= 0) &&
          <div className='elements-wrapper grid-block'>
            {/* FILTERS */ }
            <div className='span-sm-12 filters grid-block'>
              <div className='span-sm-12 span-lg-4 search-form'>
                <label>Search</label>
                <input type='text' value={this.state.filterText} onChange={this.handleChangeFilterText} placeholder='by movie title'/>
              </div>
              <div className='span-sm-12 span-lg-8 category-button-collection'>
                <button className={this.activeCategory('popular')} onClick={(e) => this.filterByCategory('popular')}>Popular</button>
                <button className={this.activeCategory('top_rated')}  onClick={(e) => this.filterByCategory('top_rated')}>Top Rated</button>
                <button className={this.activeCategory('upcoming')}  onClick={(e) => this.filterByCategory('upcoming')}>Upcoming</button>
              </div>
            </div>

            {/* TITLE */ }
            <div className='span-sm-12 span-lg-4'>
              <h2>MOVIES</h2>
              <p>Find the best movies</p>
            </div>

            <div className='span-sm-12 span-lg-8'>
              {/* RESULTS */ }
              <div className='elements'>
                { searched_movies.map((movie, index) => (
                  <Movie
                    key={index}
                    movie={movie}
                  />
                ))}
              </div>

              { (searched_movies.length === 0) &&
                <p className='text-center'>There are no results related to your search</p>
              }

              {/* PAGINATION */ }
              <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                pageCount={movies.total_pages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={this.handlePageClick}
                containerClassName={'paginator'}
                activeClassName={'active'}
              />

            </div>
          </div>
        }

      </section>
    );
  }
}

export default MoviesList
