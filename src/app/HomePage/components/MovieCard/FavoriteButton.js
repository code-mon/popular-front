import React, { Component } from 'react';

//images
import star from '../../../assets/star.svg';
import starToggled from '../../../assets/star-toggled.svg';

//=========================
// COMPONENT
//=========================
const FavoriteButton = ( { isToggled } ) => {
    let tempStyle;
    isToggled ? tempStyle = { ...localStyles.favButton, ...localStyles.favToggled } : tempStyle = { ...localStyles.favButton, ...localStyles.favUntoggled };
    
    return (
        <div style={ tempStyle }></div>
    );
};

//=========================
// STYLes
//=========================
const localStyles = {
    favButton: {
        marginTop: 14,
        width: 30,
        height: 30,
        alignSelf: 'center',
        backgroundSize: 'contain',
    },

    favToggled: {
        backgroundImage: `url( ${ starToggled } )`,
    },

    favUntoggled:{
        backgroundImage: `url( ${ star } )`,
    }
}

//=========================
// EXPORTS
//=========================
export default FavoriteButton;