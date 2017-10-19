import React from 'react';



const MovieItems = ({ handleClick, userMovies }) => {
    return (
        userMovies.map(movie => {
            const fullStyle = {...styles.card, backgroundImage: `url(${movie.backdropPath})` }
            return (
                <div key={movie._id} style={fullStyle}>
                    <div style={styles.title}>{movie.movieTitle}</div>
                </div>
            )
        })
    );
};

const styles = {
    card: {
        boxSizing: 'border-box',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        width: '300px',
        height: '169px',
        fontSize: '18px',
        color: '#f5f5f5',
        opacity: '0.6',
        transition: 'transform 300ms ease-in',
        ':hover': {
            zIndex: '1',
            opacity: '1',
            fontSize: '22px',
            transform: 'scale(1.2)',
        }
    },
    title: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: '0.33rem'
    }
}

export default MovieItems;