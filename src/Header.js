import React, { Component, Fragment } from 'react';

import Movie         from './Movie';

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      trending_movie: {}
    }
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=d181194012eeff3813b275e5fddc75d4`)
      .then(res => res.json())
      .then(
        (response) => {
          const results = response.results
          const movie = results[Math.floor(Math.random()*results.length)];

          this.setState({
            trending_movie: movie
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }

  render() {
    const { trending_movie } = this.state;

    const headerStyles = {
      backgroundImage: 'url('+ `https://image.tmdb.org/t/p/original/${trending_movie.backdrop_path}`+')',
    }

    return (
      <Fragment>
        { trending_movie && 
          <header className='hero' style={headerStyles}>
            {/* PAGE TITLE */ }
            <h1>The Movies</h1>
            {/* TRENDING MOVIE */ }
            <div className='grid-block align-middle-center'>
              <div className='span-sm-12 span-md-6'>
                <p className='vote-average'>{trending_movie.vote_average}</p>
                <h3>Vote Average</h3>
              </div>
              <div className='span-sm-12 span-md-6'>
                <h2>{trending_movie.original_title}</h2>
                <p>{trending_movie.overview}</p>
                <p className='date'>{trending_movie.release_date}</p>
                {/* DETAILS */ }
                <Movie
                  onHeader={true}
                  movie={trending_movie}
                />
              </div>
            </div>
          </header>
        }
        { !trending_movie &&
          <header className='hero'>
            <h1>The Movies</h1>
            <p>Search your favorite movies</p>
          </header>
        }
      </Fragment>
    );
  }
}

export default Header;
