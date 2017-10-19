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
        userId: isSignedIn(state.isSignedIn, state.dashboard.dashboardUser.id)
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ favoriteMovie: setUserMovies }, dispatch)
}

const isFavorite = (favoriteMovies, movieTitle) => {
    const el = favoriteMovies.find(movie => movie.movieTitle === movieTitle)
    return el ? true : false
}

const isSignedIn = (isSignedIn, userId) => {
    if (!isSignedIn) return null
    return userId
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard)
