import React from 'react';

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 0.5rem 0 0'
};

const imgStyle = {
  borderRadius: '50%',
  height: '3rem',
  marginRight: '0.25rem'
};

const UserAvatar = props => {
  const { user } = props;
  return (
    <div style={containerStyle}>
      <img style={imgStyle} src={user.w3.Paa} alt="avatar" />
      <p>{user.w3.ofa}</p>
    </div>
  );
};

export default UserAvatar;
