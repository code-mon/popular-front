import React, { Component } from 'react';

//=========================
// COMPONENT
//=========================
const GenreButton = ( { genre, genreName, handleClick, isFavorited } ) => {
    
    // let isFavorited = userGenres.find( { name: genreName } ) > -1 ? true : false
    // console.log( isFavorited );

    let tempStyle = null;
    isFavorited ? tempStyle = { ...localStyles.genreButton, ...localStyles.selected }
    : tempStyle = { ...localStyles.genreButton, ...localStyles.unselected };
    return(
        <div style={ tempStyle } onClick={ () => { handleClick( genre ) } }>
            <div style={ localStyles.buttonText }>
                { genreName }
            </div>
        </div>           
    )
}

//=========================
// STYLES
//=========================
const localStyles = {
    genreButton: {
        display: 'flex',
        justifyContent: 'center',
        padding: 4,
        width: 110,
        height: 110,
        borderRadius: 6,
        border: '1px solid #382F2E',
        marginBottom: 10,
        marginLeft: 2,
        marginRight: 2,
        cursor: 'pointer',
        transition: 'all .7s',
    },

    selected: {
        color: 'white',
        border: '1px solid #382F2E',
        backgroundColor: '#FD4034',
    },

    unselected: {
        color: 'lightgray',
        border: '1px solid #382F2E',
    },

    buttonText: {
        alignSelf: 'center',
    }
}

//=========================
// EXPORT
//=========================
export default GenreButton;