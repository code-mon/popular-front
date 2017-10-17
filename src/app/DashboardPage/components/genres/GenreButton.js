import React, { Component } from 'react';

//=========================
// COMPONENT
//=========================
// const GenreButton = ( { genreName } ) => {
//     return(
//         <div style={ { ...localStyles.genreButton, ...localStyles.unselected } }>
//             <div style={ localStyles.buttonText }>
//                 { genreName }
//             </div>
//         </div>
//     )
// }

class GenreButton extends Component{
    constructor( props ){
        super( props );
        
        this.state = {
            isFavorited: false,
        }

        this.toggleFavorited = this.toggleFavorited.bind( this );
    }

    toggleFavorited(){
        this.setState({
            isFavorited: !this.state.isFavorited,
        });
    }

    render(){
        let tempStyle = null;
        this.state.isFavorited ? tempStyle = { ...localStyles.genreButton, ...localStyles.selected }
        : tempStyle = { ...localStyles.genreButton, ...localStyles.unselected };
        return(
            <div style={ tempStyle } onClick={ this.toggleFavorited }>
                <div style={ localStyles.buttonText }>
                    { this.props.genreName }
                </div>
            </div>           
        )
    }
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