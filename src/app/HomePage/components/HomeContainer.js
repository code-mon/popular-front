import React from 'react';
import { connect } from 'react-redux'
import CardBox from './CardBox.js';
import TitleBar from './TitleBar.js';
import { StyleRoot } from 'radium';

const style = {
  display: 'flex',
  flexDirection: 'column',
  color: '#FD4034'
};

const HomeContainer = () => {
  return (
    <div style={style}>
      <TitleBar>POPULAR</TitleBar>
      <CardBox />
    </div>
  );
};

export default connect()(HomeContainer);
