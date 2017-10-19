import React from 'react';

const MovieItems = (props) => {
    return (
        <button onClick={props.handleEvent} data-movie="jurrasic park" data-id="1">SIQ BUTTON BRAH</button>
    );
};

export default MovieItems;