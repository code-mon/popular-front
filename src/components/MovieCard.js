import React, { Component } from 'react';
import { getCompleteMovieBackdropPath } from '../utils/api.js';
import { zoomIn, fadeInUp, merge } from 'react-animations';
import Radium from 'radium';
import PropTypes from 'prop-types';
const Waypoint = require('react-waypoint');

const zoomInAndFadeUp = merge(zoomIn, fadeInUp);

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
        transition: 'transform 300ms ease-in',
        // animation: `0.5s ease-in`,
        // animationName: Radium.keyframes(zoomInAndFadeUp, 'zoomAndFade'),
        ':hover': {
          zIndex: '1',
          opacity: '1',
          fontSize: '22px',
          transform: 'scale(1.2)'
        }
      },
      hidden: {
        opacity: '0',
        transform: 'scale(0.7)',
        visibility: 'hidden'
      }
    };
    this.state = {
      visible: false
    };
    this.setVisible = this.setVisible.bind(this);
  }

  static propTypes = {
    animationDelay: PropTypes.string,
    movieBackdrop: PropTypes.string.isRequired,
    movieTitle: PropTypes.string.isRequired
  };

  setVisible() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <Waypoint onEnter={this.setVisible} onLeave={this.setVisible}>
        <div
          style={[this.styles.base, !this.state.visible && this.styles.hidden]}>
          {this.props.movieTitle}
        </div>
      </Waypoint>
    );
  }
}

export default Radium(MovieCard);
