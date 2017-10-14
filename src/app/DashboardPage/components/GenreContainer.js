import React from 'react'
import PropTypes from 'prop-types'
import GenreItem from './GenreItem'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import * as actions from '../actions'

const mapStateToProps = state => {
    return {
        genre_like: state.dashboardUser.genre_like
    }
}

const mapDispatchToProps = dispatch => {
    bindActionCreators(actions, dispatch);
}

const GenreContainer = props => {
    
    return (
        <div>
            {this.props.genres.map((i, genre) => {
                <GenreItem 
                    key={i}
                    genreId={ genre.id }
                    genreName={ genre.name }
                />
            })}
        </div>
    );
};

GenreContainer.propTypes = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(GenreContainer)