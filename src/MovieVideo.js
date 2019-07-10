import React, { Component, Fragment } from 'react';

import YouTube from 'react-youtube';

class MovieVideo extends Component {
  constructor () {
    super();
    this.state = {
      video: {}
    }
  }

  componentDidMount() {
    this.getMovieVideos()
  }

  getMovieVideos() {
    fetch(`https://api.themoviedb.org/3/movie/${this.props.movieId}/videos?api_key=d181194012eeff3813b275e5fddc75d4&language=en-US`)
      .then(res => res.json())
      .then(
        (response) => {
          this.setState({
            video: response.results[0]
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

    const { video } = this.state;

    const youtubeOptions = {
      height: '400',
      width: '600',
      playerVars: { 
        modestbranding: 0,
        showinfo: 0,
        controls: 0,
        loop: 1,
        rel: 0,
        autoplay: 0
      }
    }

    return (
      <Fragment>
        { video &&
          <div>
            <h3>See Trailer</h3>
            { video.site === 'YouTube' &&
              <YouTube
                videoId={video.key}
                opts={youtubeOptions}
              />
            }
          </div>
        }
      </Fragment>
    );
  }
}

export default MovieVideo;
