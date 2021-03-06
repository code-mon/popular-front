import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';

import config from 'config';
import * as actions from '../../actions';

import GenreItems from './GenreItems'

class GenresContainer extends Component {
    constructor( props ){
        super( props );

        this.handleClick = this.handleClick.bind( this );
        this.removeGenre = this.removeGenre.bind( this );
        this.addGenre = this.addGenre.bind( this );
    }

    componentDidMount() {
        this.props.getMovieGenres()
    }

    removeGenre( tGenre) {
        this.props.removeUserGenre( this.props.userId, tGenre );
    }

    addGenre( tGenre ) {
        this.props.setUserGenres( this.props.userId, tGenre );
    }

    handleClick( tGenre, isFavorited ) {
        isFavorited
        ? this.removeGenre(tGenre)
        : this.addGenre(tGenre)
    }

    render() {
        return (
            <div>
                <GenreItems
                    genres={this.props.genres}
                    isFetching={this.props.isFetching}
                    userGenres={this.props.userGenres}
                    userId={this.props.userId}
                    setGenre={this.props.setUserGenres}
                    handleClick={this.handleClick}>
                </GenreItems>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    genres: state.dashboard.dashboardGenres.genres,
    isFetching: state.dashboard.dashboardGenres.isFetching,
    userId: state.dashboard.dashboardUser.id,
    userGenres: state.dashboard.dashboardUser.genres,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GenresContainer);