import React, { Component } from 'react';
import MovieCard from '../../../HomePage/components/MovieCard/MovieCard';

class MoviesContainer extends Component {
    render() {
        return (
            <div style={ localStyles.container }>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
            </div>
        );
    }
}

const localStyles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '80%',
        margin: 'auto',
        padding: 20,
    }
};

export default MoviesContainer;