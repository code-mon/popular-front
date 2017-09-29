import React, { Component } from 'react';
import axios from 'axios';
import { getPageOfMovies } from '../utils/api.js';
import InfiniteScroll from 'react-infinite-scroller';
import MovieCard from './MovieCard.js';
import PropTypes from 'prop-types';

export default class CardBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesArray: [],
      loading: false,
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

    this.loadMoreMovies = this.loadMoreMovies.bind(this);
  }

  loadMoreMovies(page) {
    getPageOfMovies(axios.get, { page })
      .then(response => {
        return response.data;
      })
      .then(data => {
        let movies = data.results;
        this.setState(prevState => {
          return {
            moviesArray: [...prevState.moviesArray, ...movies]
          };
        });
      })
      .catch(err => {
        this.setState({
          error: err
        });
      });
  }

  render() {
    const cards = this.state.moviesArray.map((movie, i) => {
      return (
        <MovieCard
          key={i}
          movieTitle={movie.title}
          movieBackdrop={movie.backdrop_path}
        />
      );
    });

    return (
      <InfiniteScroll
        style={this.styles.base}
        hasMore={true}
        loadMore={this.loadMoreMovies}
        loader={<div>Loading</div>}
        useWindow={false}>
        {cards}
      </InfiniteScroll>
    );
  }
}
