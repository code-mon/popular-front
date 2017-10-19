import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setUserMovies } from '../../actions'
import MovieCard from './MovieCard'

const mapStateToProps = (state, ownProps) => {
    return {
        isFavorite: isFavorite(
            state.dashboard.dashboardUser.movies,
            ownProps.movieTitle
        ),
        userId: state.dashboard.dashboardUser.id
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ favoriteMovie: setUserMovies }, dispatch)
}

const isFavorite = (favoriteMovies, movieTitle) => {
    const el = favoriteMovies.find(movie => movie.movieTitle === movieTitle)
    return el ? true : false
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard)
