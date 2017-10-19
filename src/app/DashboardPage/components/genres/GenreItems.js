import React, { Component } from 'react';
import GenreButton from './GenreButton';

const GenreItems = ({ genres, isFetching, handleClick }) => {
    return (
        isFetching ?
        <div style={ { ...localStyles.container, ...localStyles.header } }>fetching...</div> 
        :
        <div>
            <h1 style={ { ...localStyles.container, ...localStyles.header } } >Genres I like...</h1>
            <div style={ localStyles.container }>
                { 
                    genres.map( genre => {
                        return <GenreButton 
                                    key={ genre.id } 
                                    genreName={ genre.name }
                                    isFavorited={ genre.isFavorited }
                                    genre={ genre }
                                    handleClick={ handleClick }>
                                </GenreButton>
                    }) 
                }
            </div>
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
    },

    header: {
        fontSize: 48,
        fontWeight: 'bold',
    }
};

export default GenreItems;