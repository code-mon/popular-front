import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import axios from 'axios';
import { Provider } from 'react-redux';

import Navbar from 'Shared';
import HomeContainer from 'HomePage';
import LoginContainer from 'LoginPage';
import DashboardContainer from 'DashboardPage';

import { configureStore } from 'store';
import initClient, { getSignInStatus } from 'utils/auth.js';

const style = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#000000',
  color: '#FD4034'
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null, isSignedIn: false, genres: [] };

    this.setSignInStatus = this.setSignInStatus.bind(this);
    this.setUser = this.setUser.bind(this);
    this.configureAuth = this.configureAuth.bind(this);
    // commenting out until function is implemented
    // this.getGenres = this.getGenres.bind(this);
  }

  setSignInStatus(isSignedIn) {
    this.setState({
      isSignedIn
    });
  }

  setUser(user) {
    this.setState({
      user
    });
  }

  componentDidMount() {
    this.configureAuth();
  }

  configureAuth() {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';

    script.onload = () => {
      gapi.load('auth2', () => {
        initClient(this.setSignInStatus, this.setUser);
      });
    };

    document.body.appendChild(script);
  }

  render() {
    const { isSignedIn, user } = this.state;
    return (
      <Provider store={configureStore}>
        <Router>
          <div>
            <Route
              path="/"
              render={() => <Navbar isSignedIn={isSignedIn} user={user} />}
            />
            <Route exact path="/" component={HomeContainer} />
            <Route
              path="/login"
              render={() => {
                return this.state.isSignedIn ? (
                  <Redirect to="/" />
                ) : (
                  <LoginContainer />
                );
              }}
            />
            <Route path="/dashboard" component={DashboardContainer} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
