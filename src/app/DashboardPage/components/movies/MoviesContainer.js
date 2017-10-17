import React, { Component } from 'react';
import MovieCard from '../../../HomePage/components/MovieCard/MovieCard';

//=========================
// COMPONENT
//=========================
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

//=========================
// STYLES
//=========================
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

//=========================
// EXPORT
//=========================
export default MoviesContainer;
