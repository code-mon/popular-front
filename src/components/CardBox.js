import React, { Component } from 'react';
import axios from 'axios';
import { getPageOfMovies } from '../utils/api.js';
import MovieCard from './MovieCard.js';
import PropTypes from 'prop-types';

export default class CardBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesArray: [],
      loading: true,
      bottomOfBoxY: undefined,
      windowHeight: window.innerHeight
    };
    this.pageToLoad = 1;

    this.styles = {
      base: {
        display: 'flex',
        flexBasis: '1200px',
        flexWrap: 'wrap',
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: '#000000',
        zIndex: '1'
      }
    };
  }

  componentDidMount() {
    getPageOfMovies(axios.get, { page: this.pageToLoad })
      .then(response => {
        return response.data;
      })
      .then(data => {
        this.setState({
          moviesArray: data.results,
          loading: false
        });
        this.pageToLoad = data.page + 1;
      })
      .catch(err => {
        this.setState({
          error: err
        });
      });
  }

  render() {
    if (this.state.loading) {
      return <div />;
    } else {
      return (
        <div style={this.styles.base}>
          {this.state.moviesArray.map((movie, i) => {
            return (
              <MovieCard
                key={i}
                movieTitle={movie.title}
                movieBackdrop={movie.backdrop_path}
              />
            );
          })}
        </div>
      );
    }
  }
}
