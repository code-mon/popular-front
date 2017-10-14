import React from 'react';

const GenreItem = ({ genre, setUserGenres } ) => {
    handleClick(e){
        e.target.genreName
        setUserGenres( genre );
    }
    return (
        <button genreId={this.genre.id} genreName={this.genre.name} onClick={handleClick} >{this.genre.name}</button>
    );
};

export default GenreItem;