import React from 'react';

//=========================
// COMPONENT
//=========================
const GenreButton = ( { genreName } ) => {
    return(
        <div style={ { ...localStyles.genreButton, ...localStyles.unselected } }>
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
        transition: 'all 1s',
    },

    selected: {
        border: '1px solid #382F2E',
        backgroundColor: '#FD4034',
    },

    unselected: {
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