import React, { Component } from 'react';
import { getCompleteMovieBackdropPath } from '../utils/api.js';
import Radium from 'radium';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.styles = {
      base: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        width: '300px',
        height: '169px',
        backgroundImage: `url(${getCompleteMovieBackdropPath(
          this.props.movieBackdrop
        )})`,
        fontSize: '18px',
        color: '#f5f5f5',
        opacity: '0.6',
        ':hover': {
          zIndex: '1',
          opacity: '1',
          fontSize: '22px',
          transform: 'scale(1.2)'
        }
      }
    };
  }

  static propTypes = {
    movieBackdrop: PropTypes.string.isRequired,
    movieTitle: PropTypes.string.isRequired
  };

  render() {
    return <div style={this.styles.base}>{this.props.movieTitle}</div>;
  }
}

export default Radium(MovieCard);
