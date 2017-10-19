import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';

import config from 'config';
import * as actions from '../../actions';

import MovieCard from '../../../HomePage/components/MovieCard/MovieCard';
import MovieItems from './MovieItems'

//=========================
// COMPONENT
//=========================
class MoviesContainer extends Component {
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this)
    }
    

    handleClick(e) {
        console.log('clicking')
        const userId = '59e3ecc59bd56421907bb76e'
        const name = e.target.getAttribute("data-movie")
        const id = e.target.getAttribute("data-id")

        const movie = {
            name,
            id
        }

        this.props.setUserMovies(userId, movie);
    }

    render() {
        return (
            <div>
                <MovieItems handleEvent={this.handleClick} />
                <h1 style={ { ...localStyles.container, ...localStyles.header } }>...Movies I like</h1>
                <div style={ { ...localStyles.container, ...localStyles.movieContainer } }>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                </div>
            </div>
        );
    }
}

//=========================
// STYLES
//=========================
const localStyles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '80%',
        margin: 'auto',
        padding: 20,
    },

    movieContainer: {
        justifyContent: 'space-between',
    },

    header: {
        fontSize: 48,
        fontWeight: 'bold',
        justifyContent: 'flex-end',
    }
};

//=========================
// EXPORT
//=========================
const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
