import React, { Component } from 'react';

import Movie         from './Movie';
import ReactPaginate from 'react-paginate';

class MoviesList extends Component {

  render() {

    const {
      movies,
      apiKey,
      totalPages,
      handlePageClick
    } = this.props;

    return (
      <div className='span-sm-12 span-lg-8'>
        {/* RESULTS */ }
        <div className='elements'>
          { movies.map((movie, index) => (
            <Movie
              key={index}
              apiKey={apiKey}
              movie={movie}
            />
          ))}
        </div>

        { (movies.length === 0) &&
          <p className='text-center'>There are no results related to your search</p>
        }

        {/* PAGINATION */ }
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={'paginator'}
          activeClassName={'active'}
        />
      </div>
    );
  }
}

export default MoviesList;
