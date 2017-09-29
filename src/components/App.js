import React from 'react';
import CardBox from './CardBox.js';
import TitleBar from './TitleBar.js';
import { StyleRoot } from 'radium';

const style = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#000000',
  color: '#FD4034',
  overflowY: 'auto'
};

const App = () => {
  return (
    <StyleRoot style={{ height: '100%' }}>
      <div style={style}>
        <TitleBar>POPULAR</TitleBar>
        <CardBox />
      </div>
    </StyleRoot>
  );
};

export default App;
