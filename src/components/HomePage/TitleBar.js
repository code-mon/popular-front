import React from 'react';
import PropTypes from 'prop-types';
import { fadeInUp } from 'react-animations';
import Radium from 'radium';

const style = {
  base: {
    fontSize: '64px',
    fontWeight: 'bold',
    width: '1200px',
    margin: '0 auto',
    transform: 'translateY(11px)',
    animation: '1s ease-in',
    animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
  }
};

const TitleCard = props => {
  return <div style={style.base}>{props.children}</div>;
};

TitleCard.propTypes = {
  children: PropTypes.node.isRequired
};

export default Radium(TitleCard);
