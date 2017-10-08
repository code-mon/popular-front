import React, { Component } from 'react';
import PropTypes from 'prop-types'
import axios from 'axios';
import { getMovieGenres } from '../../utils/api.js';

class DashboardContainer extends Component {
    constructor(props) {
        super(props)

        this.loadMovieGenres = this.loadMovieGenres.bind(this)
    }

    loadMovieGenres() {
        getMovieGenres(axios.get)
            .then(response => response.data)
            .then(results => console.log(results))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <button onClick={this.loadMovieGenres}> Get Genres </button>
            </div>
        );
    }
}

export default DashboardContainer;