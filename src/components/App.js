import React from 'react';
import TitleBar from './TitleBar.js';
import { StyleRoot } from 'radium';

const style = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: '#000000',
  color: '#FD4034'
};

const App = () => {
  return (
    <div style={style}>
      <StyleRoot>
        <div>
          <TitleBar>POPULAR</TitleBar>
        </div>
      </StyleRoot>
    </div>
  );
};

export default App;
