import React from 'react';

const GenreItems = ({ genres, isFetching }) => {
    return (
        isFetching ?
        'fetching...' :
        genres.map(genre => <div key={genre.id} genrename={genre.name}>{genre.name}</div>)
    );
};

export default GenreItems;