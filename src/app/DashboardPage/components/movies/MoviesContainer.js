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

    }

    render() {
        return (
            <div>

                <h1 style={ { ...localStyles.container, ...localStyles.header } }>...Movies I like</h1>
                <div style={ { ...localStyles.container, ...localStyles.movieContainer } }>
                    <MovieItems 
                        handleClick={this.handleClick} 
                        userMovies={this.props.userMovies}
                    />
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
        justifyContent: 'center',
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
    userId: state.dashboard.dashboardUser.id,
    userMovies: state.dashboard.dashboardUser.movies,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
