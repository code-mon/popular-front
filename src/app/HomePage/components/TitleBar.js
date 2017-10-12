import React from 'react';
import PropTypes from 'prop-types';
import '../../../css/TitleBar.css';

const style = {
  base: {
    fontSize: '64px',
    fontWeight: 'bold',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    transform: 'translateY(7px)'
  }
};

const TitleBar = props => {
  return (
    <div className="title-bar" style={style.base}>
      {props.children}
    </div>
  );
};

TitleBar.propTypes = {
  children: PropTypes.node.isRequired
};

export default TitleBar;
