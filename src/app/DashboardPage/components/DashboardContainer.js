import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import GenresContainer from './genres/GenresContainer'
import MoviesContainer from './movies/MoviesContainer'

class DashboardContainer extends Component {
    render() {
        return (
            <div>
                <GenresContainer />
                <MoviesContainer movies={this.props.movies} />
            </div>
        )
    }
}
DashboardContainer = connect(state => ({
    movies: state.dashboard.dashboardUser.movies
}))(DashboardContainer)

export default DashboardContainer
