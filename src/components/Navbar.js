import React from 'react';
import { NavLink } from 'react-router-dom';

const style = {
  height: '50px',
  borderBottom: '2px solid #FD4034',
  // marginBottom: '.5rem',
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '0 .5rem'
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

const Navbar = () => {
  return (
    <div style={style}>
      <NavLink to="/login" style={navlinkStyle} activeStyle={activeStyle}>
        Login
      </NavLink>
      <NavLink to="/register" style={navlinkStyle} activeStyle={activeStyle}>
        Signup
      </NavLink>
    </div>
  );
};

export default Navbar;
