import React from 'react';
import GenreButton from './GenreButton';

const GenreItems = ({ genres,  userGenres, isFetching }) => {
    return (
        isFetching ?
        <div style={ localStyles.container }>fetching...</div> 
        :
        <div style={ localStyles.container }> 
            { 
                genres.map(genre => {
                    return <GenreButton key={ genre.id } genreName={ genre.name } userGenres={ userGenres }/>
                }) 
            }
        </div>
    );
};

const localStyles = {
    container: {
        margin: 'auto',
        // backgroundColor: 'yellow',
        width: '80%',
        display: 'flex',
        flexWrap: 'wrap',
        padding: 20,

    }
};

export default GenreItems;