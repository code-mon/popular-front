import React, { Component } from 'react'
import { getCompleteMovieBackdropPath } from '../../../utils/api.js'
import MovieTitle from './MovieTitle.js'
import Radium from 'radium'
import PropTypes from 'prop-types'
const Waypoint = require('react-waypoint')

//STYLES
import localStyle from './MovieCard.style';

//COMPONENTS
import FavoriteButton from './FavoriteButton';

class MovieCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            isFavorite: false,
        }
        this.setVisible = this.setVisible.bind(this)
        this.setFavorite = this.setFavorite.bind(this)        
    }

    static propTypes = {
        movieBackdrop: PropTypes.string.isRequired,
        movieTitle: PropTypes.string.isRequired
    }

    //get the movie backdrop from the prop for the css background
    getMovieBackgroud() {
        return `url(${getCompleteMovieBackdropPath(
        this.props.movieBackdrop
        )})`;
    }

    setFavorite() {
        this.setState({
            isFavorite: !this.state.isFavorite 
        });
    }

    setVisible() {
        this.setState({
            visible: !this.state.visible
        })
    }

    render() {
        const { movieTitle } = this.props
        //to give a border around selected movies (not 100% sold on the look of this)
        let tempStyle = null;

        //set style based on favorite state
        this.state.isFavorite ? tempStyle = { ...localStyle.base, border: '2px solid #FD4034', backgroundImage: this.getMovieBackgroud(), }
        : tempStyle = { ...localStyle.base, backgroundImage: this.getMovieBackgroud() };
        
        return (
            // Waypoint watches for when an element is in view and calls the onEnter and onLeave as needed
            <Waypoint onEnter={this.setVisible} onLeave={this.setVisible}>
                <div
                    style={[
                        tempStyle,
                        !this.state.visible && localStyle.hidden
                    ]}
                    onClick={ this.setFavorite }>
                    <MovieTitle>{movieTitle}</MovieTitle>
                    <FavoriteButton isToggled={ this.state.isFavorite }/>
                </div>
            </Waypoint>
        )
    }
}

export default Radium(MovieCard)
