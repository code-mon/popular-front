import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import MovieItems from './MovieItems'

class GenresContainer extends Component {

    componentDidMount() {
        this.props.getMovieGenres()
    }

    render() {
        return (
            <div>
                <MovieItems
                    isFetching={this.props.isFetching}
                    userMovies={this.props.userMovies}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isFetching: state.dashboard.dashboardGenres.isFetching,
    userGenres: state.dashboard.dashboardUser.userMovies
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GenresContainer);