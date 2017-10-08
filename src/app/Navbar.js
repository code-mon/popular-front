import React from 'react';
import { NavLink } from 'react-router-dom';
import { handleSignOutClick } from '../utils/auth.js';
import UserAvatar from './UserAvatar.js';
import PropTypes from 'prop-types';

const outerStyle = {
  height: '50px',
  borderBottom: '2px solid #FD4034',
  marginBottom: '.5rem',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '.5rem .5rem'
};

const linkHolderStyle = {
  display: 'flex',
  justifyContent: 'space-between'
};

const navlinkStyle = {
  margin: 'auto 0',
  width: '4rem',
  textAlign: 'center',
  textDecoration: 'none',
  color: 'white'
};

const activeStyle = {
  color: '#FD4034'
};

const Navbar = props => {
  const { isSignedIn, user } = props;
  return (
    <div style={outerStyle}>
      <div style={linkHolderStyle}>
        <NavLink exact to="/" style={navlinkStyle} activeStyle={activeStyle}>
          POPULAR
        </NavLink>
      </div>
      <div style={linkHolderStyle}>
        {isSignedIn && user
          ? [
              <UserAvatar key="user" user={user} />,
              <NavLink
                key="signout"
                to="/"
                style={navlinkStyle}
                onClick={handleSignOutClick}>
                Sign out
              </NavLink>
            ]
          : [
              <NavLink
                key="login"
                to="/login"
                style={navlinkStyle}
                activeStyle={activeStyle}>
                Login
              </NavLink>,
              <NavLink
                key="signup"
                to="/register"
                style={navlinkStyle}
                activeStyle={activeStyle}>
                Signup
              </NavLink>
            ]}
      </div>
    </div>
  );
};

Navbar.propTypes = {
  isSignedIn: PropTypes.bool.isRequired,
  user: PropTypes.object
};

export default Navbar;
