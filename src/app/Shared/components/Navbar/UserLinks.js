import React from 'react'
import { NavLink } from 'react-router-dom'
import UserAvatar from '../UserAvatar/UserAvatar'

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

const UserLinks = ({ user, signInClick, signOutClick }) => {
    if (user) {
        return [
            <NavLink
                key="dashboard"
                to="/dashboard"
                style={navlinkStyle}
                activeStyle={activeStyle}>
                <UserAvatar key="user" user={user} />,
            </NavLink>,
            <NavLink
                key="signout"
                to="/"
                style={navlinkStyle}
                onClick={signOutClick}>
                Sign out
            </NavLink>
        ]
    } else {
        return (
            <NavLink
                key="login"
                to="/"
                style={navlinkStyle}
                onClick={signInClick}>
                Login / Signup
            </NavLink>
        )
    }
}

export default UserLinks
