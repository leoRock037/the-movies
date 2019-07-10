import React, { Component, Fragment } from 'react';

import ReactModal from 'react-modal';
import close      from './images/close.svg';

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
        <ReactModal isOpen={this.state.showModal}>
          {/* CLOSE */ }
          <img src={close} alt='X' onClick={this.handleCloseModal}/>

          {/* DETAILS DATA */ }
          <div className='grid-block details'>
    
            <img className='span-sm-12 span-md-3' src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.media_type}/>
            <div className='span-sm-12 span-md-9'>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <p>{movie.release_date}</p>
              { details.genres &&
                <ul>
                  { details.genres.map((genre, index) => (
                      <li key={index}>{genre.name}</li>
                    ))
                  }
                </ul>
              }
              { details.production_companies &&
                <ul>
                  { details.production_companies.map((company, index) => (
                      <li key={index}>
                        {company.name}
                        <img src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`} alt='logo'/>
                      </li>
                    ))
                  }
                </ul>
              }
            </div>
          </div>
        </ReactModal>
      </Fragment>
    );
  }
}

export default MovieDetail
