import React from 'react'
import { NavLink } from 'react-router-dom'
import { handleSignOutClick } from '../../../utils/auth'
import UserLinksContainer from './UserLinksContainer'
import PropTypes from 'prop-types'

const outerStyle = {
    height: '50px',
    borderBottom: '2px solid #FD4034',
    marginBottom: '.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '.5rem 1rem'
}

const linkHolderStyle = {
    display: 'flex',
    justifyContent: 'space-between'
}

const navlinkStyle = {
    margin: 'auto 0',
    width: '4rem',
    textAlign: 'center',
    textDecoration: 'none',
    color: 'white',
    width: '100%'
}

const activeStyle = {
    color: '#FD4034'
}

const Navbar = () => {
    return (
        <div style={outerStyle}>
            <div style={linkHolderStyle}>
                <NavLink
                    exact
                    to="/"
                    style={navlinkStyle}
                    activeStyle={activeStyle}>
                    POPULAR
                </NavLink>
            </div>
            <div style={linkHolderStyle}>
                <UserLinksContainer />
            </div>
        </div>
    )
}

export default Navbar
