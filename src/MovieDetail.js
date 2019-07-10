import React, { Component, Fragment } from 'react';

import close from './images/close.svg';

import ReactModal from 'react-modal';

class MovieDetail extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    }
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  render() {

    const {
      movie,
    } = this.props;

    return (
      <Fragment>
        <div onClick={this.handleOpenModal}>
          {this.props.children}
        </div>

       {/* MODAL DETAILS */ }
        <ReactModal isOpen={this.state.showModal}>
          <img src={close} alt='X' onClick={this.handleCloseModal}/>
          <div className='grid-block'>
            <img className='span-sm-12 span-md-3' src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.media_type}/>
            <div className='span-sm-12 span-md-9'>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <p>{movie.release_date}</p>
            </div>
          </div>
        </ReactModal>
      </Fragment>
    );
  }
}

export default MovieDetail
