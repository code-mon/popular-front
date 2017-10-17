import React, { Component } from 'react';
import MovieCard from '../../../HomePage/components/MovieCard/MovieCard';

//=========================
// COMPONENT
//=========================
class MoviesContainer extends Component {
    render() {
        return (
            <div>
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
export default MoviesContainer;
