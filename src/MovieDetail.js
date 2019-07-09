import React, { Component, Fragment } from 'react';

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
        <button onClick={this.handleOpenModal}>Trigger Modal</button>
        <ReactModal
          isOpen={this.state.showModal}
        >
          <button onClick={this.handleCloseModal}>Close Modal</button>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
        </ReactModal>
      </Fragment>
    );
  }
}

export default MovieDetail
