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
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '80%',
        margin: 'auto',
        padding: 20,
    }
};

export default GenreItems;