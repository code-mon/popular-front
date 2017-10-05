import React, { Component } from 'react';
import { handleSignInClick } from '../../utils/auth.js';

const styles = {
  base: {
    display: 'flex',
    justifyContent: 'space-around'
  }
};

class LoginContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>How do you want to sign in?</h1>
        <div style={styles.base}>
          <button onClick={handleSignInClick}>Sign-in with Google</button>
        </div>
      </div>
    );
  }
}

export default LoginContainer;
