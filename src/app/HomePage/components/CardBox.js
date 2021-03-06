import React, { Component } from 'react'
import axios from 'axios'
import { getPageOfMovies } from '../../utils/api.js'
import InfiniteScroll from 'react-infinite-scroller'
import MovieCardContainer from './MovieCard/MovieCardContainer.js'
import PropTypes from 'prop-types'
const Spinner = require('react-spinkit')

export default class CardBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            moviesArray: [],
            windowHeight: window.innerHeight
        }

        this.styles = {
            base: {
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                maxWidth: '1200px',
                margin: '0 auto',
                backgroundColor: '#000000',
                zIndex: '1'
            }
        }

        this.loadMoreMovies = this.loadMoreMovies.bind(this)
    }

    loadMoreMovies(page) {
        getPageOfMovies(axios.get, { page })
            .then(response => {
                return response.data
            })
            .then(data => {
                let movies = data.results
                this.setState(prevState => {
                    return {
                        moviesArray: [...prevState.moviesArray, ...movies]
                    }
                })
            })
            .catch(err => {
                this.setState({
                    error: err
                })
            })
    }

    render() {
        console.log(this.state.moviesArray)
        const cards = this.state.moviesArray.map((movie, i) => {
            return (
                <MovieCardContainer
                    key={i}
                    movieTitle={movie.title}
                    movieBackdrop={movie.backdrop_path}
                />
            )
        })

        return (
            <InfiniteScroll
                style={this.styles.base}
                hasMore={true}
                loadMore={this.loadMoreMovies}
                loader={<Spinner name="circle" color="white" />}
                useWindow={true}>
                {cards}
            </InfiniteScroll>
        )
    }
}
