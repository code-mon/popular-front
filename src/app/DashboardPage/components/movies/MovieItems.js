import React from 'react';

const MovieItems = ({ movies, isFetching }) => {
    return (
        isFetching ?
        'fetching...' :
        movies.map(movie => <div key={movie.id} moviename={movie.name}>{movie.name}</div>)
    );
};

export default MovieItems;