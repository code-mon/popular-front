import React, { Component } from 'react'
import MovieCard from '../../../HomePage/components/MovieCard/MovieCard'

//=========================
// COMPONENT
//=========================
class MoviesContainer extends Component {
    render() {
        const { movies } = this.props
        return (
            <div>
                <h1 style={{ ...localStyles.container, ...localStyles.header }}>
                    ...Movies I like
                </h1>
                <div
                    style={{
                        ...localStyles.container,
                        ...localStyles.movieContainer
                    }}>
                    {movies.map(movie => {
                        return (
                            <MovieCard
                                key={movie.movieTitle}
                                movieTitle={movie.movieTitle}
                                movieBackdrop={movie.movieBackdrop}
                                isFavorite={true}
                            />
                        )
                    })}
                </div>
            </div>
        )
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
        padding: 20
    },

    movieContainer: {
        justifyContent: 'space-between'
    },

    header: {
        fontSize: 48,
        fontWeight: 'bold',
        justifyContent: 'flex-end'
    }
}

//=========================
// EXPORT
//=========================
export default MoviesContainer
