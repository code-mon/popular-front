import React, { Component } from 'react';
import GenreButton from './GenreButton';

const GenreItems = ({ genres, userGenres, isFetching, handleClick }) => {
    return (
        isFetching ?
        <div style={ { ...localStyles.container, ...localStyles.header } }>fetching...</div> 
        :
        <div>
            <h1 style={ { ...localStyles.container, ...localStyles.header } } >Genres I like...</h1>
            <div style={ localStyles.container }>
                { 
                    genres.map( genre => {
                        //check if this genre correlates to a user genre
                        let isFavorited = false;
                        if( userGenres ) {
                            for( let i = 0; i < userGenres.length; ++i ){
                                if( genre.name === userGenres[i].name ){
                                    isFavorited = true;
                                }
                            }
                        }
                        return <GenreButton 
                                    key={ genre.id } 
                                    genreName={ genre.name }
                                    userGenres={ userGenres }
                                    isFavorited={ isFavorited }
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