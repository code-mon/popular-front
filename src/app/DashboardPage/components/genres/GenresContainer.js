import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';

import config from 'config';
import * as actions from '../../actions';

import GenreItems from './GenreItems'

class GenresContainer extends Component {

    componentDidMount() {
        this.props.getMovieGenres()
    }

    handleClick() {
    }

    render() {
        return (
            <div>
                <GenreItems
                    genres={this.props.genres}
                    isFetching={this.props.isFetching}
                    userGenres={this.props.userGenres}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    genres: state.dashboard.dashboardGenres.genres,
    isFetching: state.dashboard.dashboardGenres.isFetching,
    // userGenres: state.dashboard.dashboardUser.info.genre_like
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GenresContainer);