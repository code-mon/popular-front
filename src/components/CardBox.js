import React, { Component } from 'react';
import axios from 'axios';
import { getPageOfMovies } from '../utils/api.js';
import PropTypes from 'prop-types';

export default class CardBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesArray: [],
      loading: [],
      bottomOfBoxY: undefined,
      windowHeight: window.innerHeight
    };
    this.pageToLoad = 1;
  }

  componentDidMount() {
    getPageOfMovies(axios.get, { page: this.pageToLoad })
      .then(response => {
        return response.data;
      })
      .then(data => {
        this.setState({
          moviesArray: data.results
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
    return <div>{JSON.stringify(this.state.moviesArray)}</div>;
  }
}
