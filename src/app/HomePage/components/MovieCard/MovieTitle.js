import React from 'react'
import PropTypes from 'prop-types'

const style = {
    base: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: '0.33rem'
    }
}

const MovieTitle = ({ children }) => {
    return <div style={style.base}>{children}</div>
}

MovieTitle.propTypes = {
    children: PropTypes.node.isRequired
}

export default MovieTitle
