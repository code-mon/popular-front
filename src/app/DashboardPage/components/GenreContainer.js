import React from 'react';
import PropTypes from 'prop-types';
import GenreItem from './GenreItem'

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

export default GenreContainer;