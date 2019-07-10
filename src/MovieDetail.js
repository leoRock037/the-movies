import React, { Component, Fragment } from 'react';

import ReactModal from 'react-modal';
import MovieVideo from './MovieVideo';
import close      from './images/close.svg';

const customModalStyles = {
  overlay: {
    zIndex: 2
  },
  content : {
    top    : '0%',
    bottom : '0%',
    left   : '0%',
    right  : 'auto',
  }
};

class MovieDetail extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false,
      details: {}
    }
  }

  componentDidMount() {
    this.getMovieDetails()
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  getMovieDetails() {
    fetch(`https://api.themoviedb.org/3/movie/${this.props.movie.id}?api_key=d181194012eeff3813b275e5fddc75d4&language=en-US`)
      .then(res => res.json())
      .then(
        (response) => {
          this.setState({
            details: response
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

    const { movie } = this.props;
    const { details } = this.state;

    return (
      <Fragment>
        <div onClick={this.handleOpenModal}>
          {this.props.children}
        </div>

       {/* MODAL DETAILS */ }
        <ReactModal
          style={customModalStyles}
          isOpen={this.state.showModal}
        >
          {/* CLOSE */ }
          <img className='close-modal' src={close} alt='X' onClick={this.handleCloseModal}/>

          {/* DETAILS DATA */ }
          <div className='grid-block movie-details'>
    
            <div className='span-sm-12 span-md-6'>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.media_type}/>
              { details.genres &&
                <Fragment>
                  <h2>Genres</h2>
                  <ul>
                    { details.genres.map((genre, index) => (
                        <li key={index}>{genre.name}</li>
                      ))
                    }
                  </ul>
                </Fragment>
              }
              { details.production_companies &&
                <Fragment>
                  <h2>Production Companies</h2>
                  <ul className='companies'>
                    { details.production_companies.map((company, index) => (
                        <li key={index}>
                          <img src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`} alt={company.name}/>
                        </li>
                      ))
                    }
                  </ul>
                </Fragment>
              }
            </div>
            <div className='span-sm-12 span-md-6'>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <p className='small'>{movie.release_date}</p>
              <MovieVideo movieId={movie.id}/>
            </div>
          </div>
        </ReactModal>
      </Fragment>
    );
  }
}

export default MovieDetail
